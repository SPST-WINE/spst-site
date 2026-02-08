"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Ship, Globe2, Package, ArrowRight, CheckCircle2, Mail, Phone, Building2, User, FileText } from "lucide-react";
import { useLocale } from "../../components/i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

const SPST_ORANGE = "#f7931e";
const SPST_BLUE_SOFT = "#1c3e5e";

// Toast component
type ToastVariant = "success" | "error" | "info";
function useToast() {
  const [toast, setToast] = useState<{ message: string; variant: ToastVariant } | null>(null);

  function show(message: string, variant: ToastVariant = "success") {
    setToast({ message, variant });
    window.clearTimeout((show as any)._t);
    (show as any)._t = window.setTimeout(() => setToast(null), 5000);
  }

  return { toast, show };
}

function Toast({ toast }: { toast: { message: string; variant: ToastVariant } | null }) {
  if (!toast) return null;
  const ring =
    toast.variant === "success"
      ? "ring-1 ring-emerald-400/50"
      : toast.variant === "error"
      ? "ring-1 ring-red-400/50"
      : "ring-1 ring-white/30";
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur ${ring} shadow-[0_8px_30px_rgba(0,0,0,.25)]`}
    >
      <span className="text-sm">{toast.message}</span>
    </div>
  );
}

export default function SpedizioniGenerichePage() {
  const { locale, t } = useLocale();
  const { toast, show } = useToast();

  return (
    <main className="font-sans text-slate-100 selection:bg-orange-300/40" style={{ background: SPST_PUBLIC_BG }}>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute -bottom-24 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)`,
          }}
        />

        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              <Ship className="h-3 w-3" />
              {locale === "it" ? "Spedizioni Generiche" : "Generic Shipping"}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[34px] font-black leading-[1.1] sm:text-[40px] md:text-[58px]"
            >
              {locale === "it" ? (
                <>
                  Soluzioni di spedizione{" "}
                  <span className="block bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}>
                    per ogni esigenza
                  </span>
                </>
              ) : (
                <>
                  Shipping solutions{" "}
                  <span className="block bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}>
                    for every need
                  </span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-4 mb-2 max-w-[70ch] text-[15px] text-white/85 sm:text-base"
            >
              {locale === "it"
                ? "SPST offre servizi di spedizione completi per diverse tipologie di merci, con soluzioni personalizzate per ogni destinazione e modalità di trasporto."
                : "SPST offers complete shipping services for different types of goods, with customized solutions for every destination and transport method."}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== SERVIZI ===== */}
      <section className="relative -mt-4 pt-4 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Servizio 1: Express */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e]">
                  <Package className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black text-white">
                  {locale === "it" ? "Spedizioni Express" : "Express Shipping"}
                </h2>
              </div>
              <p className="mb-6 text-white/80">
                {locale === "it"
                  ? "Spedizioni rapide e tracciate per urgenze e campionature, con tempi di consegna ottimizzati."
                  : "Fast and tracked shipments for urgent deliveries and samples, with optimized delivery times."}
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Tempi di consegna rapidi"
                      : "Fast delivery times"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Tracciamento in tempo reale"
                      : "Real-time tracking"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Copertura internazionale"
                      : "International coverage"}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Servizio 2: Pallet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e]">
                  <Ship className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black text-white">
                  {locale === "it" ? "Spedizioni Pallet" : "Pallet Shipping"}
                </h2>
              </div>
              <p className="mb-6 text-white/80">
                {locale === "it"
                  ? "Soluzioni per volumi importanti con spedizioni consolidate e pallet completi."
                  : "Solutions for large volumes with consolidated shipments and full pallets."}
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Groupage e pallet interi"
                      : "Groupage and full pallets"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Trasporto via terra, mare e aria"
                      : "Transport by land, sea and air"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Tariffe ottimizzate per volumi"
                      : "Optimized rates for volumes"}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Servizio 3: Internazionale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e]">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black text-white">
                  {locale === "it" ? "Spedizioni Internazionali" : "International Shipping"}
                </h2>
              </div>
              <p className="mb-6 text-white/80">
                {locale === "it"
                  ? "Copertura globale con gestione completa di documentazione doganale e compliance."
                  : "Global coverage with complete customs documentation and compliance management."}
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Europa, USA, Asia e altri mercati"
                      : "Europe, USA, Asia and other markets"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Documentazione doganale completa"
                      : "Complete customs documentation"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#f7931e] shrink-0" />
                  <span>
                    {locale === "it"
                      ? "Assistenza dedicata"
                      : "Dedicated assistance"}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                {t.genericShipping.formTitle}
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                {t.genericShipping.formDescription}
              </p>
            </div>
            <GenericShippingForm onSuccess={() => show(t.genericShipping.success, "success")} onError={() => show(t.genericShipping.error, "error")} />
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl md:p-12"
          >
            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl text-center md:text-left">
                {locale === "it"
                  ? "Hai bisogno di una soluzione personalizzata?"
                  : "Need a customized solution?"}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                <a
                  href="https://wa.me/393201441789"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 hover:scale-105"
                >
                  {locale === "it" ? "Supporto WhatsApp" : "WhatsApp Support"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast */}
      <Toast toast={toast} />
    </main>
  );
}

/* ------------------------ FORM COMPONENT ------------------------ */
function GenericShippingForm({ onSuccess, onError }: { onSuccess: () => void; onError: () => void }) {
  const { t, locale } = useLocale();
  const [submitting, setSubmitting] = useState(false);
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);

  const [selectedMonthlyShipments, setSelectedMonthlyShipments] = useState<string>("");

  const marketsOptions = [
    { value: "italy", label: t.genericShipping.marketsOptions.italy },
    { value: "europe", label: t.genericShipping.marketsOptions.europe },
    { value: "usa", label: t.genericShipping.marketsOptions.usa },
    { value: "asia", label: t.genericShipping.marketsOptions.asia },
    { value: "uk", label: t.genericShipping.marketsOptions.uk },
    { value: "other", label: t.genericShipping.marketsOptions.other },
  ];

  const monthlyShipmentsOptions = [
    { value: "less10", label: t.genericShipping.monthlyShipmentsOptions.less10 },
    { value: "10-50", label: t.genericShipping.monthlyShipmentsOptions['10-50'] },
    { value: "50-100", label: t.genericShipping.monthlyShipmentsOptions['50-100'] },
    { value: "100-500", label: t.genericShipping.monthlyShipmentsOptions['100-500'] },
    { value: "more500", label: t.genericShipping.monthlyShipmentsOptions.more500 },
  ];

  const toggleMarket = (value: string) => {
    setSelectedMarkets((prev) =>
      prev.includes(value) ? prev.filter((m) => m !== value) : [...prev, value]
    );
  };

  const handleMonthlyShipmentChange = (value: string) => {
    setSelectedMonthlyShipments(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Aggiungi mercati selezionati
      selectedMarkets.forEach((market) => {
        fd.append("mercati", market);
      });

      // Aggiungi numero spedizioni mensili selezionato
      if (selectedMonthlyShipments) {
        fd.append("numero_spedizioni_mensili", selectedMonthlyShipments);
      }

      // Honeypot + timestamp
      if (!fd.get("_ts")) fd.append("_ts", String(Date.now()));
      if (!fd.get("_gotcha")) fd.append("_gotcha", "");

      const res = await fetch("/api/spedizioni-generiche", {
        method: "POST",
        body: fd,
      });

      const json = await res.json();

      if (json.ok) {
        // GTM custom event
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "spst_generate_lead",
            form: "spedizioni_generiche",
          });
        }

        onSuccess();
        form.reset();
        setSelectedMarkets([]);
        setSelectedMonthlyShipments("");
      } else {
        onError();
      }
    } catch (err: any) {
      onError();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />
      <input type="hidden" name="_ts" value={String(Date.now())} />

      {/* Contatti */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label={t.genericShipping.name}>
          <User className="h-4 w-4 text-white/60" />
          <input
            required
            name="nome"
            placeholder={locale === "it" ? "Nome e cognome" : "Full name"}
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.genericShipping.email}>
          <Mail className="h-4 w-4 text-white/60" />
          <input
            required
            type="email"
            name="email"
            placeholder="nome@azienda.it"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.genericShipping.company}>
          <Building2 className="h-4 w-4 text-white/60" />
          <input
            name="azienda"
            placeholder={locale === "it" ? "Nome azienda" : "Company name"}
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.genericShipping.phone}>
          <Phone className="h-4 w-4 text-white/60" />
          <input
            name="telefono"
            type="tel"
            placeholder="+39 ..."
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
      </div>

      {/* Categoria merceologica */}
      <Field label={t.genericShipping.category}>
        <Package className="h-4 w-4 text-white/60" />
        <input
          required
          name="categoria_merceologica"
          placeholder={t.genericShipping.categoryPlaceholder}
          className="bg-transparent outline-none w-full placeholder:text-white/40"
        />
      </Field>

      {/* Numero spedizioni mensili (single-select) */}
      <div>
        <label className="block text-[11px] text-white/60 mb-2">
          {t.genericShipping.monthlyShipments}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {monthlyShipmentsOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 bg-black/30 border cursor-pointer select-none hover:bg-black/40 transition-colors ${
                selectedMonthlyShipments === option.value
                  ? "border-orange-400 bg-orange-400/10"
                  : "border-white/10"
              }`}
            >
              <input
                type="radio"
                name="numero_spedizioni_mensili"
                value={option.value}
                checked={selectedMonthlyShipments === option.value}
                onChange={() => handleMonthlyShipmentChange(option.value)}
                className="peer sr-only"
              />
              <span
                className={`relative grid place-items-center w-5 h-5 rounded-full border ${
                  selectedMonthlyShipments === option.value
                    ? "border-orange-400 bg-orange-400/20"
                    : "border-white/30 bg-white/5"
                } after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full after:bg-orange-400 after:opacity-0 ${
                  selectedMonthlyShipments === option.value ? "after:opacity-100" : ""
                } after:transition-opacity`}
              />
              <span className="text-sm text-white/90">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Principali mercati (multiselect) */}
      <div>
        <label className="block text-[11px] text-white/60 mb-2">
          {t.genericShipping.markets}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {marketsOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 rounded-xl px-3 py-3 bg-black/30 border border-white/10 cursor-pointer select-none hover:bg-black/40 transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedMarkets.includes(option.value)}
                onChange={() => toggleMarket(option.value)}
                className="peer sr-only"
              />
              <span
                className="relative grid place-items-center w-5 h-5 rounded-full border border-white/30 bg-white/5
                           after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full after:bg-orange-400
                           after:opacity-0 peer-checked:after:opacity-100 after:transition-opacity"
              />
              <span className="text-sm text-white/90">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Particolari esigenze */}
      <label className="group grid gap-1">
        <div className="text-[11px] text-white/60">{t.genericShipping.specialNeeds}</div>
        <div className="rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
          <textarea
            name="esigenze_particolari"
            rows={4}
            placeholder={t.genericShipping.specialNeedsPlaceholder}
            className="bg-transparent outline-none w-full placeholder:text-white/40 resize-none"
          />
        </div>
      </label>

      {/* Submit */}
      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        disabled={submitting}
        className="mt-2 h-12 rounded-lg font-bold text-base text-[#0f1720] w-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-60 disabled:hover:scale-100"
        style={{ background: SPST_ORANGE }}
      >
        {submitting ? t.genericShipping.submitting : t.genericShipping.submit}
      </motion.button>

      <div className="text-[11px] text-white/50 text-center">
        {t.genericShipping.protected}
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="group grid gap-1">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="flex items-center gap-2 rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
        {children}
      </div>
    </label>
  );
}
