// app/api/preventivi/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// CORS minimale locale (così evitiamo l'import di "@/lib/cors")
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
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(origin),
  });
}

// Util per escape in formula Airtable
const esc = (s: string) => String(s ?? '').replace(/'/g, "\\'");

// Campi su cui cercare (puoi aggiungerne altri qui)
const SEARCH_FIELDS = [
  'ID', // o "ID Preventivo" se lo usi così
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

    const search = (searchParams.get('search') || '').trim();
    const onlyOpen = searchParams.get('onlyOpen') === '1';
    const pageSize = Number(searchParams.get('pageSize') || '50') || 50;

    const BASE_ID = process.env.AIRTABLE_BASE_ID || process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
    const API_KEY = process.env.AIRTABLE_API_KEY || process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
    const TABLE   = process.env.AIRTABLE_QUOTES_TABLE || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing Airtable credentials' },
        { status: 500, headers: cors }
      );
    }

    // Formula di ricerca
    let searchFormula = '';
    if (search) {
      const parts = SEARCH_FIELDS.map(
        f => `FIND(LOWER('${esc(search)}'), LOWER({${esc(f)}}))`
      );
      searchFormula = `OR(${parts.join(',')})`; // almeno un campo contiene il termine
    }

    // Formula "aperti": adatta ai tuoi stati reali se necessario
    const openFormula = `OR({Stato}='Aperto',{Stato}='Nuovo',NOT({Stato}='Chiuso'))`;

    // Composizione finale
    let filterByFormula = '';
    if (searchFormula && onlyOpen) {
      filterByFormula = `AND(${searchFormula}, ${openFormula})`;
    } else if (searchFormula) {
      filterByFormula = searchFormula;
    } else if (onlyOpen) {
      filterByFormula = openFormula;
    }

    const params = new URLSearchParams();
    params.set('pageSize', String(pageSize));
    // Ordina per ID (Autonumber) discendente -> più recenti in alto
    params.set('sort[0][field]', 'ID');
    params.set('sort[0][direction]', 'desc');
    if (filterByFormula) params.set('filterByFormula', filterByFormula);

    const url = `https://api.airtable.com/v0/${encodeURIComponent(
      BASE_ID
    )}/${encodeURIComponent(TABLE)}?${params.toString()}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      // Airtable è esterno: nessun revalidate per questa chiamata
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
