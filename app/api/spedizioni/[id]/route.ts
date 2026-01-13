// app/api/spedizioni/[id]/route.ts
// GET dettaglio + PATCH aggiornamento tracking/stato/allegati
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* CORS */
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
  res.headers.set('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Max-Age', '600');
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

/* Config */
const BASE = process.env.AIRTABLE_BASE_ID!;
const KEY  = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT!;
const TBL  = process.env.TB_SPEDIZIONI || 'SPEDIZIONI';
const TBL_WEBAPP = process.env.TB_SPEDIZIONI_WEBAPP || 'SpedizioniWebApp';

/* Helpers */
function normalizeCarrier(input: any){
  if (input == null) return '';
  let s: any = input;
  if (typeof s === 'object' && s.name) s = s.name;
  s = String(s).trim();
  if (!s) return '';
  const k = s.toLowerCase().replace(/[\s-]/g,'');
  const map: Record<string,string> = {
    dhl:'DHL', dhlexpress:'DHL',
    fedex:'FedEx', fedexexpress:'FedEx', fx:'FedEx', fedexground:'FedEx',
    ups:'UPS', unitedparcelservice:'UPS',
    tnt:'TNT', tntexpress:'TNT',
    gls:'GLS', dpd:'DPD',
    poste:'Poste', posteitaliane:'Poste',
    altro:'Altro', other:'Altro'
  };
  return map[k] || s;
}
function normalizeFieldKey(key: any) {
  const raw = String(key || '');
  const edasRx = /^e[\s_\-]*d[\s_\-]*a[\s_\-]*s$/i;
  if (edasRx.test(raw)) return 'Allegato 3';
  const clean = raw.trim();
  if (clean === 'LDV' || /Lettera\s*di\s*Vettura/i.test(clean)) return 'Allegato LDV';
  if (/^Fattura$/i.test(clean) || /Fattura\s*Commerciale/i.test(clean)) return 'Allegato Fattura';
  if (/^DLE$/i.test(clean) || /Dichiarazione\s*Esportazione/i.test(clean)) return 'Allegato DLE';
  if (/^PL$/i.test(clean)  || /Packing\s*List/i.test(clean)) return 'Allegato PL';
  const m = clean.match(/^Allegato\s*([123])$/i) || clean.replace(/\s+/g,'').match(/^Allegato([123])$/i);
  if (m) return `Allegato ${m[1]}`;
  return clean;
}
function mapDocsToAirtable(docs: Record<string, any> = {}) {
  const out: Record<string, any> = {};
  const LEGACY_ATT: Record<string,string> = {
    'Lettera_di_Vettura': 'Lettera di Vettura',
    'Fattura_Proforma': 'Fattura Proforma',
    'Dichiarazione_Esportazione': 'Dichiarazione Esportazione',
    'Packing_List': 'Packing List',
    'FDA_Prior_Notice': 'Prior Notice'
  };
  const LEGACY_LINKS: Record<string,string> = {
    'Fattura_Commerciale': 'Fattura Commerciale Caricata',
    'Fattura_Proforma_Caricata': 'Fattura Proforma Caricata'
  };
  const NEW_ATT: Record<string,string> = {
    'LDV': 'Allegato LDV',
    'DLE': 'Allegato DLE',
    'PL': 'Allegato PL',
    'Allegato_1': 'Allegato 1',
    'Allegato_2': 'Allegato 2',
    'Allegato_3': 'Allegato 3',
    'Fattura': 'Allegato Fattura',
  };
  const NEW_CLIENT: Record<string,string> = {
    'Fattura_Client': 'Fattura - Allegato Cliente',
    'Packing_Client': 'Packing List - Allegato Cliente',
  };
  for (const [k, url] of Object.entries(docs)) {
    if (!url) continue;
    if (NEW_ATT[k]) out[NEW_ATT[k]] = [{ url: String(url) }];
    else if (NEW_CLIENT[k]) out[NEW_CLIENT[k]] = [{ url: String(url) }];
    else if (LEGACY_ATT[k]) out[LEGACY_ATT[k]] = [{ url: String(url) }];
    else if (LEGACY_LINKS[k]) out[LEGACY_LINKS[k]] = String(url);
    else if (/^e[\s_\-]*d[\s_\-]*a[\s_\-]*s$/i.test(k)) out['Allegato 3'] = [{ url: String(url) }];
  }
  return out;
}
async function airtableGetById(table: string, id: string) {
  return fetch(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(table)}/${encodeURIComponent(id)}`, {
    headers: { Authorization: `Bearer ${KEY}` }, cache: 'no-store'
  });
}
async function airtableSearch(table: string, formula: string, pageSize = 5) {
  const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(table)}`);
  url.searchParams.set('filterByFormula', formula);
  url.searchParams.set('pageSize', String(pageSize));
  return fetch(url.toString(), { headers: { Authorization: `Bearer ${KEY}` }, cache: 'no-store' });
}
async function airtablePatch(table: string, id: string, fields: Record<string, any>) {
  const r = await fetch(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(table)}/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields })
  });
  const text = await r.text();
  let data: any = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = { error: text }; }
  return { status: r.status, ok: r.ok, data };
}
function resolveTablesInOrder() {
  const uniq = (a: string[]) => [...new Set(a.filter(Boolean))];
  return uniq([
    TBL_WEBAPP,
    TBL,
    process.env.AIRTABLE_TABLE || '',
    process.env.USE_NEW_SHIPMENTS_TABLE ? 'SpedizioniWebApp' : '',
    'SpedizioniWebApp',
    'SPEDIZIONI'
  ]);
}

/* GET dettaglio */
export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  // Airtable disabilitato - servizio non disponibile
  return okJson(req, { ok: false, error: 'Service unavailable: Airtable has been disabled' }, { status: 503 });
}

/* PATCH aggiornamento */
export async function PATCH(req: NextRequest, ctx: { params: { id: string } }) {
  // Airtable disabilitato - servizio non disponibile
  return okJson(req, { ok: false, error: 'Service unavailable: Airtable has been disabled' }, { status: 503 });
}
