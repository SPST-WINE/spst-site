// app/api/quote/route.ts
import { NextResponse } from "next/server";

// Per sicurezza: whitelist dei campi accettati
const FIELDS = [
  "azienda", "email", "telefono", "indirizzo",
  "paese_partenza", "cap_partenza",
  "paese_destinazione", "cap_destinazione",
  "contenuto",
  "lunghezza", "larghezza", "altezza", "peso",
  "express", "accise", "dogana", "cola", "temp", "assicurazione",
  "_gotcha", "_ts"
] as const;

type QuotePayload = Record<(typeof FIELDS)[number], string | undefined>;

function sanitize(s: unknown) {
  return typeof s === "string" ? s.trim().slice(0, 1000) : "";
}

function volumetricKg4000(l?: string, w?: string, h?: string) {
  const L = parseFloat(l || "");
  const W = parseFloat(w || "");
  const H = parseFloat(h || "");
  if (!isFinite(L) || !isFinite(W) || !isFinite(H)) return 0;
  return Math.round(((L * W * H) / 4000) * 100) / 100;
}

export async function POST(req: Request) {
  try {
    const ctype = req.headers.get("content-type") || "";
    let data: QuotePayload = Object.create(null);

    if (ctype.includes("application/json")) {
      const json = await req.json();
      FIELDS.forEach((k) => (data[k] = sanitize(json[k])));
    } else {
      // supporta form-urlencoded e multipart
      const form = await req.formData();
      FIELDS.forEach((k) => (data[k] = sanitize(form.get(k))));
    }

    // Honeypot anti-bot
    if (data._gotcha) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Validazioni minime
    if (!data.email) {
      return NextResponse.json({ ok: false, error: "Email mancante" }, { status: 400 });
    }
    if (!data.paese_partenza || !data.paese_destinazione) {
      return NextResponse.json({ ok: false, error: "Origine/Destinazione mancanti" }, { status: 400 });
    }
    if (!data.cap_partenza || !data.cap_destinazione) {
      return NextResponse.json({ ok: false, error: "CAP mancanti" }, { status: 400 });
    }
    if (!data.contenuto) {
      return NextResponse.json({ ok: false, error: "Contenuto merce mancante" }, { status: 400 });
    }

    const vol = volumetricKg4000(data.lunghezza, data.larghezza, data.altezza);

    // Compose email
    const subject = `Nuova richiesta preventivo – ${data.email}`;
    const to = process.env.MAIL_FROM; // ricevi su questo indirizzo
    const from = process.env.MAIL_FROM; // mittente configurato su Resend

    if (!process.env.RESEND_API_KEY || !from || !to) {
      return NextResponse.json({ ok: false, error: "Config RESEND mancante" }, { status: 500 });
    }

    const html = `
      <h2>Richiesta preventivo (Portale Quotazioni)</h2>
      <p><strong>Email:</strong> ${data.email || ""}</p>
      <p><strong>Azienda:</strong> ${data.azienda || ""}</p>
      <p><strong>Telefono:</strong> ${data.telefono || ""}</p>
      <p><strong>Indirizzo:</strong> ${data.indirizzo || ""}</p>
      <hr/>
      <p><strong>Partenza:</strong> ${data.paese_partenza} ${data.cap_partenza}</p>
      <p><strong>Destinazione:</strong> ${data.paese_destinazione} ${data.cap_destinazione}</p>
      <p><strong>Contenuto:</strong> ${data.contenuto}</p>
      <p><strong>Dimensioni (cm):</strong> L ${data.lunghezza} × W ${data.larghezza} × H ${data.altezza}</p>
      <p><strong>Peso (kg):</strong> ${data.peso || ""}</p>
      <p><strong>Peso volumetrico (cm/4000):</strong> ${vol} kg</p>
      <hr/>
      <p><strong>Servizi:</strong>
        ${data.express ? "Express, " : ""}${data.accise ? "Pratica accise, " : ""}${data.dogana ? "Assistenza doganale, " : ""}${data.cola ? "COLA/Prior Notice, " : ""}${data.temp ? "Temperatura controllata, " : ""}${data.assicurazione ? "Assicurazione" : ""}
      </p>
      <p style="color:#888;font-size:12px;">Timestamp: ${new Date().toISOString()}</p>
    `;

    // Chiamata Resend via REST (niente pacchetto npm)
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
