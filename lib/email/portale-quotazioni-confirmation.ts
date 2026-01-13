// lib/email/portale-quotazioni-confirmation.ts

export type PortaleQuotazioniPayload = {
  azienda?: string | null;
  email: string;
  telefono?: string | null;
  indirizzo?: string | null;

  paese_partenza: string;
  cap_partenza: string;
  paese_destinazione: string;
  cap_destinazione: string;

  contenuto: string;

  lunghezza: number;
  larghezza: number;
  altezza: number;
  peso: number;

  pesoVolumetrico: number;

  prefs: {
    express?: boolean;
    accise?: boolean;
    dogana?: boolean;
    cola?: boolean;
    temp?: boolean;
    assicurazione?: boolean;
  };

  createdAtIso?: string; // opzionale
};

const SPST_BLUE = "#1c3e5e";
const SPST_ORANGE = "#f7911e";

// Usa lo stesso logo della tua mail back-office (coerenza totale)
const LOGO_URL = "https://spst-operations.vercel.app/spst-logo.png";

// WhatsApp e sito
const WA_URL = "https://wa.me/393201441789";
const CONTACTS_URL = "https://www.spst.it/servizi-e-contatti";
const SITE_URL = "https://www.spst.it";

function yesNo(v?: boolean) {
  return v ? "Sì" : "No";
}

function safeText(v?: string | null) {
  const s = (v ?? "").trim();
  return s.length ? s : "—";
}

export function portaleQuotazioniSubject() {
  return "SPST • Richiesta preventivo ricevuta";
}

export function portaleQuotazioniPreheader() {
  return "Abbiamo ricevuto la tua richiesta di preventivo. Ti ricontatteremo a breve con la migliore soluzione.";
}

export function portaleQuotazioniHtml(p: PortaleQuotazioniPayload) {
  const preheader = portaleQuotazioniPreheader();

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
    <title>SPST • Richiesta preventivo ricevuta</title>
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
              <td style="background:${SPST_BLUE};padding:18px 24px;">
                <a href="${SITE_URL}" target="_blank" style="text-decoration:none;">
                  <img src="${LOGO_URL}" alt="SPST" style="height:28px;display:block;border:0;filter:brightness(110%);" />
                </a>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <h1 style="margin:0 0 8px 0;font-size:20px;color:#0f172a;">Richiesta preventivo ricevuta</h1>

                <p style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.55;">
                  Gentile Cliente, abbiamo ricevuto la tua richiesta dal <strong>Portale Quotazioni SPST</strong>.
                  Ti ricontatteremo a breve con la migliore soluzione disponibile (corriere/servizi/documentazione).
                </p>

                ${
                  createdAt
                    ? `<p style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.55;">
                         <strong>Data richiesta:</strong> ${createdAt}
                       </p>`
                    : ""
                }

                <!-- Box contatto -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                  style="border:1px solid #e5e7eb;border-radius:12px;background:#fff;margin:0 0 16px;">
                  <tr>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;">
                      <div style="margin:0 0 6px 0;"><strong>Email:</strong> ${safeText(p.email)}</div>
                      <div style="margin:0 0 6px 0;"><strong>Azienda:</strong> ${safeText(p.azienda)}</div>
                      <div style="margin:0 0 6px 0;"><strong>Telefono:</strong> ${safeText(p.telefono)}</div>
                      <div><strong>Indirizzo:</strong> ${safeText(p.indirizzo)}</div>
                    </td>
                  </tr>
                </table>

                <!-- Box spedizione -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                  style="border:1px solid #e5e7eb;border-radius:12px;background:#fff;margin:0 0 16px;">
                  <tr>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;">
                      <div style="margin:0 0 6px 0;">
                        <strong>Origine:</strong> ${safeText(p.paese_partenza)} · <strong>CAP:</strong> ${safeText(p.cap_partenza)}
                      </div>
                      <div style="margin:0 0 6px 0;">
                        <strong>Destinazione:</strong> ${safeText(p.paese_destinazione)} · <strong>CAP/ZIP:</strong> ${safeText(p.cap_destinazione)}
                      </div>
                      <div style="margin:0 0 6px 0;">
                        <strong>Contenuto:</strong> ${safeText(p.contenuto)}
                      </div>
                      <div>
                        <strong>Collo:</strong>
                        ${p.lunghezza}×${p.larghezza}×${p.altezza} cm ·
                        <strong>Peso:</strong> ${p.peso} kg ·
                        <strong>Volumetrico:</strong> ${p.pesoVolumetrico} kg
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Preferenze -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                  style="border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;margin:0 0 16px;">
                  <tr>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;">
                      <div style="margin:0 0 10px 0;"><strong>Preferenze selezionate</strong></div>

                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#111827;">
                        <tr>
                          <td style="padding:4px 0;"><strong>Spedizione express:</strong> ${yesNo(p.prefs.express)}</td>
                          <td style="padding:4px 0;"><strong>Assicurazione:</strong> ${yesNo(p.prefs.assicurazione)}</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;"><strong>Pratica accise:</strong> ${yesNo(p.prefs.accise)}</td>
                          <td style="padding:4px 0;"><strong>Temperatura controllata:</strong> ${yesNo(p.prefs.temp)}</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;"><strong>Assistenza doganale:</strong> ${yesNo(p.prefs.dogana)}</td>
                          <td style="padding:4px 0;"><strong>COLA / Prior Notice (USA):</strong> ${yesNo(p.prefs.cola)}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px 0;color:#374151;font-size:14px;line-height:1.55;">
                  Se vuoi aggiungere dettagli o inviare foto/documenti, puoi contattarci direttamente su WhatsApp.
                </p>

                <!-- CTAs -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 18px;">
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
                <p style="margin:0 0 6px 0;">Ricevi questa mail perché hai inviato una richiesta preventivo su SPST.</p>
                <p style="margin:0;">© SPST SRL · P.IVA IT03218840647 · Piazzale Gambale 23, Avellino (AV) 83100</p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>`;
}
