"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Scale,
  Ship,
  Beaker,
  Activity,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogSpedireCampionatureVinoEuropaPage() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servizi-e-contatti", label: "Servizi" },
    { href: "/#vantaggi", label: "Perché SPST" },
    { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
    { href: "/spst-paylink", label: "Paylink USA" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      <SpstHeader navItems={navItems} />

      {/* HERO */}
      <section className="relative overflow-hidden">
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

        <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-10 md:pt-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Guida pratica • Campionature UE
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Come spedire{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              campionature di vino
            </span>{" "}
            in Europa: tra normativa e prassi reale
          </h1>

          <p className="mx-auto mt-3 max-w-[90ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Nel vino europeo, i campioni viaggiano spesso “come normali pacchi”.
            Qui distinguiamo in modo onesto prassi e quadro normativo, e ti
            spieghiamo quando (e perché) il rischio cresce. Ultimo
            aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#quando-problema"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Quando diventa un problema
            </a>

            <a
              href="/portale-quotazioni"
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Richiedi una quotazione
            </a>

            <a
              href="https://wa.me/393201441789"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Quick summary cards */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <MiniCard
              icon={<Beaker className="h-5 w-5" />}
              title="Prassi di mercato"
              text="Per piccoli quantitativi, molte campionature viaggiano senza flussi accisa strutturati."
            />
            <MiniCard
              icon={<Scale className="h-5 w-5" />}
              title="Normativa ≠ prassi"
              text="La natura “campione” non crea automaticamente un’esenzione: il vino resta soggetto ad accisa."
            />
            <MiniCard
              icon={<Activity className="h-5 w-5" />}
              title="Rischio variabile"
              text="Il rischio cresce con volume, frequenza e Paesi più rigorosi: la differenza è tra invio occasionale e modello."
            />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuto informativo. Non costituisce consulenza legale/fiscale.
            Per flussi ricorrenti o volumi rilevanti è opportuno valutare soluzioni dedicate.
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-6 md:grid-cols-[.34fr_.66fr]">
            {/* TOC */}
            <aside className="md:sticky md:top-24 h-fit">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Indice
                </div>
                <div className="mt-3 grid gap-2 text-sm">
                  <TocLink href="#realtà" label="1. La realtà del mercato" />
                  <TocLink href="#regolare" label="2. È regolare? (No)" />
                  <TocLink href="#perche-regge" label="3. Perché regge comunque" />
                  <TocLink
                    href="#quando-problema"
                    label="4. Quando diventa un problema"
                  />
                  <TocLink href="#occasione-modello" label="5. Occasionale vs modello" />
                  <TocLink href="#spst" label="6. Cosa fa SPST" />
                  <TocLink href="#trasparenza" label="7. Perché conviene essere trasparenti" />
                  <TocLink href="#sintesi" label="8. In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-6">
              <ArticleCard
                id="realtà"
                icon={<FileText className="h-5 w-5" />}
                title="1) La realtà: quasi nessuno spedisce campioni con una pratica accisa formale"
              >
                <P>
                  Nel mercato reale, soprattutto per piccoli quantitativi, le
                  campionature di vino viaggiano spesso così:
                </P>
                <List
                  items={[
                    "pro-forma, descrizione “sample”, valore simbolico",
                    "corriere espresso",
                    "spedizione diretta al destinatario",
                    "senza flussi accisa formalizzati",
                  ]}
                />
                <Quote>
                  Non è prassi comune vedere campionature accompagnate da pratiche accisa formali.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="regolare"
                icon={<Scale className="h-5 w-5" />}
                title="2) Questo significa che è “regolare”? No."
              >
                <P>Ma significa che il sistema funziona spesso così.</P>
                <P>
                  Dal punto di vista normativo, il vino è un prodotto soggetto ad
                  accisa: la gratuità o la natura di “campione”{" "}
                  <strong>non crea un’esenzione automatica</strong>.
                </P>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold">
                    <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-300" />
                    Punto chiave
                  </div>
                  <div className="mt-2 text-[13px] text-white/75">
                    Norma e prassi non coincidono sempre. Chi lavora nel settore lo sa.
                  </div>
                </div>
              </ArticleCard>

              <ArticleCard
                id="perche-regge"
                icon={<Ship className="h-5 w-5" />}
                title="3) Perché il sistema “regge” comunque?"
              >
                <P>Per tre motivi pratici:</P>
                <List
                  items={[
                    "Quantitativi ridotti: poche bottiglie, non pallet.",
                    "Controlli non sistematici: soprattutto intra-UE.",
                    "Tolleranza operativa di fatto: flussi storicamente “assorbiti” dal sistema.",
                  ]}
                />
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Questo <strong>non</strong> è una base giuridica. È una prassi di mercato consolidata.
                </div>
              </ArticleCard>

              <ArticleCard
                id="quando-problema"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="4) Quando la campionatura diventa un problema"
              >
                <P>I problemi iniziano quando:</P>
                <List
                  items={[
                    "i volumi aumentano",
                    "le spedizioni diventano frequenti",
                    "il Paese di destinazione è più rigoroso",
                    "la campionatura diventa attività ripetuta (di fatto commerciale)",
                  ]}
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="il rischio torna sul mittente" />
                  <RiskPill text="il corriere può chiedere coperture/documenti" />
                  <RiskPill text="controlli più probabili nel tempo" />
                  <RiskPill text="maggiore esposizione reputazionale" />
                </div>

                <MidCta />
              </ArticleCard>

              <ArticleCard
                id="occasione-modello"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="5) Il punto chiave: invio occasionale vs modello"
              >
                <P>
                  Qui sta la posizione corretta (e non fastidiosa) di SPST:
                </P>

                <div className="grid gap-3 md:grid-cols-2">
                  <InfoCard
                    icon={<CheckCircle2 className="h-4 w-4 text-emerald-300" />}
                    title="Campionatura occasionale"
                    bullets={[
                      "sporadica, piccolo volume",
                      "gestita spesso come spedizione standard",
                      "raramente genera problemi concreti",
                    ]}
                  />
                  <InfoCard
                    icon={<AlertTriangle className="h-4 w-4 text-amber-300" />}
                    title="Modello sistematico di campioni"
                    bullets={[
                      "frequente o su volumi crescenti",
                      "richiede più struttura e coerenenza documentale",
                      "maggiore attenzione su Paesi/partner più rigorosi",
                    ]}
                  />
                </div>

                <P className="mt-2">
                  SPST non fa terrorismo normativo. Fa <strong>distinzione di contesto</strong>.
                </P>
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<Ship className="h-5 w-5" />}
                title="6) Cosa fa SPST, in concreto"
              >
                <List
                  items={[
                    "Spediamo campionature ogni giorno.",
                    "Lavoriamo sulla base della prassi reale del mercato.",
                    "Avvisiamo quando il flusso rischia di diventare strutturalmente problematico.",
                  ]}
                />
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Non vendiamo “zero burocrazia”. Vendiamo <strong>consapevolezza operativa</strong>.
                </div>
              </ArticleCard>

              <ArticleCard
                id="trasparenza"
                icon={<Scale className="h-5 w-5" />}
                title="7) Perché essere trasparenti conviene (anche commercialmente)"
              >
                <P>
                  Dire “tutti fanno così e va sempre bene” sarebbe falso. Dire
                  “ogni campione deve passare da una pratica completa” sarebbe
                  disallineato dalla realtà.
                </P>
                <P>
                  Dire invece che esiste differenza tra prassi e normativa, e che
                  il rischio cresce con volume e frequenza, è: vero,
                  professionale, rassicurante e credibile.
                </P>
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<FileText className="h-5 w-5" />}
                title="8) In sintesi (onesto, non ideologico)"
              >
                <List
                  items={[
                    "Le campionature di vino vengono comunemente spedite senza pratiche accisa strutturate.",
                    "Dal punto di vista normativo non esiste un’esenzione automatica.",
                    "Il rischio dipende da volume, frequenza e destinazione.",
                    "SPST lavora nel mondo reale, ma con consapevolezza tecnica.",
                  ]}
                />
                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<FileText className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Quante bottiglie rientrano in una “campionatura” nella pratica?">
                  Non esiste una soglia magica valida ovunque: nel mondo reale “campione” è spesso poche bottiglie. Il punto che cambia tutto è la frequenza e la ripetizione.
                </FaqItem>
                <FaqItem q="Se scrivo “sample” e metto valore simbolico sono al sicuro?">
                  Aiuta a comunicare la natura dell’invio, ma non crea un’esenzione automatica. Se il flusso diventa sistematico, il rischio cresce.
                </FaqItem>
                <FaqItem q="Quando devo smettere di trattare i campioni “come pacchi standard”?">
                  Quando aumentano frequenza/volumi o quando lavori con Paesi/partner più rigorosi. In quel caso serve ragionare su un modello più strutturato.
                </FaqItem>
              </ArticleCard>
            </div>
          </div>
        </div>
      </section>

      <SpstFooter />
    </main>
  );
}

/* ------------------------ CTA blocks ------------------------ */

function CtaBox() {
  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
        Verifica rapida
      </div>
      <div className="mt-2 text-sm text-white/80">
        Spedisci campioni spesso? Ti diciamo subito quando il flusso sta diventando “modello” e cosa conviene fare.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/portale-quotazioni"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Richiedi una quotazione <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="https://wa.me/393201441789"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function MidCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">
        Prima di spedire (se i campioni sono frequenti): verifica 10 minuti
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Ti aiutiamo a capire se stai ancora nella prassi “occasionale” o se serve strutturare il flusso.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/portale-quotazioni"
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Richiedi una quotazione
        </a>
        <a
          href="https://wa.me/393201441789"
          className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">Il punto di vista SPST</div>
      <div className="mt-1 text-[13px] text-white/75">
        Trasparenza + operatività reale. SPST spedisce campioni ogni giorno e ti avvisa quando il rischio cambia scala.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/servizi-e-contatti"
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Parla con SPST
        </a>
        <a
          href="/portale-quotazioni"
          className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          Richiedi una quotazione
        </a>
      </div>
    </div>
  );
}

/* ------------------------ UI ------------------------ */

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
    >
      {label}
    </a>
  );
}

function MiniCard({
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
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
        {icon}
      </div>
      <div className="text-[16px] font-semibold">{title}</div>
      <div className="mt-1 text-[13px] leading-snug text-white/70">{text}</div>
    </motion.div>
  );
}

function ArticleCard({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-[18px] font-extrabold text-white">{title}</h2>
          <div
            className="mt-2 h-[3px] w-24 rounded-full"
            style={{
              backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)`,
            }}
          />
        </div>
      </div>
      <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-white/80">
        {children}
      </div>
    </section>
  );
}

function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={className ? className : "m-0"}>{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1 text-white/80">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-[13px] text-white/75">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 h-2 w-2 rounded-full" style={{ background: SPST_ORANGE }} />
        <span>{children}</span>
      </div>
    </div>
  );
}

function RiskPill({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80">
      <div className="flex items-start gap-2">
        <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-300" />
        <span>{text}</span>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-start gap-2">
        {icon}
        <div className="font-semibold text-white/90">{title}</div>
      </div>
      <ul className="ml-6 mt-2 list-disc space-y-1 text-[13px] text-white/75">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="font-semibold text-white/90">{q}</div>
      <div className="mt-1 text-[13px] text-white/75">{children}</div>
    </div>
  );
}
