// app/api/notify/transit/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

/* ───────── Helpers ───────── */
function esc(s: any) {
  return String(s ?? '').replace(/[<&>"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]!));
}
function fmtDateIso(d: any) {
  try {
    const dt = new Date(d);
    if (isNaN(dt as any)) return String(d ?? '');
    return dt.toLocaleDateString('it-IT', { year:'numeric', month:'2-digit', day:'2-digit' });
  } catch { return String(d ?? ''); }
}

/* ───────── POST /api/notify/transit ───────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      to,
      id,
      carrier = '',
      tracking = '',
      ritiroData = ''
    } = body || {};

    const RESEND_API_KEY   = process.env.RESEND_API_KEY;
    const EMAIL_FROM       = process.env.EMAIL_FROM         || 'notification@spst.it';
    const EMAIL_LOGO_URL   = process.env.EMAIL_LOGO_URL     || 'https://www.spst.it/logo-email.png';
    const AREA_RISERVATA   = process.env.AREA_RISERVATA_URL || 'https://www.spst.it/';
    const WHATSAPP_URL     = process.env.WHATSAPP_URL       || 'https://wa.me/393000000000';

    if (!RESEND_API_KEY)   return okJson(req, { ok:false, error:'RESEND_API_KEY missing' }, { status: 500 });
    if (!to)               return okJson(req, { ok:false, error:'Missing "to"' }, { status: 400 });
    if (!id)               return okJson(req, { ok:false, error:'Missing "id"' }, { status: 400 });

    const subject = `Spedizione in transito • ${id}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;background:#f5f7fb;padding:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 4px rgba(0,0,0,.06);">
          <tr>
            <td style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
              <img src="${esc(EMAIL_LOGO_URL)}" alt="SPST" height="28" style="display:block" />
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px;">
              <h1 style="margin:0 0 10px 0;font-size:18px;color:#111;">Spedizione in transito</h1>
              <p style="margin:0 0 8px 0;color:#111;font-size:14px;">ID spedizione: <strong>${esc(id)}</strong></p>
              <p style="margin:0 0 8px 0;color:#111;font-size:14px;">Corriere: <strong>${esc(carrier)}</strong></p>
              <p style="margin:0 0 8px 0;color:#111;font-size:14px;">Tracking: <strong>${esc(tracking)}</strong></p>
              <p style="margin:0 0 12px 0;color:#111;font-size:14px;">Ritiro previsto: <strong>${esc(fmtDateIso(ritiroData))}</strong></p>

              <p style="margin:12px 0 16px 0;color:#111;font-size:14px;">
                Per maggiori dettagli accedi alla tua <a href="${esc(AREA_RISERVATA)}" target="_blank" rel="noopener" style="color:#0a58ca;">Area Riservata</a>.
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #e5e7eb;border-radius:10px;background:#fff;">
                <tr>
                  <td style="padding:14px 16px;font-size:14px;color:#111;">
                    <div style="margin:0 0 6px 0;"><strong>Assistenza</strong></div>
                    In caso di necessità puoi contattarci su
                    <a href="${esc(WHATSAPP_URL)}" target="_blank" rel="noopener" style="color:#0a58ca;">WhatsApp</a>.
                  </td>
                </tr>
              </table>

              <p style="margin:18px 0 0 0;color:#6b7280;font-size:12px;">
                Questo messaggio è stato generato automaticamente. Non rispondere a questa email.
              </p>
            </td>
          </tr>
        </table>
      </div>
    `;

    const text = `Spedizione in transito
ID: ${id}
Corriere: ${carrier}
Tracking: ${tracking}
Ritiro previsto: ${fmtDateIso(ritiroData)}
Dettagli: ${AREA_RISERVATA}`;

    const resend = new Resend(RESEND_API_KEY);
    const sent = await resend.emails.send({
      from: EMAIL_FROM,
      to,
      subject,
      html,
      text,
    });

    return okJson(req, { ok:true, id: sent?.id ?? null });
  } catch (err: any) {
    return okJson(req, { ok:false, error: String(err?.message || err) }, { status: 502 });
  }
}
