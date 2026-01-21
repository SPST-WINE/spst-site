"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ship, Plane, Building2, Users, ArrowRight } from "lucide-react";
import { useLocale } from "../../components/i18n/LocaleProvider";

const SPST_ORANGE = "#f7931e";
const SPST_BLUE_SOFT = "#1c3e5e";

export default function SpedizioniUsaPage() {
  const { t, locale } = useLocale();

  return (
    <main className="font-sans text-slate-100 selection:bg-orange-300/40">
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
              {locale === "it" ? "Spedizioni USA" : "USA Shipping"}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[34px] font-black leading-[1.1] sm:text-[40px] md:text-[58px]"
            >
              {locale === "it" ? (
                <>
                  Due servizi per spedire{" "}
                  <span className="block bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}>
                    vino negli Stati Uniti
                  </span>
                </>
              ) : (
                <>
                  Two services to ship{" "}
                  <span className="block bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}>
                    wine to the United States
                  </span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-4 max-w-[70ch] text-[15px] text-white/85 sm:text-base"
            >
              {locale === "it"
                ? "SPST offre due soluzioni dedicate per le spedizioni verso gli USA: una per importatori e soggetti registrati, l'altra per clienti privati tramite enoturismo."
                : "SPST offers two dedicated solutions for shipping to the USA: one for importers and registered entities, the other for private customers through wine tourism."}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== COMPARAZIONE 50-50 ===== */}
      <section className="relative -mt-4 pt-4 md:pt-8">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="grid gap-8 md:grid-cols-2">
            {/* SERVIZIO 1: Spedizioni B2B */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e]">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black text-white">
                  {locale === "it"
                    ? "Spedizioni B2B USA"
                    : "B2B USA Shipping"}
                </h2>
              </div>
              <p className="mb-6 text-white/80">
                {locale === "it"
                  ? "Spedizioni verso gli Stati Uniti dirette a importatori e soggetti registrati, sia via mare che aereo."
                  : "Shipments to the United States to importers and registered entities, both by sea and air."}
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Destinatari: importatori, distributori, buyer registrati"
                      : "Recipients: importers, distributors, registered buyers"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Trasporto: via mare e aereo"
                      : "Transport: by sea and air"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Volumi: pallet, spedizioni consolidate, colli singoli e multicollo"
                      : "Volumes: pallets, consolidated shipments, single and multi-piece shipments"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Documentazione: MRN, COLA, Prior Notice, e-DAS"
                      : "Documentation: MRN, COLA, Prior Notice, e-DAS"}
                  </span>
                </li>
              </ul>
              <a
                href="/portale-quotazioni"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                {locale === "it" ? "Richiedi una quotazione" : "Request a quote"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* SERVIZIO 2: SPST Paylink */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e]">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black text-white">
                  {locale === "it"
                    ? "SPST Paylink"
                    : "SPST Paylink"}
                </h2>
              </div>
              <p className="mb-6 text-white/80">
                {locale === "it"
                  ? "Servizio per enoturismo con spedizione diretta a clienti privati. Ideale per turisti americani che visitano le cantine italiane."
                  : "Service for wine tourism with direct shipping to private customers. Ideal for American tourists visiting Italian wineries."}
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Destinatari: clienti privati (B2C)"
                      : "Recipients: private customers (B2C)"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Trasporto: express aereo"
                      : "Transport: express air"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Volumi: cartoni e spedizioni individuali"
                      : "Volumes: cartons and individual shipments"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#f7931e]">•</span>
                  <span>
                    {locale === "it"
                      ? "Pagamento: link di pagamento dal telefono"
                      : "Payment: payment link from phone"}
                  </span>
                </li>
              </ul>
              <a
                href="/spst-paylink"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                {locale === "it" ? "Scopri SPST Paylink" : "Discover SPST Paylink"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
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
                  ? "Non sai quale servizio fa per te?"
                  : "Not sure which service is right for you?"}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                <a
                  href="/portale-quotazioni"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  <span className="relative z-10">
                    {locale === "it" ? "Richiedi una quotazione" : "Request a quote"}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
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
    </main>
  );
}
