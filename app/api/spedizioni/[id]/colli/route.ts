// app/api/spedizioni/[id]/colli/route.ts
// Alias compatibilità: /api/spedizioni/[id]/colli  → stesso comportamento di /api/airtable/spedizioni/[id]/colli
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/* ───────── CORS helpers ───────── */
function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const raw =
    process.env.ORIGIN_ALLOW_LIST ||
    process.env.ORIGIN_ALLOW_LST || '';
  const list = raw.split(',').map(s => s.trim()).filter(Boolean);
  if (list.length === 0) return '*';
  return list.includes(origin) ? origin : list[0];
}
function withCors(req: NextRequest, res: NextResponse) {
  const allow = getAllowedOrigin(req);
  res.headers.set('Access-Control-Allow-Origin', allow);
  res.headers.set('Vary', 'Origin');
  res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return res;
}
function okJson(req: NextRequest, data: any, init: ResponseInit = {}) {
  return withCors(req, new NextResponse(JSON.stringify(data), {
    ...init, headers: { 'Content-Type': 'application/json', ...(init.headers||{}) }
  }));
}
function noContent(req: NextRequest, init: ResponseInit = {}) {
  return withCors(req, new NextResponse(null, { status: 204, ...init }));
}
export function OPTIONS(req: NextRequest) {
  return noContent(req);
}

/* ───────── Config ───────── */
const BASE = process.env.AIRTABLE_BASE_ID!;
const KEY  = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT!;
const TBL  = process.env.TB_COLLI || 'Colli';
const LINK = process.env.AIRTABLE_LINK_FIELD_COLLI || 'Spedizione';

/* ───────── GET /api/spedizioni/[id]/colli ───────── */
export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  try {
    const recId = ctx.params.id;

    const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(TBL)}`);
    // filtra i colli linkati alla spedizione tramite campo link {Spedizione}
    url.searchParams.set('filterByFormula', `FIND('${recId}', ARRAYJOIN({${LINK}}, ','))`);
    url.searchParams.set('pageSize', '50');

    const r = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${KEY}` },
      cache: 'no-store',
    });

    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      return okJson(req, { ok:false, error:j }, { status: r.status });
    }

    const records = Array.isArray((j as any).records) ? (j as any).records : [];
    return okJson(req, { ok:true, records });
  } catch (err: any) {
    return okJson(req, { ok:false, error: String(err?.message||err) }, { status: 500 });
  }
}
