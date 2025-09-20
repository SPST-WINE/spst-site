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

// tieni i campi più “sicuri” per la tabella Preventivi
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
    const API_KEY = process.env.AIRTABLE_PAT;
    const TABLE   = process.env.TB_PREVENTIVI || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing Airtable credentials' },
        { status: 500, headers: cors }
      );
    }

    // formula di ricerca (usa solo i campi sopra per minimizzare 422)
    let filterByFormula = '';
    if (search) {
      const parts = SEARCH_FIELDS.map(
        f => `FIND(LOWER('${esc(search)}'), LOWER({${esc(f)}}))`
      );
      filterByFormula = `OR(${parts.join(',')})`;
    }

    const params = new URLSearchParams();
    params.set('pageSize', String(pageSize));
    // ordina per ID desc; se il campo non esistesse Airtable ignora il sort
    params.set('sort[0][field]', 'ID');
    params.set('sort[0][direction]', 'desc');
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
