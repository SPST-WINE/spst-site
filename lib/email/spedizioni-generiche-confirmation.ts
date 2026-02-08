// lib/email/spedizioni-generiche-confirmation.ts

export type SpedizioniGenerichePayload = {
  nome: string;
  email: string;
  azienda?: string | null;
  telefono?: string | null;
  categoria_merceologica: string;
  numero_spedizioni_mensili: string;
  mercati: string;
  esigenze_particolari?: string | null;
  createdAtIso?: string;
};

const SPST_BLUE = "#1c3e5e";
const SPST_ORANGE = "#f7911e";

const LOGO_URL = "https://www.spst.it/logo-email.png";
const WA_URL = "https://wa.me/393201441789";
const CONTACTS_URL = "https://www.spst.it/servizi-e-contatti";
const SITE_URL = "https://www.spst.it";

function safeText(v?: string | null) {
  const s = (v ?? "").trim();
  return s.length ? s : "—";
}

export function spedizioniGenericheSubject() {
  return "SPST • Richiesta informazioni ricevuta";
}

export function spedizioniGenerichePreheader() {
  return "Abbiamo ricevuto la tua richiesta di informazioni. Ti ricontatteremo a breve con una soluzione personalizzata.";
}

export function spedizioniGenericheHtml(p: SpedizioniGenerichePayload) {
  const preheader = spedizioniGenerichePreheader();

  const createdAt = p.createdAtIso
    ? new Date(p.createdAtIso).toLocaleString("it-IT", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <meta name="x-apple-disable-message-reformatting"/>
    <title>SPST • Richiesta informazioni ricevuta</title>
  </head>

  <body style="margin:0;background:#f6f8fb;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <!-- Preheader -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${preheader}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f8fb;padding:24px 12px;">
      <tr>
        <td align="center">

          <table role="presentation" width="680" cellpadding="0" cellspacing="0"
            style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(16,24,40,.06);border:1px solid #e2e8f0;">

            <!-- Header blu -->
            <tr>
              <td style="background:${SPST_BLUE};padding:32px 24px;text-align:center;">
                <img src="${LOGO_URL}" alt="SPST" style="height:40px;width:auto;margin:0 auto;display:block;"/>
              </td>
            </tr>

            <!-- Contenuto principale -->
            <tr>
              <td style="padding:32px 24px;">
                <h1 style="margin:0 0 16px 0;color:#111827;font-size:24px;font-weight:700;line-height:1.3;">
                  Richiesta ricevuta
                </h1>

                <p style="margin:0 0 24px 0;color:#374151;font-size:16px;line-height:1.6;">
                  Gentile ${safeText(p.nome)},
                </p>

                <p style="margin:0 0 24px 0;color:#374151;font-size:16px;line-height:1.6;">
                  Abbiamo ricevuto la tua richiesta di informazioni sulle spedizioni generiche. Il nostro team analizzerà le tue esigenze e ti ricontatterà a breve con una soluzione personalizzata.
                </p>

                <div style="background:#f9fafb;border-radius:12px;padding:20px;margin:24px 0;border:1px solid #e5e7eb;">
                  <h2 style="margin:0 0 16px 0;color:#111827;font-size:18px;font-weight:600;">
                    Riepilogo richiesta
                  </h2>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Nome:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.nome)}</td>
                    </tr>
                    ${p.azienda ? `
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;">Azienda:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.azienda)}</td>
                    </tr>
                    ` : ''}
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;">Email:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.email)}</td>
                    </tr>
                    ${p.telefono ? `
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;">Telefono:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.telefono)}</td>
                    </tr>
                    ` : ''}
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;">Categoria merceologica:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.categoria_merceologica)}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;">Spedizioni mensili:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.numero_spedizioni_mensili)}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;color:#6b7280;font-size:14px;">Mercati:</td>
                      <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${safeText(p.mercati)}</td>
                    </tr>
                  </table>
                </div>

                <p style="margin:24px 0;color:#374151;font-size:16px;line-height:1.6;">
                  Nel frattempo, se hai domande urgenti, puoi contattarci direttamente:
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                  <tr>
                    <td>
                      <a href="${CONTACTS_URL}" target="_blank"
                         style="display:inline-block;background:${SPST_BLUE};color:#fff;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:600;font-size:14px;">
                        Servizi e contatti
                      </a>
                    </td>
                    <td style="width:10px"></td>
                    <td>
                      <a href="${WA_URL}" target="_blank"
                         style="display:inline-block;background:${SPST_ORANGE};color:#111827;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:600;font-size:14px;">
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
                <p style="margin:0;">Ricevi questa mail perché hai inviato una richiesta di informazioni su ${SITE_URL}.</p>
                ${createdAt ? `<p style="margin:8px 0 0 0;">Richiesta inviata il ${createdAt}</p>` : ''}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function spedizioniGenericheText(p: SpedizioniGenerichePayload) {
  return `Richiesta informazioni ricevuta

Gentile ${safeText(p.nome)},

Abbiamo ricevuto la tua richiesta di informazioni sulle spedizioni generiche. Il nostro team analizzerà le tue esigenze e ti ricontatterà a breve con una soluzione personalizzata.

Riepilogo richiesta:
- Nome: ${safeText(p.nome)}
${p.azienda ? `- Azienda: ${safeText(p.azienda)}\n` : ''}- Email: ${safeText(p.email)}
${p.telefono ? `- Telefono: ${safeText(p.telefono)}\n` : ''}- Categoria merceologica: ${safeText(p.categoria_merceologica)}
- Spedizioni mensili: ${safeText(p.numero_spedizioni_mensili)}
- Mercati: ${safeText(p.mercati)}

Servizi e contatti: ${CONTACTS_URL}
Supporto WhatsApp: ${WA_URL}

Grazie,
Team SPST`;
}
