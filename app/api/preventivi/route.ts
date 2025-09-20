// app/api/preventivi/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function cors(origin?: string | null) {
  const o = origin || '*';
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: cors(req.headers.get('origin')) });
}

// ───────── Env (Airtable) ─────────
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const API_KEY = process.env.AIRTABLE_PAT;         // PAT
const TABLE   = process.env.TB_PREVENTIVI || 'Preventivi';

function missingCreds() {
  return !BASE_ID || !API_KEY;
}

// (GET opzionale: al momento non usato dalla UI; lo lasciamo semplice e robusto)
export async function GET(req: NextRequest) {
  if (missingCreds()) {
    return NextResponse.json({ ok:false, error:'Missing Airtable credentials' }, { status:500, headers: cors(req.headers.get('origin')) });
  }
  const url = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID!)}/${encodeURIComponent(TABLE)}`;
  const r = await fetch(url, {
    method:'GET',
    headers:{ Authorization:`Bearer ${API_KEY}`, 'Content-Type':'application/json' },
    cache:'no-store',
  });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok) {
    return NextResponse.json({ ok:false, status:r.status, error:j }, { status:422, headers:cors(req.headers.get('origin')) });
  }
  return NextResponse.json({ ok:true, records:j.records||[] }, { headers:cors(req.headers.get('origin')) });
}

// ───────── POST: CREA PREVENTIVO ─────────
/**
 * Body atteso:
 * {
 *   fields: {
 *     "Creato da": string (email),
 *     "Ritiro - Data": "YYYY-MM-DD",
 *     "Sottotipo": "B2B" | "B2C" | "Campionatura",
 *     "Corriere": string,
 *     "Prezzo": number,
 *     "Note": string
 *   }
 * }
 */
export async function POST(req: NextRequest) {
  const headers = cors(req.headers.get('origin'));
  try {
    if (missingCreds()) {
      return NextResponse.json({ ok:false, error:'Missing Airtable credentials' }, { status:500, headers });
    }

    const body = await req.json().catch(()=> ({}));
    const input = (body && body.fields) || {};

    // Whitelist campi “sicuri” (evita 422 per nomi non esistenti)
    const SAFE_FIELDS: Record<string, any> = {
      'Creato da':           input['Creato da'],
      'Ritiro - Data':       input['Ritiro - Data'],
      'Sottotipo':           input['Sottotipo'],
      'Corriere':            input['Corriere'],
      'Prezzo':              input['Prezzo'],
      'Note':                input['Note'],
    };

    // Rimuovi undefined / null / '' per non sporcare il record
    const fields: Record<string, any> = {};
    for (const [k,v] of Object.entries(SAFE_FIELDS)) {
      if (v !== undefined && v !== null && String(v) !== '') fields[k] = v;
    }

    // Minime validazioni
    if (!fields['Creato da'])     return NextResponse.json({ ok:false, error:'Missing "Creato da"' }, { status:400, headers });
    if (!fields['Ritiro - Data']) return NextResponse.json({ ok:false, error:'Missing "Ritiro - Data"' }, { status:400, headers });

    const url = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID!)}/${encodeURIComponent(TABLE)}`;
    const r = await fetch(url, {
      method:'POST',
      headers:{ Authorization:`Bearer ${API_KEY}`, 'Content-Type':'application/json' },
      body: JSON.stringify({ fields }),
    });
    const j = await r.json().catch(()=> ({}));
    if (!r.ok) {
      return NextResponse.json({ ok:false, status:r.status, error:j }, { status:422, headers });
    }
    return NextResponse.json({ ok:true, record:j }, { status:201, headers });
  } catch (err:any) {
    return NextResponse.json({ ok:false, error:String(err?.message||err) }, { status:500, headers });
  }
}
