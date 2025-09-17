// app/api/spedizioni/route.ts
// Ricerca FIX: filtra per ID Spedizione + campi Airtable forniti
// - Creato da
// - Mittente - Ragione Sociale / Città / CAP
// - Destinatario - Ragione Sociale / Paese / Città / CAP
// Mantiene il toggle "Solo non evase" (onlyOpen=1)

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

  // Stato aperte/non evase (tollerante a varianti)
  const openPart =
    `NOT(OR(` +
      `LOWER({Stato})='evasa',` +
      `LOWER({Stato})='evaso',` +
      `LOWER({Stato})='completata',` +
      `LOWER({Stato})='completato'` +
    `))`;

  // Campi richiesti per la ricerca
  const searchFields = [
    'ID Spedizione',
    'Creato da',
    'Mittente - Ragione Sociale',
    'Mittente - Città',
    'Mittente - CAP',
    'Destinatario - Ragione Sociale',
    'Destinatario - Paese',
    'Destinatario - Città',
    'Destinatario - CAP',
  ];

  // Costruisci formula OR su tutti i campi indicati
  const buildSearch = (needle: string) => {
    const lowered = esc(needle.toLowerCase());
    const parts = searchFields.map(f => `FIND('${lowered}', LOWER({${f}}&''))>0`);
    return parts.length ? `OR(${parts.join(',')})` : '';
  };

  // Formula finale
  const clauses: string[] = [];
  if (q) clauses.push(buildSearch(q));
  if (onlyOpen === '1' || onlyOpen === 'true') clauses.push(openPart);
  const formula = clauses.length ? `AND(${clauses.join(',')})` : '';

  // Query Airtable
  const { ok: okAt, status, json } = await listWithFormula(TB_SPED, formula, pageSize, offset);
  if (okAt) {
    return ok(req, { ok: true, records: json.records || [], offset: json.offset || null });
  }
  // Se la formula fosse invalida (422) restituiamo errore chiaro
  return ok(req, { ok: false, error: json?.error || `Airtable ${status}` }, { status });
}
