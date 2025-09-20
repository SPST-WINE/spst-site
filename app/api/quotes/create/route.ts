// app/api/quotes/create/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const AT_BASE  = process.env.AIRTABLE_BASE_ID as string | undefined;
const AT_PAT   = process.env.AIRTABLE_PAT as string | undefined;
const TB_QUOTE = process.env.TB_PREVENTIVI as string | undefined;
const TB_OPT   = process.env.TB_OPZIONI as string | undefined;
const TB_COLLI = process.env.TB_COLLI as string | undefined;

const DEFAULT_ALLOW = [
  'https://spst.it',
  'https://www.spst.it',
  'https://spst-logistics.vercel.app',
  'http://localhost:3000',
  'http://localhost:8888',
];
const allowlist = (process.env.ORIGIN_ALLOWLIST || DEFAULT_ALLOW.join(','))
  .split(',').map(s=>s.trim()).filter(Boolean);

function isAllowed(origin?: string|null){
  if (!origin) return false;
  for (const item of allowlist) {
    if (item.includes('*')) {
      const esc = item.replace(/[.+?^${}()|[\]\\]/g,'\\$&').replace('\\*','.*');
      if (new RegExp('^'+esc+'$').test(origin)) return true;
    } else if (item === origin) return true;
  }
  return false;
}
function corsHeaders(origin?: string|null){
  const h: Record<string,string> = {
    'Vary':'Origin',
    'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type,Authorization',
  };
  if (isAllowed(origin)) h['Access-Control-Allow-Origin'] = origin!;
  return h;
}

function toNumber(x:any){ const n=Number(x); return Number.isFinite(n)?n:undefined; }
function addDays(base: Date, days: number){
  const d = new Date(base); d.setHours(0,0,0,0); d.setDate(d.getDate()+Number(days||0)); return d;
}
function getBestIndex(options:any[]){
  const chosen = options.find(o=>!!o?.recommended);
  if (chosen) return toNumber(chosen.index);
  const priced = options.filter(o=> typeof o?.price === 'number');
  if (!priced.length) return undefined;
  priced.sort((a:any,b:any)=> a.price - b.price);
  return toNumber(priced[0].index);
}

async function atCreate(table: string, records: any[]){
  const url = `https://api.airtable.com/v0/${AT_BASE}/${encodeURIComponent(table)}`;
  const payload = { records };
  const resp = await fetch(url, {
    method:'POST',
    headers:{ Authorization:`Bearer ${AT_PAT}`, 'Content-Type':'application/json' },
    body: JSON.stringify(payload),
    cache:'no-store',
  });
  const json = await resp.json().catch(()=>null);
  if (!resp.ok){
    const err = new Error(json?.error?.message || 'Airtable error') as any;
    err.status = resp.status; err.payload = json; err.table = table; err.sent = payload;
    throw err;
  }
  return json;
}

export async function OPTIONS(req: NextRequest){
  return new NextResponse(null, { status:204, headers: corsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest){
  const cors = corsHeaders(req.headers.get('origin'));
  try{
    if (!AT_BASE || !AT_PAT || !TB_QUOTE || !TB_OPT){
      throw new Error('Missing env vars: AIRTABLE_BASE_ID / AIRTABLE_PAT / TB_PREVENTIVI / TB_OPZIONI');
    }

    const body = await req.json().catch(()=> ({} as any));
    const now  = new Date();
    const slug = `q-${now.toISOString().slice(2,10).replace(/-/g,'')}-${Math.random().toString(36).slice(2,7)}`;

    // scadenza
    let expiryDate: Date | undefined;
    if (body?.terms?.linkExpiryDate) {
      const d = new Date(body.terms.linkExpiryDate);
      if (!Number.isNaN(+d)) expiryDate = d;
    } else if (body?.terms?.linkExpiryDays){
      expiryDate = addDays(now, Number(body.terms.linkExpiryDays));
    }

    const PUBLIC_QUOTE_BASE_URL = (process.env.PUBLIC_QUOTE_BASE_URL || 'https://spst-logistics.vercel.app/quote').replace(/\/$/,'');
    const publicUrl = `${PUBLIC_QUOTE_BASE_URL}/${encodeURIComponent(slug)}`;

    const qFields: Record<string,any> = {
      Email_Cliente   : body.customerEmail || undefined,
      Valuta          : body.currency || undefined,
      Valido_Fino_Al  : body.validUntil || undefined,
      Note_Globali    : body.notes || undefined,

      Mittente_Nome      : body.sender?.name || undefined,
      Mittente_Paese     : body.sender?.country || undefined,
      Mittente_Citta     : body.sender?.city || undefined,
      Mittente_CAP       : body.sender?.zip || undefined,
      Mittente_Indirizzo : body.sender?.address || undefined,
      Mittente_Telefono  : body.sender?.phone || undefined,
      Mittente_Tax       : body.sender?.tax || undefined,

      Destinatario_Nome      : body.recipient?.name || undefined,
      Destinatario_Paese     : body.recipient?.country || undefined,
      Destinatario_Citta     : body.recipient?.city || undefined,
      Destinatario_CAP       : body.recipient?.zip || undefined,
      Destinatario_Indirizzo : body.recipient?.address || undefined,
      Destinatario_Telefono  : body.recipient?.phone || undefined,
      Destinatario_Tax       : body.recipient?.tax || undefined,

      Versione_Termini      : body.terms?.version || 'v1.0',
      Visibilita            : body.terms?.visibility || 'Immediata',
      Slug_Pubblico         : slug,
      Scadenza_Link         : expiryDate ? expiryDate.toISOString() : undefined,

      Opzione_Consigliata   : getBestIndex(Array.isArray(body.options)? body.options : []),

      Colli_JSON            : Array.isArray(body.packages) && body.packages.length
                                ? JSON.stringify(body.packages)
                                : undefined,
    };

    // 1) Preventivo
    const qResp   = await atCreate(TB_QUOTE, [{ fields: qFields }]);
    const quoteId = qResp?.records?.[0]?.id as string | undefined;
    if (!quoteId) throw new Error('Quote created but no valid record id returned');

    // 2) Opzioni
    const rawOptions = Array.isArray(body.options) ? body.options : [];
    if (rawOptions.length){
      const optRecords = rawOptions.map((o:any)=>({
        fields:{
          Preventivo     : [quoteId],
          Indice         : toNumber(o.index),
          Corriere       : o.carrier || undefined,
          Servizio       : o.service || undefined,
          Tempo_Resa     : o.transit || undefined,
          Incoterm       : o.incoterm || undefined,
          Oneri_A_Carico : o.payer || undefined,
          Prezzo         : toNumber(o.price),
          Valuta         : o.currency || body.currency || undefined,
          Note_Operative : o.notes || undefined,
          Consigliata    : !!o.recommended,
        }
      }));
      await atCreate(TB_OPT, optRecords);
    }

    // 3) Colli
    const pk = Array.isArray(body.packages) ? body.packages : [];
    if (TB_COLLI && pk.length){
      const pkgRecords = pk.map((p:any)=>({
        fields:{
          Preventivi    : [quoteId],
          Preventivo_Id : quoteId,
          Quantita : toNumber(p.qty) || 1,
          L_cm     : toNumber(p.l),
          W_cm     : toNumber(p.w),
          H_cm     : toNumber(p.h),
          Peso     : toNumber(p.kg),
        }
      }));
      await atCreate(TB_COLLI, pkgRecords);
    }

    return NextResponse.json({ ok:true, id: quoteId, slug, url: publicUrl }, { headers: cors });
  }catch(err:any){
    const status = err?.status || 500;
    const details = err?.payload || { name: err?.name, message: err?.message, table: err?.table, sent: err?.sent };
    console.error('[api/quotes/create] error:', details);
    return NextResponse.json({ ok:false, error: details }, { status, headers: cors });
  }
}
