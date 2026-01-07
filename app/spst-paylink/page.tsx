"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  CreditCard,
  Smartphone,
  Globe2,
  MapPin,
  Ship,
  FileCheck2,
  MessageCircle,
} from "lucide-react";
import { SpstHeader } from "../../components/spst/SpstHeader";
import { SpstFooter } from "../../components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/servizi-e-contatti", label: "Servizi" },
  { href: "/#vantaggi", label: "Perché SPST" },
  { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
  { href: "/spst-paylink", label: "Paylink USA" },
];
export default function SpstPaylinkPage() {
  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }} // 👈 gradient centralizzato
    >
      <SpstHeader navItems={navItems} />

      {/* ===== HERO PAYLINK ===== */}
      <section className="relative overflow-hidden">
        {/* glow brand morbidi */}
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SPST Paylink · Spedire in USA è diventato facile
            </span>
            <h1 className="mt-3 text-[30px] font-black leading-[1.08] sm:text-[36px] md:text-[50px]">
              Dalla tua cantina
              <span className="block">alla porta di casa</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                dei tuoi clienti USA.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-[60ch] text-[15px] text-white/85 sm:text-base md:mx-0">
              SPST Paylink è il servizio B2C pensato per{" "}
              <strong>turisti americani in visita in Italia</strong>: il cliente
              paga dal proprio smartphone, inserisce l’indirizzo negli Stati
              Uniti e SPST gestisce{" "}
              <span className="font-semibold">documenti export, MRN</span>, ritiro
              in cantina e spedizione door-to-door. Un flusso dedicato ai clienti
              con indirizzo USA, integrato nell’operatività internazionale SPST.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#contatti"
                className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                Attiva SPST Paylink
              </a>
              <a
                href="https://spst-operations.vercel.app/usa-shipping-pay"
                className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                Guarda la schermata di checkout
              </a>
            </div>
          </div>

          {/* HERO VISUAL: iPhone mockup con screenshot reale */}
          <HeroPaylinkMockup />
        </div>
      </section>

      {/* ===== COS'È ===== */}
      <section id="cos-e" className="py-10">
        <SectionHeader
          kicker="Cos'è SPST Paylink"
          title="Un link di pagamento che sblocca le spedizioni USA dalla cantina"
          tone="accent"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          <Card
            title="Per la cantina"
            text="Dopo il tasting non devi più improvvisare spedizioni: hai un Paylink SPST collegato alla tua cantina, con regole chiare di spedizione verso gli USA."
            icon={<MapPin className="h-5 w-5" />}
          />
          <Card
            title="Per il turista americano"
            text="Scansiona un QR o apre il link, inserisce indirizzo USA e paga con carta. Tutto dal proprio telefono, in pochi minuti, senza moduli cartacei."
            icon={<Smartphone className="h-5 w-5" />}
          />
          <Card
            title="Per l’operatività"
            text="SPST riceve i dati completi, genera MRN e documenti, organizza il ritiro in cantina e spedisce door-to-door negli Stati Uniti, con tracking e supporto."
            icon={<FileCheck2 className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== COME FUNZIONA ===== */}
      <section id="funziona" className="py-12">
        <SectionHeader
          kicker="Come funziona"
          title="Dal tasting al tracking USA, in 3 step"
          tone="solution"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          <Card
            title="1) In cantina: QR o link"
            text="Al momento della vendita mostri al turista americano un QR code o gli invii il Paylink via email/WhatsApp. Ogni link è collegato alla tua cantina."
            icon={<Plane className="h-5 w-5" />}
          />
          <Card
            title="2) Checkout USA dal telefono"
            text="Il cliente compila l'indirizzo di consegna negli Stati Uniti, inserisce telefono ed email, accetta le condizioni e paga con carta in ambiente sicuro."
            icon={<CreditCard className="h-5 w-5" />}
          />
          <Card
            title="3) MRN, ritiro e spedizione"
            text="SPST genera MRN e documenti export, programma il ritiro direttamente in cantina e gestisce la spedizione door-to-door verso gli USA."
            icon={<Ship className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== SOLO USA (modulo dedicato) ===== */}
      <section id="usa-only" className="py-12">
        <SectionHeader
          kicker="Focus operativo"
          title="SPST Paylink è il modulo dedicato ai clienti con indirizzo negli Stati Uniti"
          tone="problem"
        />
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-4 md:grid-cols-[1.4fr_.9fr]">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-lg font-extrabold">
                Perché un flusso separato per gli USA?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                SPST lavora su più mercati, ma il turismo americano ha dinamiche
                specifiche: clienti in vacanza, ordini misti, necessità di
                spedizione rapida e chiara verso casa negli Stati Uniti.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Normative e processi export dedicati agli USA.</li>
                <li>• Listini e tratte ottimizzate per spedizioni B2C vino verso America.</li>
                <li>
                  • Un flusso separato che ti permette di gestire i clienti USA
                  senza complicare il resto dell’export.
                </li>
              </ul>
              <p className="mt-4 text-sm text-orange-200/90">
                Il modulo Paylink si attiva solo quando il cliente indica un{" "}
                <strong>indirizzo di consegna negli Stati Uniti</strong>. Per
                Europa e altri mercati SPST utilizza canali, listini e processi
                dedicati.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-5"
            >
              <h4 className="text-sm font-semibold text-white/90">
                Cosa significa per la tua cantina
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>
                  • Continui a gestire Europa e altri Paesi con le soluzioni SPST
                  più adatte a quei mercati.
                </li>
                <li>
                  • Quando il cliente è americano e vuole recapitare il vino a
                  casa negli USA, usi Paylink e hai un flusso già pronto.
                </li>
                <li>
                  • Meno confusione per il team: sai sempre quali spedizioni sono
                  turismo USA e quali rientrano nell’export “classico”.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PER CHI HA SENSO ===== */}
      <section id="quando" className="py-12">
        <SectionHeader
          kicker="Per chi ha senso"
          title="Quando SPST Paylink è davvero utile"
          tone="plain"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          <Card
            title="Cantine con tanti turisti USA"
            text="Se una parte importante dei tuoi visitatori arriva dagli Stati Uniti e compra vino in quantità, Paylink ti permette di non perdere queste vendite."
            icon={<Globe2 className="h-5 w-5" />}
          />
          <Card
            title="Agriturismi e wine resort"
            text="Strutture che fanno degustazioni con americani e vogliono offrire un servizio premium: ‘Non ti preoccupare della valigia, ti spediamo tutto a casa’."
            icon={<Plane className="h-5 w-5" />}
          />
          <Card
            title="Eventi e fiere con pubblico americano"
            text="Spedizioni dirette USA a partire dallo stand, senza allestire un sistema complesso: QR code + Paylink e SPST gestisce il resto."
            icon={<MessageCircle className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== CTA & CONTATTI ===== */}
      <section id="contatti" className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-col gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)] md:flex-row md:items-center md:justify-between md:p-7">
            <div>
              <h3 className="m-0 text-xl font-bold text-white">
                Vuoi attivare SPST Paylink per i tuoi clienti USA?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Raccontaci quanti turisti americani passano in cantina, quanti
                cartoni vendi mediamente e da quali regioni arrivano. Ti aiutiamo
                a capire se ha senso attivare il servizio e come strutturare
                prezzi e processi.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto">
              <a
                className="w-full rounded-full px-4 py-2 text-center text-sm font-bold text-[#0f1720] ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE }}
                href="mailto:info@spst.it?subject=Attivazione%20SPST%20Paylink%20turisti%20USA"
              >
                Scrivi a info@spst.it
              </a>
              <a
                className="w-full rounded-full border border-white/70 px-4 py-2 text-center text-sm font-bold text-white ring-white/30 transition-all duration-200 hover:-translate-y-[1px] hover:bg:white/10 hover:bg-white/10 hover:ring-2 active:translate-y-[1px]"
                href="https://wa.me/393201441789"
              >
                Parla su WhatsApp con SPST
              </a>
            </div>
          </div>
          <div className="mt-3 text-center text-[12px] text-white/60">
            Nessun vincolo minimo iniziale: partiamo dai primi casi reali e
            cresciamo insieme.
          </div>
        </div>
      </section>

      <SpstFooter />
    </main>
  );
}

/* ------------------------ COMPONENTS LOCALI ------------------------ */

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
          className="relative mt-1 text-[26px] font-black sm:text-[30px] md:text-[36px]"
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

/** Hero iPhone mockup con spazio per screenshot reale della pagina usa-shipping-pay */
function HeroPaylinkMockup() {
  return (
    <div className="relative mx-auto aspect-[9/16] w-64 sm:w-72 md:w-80">
      {/* glow dietro */}
      <div
        className="pointer-events-none absolute inset-[-15%] -z-10 rounded-[2.5rem] opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(60% 60% at 50% 20%, ${SPST_ORANGE}44, transparent 70%)`,
        }}
      />

      {/* telefono */}
      <div className="relative z-10 h-full w-full rounded-[2.5rem] border border-white/15 bg-[#050910] p-3 shadow-2xl shadow-black/50">
        {/* notch */}
        <div className="mx-auto mb-3 mt-1 h-1.5 w-20 rounded-full bg-white/15" />

        {/* schermo con screenshot reale */}
        <div className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden rounded-[1.9rem] bg-black/80">
          <img
            src="/paylink-usa-checkout.png"
            alt="Schermata di checkout SPST Paylink USA"
            className="h-full w-full translate-y-[24px] scale-[1.06] object-cover"
            style={{ objectPosition: "top" }}
          />
        </div>
      </div>
    </div>
  );
}
