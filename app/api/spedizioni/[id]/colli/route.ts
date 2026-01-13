// app/api/spedizioni/[id]/colli/route.ts
// Restituisce i colli legati alla spedizione [id].
// 1) prova a leggere gli ID collegati dal record spedizione (campo "COLLI" o simili, array di recId)
// 2) fallback: cerca nella tabella colli filtrando per il campo link (Spedizione/Spedizioni/Shipment…)
// Output compatibile con il BO: { ok: true, rows: [{lunghezza_cm, larghezza_cm, altezza_cm, peso_kg, quantita}] }

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* ───────── CORS ───────── */
function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const raw = process.env.ORIGIN_ALLOW_LIST || process.env.ORIGIN_ALLOW_LST || '';
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
  res.headers.set('Access-Control-Max-Age', '600');
  return res;
}
function ok(req: NextRequest, data: any, init: ResponseInit = {}) {
  return withCors(req, new NextResponse(JSON.stringify(data), {
    ...init, headers: { 'Content-Type': 'application/json', ...(init.headers||{}) }
  }));
}
export function OPTIONS(req: NextRequest) {
  return withCors(req, new NextResponse(null, { status: 204 }));
}

/* ───────── Config Airtable ───────── */
const BASE = process.env.AIRTABLE_BASE_ID!;
const KEY  = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT || process.env.AIRTABLE_TOKEN!;
const TB_SPED =
  process.env.TB_SPEDIZIONI_WEBAPP ||
  process.env.AIRTABLE_TABLE_SPEDIZIONI_WEBAPP ||
  process.env.AIRTABLE_TABLE ||
  'SpedizioniWebApp';
const TB_COLLI =
  process.env.TB_SPED_COLLI ||
  process.env.AIRTABLE_TABLE_SPED_COLLI ||
  process.env.AIRTABLE_TABLE_COLLI ||
  process.env.TB_COLLI ||
  'SPED_COLLI';

const api = (t: string) => `https://api.airtable.com/v0/${BASE}/${encodeURIComponent(t)}`;
const headers: HeadersInit = { Authorization: `Bearer ${KEY}` };

/* ───────── Helpers ───────── */
async function fetchJson(url: string) {
  const r = await fetch(url, { headers, cache: 'no-store' });
  const txt = await r.text();
  let j: any = null;
  try { j = txt ? JSON.parse(txt) : null; } catch { j = { raw: txt }; }
  return { r, j };
}
async function fetchColliByIds(ids: string[]) {
  if (!ids.length) return [];
  const out: any[] = [];
  const chunk = (arr: string[], n: number) =>
    arr.length <= n ? [arr] : arr.reduce((a,_,i)=> i%n ? a : [...a, arr.slice(i,i+n)], [] as string[][]);
  for (const group of chunk(ids, 15)) {
    const or = `OR(${group.map(x=>`RECORD_ID()="${x}"`).join(',')})`;
    const { r, j } = await fetchJson(`${api(TB_COLLI)}?${new URLSearchParams({ filterByFormula: or, pageSize: '50' })}`);
    if (!r.ok) throw new Error(`Airtable ${r.status}: ${JSON.stringify(j)}`);
    out.push(...(j.records||[]));
  }
  return out;
}
function toNum(v: any) {
  if (v == null || v === '') return null;
  const n = Number(String(v).replace(',','.'));
  return Number.isFinite(n) ? n : null;
}
function normalizeRows(recs: any[]) {
  return recs.map((r:any) => {
    const f = r.fields || {};
    return {
      lunghezza_cm: toNum(f['L_cm'] || f['Lunghezza'] || f['L'] || f['Lunghezza (cm)']),
      larghezza_cm: toNum(f['W_cm'] || f['Larghezza'] || f['W'] || f['Larghezza (cm)']),
      altezza_cm:   toNum(f['H_cm'] || f['Altezza']   || f['H'] || f['Altezza (cm)']),
      peso_kg:      toNum(f['Peso']  || f['Peso_Kg']   || f['Kg']|| f['Peso (kg)']) || 0,
      quantita:     Number(f['Quantita'] || f['Quantità'] || f['Qty'] || 1) || 1,
    };
  });
}

/* ───────── GET /api/spedizioni/[id]/colli ───────── */
export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  // Airtable disabilitato - servizio non disponibile
  return ok(req, { ok: false, error: 'Service unavailable: Airtable has been disabled' }, { status: 503 });
}
