// app/api/spedizioni/route.ts
// Ricerca estesa: filtra per ID, cliente, città, paese, CAP (con fallback su più schemi Airtable)

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

  // Stato aperte/non evase
  const openPart =
    `NOT(OR(` +
      `LOWER({Stato})='evasa',` +
      `LOWER({Stato})='evaso',` +
      `LOWER({Stato})='completata',` +
      `LOWER({Stato})='completato'` +
    `))`;

  const qs = esc(q.toLowerCase());

  // Gruppi di campi alternativi (fall-through: se un gruppo non esiste -> 422 -> si prova il successivo)
  const groups: string[][] = [
    // ID e meta base
    ['ID Spedizione','ID','Creato da','Email cliente'],
    // Cliente
    ['Cliente','Nome cliente','Ragione sociale','Email cliente'],
    // Città (partenza/arrivo)
    ['Città partenza','Città destinazione','Citta partenza','Citta destinazione','Partenza','Arrivo','City From','City To','Città','Citta'],
    // Paese
    ['Paese partenza','Paese destinazione','Country From','Country To','Paese','Country','Partenza','Arrivo'],
    // CAP / ZIP
    ['CAP partenza','CAP destinazione','CAP','Zip','ZIP From','ZIP To','Partenza','Arrivo'],
  ];

  // Costruisce OR(FIND(q, LOWER({campo}&''))>0, …) per un gruppo
  const buildGroup = (fields: string[]) =>
    `OR(${fields.map(f => `FIND('${qs}', LOWER({${f}}&''))>0`).join(',')})`;

  // Candidati: prima prova su ID, poi sugli altri gruppi
  const candidates: string[] = [];
  const idFirst = buildGroup(['ID Spedizione','ID']);
  candidates.push(idFirst);
  groups.forEach(g => candidates.push(buildGroup(g)));

  // Applica stato aperte se richiesto
  const formulas = candidates.map(f => {
    const parts = [];
    if (f) parts.push(f);
    if (onlyOpen === '1' || onlyOpen === 'true') parts.push(openPart);
    return parts.length ? `AND(${parts.join(',')})` : '';
  });

  // Esegui in sequenza ignorando 422 (campi mancanti)
  for (const formula of formulas) {
    try {
      const { ok: okAt, status, json } = await listWithFormula(TB_SPED, formula, pageSize, offset);
      if (okAt) {
        return ok(req, { ok: true, records: json.records || [], offset: json.offset || null });
      }
      if (status === 422) continue; // prova formula successiva
      return ok(req, { ok: false, error: json?.error || `Airtable ${status}` }, { status });
    } catch {
      continue;
    }
  }

  // Nessuna formula valida → lista senza filtro (fallback sicuro)
  const { ok: okPlain, status, json } = await listWithFormula(TB_SPED, '', pageSize, offset);
  if (okPlain) return ok(req, { ok: true, records: json.records || [], offset: json.offset || null });
  return ok(req, { ok: false, error: json?.error || `Airtable ${status}` }, { status });
}
