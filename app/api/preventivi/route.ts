// app/api/preventivi/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function cors(origin?: string | null) {
  const o = origin || '*';
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: cors(req.headers.get('origin')) });
}

const esc = (s: string) => String(s ?? '').replace(/'/g, "\\'");

const SEARCH_FIELDS = [
  'ID',
  'Creato da',
  'Mittente - Ragione Sociale',
  'Mittente - Città',
  'Mittente - CAP',
  'Destinatario - Ragione Sociale',
  'Destinatario - Paese',
  'Destinatario - Città',
  'Destinatario - CAP',
];

export async function GET(req: NextRequest) {
  const headers = cors(req.headers.get('origin'));
  try {
    const { searchParams } = new URL(req.url);
    const search   = (searchParams.get('search') || '').trim();
    const onlyOpen = searchParams.get('onlyOpen') === '1'; // se non supportato, lo ignoreremo
    const pageSize = Number(searchParams.get('pageSize') || '50') || 50;

    const BASE_ID = process.env.AIRTABLE_BASE_ID;
    const API_KEY = process.env.AIRTABLE_PAT;
    const TABLE   = process.env.TB_PREVENTIVI || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json({ ok:false, error:'Missing Airtable credentials' }, { status:500, headers });
    }

    // Costruzione formula ricerca sicura (gestisce campi vuoti)
    let searchFormula = '';
    if (search) {
      const parts = SEARCH_FIELDS.map(
        f => `SEARCH(LOWER('${esc(search)}'), LOWER('' & {${esc(f)}}))`
      );
      searchFormula = `OR(${parts.join(',')})`;
    }

    // ⚠️ molti Preventivi non hanno un campo "Stato": se lo usiamo rischiamo 422.
    // Quindi prepariamo una formula "open" ma la useremo solo se non genera 422.
    const openFormulaUnsafe = `OR({Stato}='Aperto',{Stato}='Nuovo',NOT({Stato}='Chiuso'))`;

    const buildParams = (useFilter: boolean, safeOpen: boolean) => {
      let filterByFormula = '';
      if (useFilter && searchFormula) filterByFormula = searchFormula;
      if (useFilter && onlyOpen && safeOpen) {
        filterByFormula = filterByFormula
          ? `AND(${filterByFormula}, ${openFormulaUnsafe})`
          : openFormulaUnsafe;
      }

      const params = new URLSearchParams();
      params.set('pageSize', String(pageSize));
      params.set('sort[0][field]', 'ID');         // più recenti in alto
      params.set('sort[0][direction]', 'desc');
      if (filterByFormula) params.set('filterByFormula', filterByFormula);
      return params;
    };

    const baseUrl = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID)}/${encodeURIComponent(TABLE)}`;

    // 1° tentativo: uso ricerca + (eventuale) openFormula
    let url = `${baseUrl}?${buildParams(true, true).toString()}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    let json: any = await res.json().catch(()=> ({}));

    // Se Airtable risponde 422 INVALID_FILTER_BY_FORMULA, riprovo SENZA openFormula/filtri speciali
    if (res.status === 422 && json?.error?.type === 'INVALID_FILTER_BY_FORMULA') {
      const retryUrl = `${baseUrl}?${buildParams(Boolean(search), false).toString()}`;
      res = await fetch(retryUrl, {
        method: 'GET',
        headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
        cache: 'no-store',
      });
      json = await res.json().catch(()=> ({}));
    }

    if (!res.ok) {
      // Ritorna all’esterno un errore “parlante”
      return NextResponse.json(
        { ok:false, status: res.status, error: json?.error || json || `HTTP ${res.status}` },
        { status: res.status, headers }
      );
    }

    return NextResponse.json({ ok:true, records: json.records || [] }, { headers });
  } catch (err: any) {
    return NextResponse.json({ ok:false, error: String(err?.message || err) }, { status:500, headers });
  }
}
