// app/landing/spedire-senza-codice-accisa/page.tsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  MessageCircle,
  Clock,
  Globe2,
  Building2,
  Phone,
  Mail,
  Scale,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const SPST_ORANGE = "#f7931e";
const SPST_BLUE_SOFT = "#1c3e5e";

const WHATSAPP_NUMBER = "393201441789";
const CHECK_ID = "check-immediato";

type Attribution = {
  utm_source?: string;
  utm_campaign?: string;
  utm_adset?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
};

function pushDataLayer(event: string, payload?: Record<string, any>) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...(payload || {}) });
  } catch {}
}

/** -------- Attribution (UTM + fbclid) ---------- */
function getAttributionFromUrl(): Attribution {
  try {
    const p = new URLSearchParams(window.location.search);
    const attr: Attribution = {
      utm_source: p.get("utm_source") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_adset: p.get("utm_adset") || "",
      utm_content: p.get("utm_content") || "",
      fbclid: p.get("fbclid") || "",
      gclid: p.get("gclid") || "",
    };
    sessionStorage.setItem("spst_attr", JSON.stringify(attr));
    return attr;
  } catch {
    return {};
  }
}

function readAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem("spst_attr");
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/**
 * ✅ Evento unico per Meta: ClickWhatsApp
 * Include sempre attribution (utm_*, fbclid) per capire quale creativa converte.
 */
function trackWhatsApp(metaPayload?: Record<string, any>) {
  const attr = typeof window !== "undefined" ? readAttribution() : {};
  const payload = { ...(metaPayload || {}), ...attr };

  try {
    window.fbq?.("trackCustom", "ClickWhatsApp", payload);
  } catch {}

  pushDataLayer("spst_whatsapp_click", payload);
}

function buildWaLink(message: string) {
  const txt = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${txt}`;
}

function scrollToCheck() {
  const el = document.getElementById(CHECK_ID);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LandingSpedireSenzaCodiceAccisa() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [paese, setPaese] = useState("");
  const [volumi, setVolumi] = useState("");
  const [buyerType, setBuyerType] = useState("Bar / Ristorante");
  const [transport, setTransport] = useState("Multicollo");
  const [loading, setLoading] = useState(false);

  // salva attribution al primo load (e anche se l’utente scrolla e clicca dopo)
  useEffect(() => {
    getAttributionFromUrl();

    // evento utile per debugging/funnel (non necessario per ottimizzazione, ma comodo)
    try {
      window.fbq?.("trackCustom", "ViewLandingAccisa", readAttribution());
    } catch {}

    pushDataLayer("spst_view_landing_accisa", readAttribution());
  }, []);

  const waFixed = useMemo(() => {
    return buildWaLink(
      "Ciao Gianluca, vorrei avere più informazioni su come spedire a un cliente senza codice accisa."
    );
  }, []);

  const waPrefillText = useMemo(() => {
    const attr = typeof window !== "undefined" ? readAttribution() : {};
    const sourceLine = `• Fonte: ${attr.utm_source || "-"} / ${
      attr.utm_campaign || "-"
    } / ${attr.utm_content || "-"}`;

    const lines = [
      "Ciao Gianluca, vorrei avere più informazioni su come spedire a un cliente senza codice accisa.",
      "",
      "Dati:",
      `• Nome: ${nome || "-"}`,
      `• Email: ${email || "-"}`,
      `• Paese destinazione: ${paese || "-"}`,
      `• Tipo cliente: ${buyerType || "-"}`,
      `• Modalità: ${transport || "-"}`,
      `• Volumi/frequenza: ${volumi || "-"}`,
      sourceLine,
    ];
    return lines.join("\n");
  }, [nome, email, paese, buyerType, transport, volumi]);

  const waDynamic = useMemo(() => buildWaLink(waPrefillText), [waPrefillText]);

  const onWhatsAppFixed = () => {
    trackWhatsApp({
      page: "landing_spedire_senza_codice_accisa",
      variant: "fixed_message",
    });
  };

  const onWhatsAppDynamic = () => {
    trackWhatsApp({
      page: "landing_spedire_senza_codice_accisa",
      variant: "prefill_message",
    });
  };

  const onSubmitMiniForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onWhatsAppDynamic();
    window.open(waDynamic, "_blank", "noopener,noreferrer");
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/75 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 md:px-5">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-white/5"
          >
            <img
              src="/bo-assets/img/spst-logo.png"
              alt="SPST"
              className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-extrabold">SPST</div>
              <div className="text-[11px] text-white/60">
                Export & Wine Logistics
              </div>
            </div>
          </a>

          <a
            href={waFixed}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsAppFixed}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all hover:bg-white/5 hover:ring-2 ring-orange-300/30"
            style={{ borderColor: `${SPST_ORANGE}55` }}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute -bottom-28 right-1/2 h-[560px] w-[560px] translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)`,
          }}
        />

        <div className="mx-auto max-w-[1180px] px-4 pb-8 pt-8 md:px-5 md:pt-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Spedizioni vino B2B UE • piccoli ordini
          </span>

          <div className="mt-5 grid gap-6 md:grid-cols-[1.05fr_.95fr] md:items-start">
            <div>
              <h1 className="text-[30px] font-black leading-[1.06] sm:text-[40px]">
                Spedire vino B2B in Europa{" "}
                <span style={{ color: SPST_ORANGE }}>
                  anche se il cliente non ha codice accisa
                </span>
              </h1>

              <p className="mt-3 max-w-[72ch] text-[14px] leading-relaxed text-white/80 sm:text-base">
                Succede spesso: un bar, ristorante o enoteca non ha codice accisa o
                deposito fiscale → piccoli ordini bloccati. SPST sblocca il flusso
                con la soluzione corretta (accisa assolta + rappresentanza fiscale).
              </p>

              {/* micro-riga super chiara */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] text-white/75">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Soluzione operativa • tempi • costo indicativo (via WhatsApp)
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToCheck}
                  className="w-full rounded-2xl px-5 py-3 text-sm font-extrabold shadow ring-orange-300/50 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px] sm:w-auto"
                  style={{ background: SPST_ORANGE, color: "#0f1720" }}
                >
                  Richiedi informazioni{" "}
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </button>

                <a
                  href={waFixed}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onWhatsAppFixed}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-extrabold text-white/90 hover:bg-white/5 sm:w-auto"
                  style={{ borderColor: `${SPST_ORANGE}55` }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Scrivici su WhatsApp
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Pill icon={<Clock className="h-4 w-4" />} text="Risposta veloce" />
                <Pill
                  icon={<ShieldCheck className="h-4 w-4" />}
                  text="Flusso operativo"
                />
                <Pill icon={<BadgeCheck className="h-4 w-4" />} text="Zero improvvisazione" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[12px] text-white/70">
                Ti chiediamo poche info e ti diciamo subito cosa fare: nella maggior parte dei casi,
                la soluzione è{" "}
                <span className="font-semibold text-white/80">
                  accisa assolta + rappresentanza fiscale
                </span>
                .
              </div>
            </div>

            {/* Check immediato */}
            <div
              id={CHECK_ID}
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <FileCheck2 className="h-5 w-5 text-emerald-200" />
                </div>
                <div>
                  <div className="text-[16px] font-extrabold">
                    Check immediato (senza call)
                  </div>
                  <div className="mt-1 text-[13px] text-white/70">
                    Ti rispondiamo con: <span className="font-semibold text-white/80">soluzione + tempi + costo indicativo</span>.
                    (Apriamo WhatsApp con messaggio già pronto.)
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmitMiniForm} className="mt-4 space-y-3">
                <Field
                  label="Nome"
                  icon={<Building2 className="h-4 w-4" />}
                  value={nome}
                  onChange={setNome}
                  placeholder="Es. Gianluca"
                />
                <Field
                  label="Email"
                  icon={<Mail className="h-4 w-4" />}
                  value={email}
                  onChange={setEmail}
                  placeholder="es. export@cantina.it"
                />
                <Field
                  label="Paese destinazione"
                  icon={<Globe2 className="h-4 w-4" />}
                  value={paese}
                  onChange={setPaese}
                  placeholder="Es. Germania / Olanda / Svezia…"
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <Select
                    label="Tipo cliente"
                    value={buyerType}
                    onChange={setBuyerType}
                    options={[
                      "Bar / Ristorante",
                      "Enoteca",
                      "Hotel",
                      "Piccolo distributore",
                      "Altro",
                    ]}
                  />
                  <Select
                    label="Modalità"
                    value={transport}
                    onChange={setTransport}
                    options={["Multicollo", "Pallet", "Campioni"]}
                  />
                </div>

                <Textarea
                  label="Volumi / frequenza"
                  icon={<Scale className="h-4 w-4" />}
                  value={volumi}
                  onChange={setVolumi}
                  placeholder="Es. 6 cartoni al mese / 12 cartoni ogni 2 settimane…"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-2xl px-4 py-3 text-sm font-extrabold shadow ring-orange-300/50 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 disabled:opacity-60"
                  style={{ background: SPST_ORANGE, color: "#0f1720" }}
                >
                  {loading ? "Apro WhatsApp..." : "Apri WhatsApp con richiesta pronta"}
                </button>

                {/* call (secondaria) */}
                <a
                  href="tel:+393201441789"
                  onClick={() =>
                    pushDataLayer("spst_call_click", {
                      page: "landing_spedire_senza_codice_accisa",
                      ...readAttribution(),
                    })
                  }
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/70 hover:bg-white/[0.04]"
                >
                  <Phone className="h-4 w-4" />
                  Preferisci chiamare? +39 320 144 1789
                </a>

                <div className="pt-1 text-center text-[11px] text-white/55">
                  I dati restano nel messaggio WhatsApp (non vengono salvati nel sito).
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Perché funziona */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1180px] px-4 md:px-5">
          <div className="grid gap-4 md:grid-cols-3">
            <Card
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Il problema reale"
              text="Molti clienti business (bar/enoteche) non hanno struttura accisa: l’ordine si blocca subito."
            />
            <Card
              icon={<CheckCircle2 className="h-5 w-5" />}
              title="La soluzione più semplice"
              text="Nella maggior parte dei casi: accisa assolta + rappresentanza fiscale. Si sblocca l’ordine senza complicazioni."
            />
            <Card
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Operatività SPST"
              text="Ti guidiamo nella scelta e facciamo partire il flusso. Obiettivo: far scrivere il cliente e chiudere la vendita."
            />
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 md:hidden">
        <div className="mx-auto flex max-w-[640px] items-center justify-between gap-2 rounded-2xl border border-white/10 bg-[#0b1220]/88 p-2 backdrop-blur">
          <button
            type="button"
            onClick={scrollToCheck}
            className="flex-1 rounded-xl px-3 py-3 text-center text-sm font-extrabold"
            style={{ background: SPST_ORANGE, color: "#0f1720" }}
          >
            Richiedi info
          </button>
          <a
            href={waFixed}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsAppFixed}
            className="flex-1 rounded-xl border px-3 py-3 text-center text-sm font-extrabold text-white/90"
            style={{ borderColor: `${SPST_ORANGE}55` }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

/* ---------------- UI helpers ---------------- */

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-[12px] text-white/75">
      <div className="flex items-center gap-2">
        <span className="text-orange-200">{icon}</span>
        <span className="font-semibold text-white/80">{text}</span>
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="mb-2 grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/90">
        {icon}
      </div>
      <div className="text-[16px] font-extrabold">{title}</div>
      <div className="mt-1 text-[13px] leading-snug text-white/70">{text}</div>
    </motion.div>
  );
}

function Field({
  label,
  icon,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center gap-2 text-[12px] font-semibold text-white/70">
        <span className="text-orange-200">{icon}</span>
        {label}
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white/90 outline-none placeholder:text-white/35 focus:border-orange-300/40 focus:ring-2 focus:ring-orange-300/20"
      />
    </label>
  );
}

function Textarea({
  label,
  icon,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center gap-2 text-[12px] font-semibold text-white/70">
        <span className="text-orange-200">{icon}</span>
        {label}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white/90 outline-none placeholder:text-white/35 focus:border-orange-300/40 focus:ring-2 focus:ring-orange-300/20"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <div className="mb-1 text-[12px] font-semibold text-white/70">{label}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white/90 outline-none focus:border-orange-300/40 focus:ring-2 focus:ring-orange-300/20"
      >
        {options.map((x) => (
          <option key={x} value={x} className="bg-[#0b1220]">
            {x}
          </option>
        ))}
      </select>
    </label>
  );
}
