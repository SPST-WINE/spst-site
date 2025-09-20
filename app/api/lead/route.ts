// app/api/lead/route.ts
import { NextResponse } from "next/server";

const FIELDS = [
  "azienda",
  "referente",
  "email",
  "telefono",
  "produzione_annua",
  "spedisce_gia",
  "_gotcha",
  "_ts",
] as const;

type LeadPayload = Record<(typeof FIELDS)[number], string | undefined>;

function s(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, 1000) : "";
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get("content-type") || "";
    const data: LeadPayload = Object.create(null);

    if (ct.includes("application/json")) {
      const json = await req.json();
      FIELDS.forEach((k) => (data[k] = s(json[k])));
    } else {
      const form = await req.formData();
      FIELDS.forEach((k) => (data[k] = s(form.get(k))));
    }

    if (data._gotcha) return NextResponse.json({ ok: true, skipped: true });

    if (!data.email) {
      return NextResponse.json({ ok: false, error: "Email mancante" }, { status: 400 });
    }

    const to = process.env.MAIL_TO || process.env.MAIL_FROM;
    const from = process.env.MAIL_FROM;
    const key = process.env.RESEND_API_KEY;
    if (!key || !from || !to) {
      return NextResponse.json({ ok: false, error: "Config RESEND mancante" }, { status: 500 });
    }

    const subject = `Nuova richiesta info – ${data.email}`;
    const html = `
      <h2>Lead Homepage – "Richiedi informazioni"</h2>
      <p><strong>Azienda:</strong> ${data.azienda || ""}</p>
      <p><strong>Referente:</strong> ${data.referente || ""}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefono:</strong> ${data.telefono || ""}</p>
      <p><strong>Produzione annua:</strong> ${data.produzione_annua || ""}</p>
      <p><strong>Spedisce già all'estero:</strong> ${data.spedisce_gia || ""}</p>
      <p style="color:#888;font-size:12px">Timestamp: ${new Date().toISOString()}</p>
    `;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      return NextResponse.json({ ok: false, error: "Resend error", details: t }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Errore generico" }, { status: 500 });
  }
}
