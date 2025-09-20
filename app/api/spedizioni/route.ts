// app/api/spedizioni/route.ts
// Toggle "solo non evase" => mostra SOLO le spedizioni con Stato = "nuova"
// Ordinamento: per campo Airtable "ID" (Autonumber) DESC
// Ricerca: ID/ID Spedizione + campi indicati (cliente, città, paese, CAP)

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* ───────── CORS ───────── */
function allowOrigin(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const raw = process.env.ORIGIN_ALLOW_LIST || process.env.ORIGIN_ALLOW_LST || '';
  const list = raw.split(',').map(s=>s.trim()).filter(Boolean);
  if (!list.length) return '*';
  return list.includes(origin) ? origin : list[0];
}
function withCors(req: NextRequest, res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', allowOrigin(req));
  res.headers.set('Vary', 'Origin');
  res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Max-Age', '600');
  return res;
}
export function OPTIONS(req: NextRequest) {
  return withCors(req, new NextResponse(null, { status: 204 }));
}
function ok(req: NextRequest, data: any, init: ResponseInit = {}) {
  return withCors(req, new NextResponse(JSON.stringify(data), {
    ...init, headers: { 'Content-Type': 'application/json', ...(init.headers||{}) }
  }));
}

/* ───────── Airtable helpers ───────── */
const BASE_ID = process.env.AIRTABLE_BASE_ID!;
const TOKEN   = process.env.AIRTABLE_TOKEN || process.env.AIRTABLE_PAT || process.env.AIRTABLE_API_KEY!;
const TB_SPED = process.env.TB_SPEDIZIONI_WEBAPP || 'SpedizioniWebApp';

const atHeaders: HeadersInit = { Authorization: `Bearer ${TOKEN}` };
const api = (t: string) => `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(t)}`;

async function listWithFormula(table: string, formula: string, pageSize = 50, offset?: string) {
  const qs = new URLSearchParams();
  if (formula) qs.set('filterByFormula', formula);
  qs.set('pageSize', String(pageSize));
  // Ordinamento per ID (Autonumber) discendente
  qs.set('sort[0][field]', 'ID');
  qs.set('sort[0][direction]', 'desc');
  if (offset) qs.set('offset', offset);

  const res = await fetch(`${api(table)}?${qs.toString()}`, { headers: atHeaders, cache: 'no-store' });
  const text = await res.text();
  let json: any = {};
  try { json = text ? JSON.parse(text) : {}; } catch { json = { error: text }; }
  return { ok: res.ok, status: res.status, json };
}

const esc = (v: any) => String(v ?? '').replace(/'/g, "\\'");

/* ───────── GET /api/spedizioni ───────── */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const q        = url.searchParams.get('search') || url.searchParams.get('q') || '';
  const onlyOpen = url.searchParams.get('onlyOpen') ?? '0';
  const pageSize = Number(url.searchParams.get('pageSize') || '50') || 50;
  const offset   = url.searchParams.get('offset') || undefined;

  // ⬅️ Toggle "solo non evase" => solo STATO = "nuova"
  const onlyNuova = (onlyOpen === '1' || onlyOpen === 'true');
  const filterNuova = `LOWER({Stato})='nuova'`;

  // Campi per la ricerca full-text
  const searchFields = [
    'ID Spedizione',
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

  const clauses: string[] = [];

  if (q) {
    const lowered = esc(q.toLowerCase());
    const textOr = `OR(${searchFields
      .map(f => `FIND('${lowered}', LOWER({${f}}&''))>0`)
      .join(',')})`;
    clauses.push(textOr);
  }

  if (onlyNuova) clauses.push(filterNuova);

  const formula = clauses.length ? `AND(${clauses.join(',')})` : '';

  const { ok: okAt, status, json } = await listWithFormula(TB_SPED, formula, pageSize, offset);
  if (okAt) {
    return ok(req, { ok: true, records: json.records || [], offset: json.offset || null });
  }
  return ok(req, { ok: false, error: json?.error || `Airtable ${status}` }, { status });
}
