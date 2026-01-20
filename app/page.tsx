"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TriangleAlert,
  Ship,
  Globe2,
  ChevronDown,
  Route,
  FileCheck2,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Gauge,
} from "lucide-react";

import { SpstHeader } from "../components/spst/SpstHeader";
import { SpstFooter } from "../components/spst/SpstFooter";
import { SpstLeadForm } from "../components/spst/SpstLeadForm";
import { PartnersCarousel } from "../components/spst/PartnersCarousel";
import { LocaleProvider, useLocale } from "../components/i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../lib/spstTheme";

const SPST_BLUE = "#0a1722";
const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

function HomeContent() {
  const { locale, setLocale, t } = useLocale();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Toggle lingua semplice (un click)
  const toggleLocale = () => {
    setLocale(locale === "it" ? "en" : "it");
  };

  // Riordinato header: Home, Servizi, Richiedi una quotazione, Spedizioni USA, For Buyers, multilingua, Area Riservata
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
    { href: "#for-buyers", label: t.nav.forBuyers },
  ];

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        background: SPST_PUBLIC_BG,
        minHeight: "100vh",
      }}
    >
      {/* HEADER CON LANGUAGE SWITCHER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/30 relative z-10">
        <div className="mx-auto max-w-[1400px] px-5 h-16 flex items-center justify-between gap-4">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-5 text-[0.95rem] font-semibold">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* LANGUAGE TOGGLE - Un click per cambiare */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition-all"
              aria-label="Toggle language"
            >
              <span className="text-xs font-semibold text-white/70">
                {locale === "it" ? "IT" : "EN"}
              </span>
              <motion.div
                animate={{ rotate: locale === "en" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/60"
              >
                <Globe2 className="h-3.5 w-3.5" />
              </motion.div>
            </button>

            {/* AREA RISERVATA */}
            <a
              href="https://dashboard.spst.it"
              className="inline-flex items-center rounded-full bg-[#f7931e] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              {t.nav.areaRiservata}
            </a>
          </nav>

          {/* MOBILE MENU */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5"
            >
              <span className="text-xs font-semibold text-white">
                {locale === "it" ? "IT" : "EN"}
              </span>
              <Globe2 className="h-3 w-3 text-white/70" />
            </button>
            <a
              href="https://dashboard.spst.it"
              className="inline-flex items-center rounded-full bg-[#f7931e] text-black px-3 py-1.5 text-sm font-bold"
            >
              {t.nav.areaRiservata}
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO - STILE TECH CENTRATO ===== */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 min-h-[85vh] flex items-center">

        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(247,147,30,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,147,30,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glow effects */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}66, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}77, transparent 60%)`,
          }}
        />


        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative mx-auto max-w-[1200px] px-5 w-full"
        >
          <div className="flex flex-col items-center text-center">
            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm"
            >
              <Zap className="h-3 w-3" />
              {t.hero.kicker}
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[36px] font-black leading-[1.05] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
            >
              {t.hero.title}
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${SPST_ORANGE} 0%, #ffaa44 50%, ${SPST_BLUE_SOFT} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-[65ch] text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a
                href="/portale-quotazioni"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <span className="relative z-10">{t.hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="/servizi-e-contatti"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Stats counters nell'hero con animazione fluida al caricamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-4 md:gap-8 w-full max-w-2xl mx-auto"
            >
              <CounterStat
                from={49}
                to={50}
                suffix="+"
                label={locale === "it" ? "Cantine" : "Wineries"}
                delay={0.5}
                autoStart={true}
              />
              <CounterStat
                from={19}
                to={20}
                suffix="+"
                label={locale === "it" ? "Buyer attivi" : "Active buyers"}
                delay={0.7}
                autoStart={true}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <div className="text-2xl font-black text-white md:text-3xl lg:text-4xl whitespace-nowrap">
                  USA, ASIA, UE
                </div>
                <div className="mt-2 text-xs text-white/70 md:text-sm">
                  {locale === "it" ? "Mercati" : "Markets"}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* ===== FOR WINERIES SECTION ===== */}
      <section id="for-wineries" className="relative py-16 md:py-24">
        <div className="relative mx-auto max-w-[1400px] px-5">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-4 order-2 md:order-1"
            >
              {[
                {
                  icon: <Ship className="h-5 w-5" />,
                  title:
                    locale === "it"
                      ? "Spedizioni in tutto il mondo"
                      : "Worldwide shipping",
                  desc:
                    locale === "it"
                      ? "Logistica express e pallet verso USA, Europa, Asia e altri mercati internazionali."
                      : "Express and pallet logistics to USA, Europe, Asia and other international markets.",
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title:
                    locale === "it"
                      ? "Servizio di rappresentanza fiscale"
                      : "Tax representation service",
                  desc:
                    locale === "it"
                      ? "Supporto fiscale e doganale per semplificare le operazioni di export."
                      : "Tax and customs support to simplify export operations.",
                },
                {
                  icon: <FileCheck2 className="h-5 w-5" />,
                  title:
                    locale === "it"
                      ? "Consulenza e controllo documentale"
                      : "Consulting and document control",
                  desc:
                    locale === "it"
                      ? "Gestione completa della documentazione necessaria per ogni spedizione."
                      : "Complete management of documentation required for each shipment.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#f7931e]/20 p-2 text-[#f7931e]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="order-1 md:order-2 md:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 md:ml-auto"
              >
                <Building2 className="h-3 w-3" />
                {locale === "it" ? "For Wineries" : "For Wineries"}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl"
              >
                {locale === "it"
                  ? "Servizi per cantine"
                  : "Services for wineries"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg leading-relaxed text-white/80"
              >
                {locale === "it"
                  ? "SPST supporta le cantine italiane nell'export del vino con servizi completi di logistica, documentazione e rappresentanza fiscale."
                  : "SPST supports Italian wineries in wine export with complete logistics, documentation and tax representation services."}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 md:flex md:justify-end"
              >
                <a
                  href="/servizi-e-contatti"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  {locale === "it" ? "Scopri i servizi" : "Discover services"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR BUYERS SECTION ===== */}
      <section id="for-buyers" className="relative py-16 md:py-24">
        <div className="relative mx-auto max-w-[1400px] px-5">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                <Users className="h-3 w-3" />
                {t.sections.forBuyers.kicker}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl"
              >
                {t.sections.forBuyers.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg leading-relaxed text-white/80"
              >
                {t.sections.forBuyers.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <a
                  href="/servizi-e-contatti"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  {locale === "it" ? "Contattaci" : "Contact us"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {[
                {
                  icon: <FileCheck2 className="h-5 w-5" />,
                  title: locale === "it" ? "Documentazione completa" : "Complete documentation",
                  desc:
                    locale === "it"
                      ? "Gestione di tutti i documenti necessari per l'export"
                      : "Management of all documents needed for export",
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: locale === "it" ? "Compliance garantita" : "Guaranteed compliance",
                  desc:
                    locale === "it"
                      ? "Conformità con normative internazionali"
                      : "Compliance with international regulations",
                },
                {
                  icon: <Route className="h-5 w-5" />,
                  title: locale === "it" ? "Logistica ottimizzata" : "Optimized logistics",
                  desc:
                    locale === "it"
                      ? "Spedizioni efficienti verso tutto il mondo"
                      : "Efficient shipping worldwide",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#f7931e]/20 p-2 text-[#f7931e]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS + HOW IT WORKS UNIFICATI CON ANIMAZIONI ===== */}
      <section id="scopri-funziona" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              {t.sections.problems.kicker} • {t.sections.howItWorks.kicker}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${SPST_ORANGE} 0%, #fff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.sections.problems.title}
              </span>
              <br />
              <span className="text-white/90">{t.sections.howItWorks.title}</span>
            </motion.h2>
          </div>

          {/* Grid Problems + Solutions */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem: {
                  icon: <TriangleAlert className="h-6 w-6" />,
                  title:
                    locale === "it"
                      ? "Documenti doganali complessi"
                      : "Complex customs documents",
                  desc:
                    locale === "it"
                      ? "e-DAS, proforma, accise, HS code"
                      : "e-DAS, proforma, excise duties, HS code",
                },
                solution: {
                  icon: <FileCheck2 className="h-6 w-6" />,
                  title: locale === "it" ? "Documenti a norma" : "Compliant documents",
                  desc:
                    locale === "it"
                      ? "Accise, COLA, Prior Notice, e-DAS e tutta la parte burocratica per partire in regola."
                      : "Excise duties, COLA, Prior Notice, e-DAS and all bureaucracy to start compliant.",
                  step: "01",
                },
              },
              {
                problem: {
                  icon: <Ship className="h-6 w-6" />,
                  title:
                    locale === "it"
                      ? "Costi di spedizione variabili"
                      : "Variable shipping costs",
                  desc:
                    locale === "it"
                      ? "Tariffe poco chiare e costi nascosti"
                      : "Unclear rates and hidden costs",
                },
                solution: {
                  icon: <Route className="h-6 w-6" />,
                  title: locale === "it" ? "Spedizione ottimizzata" : "Optimized shipping",
                  desc:
                    locale === "it"
                      ? "Selezioniamo i corrieri e le tratte migliori (express o pallet), con tracking e assistenza dedicata."
                      : "We select the best carriers and routes (express or pallet), with tracking and dedicated support.",
                  step: "02",
                },
              },
              {
                problem: {
                  icon: <Globe2 className="h-6 w-6" />,
                  title:
                    locale === "it"
                      ? "Buyer difficili da raggiungere"
                      : "Hard-to-reach buyers",
                  desc:
                    locale === "it"
                      ? "Mercati complessi e relazioni fragili"
                      : "Complex markets and fragile relationships",
                },
                solution: {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: locale === "it" ? "Export che cresce" : "Growing export",
                  desc:
                    locale === "it"
                      ? "Flussi ricorrenti e supporto operativo per abilitare la tua cantina al mercato estero."
                      : "Recurring flows and operational support to enable your winery to enter foreign markets.",
                  step: "03",
                },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                  {/* Problem */}
                  <div className="mb-6 flex items-start gap-4 pb-6 border-b border-white/10">
                    <div className="rounded-lg bg-red-500/20 p-3 text-red-400 shrink-0">
                      {item.problem.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-red-400/80 mb-1">
                        {locale === "it" ? "Problema" : "Problem"}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.problem.title}</h3>
                      <p className="text-sm text-white/70">{item.problem.desc}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e] shrink-0">
                      {item.solution.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#f7931e]/60">{item.solution.step}</span>
                        <span className="text-xs font-semibold text-[#f7931e]/80">
                          {locale === "it" ? "Soluzione" : "Solution"}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.solution.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{item.solution.desc}</p>
                    </div>
                  </div>

                  {/* Connecting line animation */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-red-500/50 via-[#f7931e]/50 to-transparent mt-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS CAROUSEL ===== */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black sm:text-4xl md:text-5xl text-white"
            >
              {t.sections.partners.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#f7931e] to-transparent mx-auto"
            />
          </div>
          <div className="mt-12">
            <PartnersCarousel />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION - BOTTONI MIGLIORATI ===== */}
      <section id="preventivo" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl md:p-12"
          >
            {/* Tech grid overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(247,147,30,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(247,147,30,0.2) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <h3 className="text-base font-bold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left whitespace-nowrap">
                {t.sections.cta.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                <a
                  href="/portale-quotazioni"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  <span className="relative z-10">{t.sections.cta.quote}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </a>
                <a
                  href="https://wa.me/393201441789"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 hover:scale-105"
                >
                  {t.sections.cta.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section id="contatti" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <SectionHeader
            kicker={t.sections.contact.kicker}
            title={t.sections.contact.title}
            tone="accent"
          />
          <div className="mt-12">
            <SpstLeadForm />
            <p className="mt-4 text-center text-sm text-white/60">
              {t.sections.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SpstFooter />
    </main>
  );
}

export default function Home() {
  return (
    <LocaleProvider>
      <HomeContent />
    </LocaleProvider>
  );
}

/* ------------------------ COMPONENTS ------------------------ */

function SectionHeader({
  kicker,
  title,
  tone = "plain",
}: {
  kicker: string;
  title: string;
  tone?: "problem" | "solution" | "accent" | "plain";
}) {
  const gradients: Record<string, string> = {
    problem: `linear-gradient(135deg, ${SPST_ORANGE}, #fff)`,
    solution: `linear-gradient(135deg, ${SPST_ORANGE}, #fff)`,
    accent: `linear-gradient(135deg, ${SPST_ORANGE}, #fff)`,
    plain: `linear-gradient(135deg, #fff, #fff)`,
  };

  return (
    <div className="text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
      >
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl"
      >
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: gradients[tone] }}
        >
          {title}
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#f7931e] to-transparent"
      />
    </div>
  );
}

/* Counter Stat Component con animazione fluida ed elegante */
function CounterStat({
  from,
  to,
  suffix = "",
  label,
  delay = 0,
  autoStart = false,
}: {
  from: number;
  to: number;
  suffix?: string;
  label: string;
  delay?: number;
  autoStart?: boolean;
}) {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const startAnimation = () => {
      setHasAnimated(true);
      
      // Animazione ultra-fluida con easing elegante
      const duration = 2500; // 2.5 secondi per massima fluidità
      const startTime = Date.now();
      const startValue = from;
      const endValue = to;
      const diff = endValue - startValue;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out-expo per animazione molto fluida ed elegante)
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.round(startValue + diff * easeOutExpo);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue); // Assicura che finisca esattamente al valore target
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);
    };

    if (autoStart) {
      // Se autoStart è true, parte automaticamente al caricamento
      startAnimation();
    } else {
      // Altrimenti usa Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [from, to, delay, hasAnimated, autoStart]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        className="text-2xl font-black text-white md:text-3xl lg:text-4xl"
        animate={
          hasAnimated && count === to
            ? {
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 0.4,
          times: [0, 0.5, 1],
          ease: "easeOut",
        }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="mt-2 text-xs text-white/70 md:text-sm">{label}</div>
    </motion.div>
  );
}

