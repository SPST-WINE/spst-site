// app/landing/spedire-senza-codice-accisa/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  MessageCircle,
  Scale,
  Boxes,
  AlertTriangle,
  Clock,
  Globe2,
  Building2,
  Phone,
  Mail,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const WHATSAPP_NUMBER = "393201441789";
const QUOTE_URL = "/portale-quotazioni";

function track(eventName: string, payload?: Record<string, any>) {
  // Meta Pixel
  try {
    window.fbq?.("track", eventName, payload || {});
  } catch {}

  // GTM / dataLayer
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "spst_event",
      spst_event_name: eventName,
      ...(payload || {}),
    });
  } catch {}
}

function buildWaLink(message: string) {
  const txt = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${txt}`;
}

export default function LandingSpedireSenzaCodiceAccisa() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [paese, setPaese] = useState("");
  const [volumi, setVolumi] = useState("");
  const [buyerType, setBuyerType] = useState("Distributore / Importatore");
  const [transport, setTransport] = useState("Pallet");
  const [loading, setLoading] = useState(false);

  const waPrefill = useMemo(() => {
    const lines = [
      "Ciao SPST, ho un buyer senza codice accisa e voglio capire la soluzione corretta.",
      "",
      `• Nome: ${nome || "-"}`,
      `• Email: ${email || "-"}`,
      `• Paese destinazione: ${paese || "-"}`,
      `• Tipo buyer: ${buyerType || "-"}`,
      `• Trasporto: ${transport || "-"}`,
      `• Volumi/frequenza: ${volumi || "-"}`,
      "",
      "Mi dite se conviene: accisa assolta con rappresentanza o sospesa via deposito fiscale?",
    ];
    return lines.join("\n");
  }, [nome, email, paese, buyerType, transport, volumi]);

  const waLink = useMemo(() => buildWaLink(waPrefill), [waPrefill]);

  const onClickQuote = () => {
    track("Lead", { source: "landing_no_codice_accisa", action: "quote" });
  };

  const onClickWhatsApp = () => {
    track("Contact", { source: "landing_no_codice_accisa", action: "whatsapp" });
  };

  const onSubmitMiniForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    track("Lead", { source: "landing_no_codice_accisa", action: "mini_form" });

    // Non inviamo dati a server (landing ultra-leggera): apriamo WhatsApp con testo precompilato
    window.open(waLink, "_blank", "noopener,noreferrer");
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      {/* Minimal top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/70 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-white/5"
            onClick={() => track("ViewContent", { source: "landing_no_codice_accisa", action: "logo_home" })}
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

          <div className="flex items-center gap-2">
            <a
              href={QUOTE_URL}
              onClick={onClickQuote}
              className="hidden rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/40 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px] md:inline-flex"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Richiedi quotazione <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClickWhatsApp}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
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

        <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-10 md:pt-14">
          <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                B2B UE • Buyer senza codice accisa
              </span>

              <h1 className="mt-3 text-[30px] font-black leading-[1.06] sm:text-[40px]">
                Spedire vino B2B in Europa{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}
                >
                  anche se il buyer non ha codice accisa
                </span>
              </h1>

              <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-white/80 sm:text-base">
                Non è un caso raro: buyer serio, ma niente codice accisa → ordine bloccato.
                SPST sblocca il flusso con la soluzione corretta (di solito{" "}
                <span className="font-semibold text-white/90">
                  accisa assolta + rappresentanza fiscale
                </span>
                ), oppure sospensione via deposito fiscale quando ha senso.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={QUOTE_URL}
                  onClick={onClickQuote}
                  className="rounded-full px-5 py-3 text-sm font-semibold shadow ring-orange-300/50 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                  style={{ background: SPST_ORANGE, color: "#0f1720" }}
                >
                  Richiedi quotazione (1 min) <ArrowRight className="ml-2 inline h-4 w-4" />
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClickWhatsApp}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
                  style={{ borderColor: `${SPST_ORANGE}55` }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Scrivici su WhatsApp
                </a>
              </div>

              {/* Trust pills */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Pill icon={<Clock className="h-4 w-4" />} text="Check in 10 min" />
                <Pill icon={<ShieldCheck className="h-4 w-4" />} text="Flusso tracciabile" />
                <Pill icon={<BadgeCheck className="h-4 w-4" />} text="B2B senza improvvisare" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[12px] text-white/70">
                Nota: contenuto informativo, non consulenza legale/fiscale. La scelta dipende da Paese, volumi,
                frequenza e struttura del buyer.
              </div>
            </div>

            {/* Right: mini form */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <FileCheck2 className="h-5 w-5 text-emerald-200" />
                </div>
                <div>
                  <div className="text-[16px] font-extrabold">Check immediato (senza call)</div>
                  <div className="mt-1 text-[13px] text-white/70">
                    Compila 4 campi: apriamo WhatsApp con messaggio già pronto.
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
                    label="Tipo buyer"
                    value={buyerType}
                    onChange={setBuyerType}
                    options={[
                      "Distributore / Importatore",
                      "HoReCa / Ristorante",
                      "Enoteca / Retail",
                      "E-commerce",
                      "Altro",
                    ]}
                  />
                  <Select
                    label="Trasporto"
                    value={transport}
                    onChange={setTransport}
                    options={["Pallet", "Multicollo", "Campioni"]}
                  />
                </div>

                <Textarea
                  label="Volumi / frequenza"
                  icon={<Scale className="h-4 w-4" />}
                  value={volumi}
                  onChange={setVolumi}
                  placeholder="Es. 2 pallet/mese oppure 20 colli ogni 2 settimane…"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-2xl px-4 py-3 text-sm font-extrabold shadow ring-orange-300/50 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 disabled:opacity-60"
                  style={{ background: SPST_ORANGE, color: "#0f1720" }}
                >
                  {loading ? "Apro WhatsApp..." : "Apri WhatsApp con richiesta pronta"}
                </button>

                <a
                  href={`tel:+39 320 144 1789`}
                  onClick={() => track("Contact", { source: "landing_no_codice_accisa", action: "call" })}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.04]"
                >
                  <Phone className="h-4 w-4" />
                  Preferisci chiamare? +39 320 144 1789
                </a>

                <div className="pt-1 text-center text-[11px] text-white/55">
                  Nessun invio automatico: i dati restano nel messaggio WhatsApp.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="py-10">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="grid gap-4 md:grid-cols-3">
            <Card
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Il blocco tipico"
              text="“Buyer senza codice accisa” → il flusso in sospensione non è attivabile. Se improvvisi, il rischio cresce sulle spedizioni successive."
            />
            <Card
              icon={<CheckCircle2 className="h-5 w-5" />}
              title="La via più semplice"
              text="Accisa assolta + rappresentanza fiscale: spesso è la soluzione più rapida per far partire un ordine B2B regolare e tracciato."
            />
            <Card
              icon={<Boxes className="h-5 w-5" />}
              title="Quando serve la sospensione"
              text="Volumi alti o flussi continuativi: si può usare deposito fiscale (più pesante, più costoso, ma corretto in certi casi)."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="pb-12">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
              </div>
              <div>
                <h2 className="text-[18px] font-extrabold">Come lavoriamo (in pratica)</h2>
                <p className="mt-1 text-[13px] text-white/70 max-w-[90ch]">
                  Ti chiediamo 5 info, scegliamo il flusso corretto, e lo rendiamo operativo senza far “diventare fiscalista” la cantina.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <Step n="1" title="Dati essenziali" text="Paese, volumi, frequenza, tipo buyer, trasporto." />
              <Step n="2" title="Scelta flusso" text="Assolta + rappresentanza oppure sospesa via deposito." />
              <Step n="3" title="Documenti" text="Fattura, packing list, CMR/tracking, tracciabilità." />
              <Step n="4" title="Spedizione" text="Ritiro + consegna + supporto operativo." />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={QUOTE_URL}
                onClick={onClickQuote}
                className="rounded-full px-5 py-3 text-sm font-semibold shadow ring-orange-300/50 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                Richiedi quotazione <ArrowRight className="ml-2 inline h-4 w-4" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClickWhatsApp}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Faq
              q="Se il buyer non ha codice accisa, posso spedire comunque in sospensione?"
              a="No. Senza codice accisa non può ricevere vino in sospensione. Serve un flusso alternativo (assolta + rappresentanza) o un deposito fiscale intermediario."
            />
            <Faq
              q="L’accisa assolta è sempre la scelta migliore?"
              a="Spesso sì per rapidità e semplicità. Ma dipende da volumi, frequenza e struttura del buyer. Per volumi elevati può avere senso la sospensione via deposito."
            />
            <Faq
              q="Cosa serve per dirti la soluzione corretta in 10 minuti?"
              a="Paese, volumi, frequenza, tipo buyer e modalità di trasporto (pallet/multicollo/campioni)."
            />
            <Faq
              q="Quali documenti gestite?"
              a="Tipicamente fattura B2B, packing list, documenti di trasporto/CMR/tracking e la tracciabilità del flusso (quando applicabile al contesto operativo)."
            />
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="text-[18px] font-extrabold">
              Sblocchiamo l’ordine in modo tracciabile
            </div>
            <div className="mt-2 text-[14px] text-white/75 max-w-[90ch]">
              Se hai un buyer senza codice accisa, la cosa peggiore è perdere tempo in mail e tentativi.
              Con SPST scegli il flusso corretto e lo rendi operativo.
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={QUOTE_URL}
                onClick={onClickQuote}
                className="rounded-full px-5 py-3 text-sm font-semibold shadow ring-orange-300/50 transition-all hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                Richiedi quotazione <ArrowRight className="ml-2 inline h-4 w-4" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClickWhatsApp}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 text-center text-[12px] text-white/45">
            © {new Date().getFullYear()} SPST • info@spst.it
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 md:hidden">
        <div className="mx-auto flex max-w-[600px] items-center justify-between gap-2 rounded-2xl border border-white/10 bg-[#0b1220]/85 p-2 backdrop-blur">
          <a
            href={QUOTE_URL}
            onClick={onClickQuote}
            className="flex-1 rounded-xl px-3 py-3 text-center text-sm font-extrabold"
            style={{ background: SPST_ORANGE, color: "#0f1720" }}
          >
            Quotazione
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClickWhatsApp}
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
      viewport={{ once: true, amount: 0.4 }}
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

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/60">
        <span
          className="grid h-6 w-6 place-items-center rounded-full text-[12px] font-extrabold"
          style={{ background: `${SPST_ORANGE}`, color: "#0f1720" }}
        >
          {n}
        </span>
        {title}
      </div>
      <div className="mt-2 text-[13px] text-white/70">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
          <FileCheck2 className="h-5 w-5 text-orange-200" />
        </div>
        <div>
          <div className="text-[15px] font-extrabold text-white/95">{q}</div>
          <div className="mt-2 text-[13px] text-white/70">{a}</div>
        </div>
      </div>
    </div>
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
