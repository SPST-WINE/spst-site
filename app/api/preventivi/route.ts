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
  // Airtable disabilitato - servizio non disponibile
  return NextResponse.json({ ok: false, error: 'Service unavailable: Airtable has been disabled' }, { status: 503, headers: cors(req.headers.get('origin')) });
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
  // Airtable disabilitato - servizio non disponibile
  return NextResponse.json({ ok: false, error: 'Service unavailable: Airtable has been disabled' }, { status: 503, headers });
}
