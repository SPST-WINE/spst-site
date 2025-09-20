import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// CORS minimale
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

// escape semplice per formula Airtable
const esc = (s: string) => String(s ?? '').replace(/'/g, "\\'");

// Campi su cui fare la ricerca
const SEARCH_FIELDS = [
  'ID', // autonumber o simile
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
    const onlyOpen = searchParams.get('onlyOpen') === '1';
    const pageSize = Number(searchParams.get('pageSize') || '50') || 50;

    // 🔑 ENV GIUSTE (come da tua nota)
    const BASE_ID  = process.env.AIRTABLE_BASE_ID;
    const API_KEY  = process.env.AIRTABLE_PAT;           // Personal Access Token
    const TABLE    = process.env.TB_PREVENTIVI || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json({ ok:false, error: 'Missing Airtable credentials' }, { status: 500, headers });
    }

    // Formula di ricerca: usiamo SEARCH(LOWER('q'), LOWER('' & {Campo}))
    let searchFormula = '';
    if (search) {
      const parts = SEARCH_FIELDS.map(f =>
        `SEARCH(LOWER('${esc(search)}'), LOWER('' & {${esc(f)}}))`
      );
      searchFormula = `OR(${parts.join(',')})`;
    }

    // "Solo non evase" (adatta alle tue etichette di stato se servisse)
    const openFormula = `OR({Stato}='Aperto',{Stato}='Nuovo', NOT({Stato}='Chiuso'))`;

    let filterByFormula = '';
    if (searchFormula && onlyOpen) filterByFormula = `AND(${searchFormula}, ${openFormula})`;
    else if (searchFormula)         filterByFormula = searchFormula;
    else if (onlyOpen)              filterByFormula = openFormula;

    const params = new URLSearchParams();
    params.set('pageSize', String(pageSize));
    // Ordine: ID discendente (più recenti in alto)
    params.set('sort[0][field]', 'ID');
    params.set('sort[0][direction]', 'desc');
    if (filterByFormula) params.set('filterByFormula', filterByFormula);

    const url = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID)}/${encodeURIComponent(TABLE)}?${params.toString()}`;

    const r = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const j = await r.json();
    if (!r.ok) {
      return NextResponse.json({ ok:false, error: j }, { status: r.status, headers });
    }

    return NextResponse.json({ ok:true, records: j.records || [] }, { headers });
  } catch (err: any) {
    return NextResponse.json({ ok:false, error: String(err?.message || err) }, { status: 500, headers });
  }
}
