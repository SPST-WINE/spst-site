"use client";

import React from "react";
import { motion } from "framer-motion";
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

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "#vantaggi", label: t.nav.whySpst },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
    { href: "#for-buyers", label: t.nav.forBuyers },
  ];

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      {/* HEADER CON LANGUAGE SWITCHER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto max-w-[1400px] px-5 h-16 flex items-center justify-between gap-4">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-[0.95rem] font-semibold">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* LANGUAGE SWITCHER */}
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
              <button
                onClick={() => setLocale("it")}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  locale === "it"
                    ? "bg-[#f7931e] text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  locale === "en"
                    ? "bg-[#f7931e] text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* AREA RISERVATA (desktop) */}
            <a
              href="https://dashboard.spst.it"
              className="inline-flex items-center rounded-full bg-[#f7931e] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              {t.nav.areaRiservata}
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
              <button
                onClick={() => setLocale("it")}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  locale === "it" ? "bg-[#f7931e] text-black" : "text-white/70"
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  locale === "en" ? "bg-[#f7931e] text-black" : "text-white/70"
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="https://dashboard.spst.it"
              className="inline-flex items-center rounded-full bg-[#f7931e] text-black px-3 py-1.5 text-sm font-bold"
            >
              {t.nav.areaRiservata}
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO - STILE TECH ===== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
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
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)`,
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-5">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center md:text-left">
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
                className="mt-6 text-[36px] font-black leading-[1.05] sm:text-[48px] md:text-[64px] lg:text-[72px]"
              >
                {t.hero.title}
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${SPST_ORANGE} 0%, ${SPST_BLUE_SOFT} 100%)`,
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
                className="mx-auto mt-6 max-w-[65ch] text-lg leading-relaxed text-white/85 md:mx-0"
              >
                {t.hero.description}
              </motion.p>

              {/* CTA Buttons - Tech style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
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

              {/* Stats pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start"
              >
                {[
                  { label: "50+", sub: locale === "it" ? "Cantine" : "Wineries" },
                  { label: "20+", sub: locale === "it" ? "Buyer attivi" : "Active buyers" },
                  { label: "USA, ASIA, UE", sub: locale === "it" ? "Mercati" : "Markets" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
                  >
                    <div className="text-lg font-bold text-white">{stat.label}</div>
                    <div className="text-xs text-white/60">{stat.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Visual - Tech style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm">
                <div className="relative h-full w-full">
                  <img
                    src={LOGO_URL}
                    alt="SPST"
                    className="h-full w-full object-contain drop-shadow-[0_8px_30px_rgba(247,147,30,.4)]"
                  />
                </div>
              </div>
              {/* Tech glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOR BUYERS SECTION ===== */}
      <section id="for-buyers" className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
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

      {/* ===== PROBLEMS ===== */}
      <section id="scopri" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <SectionHeader
            kicker={t.sections.problems.kicker}
            title={t.sections.problems.title}
            tone="problem"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <TriangleAlert className="h-6 w-6" />,
                title:
                  locale === "it"
                    ? "Documenti doganali complessi"
                    : "Complex customs documents",
                desc:
                  locale === "it"
                    ? "e-DAS, proforma, accise, HS code: facciamo tutto noi."
                    : "e-DAS, proforma, excise duties, HS code: we handle everything.",
              },
              {
                icon: <Ship className="h-6 w-6" />,
                title:
                  locale === "it"
                    ? "Costi di spedizione variabili"
                    : "Variable shipping costs",
                desc:
                  locale === "it"
                    ? "Tariffe chiare e competitive con corrieri espressi e pallet."
                    : "Clear and competitive rates with express carriers and pallets.",
              },
              {
                icon: <Globe2 className="h-6 w-6" />,
                title:
                  locale === "it"
                    ? "Buyer difficili da raggiungere"
                    : "Hard-to-reach buyers",
                desc:
                  locale === "it"
                    ? "Rete, contatti e processi per rendere l'export davvero scalabile."
                    : "Network, contacts and processes to make export truly scalable.",
              },
            ].map((x, i) => (
              <TechCard key={i} icon={x.icon} title={x.title} desc={x.desc} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="funziona" className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-5">
          <SectionHeader
            kicker={t.sections.howItWorks.kicker}
            title={t.sections.howItWorks.title}
            tone="solution"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: locale === "it" ? "Documenti a norma" : "Compliant documents",
                text:
                  locale === "it"
                    ? "Accise, COLA, Prior Notice, e-DAS e tutta la parte burocratica per partire in regola."
                    : "Excise duties, COLA, Prior Notice, e-DAS and all bureaucracy to start compliant.",
                icon: <FileCheck2 className="h-6 w-6" />,
              },
              {
                step: "02",
                title: locale === "it" ? "Spedizione ottimizzata" : "Optimized shipping",
                text:
                  locale === "it"
                    ? "Selezioniamo i corrieri e le tratte migliori (express o pallet), con tracking e assistenza dedicata."
                    : "We select the best carriers and routes (express or pallet), with tracking and dedicated support.",
                icon: <Route className="h-6 w-6" />,
              },
              {
                step: "03",
                title: locale === "it" ? "Export che cresce" : "Growing export",
                text:
                  locale === "it"
                    ? "Flussi ricorrenti, KPI e supporto operativo per far diventare l'estero una parte stabile del tuo fatturato."
                    : "Recurring flows, KPIs and operational support to make export a stable part of your revenue.",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map(({ step, title, text, icon }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e]">{icon}</div>
                  <span className="text-4xl font-black text-white/20">{step}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-white/80">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS CAROUSEL ===== */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <SectionHeader
            kicker={t.sections.partners.kicker}
            title={t.sections.partners.title}
            tone="plain"
          />
          <div className="mt-12">
            <PartnersCarousel />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
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
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {t.sections.cta.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                <a
                  href="/portale-quotazioni"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  {t.sections.cta.quote}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/393201441789"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  {t.sections.cta.whatsapp}
                </a>
                <a
                  href="/spst-paylink"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  {t.sections.cta.usaShipping}
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

function TechCard({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
    >
      <div className="mb-4 rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e] w-fit">{icon}</div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{desc}</p>
      {/* Tech accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#f7931e] to-transparent transition-all group-hover:w-full" />
    </motion.div>
  );
}
