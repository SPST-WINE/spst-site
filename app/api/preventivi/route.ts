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
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(origin),
  });
}

// Util per escape nella formula Airtable
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

    // ---- ENV (aggiunto TB_PREVENTIVI)
    const BASE_ID =
      process.env.AIRTABLE_BASE_ID ||
      process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

    const API_KEY =
      process.env.AIRTABLE_API_KEY ||
      process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

    const TABLE =
      process.env.TB_PREVENTIVI ||              // <-- qui il tuo nome env
      process.env.AIRTABLE_QUOTES_TABLE ||      // fallback generico
      'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing Airtable credentials' },
        { status: 500, headers: cors }
      );
    }

    // Formula di ricerca robusta (coercizzo a stringa con CONCATENATE)
    let searchFormula = '';
    if (search) {
      const term = `LOWER('${esc(search)}')`;
      const parts = SEARCH_FIELDS.map(
        (f) =>
          `FIND(${term}, LOWER(CONCATENATE({${esc(f)}},'')))`
      );
      searchFormula = `OR(${parts.join(',')})`;
    }

    // "Aperti": adatta ai tuoi stati reali se necessario
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
    // Ordina per ID (Autonumber) discendente
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
