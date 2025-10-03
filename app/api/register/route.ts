import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import crypto from 'crypto';

export const runtime = 'nodejs';

// ───────────────── helpers ─────────────────
function esc(s: any) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function genPassword8(): string {
  // 8 caratteri: lettere (maiusc/minusc) + numeri, NO simboli
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  const bytes = crypto.randomBytes(8);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('');
}

function welcomeEmailHTML(opts: {
  email: string;
  password: string;
  logo: string;
  areaRiservata: string;
  whatsapp: string;
}) {
  const BRAND_PRIMARY = '#1c3e5e'; // blu header
  const BRAND_ACCENT = '#f7931e';  // arancio CTA
  const BRAND_BG = '#f6f8fb';
  const subject = 'Benvenuto in SPST • Accesso alla tua Area Riservata';
  const preheader = `Il tuo accesso è pronto. Email e password temporanea all’interno.`;

  return {
    subject,
    html: `<!doctype html>
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
                <img src="${esc(opts.logo)}" alt="SPST" style="height:28px;display:block;border:0;filter:brightness(110%);" />
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <h1 style="margin:0 0 8px 0;font-size:20px;color:#0f172a;">Benvenuto in SPST</h1>

                <p style="margin:0 0 12px 0;color:#374151;font-size:14px;line-height:1.55;">
                  Il tuo accesso all’Area Riservata è pronto. Di seguito trovi le tue credenziali:
                </p>

                <!-- Credenziali -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;background:#fff;margin:0 0 16px;">
                  <tr>
                    <td style="padding:14px;">
                      <div style="margin:0 0 8px 0;">
                        <div style="font-size:12px;color:#6b7280;margin-bottom:4px;">Email</div>
                        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:14px;padding:10px 12px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;color:#111827;">${esc(
                          opts.email
                        )}</div>
                      </div>
                      <div>
                        <div style="font-size:12px;color:#6b7280;margin:10px 0 4px;">Password</div>
                        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:16px;padding:10px 12px;border:1px solid #e5e7eb;border-radius:8px;background:#fff7ed;color:#111827;">
                          ${esc(opts.password)}
                        </div>
                        <div style="font-size:12px;color:#6b7280;margin-top:6px;">Queste sono le tue credenziali per accedere alla tua Area Riservata. Conserva questa mail.</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 18px;">
                  <tr>
                    <td>
                      <a href="${esc(
                        opts.areaRiservata
                      )}" target="_blank"
                         style="display:inline-block;background:${BRAND_PRIMARY};color:#fff;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:600;font-size:14px;">
                        Vai all’Area Riservata
                      </a>
                    </td>
                    <td style="width:10px"></td>
                    <td>
                      <a href="${esc(
                        opts.whatsapp
                      )}" target="_blank"
                         style="display:inline-block;background:${BRAND_ACCENT};color:#111827;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:600;font-size:14px;">
                        Supporto WhatsApp
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px 0;color:#374151;font-size:14px;">
                  Se non riconosci questa registrazione, contattaci subito.
                </p>

                <p style="margin:0 0 18px 0;color:#374151;font-size:14px;">Grazie,<br/>Team SPST</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px;background:#f3f4f6;color:#6b7280;font-size:12px;">
                <p style="margin:0;">Ricevi questa mail perché hai richiesto l’accesso a SPST.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    text: `Benvenuto in SPST

Le tue credenziali di accesso:
Email: ${opts.email}
Password temporanea: ${opts.password}

Area Riservata: ${opts.areaRiservata}
Supporto WhatsApp: ${opts.whatsapp}

Ti chiediamo di cambiare la password al primo accesso.

Grazie,
Team SPST`,
  };
}

// ───────────────── POST /api/register ─────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MAIL_FROM = process.env.MAIL_FROM;
    const MAIL_TO = process.env.MAIL_TO;

    // opzionali per branding/CTA (con fallback)
    const EMAIL_LOGO_URL =
      process.env.EMAIL_LOGO_URL ||
      'https://www.spst.it/logo-email.png';
    const AREA_RISERVATA_URL =
      process.env.AREA_RISERVATA_URL ||
      'https://app.spst.it/login';
    const WHATSAPP_URL =
      process.env.WHATSAPP_URL ||
      'https://wa.me/393201441789';

    if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
      return NextResponse.json(
        { ok: false, error: 'Missing env: RESEND_API_KEY / MAIL_FROM / MAIL_TO' },
        { status: 500 }
      );
    }

    // validazione minima
    const required = ['email', 'country', 'sender', 'city', 'cap', 'address', 'phone', 'vat'] as const;
    for (const k of required) {
      if (!body?.[k] || String(body[k]).trim() === '') {
        return NextResponse.json({ ok: false, error: `Campo mancante: ${k}` }, { status: 400 });
      }
    }

    const resend = new Resend(RESEND_API_KEY);

    // 1) notifica interna amministrativa
    const adminHtml = `
      <h2>Nuova registrazione SPST</h2>
      <ul>
        <li><b>Email:</b> ${esc(body.email)}</li>
        <li><b>Paese:</b> ${esc(body.country)}</li>
        <li><b>Mittente:</b> ${esc(body.sender)}</li>
        <li><b>Città:</b> ${esc(body.city)}</li>
        <li><b>CAP:</b> ${esc(body.cap)}</li>
        <li><b>Indirizzo:</b> ${esc(body.address)}</li>
        <li><b>Telefono:</b> ${esc(body.phone)}</li>
        <li><b>Partita IVA:</b> ${esc(body.vat)}</li>
      </ul>
    `;

    await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO.split(',').map((s) => s.trim()),
      subject: 'Nuova richiesta di registrazione',
      html: adminHtml,
    });

    // 2) email al cliente con password generata
    const password = genPassword8();
    const welcome = welcomeEmailHTML({
      email: body.email,
      password,
      logo: EMAIL_LOGO_URL,
      areaRiservata: AREA_RISERVATA_URL,
      whatsapp: WHATSAPP_URL,
    });

    await resend.emails.send({
      from: MAIL_FROM,
      to: body.email,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
    });

    // 3) forward opzionale a un backend tuo (Make/Airtable, ecc.)
    if (process.env.LEAD_FORWARD_URL) {
      await fetch(process.env.LEAD_FORWARD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'spst-register',
          ...body,
          password, // se vuoi salvarla/mostrarla in backoffice
        }),
      }).catch((e) => console.warn('Forward error', e));
    }

    // NB: per sicurezza NON restituisco la password nel response al browser.
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 400 });
  }
}
