// app/api/spedizioni/[id]/colli/route.ts
// GET colli linkati alla spedizione [id] (robusto: prova più tabelle/campi e primary display)
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

/* Config */
const BASE  = process.env.AIRTABLE_BASE_ID!;
const KEY   = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT!;
const TBL_C = process.env.TB_COLLI || 'Colli';
const TBL_C_ALT = process.env.TB_COLLI_ALT || 'SPED_COLLI';
const LINKF = process.env.AIRTABLE_LINK_FIELD_COLLI || 'Spedizione';
const LINKF_ALTS = (process.env.AIRTABLE_LINK_FIELD_COLLI_ALTS || 'Spedizioni,Spedizione (link),ID Spedizione').split(',').map(s=>s.trim()).filter(Boolean);
const TBL_S = process.env.TB_SPEDIZIONI || 'SPEDIZIONI';
const PFIELD = process.env.AIRTABLE_PRIMARY_FIELD_SPEDIZIONI || 'ID Spedizione';

function escFormula(s: string){ return String(s).replace(/"/g,'\\"').replace(/'/g,"\\'"); }
async function airtableGet(url: URL){
  const res = await fetch(url.toString(), { headers: { Authorization: `Bearer ${KEY}` }, cache:'no-store' });
  const json = await res.json().catch(()=> ({}));
  return { res, json };
}
async function tryQueryColli(needle: string, tableName: string, linkField: string){
  const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(tableName)}`);
  url.searchParams.set('filterByFormula', `FIND('${escFormula(needle)}', ARRAYJOIN({${linkField}}, ','))`);
  url.searchParams.set('pageSize', '50');
  const { res, json } = await airtableGet(url);
  if (res.ok) {
    const records = Array.isArray(json?.records) ? json.records : [];
    return { ok:true, records };
  }
  return { ok:false, status: res.status, error: json };
}
async function getShipmentDisplayValue(recordId: string){
  const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(TBL_S)}/${encodeURIComponent(recordId)}`);
  const { res, json } = await airtableGet(url);
  if (res.ok && json?.fields) {
    const fields = json.fields as Record<string, any>;
    if (typeof fields[PFIELD] === 'string' && fields[PFIELD].trim()) return String(fields[PFIELD]).trim();
    if (typeof fields['ID Spedizione'] === 'string' && fields['ID Spedizione'].trim()) return String(fields['ID Spedizione']).trim();
    if (typeof fields['Nome'] === 'string' && fields['Nome'].trim()) return String(fields['Nome']).trim();
    for (const v of Object.values(fields)) {
      if (typeof v === 'string' && v.trim().length >= 3) return v.trim();
    }
  }
  return recordId;
}

/* GET /api/spedizioni/[id]/colli */
export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  const recId = ctx.params.id;
  try {
    const display = await getShipmentDisplayValue(recId);
    const tableCandidates = [TBL_C, TBL_C_ALT].filter((v,i,a)=> v && a.indexOf(v)===i);
    const linkCandidates  = [LINKF, ...LINKF_ALTS].filter((v,i,a)=> v && a.indexOf(v)===i);
    const needles         = [recId, display].filter((v,i,a)=> v && a.indexOf(v)===i);

    for (const tbl of tableCandidates){
      for (const link of linkCandidates){
        for (const n of needles){
          const out = await tryQueryColli(n, tbl, link);
          if (out.ok) return okJson(req, { ok:true, records: out.records, used: { table: tbl, linkField: link, needle: n } });
        }
      }
    }

    return okJson(req, {
      ok:false,
      error: 'UNMATCHED_LINK_FIELD_OR_TABLE',
      hint: 'Controlla nome tabella colli e nome del campo link nella base Airtable.',
      tried: { tables: tableCandidates, linkFields: linkCandidates, needles }
    }, { status: 422 });

  } catch (err: any) {
    return okJson(req, { ok:false, error: String(err?.message||err) }, { status: 500 });
  }
}
