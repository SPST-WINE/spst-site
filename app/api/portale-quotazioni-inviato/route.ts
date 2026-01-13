// app/api/portale-quotazioni-inviato/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  portaleQuotazioniHtml,
  portaleQuotazioniSubject,
  PortaleQuotazioniPayload,
} from "@/lib/email/portale-quotazioni-confirmation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<PortaleQuotazioniPayload>;

    if (!body?.email || typeof body.email !== "string") {
      return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
    }

    // hard validation minima
    const required = [
      "paese_partenza",
      "cap_partenza",
      "paese_destinazione",
      "cap_destinazione",
      "contenuto",
    ] as const;

    for (const k of required) {
      if (!body[k] || typeof body[k] !== "string") {
        return NextResponse.json(
          { ok: false, error: `Missing field: ${k}` },
          { status: 400 }
        );
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const payload: PortaleQuotazioniPayload = {
      azienda: body.azienda ?? null,
      email: body.email,
      telefono: body.telefono ?? null,
      indirizzo: body.indirizzo ?? null,

      paese_partenza: body.paese_partenza!,
      cap_partenza: body.cap_partenza!,
      paese_destinazione: body.paese_destinazione!,
      cap_destinazione: body.cap_destinazione!,

      contenuto: body.contenuto!,

      lunghezza: Number(body.lunghezza || 0),
      larghezza: Number(body.larghezza || 0),
      altezza: Number(body.altezza || 0),
      peso: Number(body.peso || 0),
      pesoVolumetrico: Number(body.pesoVolumetrico || 0),

      prefs: {
        express: !!body.prefs?.express,
        accise: !!body.prefs?.accise,
        dogana: !!body.prefs?.dogana,
        cola: !!body.prefs?.cola,
        temp: !!body.prefs?.temp,
        assicurazione: !!body.prefs?.assicurazione,
      },

      createdAtIso: body.createdAtIso || new Date().toISOString(),
    };

    await resend.emails.send({
      from: process.env.MAIL_FROM || "SPST <info@spst.it>",
      to: payload.email,
      subject: portaleQuotazioniSubject(),
      html: portaleQuotazioniHtml(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Email send error" },
      { status: 500 }
    );
  }
}
