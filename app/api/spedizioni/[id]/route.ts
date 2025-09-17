import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/* ------------ CORS helpers ------------ */
function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const raw =
    process.env.ORIGIN_ALLOW_LIST ||
    process.env.ORIGIN_ALLOW_LST || // fallback
    '';
  const list = raw.split(',').map(s => s.trim()).filter(Boolean);
  if (list.length === 0) return '*';
  return list.includes(origin) ? origin : list[0];
}
function withCors(req: NextRequest, res: NextResponse) {
  const allow = getAllowedOrigin(req);
  res.headers.set('Access-Control-Allow-Origin', allow);
  res.headers.set('Vary', 'Origin');
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return res;
}
function okJson(req: NextRequest, data: any, init?: ResponseInit) {
  return withCors(req, NextResponse.json(data, init));
}
function noContent(req: NextRequest) {
  return withCors(req, new NextResponse(null, { status: 204 }));
}

export function OPTIONS(req: NextRequest) { return noContent(req); }

/* ------------ Config Airtable ------------ */
const BASE = process.env.AIRTABLE_BASE_ID!;
const KEY  = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT!;
const TBL  = process.env.TB_COLLI || 'SPED_COLLI';

// Nome del campo "Link to another record" presente in SPED_COLLI
// che punta a SpedizioniWebApp
const LINK_ENV = process.env.AIRTABLE_LINK_FIELD_COLLI;
const LINK_CANDIDATES = Array.from(new Set([
  LINK_ENV,                // priorità a quanto messo in env
  'SpedizioniWebApp',      // default più probabile
  'Spedizione',
  'Spedizioni',
  'Spedizione (link)',
].filter(Boolean))) as string[];

export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  const recId = ctx.params.id;

  // piccola funzione che tenta la query con un certo nome campo
  const tryQuery = async (linkField: string) => {
    const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(TBL)}`);
    url.searchParams.set('filterByFormula', `FIND('${recId}', ARRAYJOIN({${linkField}}, ','))`);
    url.searchParams.set('pageSize', '50');

    const r = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${KEY}` },
      cache: 'no-store',
    });
    const j = await r.json().catch(() => ({}));
    return { r, j };
  };

  try {
    if (!BASE || !KEY) {
      return withCors(req, new NextResponse(JSON.stringify({ ok:false, error:'Missing Airtable credentials' }), {
        status: 500, headers: { 'Content-Type':'application/json' },
      }));
    }

    let lastErr: any = null;
    for (const fieldName of LINK_CANDIDATES) {
      const { r, j } = await tryQuery(fieldName);
      // errore formula per "Unknown field names": prova il prossimo candidato
      const invalidFormula = j?.error?.type === 'INVALID_FILTER_BY_FORMULA';
      if (invalidFormula && /\bUnknown field names\b/i.test(j?.error?.message || '')) {
        lastErr = j;
        continue;
      }
      // se è ok o è errore diverso, fermati
      if (r.ok) {
        const items = Array.isArray(j.records) ? j.records.map((x: any) => x.fields) : [];
        return okJson(req, { ok:true, items });
      }
      // errore diverso → restituisco
      return withCors(req, new NextResponse(JSON.stringify({ ok:false, error:j }), {
        status: r.status,
        headers: { 'Content-Type':'application/json' },
      }));
    }

    // se sono finiti i candidati
    return withCors(req, new NextResponse(JSON.stringify({
      ok:false,
      error: lastErr || { message: 'Link field not found. Set AIRTABLE_LINK_FIELD_COLLI.' },
      tried: LINK_CANDIDATES,
    }), { status: 422, headers: { 'Content-Type':'application/json' } }));
  } catch (err: any) {
    return withCors(req, new NextResponse(JSON.stringify({ ok:false, error:String(err?.message || err) }), {
      status: 500, headers: { 'Content-Type':'application/json' },
    }));
  }
}
