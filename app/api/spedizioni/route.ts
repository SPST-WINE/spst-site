// app/api/spedizioni/route.ts
// FIX ricerca: fallback su più formule Airtable per evitare INVALID_FILTER_BY_FORMULA (422)

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

const atHeaders: HeadersInit = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
};

const api = (t: string) => `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(t)}`;

async function listWithFormula(table: string, formula: string, pageSize = 50, offset?: string) {
  const qs = new URLSearchParams();
  if (formula) qs.set('filterByFormula', formula);
  if (pageSize) qs.set('pageSize', String(pageSize));
  if (offset) qs.set('offset', offset);
  const url = `${api(table)}?${qs.toString()}`;
  const res = await fetch(url, { headers: atHeaders, cache: 'no-store' });
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

  // Stato aperte/non evase (tollerante a nomi diversi)
  const openPart =
    `NOT(OR(` +
      `LOWER({Stato})='evaso',` +
      `LOWER({Stato})='completata',` +
      `LOWER({Stato})='evasa'` +
    `))`;

  // Testo ricerca – proviamo più combinazioni di campi.
  const qs = esc(q.toLowerCase());
  const textParts: string[] = q
    ? [
        // 1) ID Spedizione + Creato da
        `OR(FIND('${qs}', LOWER({ID Spedizione}&''))>0, FIND('${qs}', LOWER({Creato da}&''))>0)`,
        // 2) ID + Creato da
        `OR(FIND('${qs}', LOWER({ID}&''))>0, FIND('${qs}', LOWER({Creato da}&''))>0)`,
        // 3) ID Spedizione + Email cliente
        `OR(FIND('${qs}', LOWER({ID Spedizione}&''))>0, FIND('${qs}', LOWER({Email cliente}&''))>0)`,
        // 4) ID + Email cliente
        `OR(FIND('${qs}', LOWER({ID}&''))>0, FIND('${qs}', LOWER({Email cliente}&''))>0)`,
      ]
    : [''];

  // Costruiamo le formule candidate combinando stato aperto (se richiesto)
  const candidates = textParts.map(tp => {
    const clauses = [];
    if (tp) clauses.push(tp);
    if (onlyOpen === '1' || onlyOpen === 'true') clauses.push(openPart);
    if (!clauses.length) return ''; // nessun filtro
    return `AND(${clauses.join(',')})`;
  });

  // Prova in sequenza, ignorando 422 su campi non esistenti
  for (const formula of candidates) {
    try {
      const { ok: okAt, status, json } = await listWithFormula(TB_SPED, formula, pageSize, offset);
      if (okAt) {
        return ok(req, { ok: true, records: json.records || [], offset: json.offset || null });
      }
      // 422 = formula invalida -> prova la prossima
      if (status === 422) continue;
      // altri errori: restituisci
      return ok(req, { ok: false, error: json?.error || `Airtable ${status}` }, { status });
    } catch (e: any) {
      // fallthrough alla prossima formula
      continue;
    }
  }

  // Se siamo qui, nessuna formula è andata a buon fine: ritorna senza filtro
  const { ok: okPlain, status, json } = await listWithFormula(TB_SPED, '', pageSize, offset);
  if (okPlain) return ok(req, { ok: true, records: json.records || [], offset: json.offset || null });
  return ok(req, { ok: false, error: json?.error || `Airtable ${status}` }, { status });
}
