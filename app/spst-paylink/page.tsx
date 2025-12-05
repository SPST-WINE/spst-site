// app/spst-paylink/page.tsx
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

const SPST_BLUE = "#0a1722";
const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

export default function SpstPaylinkPage() {
  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        background:
          "radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)",
      }}
    >
      <SpstHeader
        navItems={[
          { href: "#cos-e", label: "Cos'è" },
          { href: "#funziona", label: "Come funziona" },
          { href: "#usa-only", label: "Solo USA" },
          { href: "#quando", label: "Per chi" },
        ]}
      />

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
              SPST Paylink · Solo turisti americani
            </span>
            <h1 className="mt-3 text-[30px] font-black leading-[1.1] sm:text-[36px] md:text-[50px]">
              Dal tasting in cantina
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                alla porta di casa negli USA.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-[60ch] text-[15px] text-white/85 sm:text-base md:mx-0">
              SPST Paylink è il servizio B2C pensato per{" "}
              <strong>turisti americani in visita in Italia</strong>: il cliente
              paga dal proprio smartphone, inserisce l’indirizzo negli Stati
              Uniti e SPST gestisce{" "}
              <span className="font-semibold">MRN, ritiro in cantina</span> e
              spedizione door-to-door verso gli USA. Nessuna spedizione verso
              Europa o altri Paesi: <strong>solo America</strong>.
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

            {/* highlight punti chiave */}
            <div className="mt-6 grid gap-3 text-xs text-white/80 sm:grid-cols-3">
              <HighlightPill icon={<Smartphone className="h-3 w-3" />}>
                Pagamento da smartphone
                <br />
                con carta
              </HighlightPill>
              <HighlightPill icon={<Globe2 className="h-3 w-3" />}>
                Solo spedizioni
                <br />
                verso USA
              </HighlightPill>
              <HighlightPill icon={<Ship className="h-3 w-3" />}>
                MRN, export e ritiro
                <br />
                gestiti da SPST
              </HighlightPill>
            </div>
          </div>

          {/* HERO VISUAL: iPhone mockup stile SPST */}
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
            text="Non devi più gestire spedizionieri, moduli complessi e documenti export per ogni turista americano. Hai un unico Paylink SPST collegato alla tua cantina."
            icon={<MapPin className="h-5 w-5" />}
          />
          <Card
            title="Per il turista americano"
            text="Dopo la degustazione, il cliente scansiona un QR o apre un link, inserisce indirizzo USA e paga in pochi minuti. Nessun modulo cartaceo o email avanti-indietro."
            icon={<Smartphone className="h-5 w-5" />}
          />
          <Card
            title="Per l'operatività"
            text="SPST riceve i dati completi, genera MRN e documenti, organizza il ritiro in cantina e spedisce direttamente verso gli Stati Uniti con tracking."
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
            text="Al momento della vendita, mostri al turista americano un QR code o gli invii un link SPST Paylink. Ogni link è collegato alla tua cantina e alle tue regole di spedizione."
            icon={<Plane className="h-5 w-5" />}
          />
          <Card
            title="2) Checkout USA dal telefono"
            text="Il cliente compila l'indirizzo di consegna negli Stati Uniti, inserisce telefono ed email, accetta le condizioni e paga con carta in un ambiente sicuro."
            icon={<CreditCard className="h-5 w-5" />}
          />
          <Card
            title="3) MRN, ritiro e spedizione"
            text="SPST genera MRN e documenti export, programma il ritiro direttamente in cantina e gestisce la spedizione door-to-door verso gli USA, con aggiornamenti e supporto."
            icon={<Ship className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== SOLO USA ===== */}
      <section id="usa-only" className="py-12">
        <SectionHeader
          kicker="Focus operativo"
          title="SPST Paylink è pensato solo per spedizioni verso gli Stati Uniti"
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
                Perché solo Stati Uniti (e non Europa o altri Paesi)?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                SPST Paylink nasce per risolvere un problema molto preciso:
                cantine italiane con <strong>forte flusso di turisti americani</strong> che
                vogliono spedire il vino direttamente a casa loro negli USA, in modo
                regolamentato e senza impazzire con burocrazia e corrieri.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Normative chiare e processi specifici per il mercato USA.</li>
                <li>• Partnership dedicate per spedizioni B2C vino verso America.</li>
                <li>
                  • Focus su un solo Paese = meno errori, flusso più veloce, esperienza
                  migliore per la cantina e per il cliente.
                </li>
              </ul>
              <p className="mt-4 text-sm text-orange-200/90">
                ⚠️ Importante: SPST Paylink <strong>non</strong> gestisce spedizioni verso
                Europa o altri Paesi extra-USA. È un servizio creato su misura per il{" "}
                <strong>turismo americano</strong>.
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
                <li>• Puoi continuare a gestire Europa con altri canali o partner.</li>
                <li>
                  • SPST Paylink interviene solo quando il cliente ha
                  <strong>indirizzo di consegna negli Stati Uniti</strong>.
                </li>
                <li>
                  • Nessun rischio di confusione: il flusso è dichiaratamente
                  “<strong>USA only</strong>”.
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
            text="Strutture che fanno degustazioni con americani e vogliono offrire un servizio premium: 'Non ti preoccupare della valigia, ti spediamo tutto a casa'."
            icon={<Plane className="h-5 w-5" />}
          />
          <Card
            title="Eventi e fiere con pubblico americano"
            text="Spedizioni dirette USA a partire dallo stand, senza allestire un sistema complesso: Qr code + Paylink e SPST gestisce il resto."
            icon={<MessageCircle className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== CTA & CONTATTI ===== */}
      <section id="contatti" className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-col gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)] md:flex-row md:items-center md:justify-between md:p-7">
            <div>
              <h3 className="text-xl font-bold text-white m-0">
                Vuoi attivare SPST Paylink per i tuoi turisti americani?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Raccontaci quanti turisti USA passano in cantina, quanti cartoni
                vendi mediamente e da quali regioni arrivano. Ti aiutiamo a capire
                se ha senso attivare il servizio e come strutturare prezzi e processi.
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
                className="w-full rounded-full border border-white/70 px-4 py-2 text-center text-sm font-bold text-white ring-white/30 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10 hover:ring-2 active:translate-y-[1px]"
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
            background: `radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.45) 0%, rgba(247,147,30,.28) 40%, transparent 65%), radial-gradient(90% 120% at 50% 50%, rgba(28,62,94,.18) 0%, transparent 60%)`,
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

function HighlightPill({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-left text-xs font-semibold text-white/80 shadow">
      {icon && <span>{icon}</span>}
      <span className="whitespace-normal">{children}</span>
    </div>
  );
}

/** Hero iPhone mockup in stile SPST */
function HeroPaylinkMockup() {
  return (
    <div className="relative mx-auto aspect-[9/16] w-64 sm:w-72 md:w-80">
      {/* glow dietro */}
      <div
        className="absolute inset-[-15%] rounded-[2.5rem] blur-3xl opacity-60"
        style={{
          background: `radial-gradient(60% 60% at 50% 20%, ${SPST_ORANGE}44, transparent 70%)`,
        }}
      />
      {/* telefono */}
      <div className="relative z-10 h-full w-full rounded-[2.5rem] border border-white/15 bg-[#050910] p-4 shadow-2xl shadow-black/50">
        {/* notch */}
        <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/15" />

        {/* header app */}
        <div className="flex items-center justify-between text-[10px] text-white/65">
          <span className="uppercase tracking-[0.22em]">SPST PAYLINK</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px]">
            USA shipping
          </span>
        </div>

        {/* card riepilogo */}
        <div className="mt-4 space-y-3 rounded-2xl bg-gradient-to-br from-white/12 to-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                Spedizione vino da
              </p>
              <p className="text-[13px] font-semibold">Cantina in Toscana</p>
            </div>
            <p className="text-right text-[11px]">
              <span className="text-[9px] text-white/55">Totale</span>
              <br />
              <span className="text-sm font-semibold text-white">
                189,00 $
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 text-[10px]">
            <div className="text-white/75">
              <p className="text-white/55">Destinazione</p>
              <p className="font-medium text-white">
                New York, NY (United States)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[9px] text-white/70">
            <div>
              <p className="text-white/55">Bottiglie</p>
              <p className="font-semibold text-white">18</p>
            </div>
            <div>
              <p className="text-white/55">Servizio</p>
              <p className="font-semibold text-white">Door-to-door USA</p>
            </div>
            <div>
              <p className="text-white/55">MRN</p>
              <p className="font-semibold text-white">Generato da SPST</p>
            </div>
          </div>
        </div>

        {/* step form */}
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-3 text-[10px]">
          <p className="text-white/75">1. Indirizzo USA ✅</p>
          <p className="text-white/75">2. Dati contatto & documento ✅</p>
          <p className="text-white/90">3. Pagamento sicuro con carta</p>
        </div>

        {/* bottone */}
        <button
          type="button"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold text-[#0a1722]"
          style={{ background: SPST_ORANGE }}
        >
          Paga e conferma spedizione USA
        </button>

        <p className="mt-3 text-center text-[9px] text-white/45">
          Solo spedizioni verso Stati Uniti. MRN e ritiro in cantina gestiti da
          SPST.
        </p>
      </div>
    </div>
  );
}
