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
} from "lucide-react";

import { SpstHeader } from "../components/spst/SpstHeader";
import { SpstFooter } from "../components/spst/SpstFooter";
import { SpstPaylinkHighlight } from "../components/spst/SpstPaylinkHighlight";
import { SpstLeadForm } from "../components/spst/SpstLeadForm";
import { SPST_PUBLIC_BG } from "../lib/spstTheme";

const SPST_BLUE = "#0a1722";
const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export default function Home() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servizi-e-contatti", label: "Servizi" },
    { href: "#vantaggi", label: "Perché SPST" },
    { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
    { href: "/spst-paylink", label: "Paylink USA" },
  ];

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      {/* HEADER RIUSABILE */}
      <SpstHeader navItems={navItems} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* glow brand */}
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

        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 pb-12 pt-10 md:grid-cols-[1.05fr_.95fr] md:pt-16">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs uppercase tracking-wider text-white/70">
              Export vino all-in-one
            </span>
            <h1 className="mt-2 text-[34px] font-black leading-[1.03] sm:text-[40px] md:text-[58px]">
              Il tuo vino nel mondo,
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                senza pensieri.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-[60ch] text-[15px] text-white/85 sm:text-base md:mx-0">
              SPST gestisce documenti doganali e fiscali, organizza la
              spedizione (express o pallet) e costruisce flussi export stabili
              verso USA, Europa e altri mercati, con un unico partner
              operativo.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="https://www.spst.it/portale-quotazioni"
                className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                Richiedi una quotazione
              </a>
              <a
                href="https://www.spst.it/servizi-e-contatti"
                className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg:white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                Servizi e contatti
              </a>
            </div>

            {/* pills animate */}
            <div className="mt-6 overflow-hidden">
              <Marquee>
                <Pill>Accise</Pill>
                <Pill>COLA</Pill>
                <Pill>Prior Notice</Pill>
                <Pill>Corrieri espressi</Pill>
                <Pill>e-DAS</Pill>
                <Pill>HS Code</Pill>
                <Pill>Accisa assolta / sospesa</Pill>
                <Pill>Export USA &amp; UE</Pill>
              </Marquee>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
                delay: 0.8,
              }}
              className="mt-10 hidden items-center gap-2 text-white/50 md:flex"
            >
              <ChevronDown className="h-5 w-5" />
              <span className="text-xs">Scorri</span>
            </motion.div>
          </div>

          {/* HERO VISUAL */}
          <HeroVisual />
        </div>
      </section>

      {/* 🔶 HIGHLIGHT PAYLINK SUBITO DOPO HERO */}
      <SpstPaylinkHighlight />

      {/* ===== PROBLEMI ===== */}
      <section id="scopri" className="relative py-10">
        <SectionHeader
          kicker="I problemi reali"
          title={
            <>
              Perché è complicato
              <br className="sm:hidden" /> spedire vino
            </>
          }
          tone="problem"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          {[
            {
              icon: <TriangleAlert className="h-5 w-5" />,
              title: "Documenti doganali complessi",
              desc: "e-DAS, proforma, accise, HS code: facciamo tutto noi.",
            },
            {
              icon: <Ship className="h-5 w-5" />,
              title: "Costi di spedizione variabili",
              desc: "Tariffe chiare e competitive con corrieri espressi e pallet.",
            },
            {
              icon: <Globe2 className="h-5 w-5" />,
              title: "Buyer difficili da raggiungere",
              desc: "Rete, contatti e processi per rendere l’export davvero scalabile.",
            },
          ].map((x, i) => (
            <motion.div
              key={i}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                  {x.icon}
                </div>
                <div>
                  <div className="text-[16px] font-semibold">{x.title}</div>
                  <div className="text-[13px] leading-snug text-white/70">
                    {x.desc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== COME FUNZIONA (3 step) ===== */}
      <section id="funziona" className="py-12">
        <SectionHeader
          kicker="Come funziona"
          title="Dalla carta al tracking, in 3 step"
          tone="solution"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          {[
            {
              title: "1) Documenti a norma",
              text: "Accise, COLA, Prior Notice, e-DAS e tutta la parte burocratica per partire in regola.",
              icon: <FileCheck2 className="h-5 w-5" />,
            },
            {
              title: "2) Spedizione ottimizzata",
              text: "Selezioniamo i corrieri e le tratte migliori (express o pallet), con tracking e assistenza dedicata.",
              icon: <Route className="h-5 w-5" />,
            },
            {
              title: "3) Export che cresce",
              text: "Flussi ricorrenti, KPI e supporto operativo per far diventare l’estero una parte stabile del tuo fatturato.",
              icon: <TrendingUp className="h-5 w-5" />,
            },
          ].map(({ title, text, icon }) => (
            <Card key={title} title={title} text={text} icon={icon} />
          ))}
        </div>
      </section>

      {/* ===== COSA FACCIAMO ===== */}
      <section id="servizi" className="py-12">
        <SectionHeader
          kicker="Cosa facciamo"
          title="Operatività, non promesse"
          tone="accent"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            [
              "Logistica & Spedizioni",
              "Express, campionature e pallet in Europa e USA. Consolidamento e soluzioni temperature-safe.",
            ],
            [
              "Dogana & Fisco",
              "Accise assolta/sospesa, COLA, Prior Notice, e-DAS. Documenti generati e archiviati in modo smart.",
            ],
            [
              "Deposito & Rappresentanza",
              "Stoccaggio e rappresentanza fiscale per semplificare la vendita nei diversi Paesi.",
            ],
            [
              "Sviluppo mercati esteri",
              "Supporto operativo e strategico per costruire relazioni stabili con buyer internazionali.",
            ],
          ].map(([title, text]) => (
            <Card
              key={title as string}
              title={title as string}
              text={text as string}
            />
          ))}
        </div>

        {/* KPI band */}
        <div className="mx-auto mt-6 max-w-[1200px] px-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { num: "50+", label: "Cantine seguite" },
                { num: "20+", label: "Buyer attivi" },
                { num: "USA, ASIA, UE", label: "Mercati coperti" },
              ].map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="text-xl font-extrabold">{k.num}</div>
                  <div className="text-xs text-white/70">{k.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PER CHI ===== */}
      <section id="chi" className="py-12">
        <SectionHeader
          kicker="Per chi lavoriamo"
          title="Partner per cantine, distributori, importatori ed e-commerce"
          tone="plain"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            ["Cantine", "Da chi inizia a esportare fino a realtà strutturate."],
            ["Distributori", "Flussi costanti e palette ricorrenti in Europa e USA."],
            ["Importatori", "Assistenza documentale, consolidamenti e tempi rapidi."],
            ["E-commerce", "Campionature e B2C con soluzioni integrate di spedizione."],
          ].map(([title, text]) => (
            <Card
              key={title as string}
              title={title as string}
              text={text as string}
            />
          ))}
        </div>
      </section>

      {/* ===== PERCHÉ SPST ===== */}
      <section id="vantaggi" className="py-12">
        <SectionHeader
          kicker="Perché scegliere SPST"
          title="Unico partner, tariffe ottimizzate, assistenza reale"
          tone="plain"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          {[
            [
              "Un unico partner",
              "Documenti + logistica + supporto operativo → meno errori, tempi più rapidi.",
            ],
            [
              "Tariffe e tratte ottimizzate",
              "Multi-corriere e selezione dinamica delle rotte per ridurre costi e transit time.",
            ],
            [
              "Assistenza reale",
              "WhatsApp dedicato, SLA chiari e dashboard spedizioni sempre aggiornato.",
            ],
          ].map(([title, text]) => (
            <Card
              key={title as string}
              title={title as string}
              text={text as string}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA BLUR ===== */}
      <section id="preventivo" className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)] md:flex-row md:p-7">
            <h3 className="m-0 text-xl font-bold text:white">
              Pronto a spedire il tuo vino nel mondo?
            </h3>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <a
                className="rounded-full px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
                href="https://www.spst.it/portale-quotazioni"
              >
                Richiedi una quotazione
              </a>
              <a
                className="rounded-full border border-white/70 px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30 active:translate-y-[1px]"
                href="https://wa.me/393201441789"
              >
                Supporto WhatsApp
              </a>
              <a
                className="rounded-full border border-white/70 px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30 active:translate-y-[1px]"
                href="/spst-paylink"
              >
                Scopri Paylink USA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTATTI (quick lead) ===== */}
      <section id="contatti" className="py-12">
        <SectionHeader
          kicker="Parliamo della tua cantina"
          title="Richiedi informazioni"
          tone="accent"
        />
        <div className="mx-auto max-w-[1200px] px-5">
          <SpstLeadForm />
          <div className="mt-3 text-center text-[12px] text-white/60">
            Compili in 30 secondi. Ti rispondiamo in giornata.
          </div>
        </div>
      </section>

      {/* FOOTER RIUSABILE */}
      <SpstFooter />
    </main>
  );
}

/* ------------------------ COMPONENTS ------------------------ */

function SectionHeader({
  kicker,
  title,
  tone = "plain",
}: {
  kicker: string;
  title: React.ReactNode;
  tone?: "problem" | "solution" | "accent" | "plain";
}) {
  const gradients: Record<string, string> = {
    problem: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    solution: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    accent: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    plain: `linear-gradient(90deg, #fff, #fff)`,
  };
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-5 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] uppercase tracking-wider text-white/60"
      >
        {kicker}
      </motion.div>
      <div className="relative inline-block">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-6 -inset-y-2 opacity-25 blur-xl md:blur-2xl"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.45) 0%, rgba(247,147,30,.28) 40%, transparent 65%), radial-gradient(90% 120% at 50% 50%, rgba(28,62,94,.18) 0%, transparent 60%)",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-1 text-[26px] font-black sm:text-[30px] md:text-[38px]"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: gradients[tone] }}
          >
            {title}
          </span>
        </motion.h2>
      </div>
      <div
        className="mt-2 h-[3px] w-24 rounded-full"
        style={{
          backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)`,
        }}
      />
    </div>
  );
}

function Card({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      {icon && (
        <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
          {icon}
        </div>
      )}
      <h3 className="text-[1.1rem] font-extrabold text-white">{title}</h3>
      <p className="text-[0.98rem] text-white/80">{text}</p>
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 shadow">
      {children}
    </div>
  );
}

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-8">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -160, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 flex items-center gap-3"
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* HERO VISUAL: solo S con sheen */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-72 sm:w-80 md:w-full">
      <div
        className="absolute inset-0 rounded-full blur-[140px] opacity-50"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${SPST_BLUE_SOFT}88, transparent 70%)`,
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-40 md:w-48">
          <img
            src={LOGO_URL}
            alt="SPST"
            className="w-full drop-shadow-[0_8px_30px_rgba(247,147,30,.35)]"
          />
        </div>
      </div>
    </div>
  );
}
