// app/api/upload/route.ts
// Proxy upload → Vercel Blob. Ritorna { url, attachments:[{url}] } come si aspetta il BO.
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* ───────── CORS ───────── */
function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const raw =
    process.env.ORIGIN_ALLOW_LIST ||
    process.env.ORIGIN_ALLOW_LST ||
    '';
  const list = raw.split(',').map(s => s.trim()).filter(Boolean);
  if (list.length === 0) return '*';
  return list.includes(origin) ? origin : list[0];
}
function withCors(req: NextRequest, res: NextResponse) {
  const allow = getAllowedOrigin(req);
  res.headers.set('Access-Control-Allow-Origin', allow);
  res.headers.set('Vary', 'Origin');
  res.headers.set('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Expose-Headers', 'x-debug');
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

/* ───────── Helpers ───────── */
function safeName(s: string) {
  return String(s || '').replace(/[^\w.\-]+/g, '_');
}

/* ───────── POST /api/upload?filename=...&contentType=... ───────── */
export async function POST(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams;
    const filename = safeName(sp.get('filename') || `upload_${Date.now()}.bin`);
    const contentType = sp.get('contentType') || 'application/octet-stream';

    const body = await req.arrayBuffer();
    if (!body || body.byteLength === 0) {
      return ok(req, { ok:false, error:'EMPTY_BODY' }, { status: 400 });
    }

    // Se presente, usa token RW esplicito; altrimenti usa integrazione Vercel Blob del progetto
    const token = process.env.BLOB_READ_WRITE_TOKEN || undefined;

    const blob = await put(filename, body, {
      access: 'public',
      contentType,
      token,
    });

    return ok(req, {
      ok: true,
      url: blob?.url,
      // il front-end accetta anche "attachments" in stile Airtable
      attachments: [{ url: blob?.url }],
    });
  } catch (err: any) {
    return ok(req, { ok:false, error: String(err?.message||err) }, { status: 500 });
  }
}
