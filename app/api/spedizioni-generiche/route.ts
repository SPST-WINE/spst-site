// app/api/spedizioni-generiche/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  spedizioniGenericheSubject,
  spedizioniGenericheHtml,
  spedizioniGenericheText,
  type SpedizioniGenerichePayload,
} from "@/lib/email/spedizioni-generiche-confirmation";

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
        // Gestisci array per mercati e numero_spedizioni_mensili (multiselect)
        if ((k === "mercati" || k === "numero_spedizioni_mensili") && form.getAll(k).length > 0) {
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

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MAIL_FROM = process.env.MAIL_FROM;
    const MAIL_TO = process.env.MAIL_TO || process.env.MAIL_FROM; // email interna

    if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
      return NextResponse.json({ ok: false, error: "Config RESEND mancante" }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);
    const createdAtIso = new Date().toISOString();

    // Payload per le email
    const payload: SpedizioniGenerichePayload = {
      nome: data.nome!,
      email: data.email!,
      azienda: data.azienda || null,
      telefono: data.telefono || null,
      categoria_merceologica: data.categoria_merceologica || "",
      numero_spedizioni_mensili: data.numero_spedizioni_mensili || "",
      mercati: data.mercati || "",
      esigenze_particolari: data.esigenze_particolari || null,
      createdAtIso,
    };

    // 1) Email brandizzata al cliente
    await resend.emails.send({
      from: MAIL_FROM,
      to: payload.email,
      subject: spedizioniGenericheSubject(),
      html: spedizioniGenericheHtml(payload),
      text: spedizioniGenericheText(payload),
    });

    // 2) Email interna con i dati del form
    const internalHtml = `
      <h2>Nuova richiesta Spedizioni Generiche</h2>
      <p><strong>Nome:</strong> ${data.nome || ""}</p>
      <p><strong>Email:</strong> ${data.email || ""}</p>
      <p><strong>Azienda:</strong> ${data.azienda || "—"}</p>
      <p><strong>Telefono:</strong> ${data.telefono || "—"}</p>
      <hr/>
      <p><strong>Categoria merceologica spedita:</strong> ${data.categoria_merceologica || ""}</p>
      <p><strong>Numero spedizioni mensili:</strong> ${data.numero_spedizioni_mensili || ""}</p>
      <p><strong>Principali mercati:</strong> ${data.mercati || ""}</p>
      <p><strong>Particolari esigenze:</strong></p>
      <p>${(data.esigenze_particolari || "—").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color:#888;font-size:12px;">Timestamp: ${createdAtIso}</p>
    `;

    await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO.split(',').map((s) => s.trim()),
      subject: `[SPST] Nuova richiesta Spedizioni Generiche – ${data.email}`,
      html: internalHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Errore generico" }, { status: 500 });
  }
}
