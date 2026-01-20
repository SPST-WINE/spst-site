"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  AlertTriangle,
  FileCheck2,
  ShieldCheck,
  Scale,
  Ship,
  MessageCircle,
  ArrowRight,
  Link as LinkIcon,
  Building2,
  FileText,
  Wallet,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogComeSpedireVinoNegliUsaPage() {
  const { t, locale } = useLocale();
  
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/#vantaggi", label: t.nav.whySpst },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
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
            USA • B2C • Paylink USA
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Come spedire vino al cliente finale{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              negli Stati Uniti
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[100ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Guida pratica per evitare blocchi, sequestri e false promesse. Qui
            spieghiamo cosa non è possibile fare, perché molte info online sono
            fuorvianti, e qual è l’unico modello che funziona davvero (Paylink USA).
            Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#risposta-breve"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai alla risposta breve
            </a>

            <a
              href="#paylink"
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Vedi Paylink USA
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

          {/* Quick cards */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <MiniCard
              icon={<Scale className="h-5 w-5" />}
              title="Il punto non è DHL"
              text="Il corriere trasporta. Il diritto di importare/vendere alcol è un’altra cosa."
            />
            <MiniCard
              icon={<FileCheck2 className="h-5 w-5" />}
              title="COLA & compliance"
              text="Etichetta e percorso di conformità sono parte centrale del modello."
            />
            <MiniCard
              icon={<Building2 className="h-5 w-5" />}
              title="Importatore USA"
              text="Serve un soggetto autorizzato negli USA che gestisce responsabilità e adempimenti."
            />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuto divulgativo. Le normative USA su alcolici variano per
            Stato e canale. Diffida da chi promette spedizioni dirette “senza problemi”.
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
                  {locale === 'it' ? 'Indice' : 'Index'}
                </div>

                <div className="mt-3 grid gap-2 text-sm">
                  <TocLink href="#risposta-breve" label="1. La risposta breve" />
                  <TocLink href="#perche-diverso" label="2. Perché è diverso" />
                  <TocLink href="#requisiti" label="3. I 3 requisiti obbligatori" />
                  <TocLink href="#perche-online" label="4. “Online dicono che si può”" />
                  <TocLink href="#modello" label="5. L’unico modello corretto" />
                  <TocLink href="#paylink" label="6. SPST Paylink USA" />
                  <TocLink href="#quando" label="7. Quando Paylink è giusto" />
                  <TocLink href="#sintesi" label="In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="risposta-breve"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="1) La risposta breve (che molti evitano di dare)"
              >
                <QuoteStrong>
                  Non è possibile spedire vino direttamente dall’Europa al cliente finale negli Stati Uniti come un normale pacco.
                </QuoteStrong>

                <P>
                  Se stai cercando una spedizione “porta a porta” con DHL/UPS/FedEx,
                  è importante chiarirlo subito: non è un modello B2C difendibile.
                  Il problema non è il corriere. Il problema è la normativa USA sugli alcolici.
                </P>
              </ArticleCard>

              <ArticleCard
                id="perche-diverso"
                icon={<Scale className="h-5 w-5" />}
                title="2) Perché spedire vino negli USA è diverso da spedire qualsiasi altro prodotto"
              >
                <P>
                  Negli Stati Uniti il vino è un prodotto fortemente regolamentato,
                  soggetto a regole federali e statali. A differenza dell’UE, non esiste
                  un canale “B2C diretto dall’estero” semplice e scalabile.
                </P>
                <P>
                  La spedizione è solo l’ultimo anello di una catena legale più ampia.
                </P>
              </ArticleCard>

              <ArticleCard
                id="requisiti"
                icon={<FileCheck2 className="h-5 w-5" />}
                title="3) I tre requisiti obbligatori per spedire vino negli USA"
              >
                <H4>1️⃣ Serve una COLA (Certificate of Label Approval)</H4>
                <P>
                  Ogni vino importato negli USA deve avere etichetta conforme e un percorso
                  autorizzativo. Senza COLA (o percorso applicabile), il vino non è
                  correttamente commercializzabile e l’importazione può essere contestata.
                </P>

                <H4>2️⃣ Serve un importatore USA autorizzato</H4>
                <P>
                  Solo un soggetto con licenze/permessi negli USA può gestire in modo
                  corretto importazione, adempimenti, tasse e responsabilità.
                </P>
                <P>
                  Un cliente finale americano non può “sostituire” questo ruolo in modo
                  semplice e replicabile.
                </P>

                <H4>3️⃣ Serve una vendita interna agli USA</H4>
                <P>Il flusso corretto è:</P>
                <List
                  items={[
                    "il vino entra legalmente negli USA",
                    "viene importato da un soggetto autorizzato",
                    "la vendita avviene dall’interno degli Stati Uniti",
                    "il cliente riceve una consegna domestica",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Non è una spedizione diretta: è una vendita domestica USA dopo importazione corretta.
                </div>
              </ArticleCard>

              <ArticleCard
                id="perche-online"
                icon={<AlertTriangle className="h-5 w-5" />}
                title='4) Perché online trovi chi dice “si può spedire lo stesso”'
              >
                <P>
                  Perché a volte capita che una spedizione non venga intercettata.
                  Ma questo non la rende conforme: significa solo che non è stata controllata.
                </P>

                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="sequestro o distruzione merce" />
                  <RiskPill text="perdita del valore del vino" />
                  <RiskPill text="problemi futuri per il mittente" />
                  <RiskPill text="blocchi sulle spedizioni successive" />
                </div>

                <Quote>
                  “È arrivato” non significa “era conforme”.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="modello"
                icon={<BadgeCheck className="h-5 w-5" />}
                title="5) L’unico modo corretto per spedire vino al cliente finale negli USA"
              >
                <P>Ricapitoliamo:</P>

                <div className="grid gap-3 sm:grid-cols-2">
                  <CheckPill bad text="Spedizione diretta dall’Europa → non difendibile" />
                  <CheckPill bad text="Cliente come importatore → non replicabile" />
                  <CheckPill bad text="Bypass autorizzazioni → rischioso" />
                  <CheckPill good text="Importatore USA autorizzato" />
                  <CheckPill good text="COLA / compliance label" />
                  <CheckPill good text="Vendita domestica negli USA" />
                </div>

                <MidCta />
              </ArticleCard>

              <ArticleCard
                id="paylink"
                icon={<Wallet className="h-5 w-5" />}
                title="6) Ed è qui che entra in gioco SPST Paylink USA"
              >
                <P>
                  Paylink USA nasce per risolvere questo problema senza costringere cantine e produttori a:
                </P>
                <List
                  items={[
                    "aprire società negli USA",
                    "gestire burocrazia federale/statale",
                    "inventarsi soluzioni borderline",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <Ship className="mt-0.5 h-4 w-4 text-orange-200" />
                    Con Paylink USA
                  </div>
                  <ul className="ml-6 mt-2 list-disc space-y-1 text-[13px] text-white/75">
                    <li>il vino viene gestito tramite partner autorizzati</li>
                    <li>la compliance viene impostata a monte</li>
                    <li>il cliente finale paga in modo semplice</li>
                    <li>la consegna avviene senza esposizioni legali inutili</li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="/spst-paylink"
                    className="rounded-full px-4 py-2 text-sm font-semibold"
                    style={{ background: SPST_ORANGE, color: "#0f1720" }}
                  >
                    Scopri Paylink USA <ArrowRight className="h-4 w-4 inline" />
                  </a>
                  <a
                    href="https://wa.me/393201441789"
                    className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
                    style={{ borderColor: `${SPST_ORANGE}55` }}
                  >
                    <MessageCircle className="h-4 w-4 inline" /> WhatsApp
                  </a>
                </div>
              </ArticleCard>

              <ArticleCard
                id="quando"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="7) Quando Paylink USA è la soluzione giusta"
              >
                <P>Paylink USA è pensato per:</P>
                <List
                  items={[
                    "cantine con enoturisti americani",
                    "clienti che vogliono ricevere vino a casa negli USA",
                    "vendite occasionali o ricorrenti al cliente finale",
                    "chi vuole evitare blocchi, rimborsi e brutte sorprese",
                  ]}
                />
                <Quote>
                  Non è per chi cerca scorciatoie. È per chi vuole vendere negli USA in modo sostenibile.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<FileText className="h-5 w-5" />}
                title="In sintesi"
              >
                <List
                  items={[
                    "Non si può spedire vino come un pacco dall’Europa al consumatore USA in modo difendibile.",
                    "Serve un percorso di compliance label (spesso COLA).",
                    "Serve un importatore USA autorizzato.",
                    "Serve vendita domestica USA (post importazione corretta).",
                    "SPST Paylink USA rende possibile tutto questo senza soluzioni borderline.",
                  ]}
                />

                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<LinkIcon className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Quindi non posso mai spedire vino negli USA?">
                  Il punto è “al cliente finale dall’Europa come un pacco”: non è un modello scalabile e difendibile.
                  Il modello corretto è importazione + vendita domestica USA tramite soggetti autorizzati.
                </FaqItem>
                <FaqItem q="Se una volta è arrivato, vuol dire che è legale?">
                  No. Può significare che non è stata intercettata. Il rischio resta e aumenta con frequenza e volumi.
                </FaqItem>
                <FaqItem q="Paylink USA è per cantine o anche per e-commerce?">
                  È perfetto per cantine con enoturismo USA e per flussi B2C ricorrenti. Se hai un e-commerce, si valuta in base a volumi e canale.
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
        Vuoi capire se è il tuo caso?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Se hai enoturisti USA o clienti americani che chiedono consegna a casa, Paylink è la strada più pulita.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/spst-paylink"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Scopri Paylink USA <ArrowRight className="h-4 w-4" />
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
        Se vuoi B2C USA “vero”, serve struttura
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Importatore + compliance label + vendita domestica. Paylink USA nasce per rendere questo flusso semplice per la cantina.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/spst-paylink"
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Vai a Paylink USA
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
      <div className="text-sm font-semibold text-white/90">
        Vuoi capire se Paylink USA è adatto al tuo caso?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Se hai enoturisti USA o richieste ricorrenti, ti basta aprire la pagina e scriverci: ti guidiamo noi.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/spst-paylink"
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          https://www.spst.it/spst-paylink
        </a>
        <a
          href="https://wa.me/393201441789"
          className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          <MessageCircle className="h-4 w-4 inline" /> WhatsApp
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

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="pt-2 text-[13px] font-bold uppercase tracking-wider text-white/85">
      {children}
    </h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="m-0">{children}</p>;
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
        <span
          className="mt-0.5 h-2 w-2 rounded-full"
          style={{ background: SPST_ORANGE }}
        />
        <span>{children}</span>
      </div>
    </div>
  );
}

function QuoteStrong({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
        <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-300" />
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

function CheckPill({ text, bad, good }: { text: string; bad?: boolean; good?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80">
      <div className="flex items-start gap-2">
        {good ? (
          <BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-300" />
        ) : bad ? (
          <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-300" />
        ) : (
          <ShieldCheck className="mt-0.5 h-4 w-4 text-white/70" />
        )}
        <span>{text}</span>
      </div>
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
