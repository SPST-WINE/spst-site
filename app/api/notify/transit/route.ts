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
const fmtDate = (s: any) => (s ? String(s).slice(0, 10) : '—'); // YYYY-MM-DD
const esc = (s: any) =>
  String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

/* ───────── POST /api/notify/transit ───────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      to,
      id,
      carrier = '',
      tracking = '',
      ritiroData = '',
    } = body || {};

    const RESEND_API_KEY   = process.env.RESEND_API_KEY;
    const EMAIL_FROM       = process.env.EMAIL_FROM         || 'notification@spst.it';
    const EMAIL_LOGO_URL   = process.env.EMAIL_LOGO_URL     || 'https://www.spst.it/logo-email.png';
    const AREA_RISERVATA   = process.env.AREA_RISERVATA_URL || 'https://app.spst.it/';
    const WHATSAPP_URL     = process.env.WHATSAPP_URL       || 'https://wa.me/391234567890';

    if (!RESEND_API_KEY)   return okJson(req, { ok:false, error:'RESEND_API_KEY missing' }, { status: 500 });
    if (!to)               return okJson(req, { ok:false, error:'Missing "to"' }, { status: 400 });
    if (!id)               return okJson(req, { ok:false, error:'Missing "id"' }, { status: 400 });

    // Branding coerente al template usato in spst-logistics
    const BRAND_PRIMARY = '#1c3e5e';
    const BRAND_ACCENT  = '#f7911e';
    const BRAND_BG      = '#f6f8fb';

    const subject = `SPST • Spedizione in transito — ${id}`;

    /* ------- HTML dal vecchio repo (spst-logistics) ------- */
    const html = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="x-apple-disable-message-reformatting">
    <title>SPST • Spedizione in transito — \${esc(id)}</title>
  </head>
  <body style="margin:0;background:\${BRAND_BG};font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <!-- Preheader -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      Spedizione in transito — ritiro previsto \${esc(fmtDate(ritiroData))}.
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:\${BRAND_BG};padding:24px 12px;">
      <tr>
        <td>
          <table role="presentation" align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(16,24,40,.06);">
            <!-- Header -->
            <tr>
              <td style="padding:18px 24px;border-bottom:1px solid #eef2f7;">
                <table role="presentation" width="100%">
                  <tr>
                    <td style="width:32px">
                      <img src="\${esc(EMAIL_LOGO_URL)}" alt="SPST" height="28" style="display:block" />
                    </td>
                    <td style="text-align:right;font-size:12px;color:#64748b;">ID: <strong style="color:#0f172a">\${esc(id)}</strong></td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <h1 style="margin:0 0 14px 0;font-size:18px;line-height:1.3;color:#0f172a;">Spedizione in transito</h1>
                <p style="margin:0 0 8px 0;font-size:14px;color:#0f172a;">ID spedizione: <strong>\${esc(id)}</strong></p>
                <p style="margin:0 0 8px 0;font-size:14px;color:#0f172a;">Corriere: <strong>\${esc(carrier)}</strong></p>
                <p style="margin:0 0 8px 0;font-size:14px;color:#0f172a;">Tracking: <strong>\${esc(tracking)}</strong></p>
                <p style="margin:0 0 16px 0;font-size:14px;color:#0f172a;">Ritiro previsto: <strong>\${esc(fmtDate(ritiroData))}</strong></p>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px 0 20px 0;">
                  <tr>
                    <td>
                      <a href="\${esc(AREA_RISERVATA)}"
                        style="display:inline-block;background:\${BRAND_PRIMARY};color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 16px;border-radius:10px;">
                        Vai all'Area Riservata
                      </a>
                    </td>
                  </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e7eb;border-radius:12px;">
                  <tr>
                    <td style="padding:14px 16px;font-size:14px;color:#0f172a;">
                      <div style="margin:0 0 6px 0;"><strong style="color:#0f172a">Assistenza</strong></div>
                      In caso di necessità puoi contattarci su
                      <a href="\${esc(WHATSAPP_URL)}" target="_blank" rel="noopener" style="color:\${BRAND_ACCENT};font-weight:600;">WhatsApp</a>.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px;background:#f3f4f6;color:#6b7280;font-size:12px;">
                <p style="margin:0;">Ricevi questa mail perché hai effettuato una spedizione con SPST.</p>
              </td>
            </tr>
          </table>

          <div style="color:#94a3b8;font-size:12px;margin-top:12px"></div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    const text = `Spedizione in transito — ${id}

Gentile Cliente, la tua spedizione è stata evasa.
Trovi i documenti da stampare nella tua Area Riservata SPST: ${AREA_RISERVATA}
Ritiro previsto: ${fmtDate(ritiroData)}

Corriere: ${carrier || '—'}
Tracking: ${tracking || '—'}

Se ci fossero problemi con il ritiro, contatta il Supporto WhatsApp: ${WHATSAPP_URL}

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
