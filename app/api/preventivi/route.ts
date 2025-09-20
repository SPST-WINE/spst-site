import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

const esc = (s: string) => String(s ?? '').replace(/'/g, "\\'");

// Campi “sicuri” per la ricerca nella tab Preventivi
const SEARCH_FIELDS = [
  'ID',
  'Creato da',
  'Destinatario - Ragione Sociale',
  'Destinatario - Paese',
  'Destinatario - Città',
];

export async function GET(req: NextRequest) {
  const origin = req.headers.get('origin');
  const cors = buildCorsHeaders(origin);

  try {
    const { searchParams } = new URL(req.url);
    const search   = (searchParams.get('search') || '').trim();
    const pageSize = Number(searchParams.get('pageSize') || '50') || 50;

    const BASE_ID = process.env.AIRTABLE_BASE_ID;
    const API_KEY = process.env.AIRTABLE_PAT;        // <- token PAT
    const TABLE   = process.env.TB_PREVENTIVI || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing Airtable credentials' },
        { status: 500, headers: cors }
      );
    }

    // Formula di ricerca
    let filterByFormula = '';
    if (search) {
      const parts = SEARCH_FIELDS.map(
        f => `FIND(LOWER('${esc(search)}'), LOWER({${esc(f)}}))`
      );
      filterByFormula = `OR(${parts.join(',')})`;
    }

    const baseParams = new URLSearchParams();
    baseParams.set('pageSize', String(pageSize));
    if (filterByFormula) baseParams.set('filterByFormula', filterByFormula);

    const buildUrl = (withSort: boolean) => {
      const p = new URLSearchParams(baseParams);
      if (withSort) {
        // ⚠️ Se il campo non esiste Airtable risponde 422 -> gestito con fallback
        p.set('sort[0][field]', 'ID');
        p.set('sort[0][direction]', 'desc');
      }
      return `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID)}/${encodeURIComponent(TABLE)}?${p.toString()}`;
    };

    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    };

    // 1) Prova con sort=ID
    let res = await fetch(buildUrl(true), { method: 'GET', headers, cache: 'no-store' });
    let json: any = await res.json().catch(() => ({}));

    // 2) Se 422 (campo sort inesistente), riprova SENZA sort
    if (res.status === 422) {
      res = await fetch(buildUrl(false), { method: 'GET', headers, cache: 'no-store' });
      json = await res.json().catch(() => ({}));
    }

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: json }, { status: res.status, headers: cors });
    }

    return NextResponse.json({ ok: true, records: json.records || [] }, { headers: cors });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500, headers: cors }
    );
  }
}
