// app/api/preventivi/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// CORS minimale
function buildCorsHeaders(origin?: string | null) {
  const o = origin || '*';
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  return new NextResponse(null, { status: 204, headers: buildCorsHeaders(origin) });
}

// Escape per formula Airtable
const esc = (s: string) => String(s ?? '').replace(/'/g, "\\'");

// Campi su cui cercare
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
  const origin = req.headers.get('origin');
  const cors = buildCorsHeaders(origin);

  try {
    const { searchParams } = new URL(req.url);
    const search   = (searchParams.get('search') || '').trim();
    const onlyOpen = searchParams.get('onlyOpen') === '1';
    const pageSize = Number(searchParams.get('pageSize') || '50') || 50;

    // === ENV NOMI ESATTI CHE MI HAI DATO ===
    const BASE_ID = process.env.AIRTABLE_BASE_ID || '';
    const API_KEY = process.env.AIRTABLE_PAT || '';        // <-- token
    const TABLE   = process.env.TB_PREVENTIVI || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing Airtable credentials' },
        { status: 500, headers: cors }
      );
    }

    // Formula di ricerca robusta (coercizzo a stringa)
    let searchFormula = '';
    if (search) {
      const term = `LOWER('${esc(search)}')`;
      const parts = SEARCH_FIELDS.map(
        f => `FIND(${term}, LOWER(CONCATENATE({${esc(f)}},'')))`
      );
      // match numerico esatto su {ID} se il termine è numero
      if (/^\d+$/.test(search)) {
        parts.push(`{ID} = ${parseInt(search, 10)}`);
      }
      searchFormula = `OR(${parts.join(',')})`;
    }

    // “Aperti”: adatta se i tuoi stati sono diversi
    const openFormula = `OR({Stato}='Aperto',{Stato}='Nuovo',NOT({Stato}='Chiuso'))`;

    let filterByFormula = '';
    if (searchFormula && onlyOpen) filterByFormula = `AND(${searchFormula}, ${openFormula})`;
    else if (searchFormula)        filterByFormula = searchFormula;
    else if (onlyOpen)             filterByFormula = openFormula;

    const params = new URLSearchParams();
    params.set('pageSize', String(pageSize));
    params.set('sort[0][field]', 'ID');       // autonumber
    params.set('sort[0][direction]', 'desc'); // più recenti in alto
    if (filterByFormula) params.set('filterByFormula', filterByFormula);

    const url = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID)}/${encodeURIComponent(TABLE)}?${params.toString()}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const json = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: json },
        { status: res.status, headers: cors }
      );
    }

    return NextResponse.json(
      { ok: true, records: json.records || [] },
      { headers: cors }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500, headers: cors }
    );
  }
}
