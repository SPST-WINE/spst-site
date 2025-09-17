// app/lib/cors.ts
import { NextRequest, NextResponse } from 'next/server';

function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const raw =
    process.env.ORIGIN_ALLOW_LIST ||
    // fallback se in Vercel è stato salvato per errore senza la “I”
    process.env.ORIGIN_ALLOW_LST ||
    '';
  const list = raw.split(',').map(s => s.trim()).filter(Boolean);

  if (list.length === 0) return '*';
  return list.includes(origin) ? origin : list[0];
}

export function applyCors(req: NextRequest, res: NextResponse) {
  const allow = getAllowedOrigin(req);
  res.headers.set('Access-Control-Allow-Origin', allow);
  res.headers.set('Vary', 'Origin');
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return res;
}

export function okJson(req: NextRequest, data: any, init?: ResponseInit) {
  return applyCors(req, NextResponse.json(data, init));
}

export function empty204(req: NextRequest) {
  return applyCors(req, new NextResponse(null, { status: 204 }));
}
