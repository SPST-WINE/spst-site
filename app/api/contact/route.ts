// app/api/contact/route.ts – form Servizi e contatti (#contatti) → sempre a info@spst.it
import { NextResponse } from "next/server";

const CONTACT_EMAIL = "info@spst.it";

const FIELDS = ["azienda", "referente", "email", "telefono", "paesi", "tipologia", "note", "_gotcha", "_ts"] as const;
type ContactPayload = Partial<Record<(typeof FIELDS)[number], string>>;

function s(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, 2000) : "";
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get("content-type") || "";
    const data: ContactPayload = {};

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

    const from = process.env.MAIL_FROM;
    const key = process.env.RESEND_API_KEY;
    if (!key || !from) {
      return NextResponse.json({ ok: false, error: "Config RESEND mancante" }, { status: 500 });
    }

    const subject = `Servizi e contatti – ${data.azienda || data.email}`;
    const html = `
      <h2>Richiesta da Servizi e contatti</h2>
      <p><strong>Azienda:</strong> ${data.azienda || ""}</p>
      <p><strong>Referente:</strong> ${data.referente || ""}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefono:</strong> ${data.telefono || ""}</p>
      <p><strong>Paesi di interesse:</strong> ${data.paesi || ""}</p>
      <p><strong>Tipologia spedizioni:</strong> ${data.tipologia || ""}</p>
      <p><strong>Note:</strong> ${(data.note || "").replace(/\n/g, "<br>")}</p>
      <p style="color:#888;font-size:12px">Timestamp: ${new Date().toISOString()}</p>
    `;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: CONTACT_EMAIL,
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      return NextResponse.json({ ok: false, error: "Resend error", details: t }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Errore generico";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
