"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ship, Globe2, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocale } from "../../components/i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

const SPST_ORANGE = "#f7931e";
const SPST_BLUE_SOFT = "#1c3e5e";

export default function SpedizioniGenerichePage() {
  const { locale } = useLocale();

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
