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
  // Airtable disabilitato - servizio non disponibile
  return NextResponse.json({ ok: false, error: 'Service unavailable: Airtable has been disabled' }, { status: 503, headers: cors });
}
