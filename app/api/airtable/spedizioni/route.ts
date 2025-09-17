// app/api/airtable/spedizioni/route.ts
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
export function OPTIONS(req: NextRequest) {
  return withCors(req, new NextResponse(null, { status: 204 }));
}

/* ───────── Config ───────── */
const BASE = process.env.AIRTABLE_BASE_ID!;
const KEY  = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT!;
const TBL  = process.env.TB_SPEDIZIONI || 'SPEDIZIONI';

/* ───────── Filter formula ───────── */
function esc(s: string){ return String(s).replace(/"/g,'\\"'); }

function buildFilterFormula(params: URLSearchParams) {
  const search = (params.get('search') || '').trim();
  const status = (params.get('status') || '').trim();
  const onlyOpen = params.get('onlyOpen') === '1';

  const parts: string[] = [];

  if (search) {
    const s = esc(search.toLowerCase());
    const NEW_FIELDS = [
      'ID Spedizione','Creato da',
      'Mittente - Ragione sociale','Mittente - Paese','Mittente - Città','Mittente - Indirizzo',
      'Destinatario - Ragione sociale','Destinatario - Paese','Destinatario - Città','Destinatario - Indirizzo',
      'Tracking Number','Incoterm',
    ];
    const LEGACY_FIELDS = [
      'Destinatario','Mittente','Mail Cliente',
      'Paese Destinatario','Città Destinatario','Indirizzo Destinatario',
      'Paese Mittente','Città Mittente','Indirizzo Mittente',
    ];
    const FIELDS = [...NEW_FIELDS, ...LEGACY_FIELDS];

    const ors: string[] = [];
    ors.push(`LOWER({ID Spedizione} & "") = "${s}"`);
    ors.push(`LOWER({Tracking Number} & "") = "${s}"`);
    for (const f of FIELDS) ors.push(`FIND("${s}", LOWER({${f}} & ""))`);
    parts.push(`OR(${ors.join(',')})`);
  }

  const IS_EVASA       = `{Stato}="Evasa"`;
  const IS_NUOVA       = `{Stato}="Nuova"`;
  const IS_CONSEGNATA  = `{Stato}="Consegnata"`;
  const IS_ANNULLATA   = `{Stato}="Annullata"`;

  if (status === 'evase') parts.push(IS_EVASA);
  else if (status === 'nuova') parts.push(IS_NUOVA);
  else if (status === 'in_elab') {
    parts.push(`AND(NOT(${IS_EVASA}), NOT(${IS_CONSEGNATA}), NOT(${IS_ANNULLATA}))`);
  }

  // “solo non evase” = SOLO Nuova
  if (onlyOpen) parts.push(IS_NUOVA);

  if (!parts.length) return '';
  return `AND(${parts.join(',')})`;
}

/* ───────── GET /api/airtable/spedizioni ───────── */
export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const pageSize = params.get('pageSize') || '50';
    const view = params.get('view') || '';

    const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(TBL)}`);
    const formula = buildFilterFormula(params);
    if (formula) url.searchParams.set('filterByFormula', formula);
    url.searchParams.set('pageSize', pageSize);
    if (view) url.searchParams.set('view', view);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${KEY}` },
      cache: 'no-store',
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return okJson(req, { ok:false, error: json }, { status: res.status });
    }
    return okJson(req, { ok:true, records: Array.isArray(json.records) ? json.records : [] });
  } catch (err: any) {
    return okJson(req, { ok:false, error: String(err?.message||err) }, { status: 500 });
  }
}
