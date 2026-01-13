// app/api/notify/transit/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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
const fmtDate = (s: any) => (s ? String(s).slice(0, 10) : '—'); // YYYY-MM-DD
const esc = (s: any) =>
  String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

/* ───────── POST /api/notify/transit ───────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { to, id, carrier = '', tracking = '', ritiroData = '' } = body || {};

    const RESEND_API_KEY   = process.env.RESEND_API_KEY;
    const EMAIL_FROM       = process.env.EMAIL_FROM         || 'notification@spst.it';
    const EMAIL_LOGO_URL   = process.env.EMAIL_LOGO_URL     || 'https://www.spst.it/logo-email.png';
    const AREA_RISERVATA   = process.env.AREA_RISERVATA_URL || 'https://spst-operations.vercel.app/login';
    const WHATSAPP_URL     = process.env.WHATSAPP_URL       || 'https://wa.me/393000000000';

    if (!RESEND_API_KEY) return okJson(req, { ok:false, error:'RESEND_API_KEY missing' }, { status: 500 });
    if (!to)             return okJson(req, { ok:false, error:'Missing "to"' }, { status: 400 });
    if (!id)             return okJson(req, { ok:false, error:'Missing "id"' }, { status: 400 });

    // Palette (header blu come template “area riservata”)
    const BRAND_PRIMARY = '#1c3e5e'; // blu header
    const BRAND_ACCENT  = '#f7911e'; // arancio CTA
    const BRAND_BG      = '#f6f8fb';

    const subject   = `SPST • Spedizione in transito — ${id}`;
    const preheader = `Spedizione in transito. Ritiro previsto ${fmtDate(ritiroData)}.`;

    const html = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <meta name="x-apple-disable-message-reformatting"/>
    <title>${esc(subject)}</title>
  </head>
  <body style="margin:0;background:${BRAND_BG};font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <!-- Preheader -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_BG};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(16,24,40,.06);border:1px solid #e2e8f0;">
            <!-- Header blu -->
            <tr>
              <td style="background:${BRAND_PRIMARY};padding:18px 24px;">
                <img src="${esc(EMAIL_LOGO_URL)}" alt="SPST" style="height:28px;display:block;border:0;filter:brightness(110%);" />
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <h1 style="margin:0 0 8px 0;font-size:20px;color:#0f172a;">Spedizione in transito</h1>

                <!-- ID box -->
                <table role="presentation" style="width:100%;margin:6px 0 18px;">
                  <tr>
                    <td style="font-size:12px;color:#6b7280;padding-bottom:4px;">ID spedizione</td>
                  </tr>
                  <tr>
                    <td style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;font-size:14px;padding:10px 12px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;color:#111827;">
                      ${esc(id)}
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 10px 0;color:#374151;font-size:14px;line-height:1.55;">
                  Gentile Cliente, la tua spedizione è stata evasa. Trovi i documenti da stampare all'interno della tua
                  <a href="${esc(AREA_RISERVATA)}" style="color:#0a58ca;">Area Riservata SPST</a>.
                </p>

                <p style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.55;">
                  <strong>Ritiro previsto:</strong> ${esc(fmtDate(ritiroData))}
                </p>

                <p style="margin:0 0 18px 0;color:#374151;font-size:14px;line-height:1.55;">
                  Se ci dovessero essere problemi con il ritiro puoi riferirti al nostro
                  <a href="${esc(WHATSAPP_URL)}" style="color:#0a58ca;">Supporto WhatsApp</a>.
                </p>

                <!-- Info box -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;background:#fff;margin:0 0 16px;">
                  <tr>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;">
                      <div style="margin:0 0 6px 0;"><strong>Corriere:</strong> ${esc(carrier || '—')}</div>
                      <div><strong>Tracking:</strong> ${esc(tracking || '—')}</div>
                    </td>
                  </tr>
                </table>

                <!-- CTAs -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 18px;">
                  <tr>
                    <td>
                      <a href="${esc(AREA_RISERVATA)}" target="_blank"
                         style="display:inline-block;background:${BRAND_PRIMARY};color:#fff;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:600;font-size:14px;">
                        Area Riservata
                      </a>
                    </td>
                    <td style="width:10px"></td>
                    <td>
                      <a href="${esc(WHATSAPP_URL)}" target="_blank"
                         style="display:inline-block;background:${BRAND_ACCENT};color:#111827;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:600;font-size:14px;">
                        Supporto WhatsApp
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px 0;color:#374151;font-size:14px;">Grazie,<br/>Team SPST</p>
              </td>
            </tr>

            <!-- Footer grigio -->
            <tr>
              <td style="padding:16px 24px;background:#f3f4f6;color:#6b7280;font-size:12px;">
                <p style="margin:0;">Ricevi questa mail perché hai effettuato una spedizione con SPST.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    const text = `Spedizione in transito — ${id}

Gentile Cliente, la tua spedizione è stata evasa.
Trovi i documenti da stampare nella tua Area Riservata: ${AREA_RISERVATA}
Ritiro previsto: ${fmtDate(ritiroData)}

Corriere: ${carrier || '—'}
Tracking: ${tracking || '—'}

Supporto WhatsApp: ${WHATSAPP_URL}

Grazie,
Team SPST`;

    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to,
      subject,
      html,
      text,
    });

    if (error) return okJson(req, { ok:false, error: String((error as any)?.message || error) }, { status: 502 });
    return okJson(req, { ok:true, id: data?.id ?? null });
  } catch (err: any) {
    return okJson(req, { ok:false, error: String(err?.message || err) }, { status: 502 });
  }
}
