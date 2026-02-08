// app/api/spedizioni-generiche/route.ts
import { NextResponse } from "next/server";

// Per sicurezza: whitelist dei campi accettati
const FIELDS = [
  "nome", "azienda", "email", "telefono",
  "categoria_merceologica",
  "numero_spedizioni_mensili",
  "mercati",
  "esigenze_particolari",
  "_gotcha", "_ts"
] as const;

type GenericShippingPayload = Record<(typeof FIELDS)[number], string | undefined>;

function sanitize(s: unknown) {
  return typeof s === "string" ? s.trim().slice(0, 2000) : "";
}

export async function POST(req: Request) {
  try {
    const ctype = req.headers.get("content-type") || "";
    let data: GenericShippingPayload = Object.create(null);

    if (ctype.includes("application/json")) {
      const json = await req.json();
      FIELDS.forEach((k) => (data[k] = sanitize(json[k])));
    } else {
      // supporta form-urlencoded e multipart
      const form = await req.formData();
      FIELDS.forEach((k) => {
        const value = form.get(k);
        // Gestisci array per mercati (multiselect)
        if (k === "mercati" && form.getAll(k).length > 0) {
          data[k] = form.getAll(k).join(", ");
        } else {
          data[k] = sanitize(value);
        }
      });
    }

    // Honeypot anti-bot
    if (data._gotcha) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Validazioni minime
    if (!data.email) {
      return NextResponse.json({ ok: false, error: "Email mancante" }, { status: 400 });
    }
    if (!data.nome) {
      return NextResponse.json({ ok: false, error: "Nome mancante" }, { status: 400 });
    }

    // Compose email
    const subject = `Nuova richiesta Spedizioni Generiche – ${data.email}`;
    const to = process.env.MAIL_FROM; // ricevi su questo indirizzo
    const from = process.env.MAIL_FROM; // mittente configurato su Resend

    if (!process.env.RESEND_API_KEY || !from || !to) {
      return NextResponse.json({ ok: false, error: "Config RESEND mancante" }, { status: 500 });
    }

    const html = `
      <h2>Richiesta informazioni Spedizioni Generiche</h2>
      <p><strong>Nome:</strong> ${data.nome || ""}</p>
      <p><strong>Email:</strong> ${data.email || ""}</p>
      <p><strong>Azienda:</strong> ${data.azienda || ""}</p>
      <p><strong>Telefono:</strong> ${data.telefono || ""}</p>
      <hr/>
      <p><strong>Categoria merceologica spedita:</strong> ${data.categoria_merceologica || ""}</p>
      <p><strong>Numero spedizioni mensili:</strong> ${data.numero_spedizioni_mensili || ""}</p>
      <p><strong>Principali mercati:</strong> ${data.mercati || ""}</p>
      <p><strong>Particolari esigenze:</strong></p>
      <p>${(data.esigenze_particolari || "").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color:#888;font-size:12px;">Timestamp: ${new Date().toISOString()}</p>
    `;

    // Chiamata Resend via REST
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return NextResponse.json({ ok: false, error: "Resend error", details: errText }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Errore generico" }, { status: 500 });
  }
}
