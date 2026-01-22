"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Globe2,
  Stamp,
  Building2,
  Truck,
  Gavel,
  ArrowRight,
  MessageCircle,
  Info,
  Sparkles,
  Link as LinkIcon,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogCampioniVinoUsaPage() {
  const { t } = useLocale();
  
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
            USA • Campionature • Compliance
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Campioni di vino{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              negli Stati Uniti
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Cosa è possibile, cosa no, e perché “sono solo campioni” non è una scusa valida.
            Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#importatore"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Il nodo: importatore USA
            </a>

            <a
              href="/spst-paylink"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Paylink USA <ArrowRight className="h-4 w-4" />
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
              icon={<Gavel className="h-5 w-5" />}
              title="Niente scorciatoie"
              text="Negli USA “campione” non crea una categoria semplificata per l’alcol."
            />
            <MiniCard
              icon={<Stamp className="h-5 w-5" />}
              title="COLA spesso necessaria"
              text="Esenzioni esistono ma sono limitate, non automatiche e non scalabili."
            />
            <MiniCard
              icon={<Building2 className="h-5 w-5" />}
              title="Serve un Importer of Record"
              text="Senza soggetto USA autorizzato, il rischio è totale sul mittente."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-white/70" />
              <div>
                Nota: articolo divulgativo. La normativa USA su alcolici è multilivello (federale + statale) e
                può variare per caso d’uso e destinazione.
              </div>
            </div>
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
                  <TocLink href="#intro" label="1. “Campione” non semplifica" />
                  <TocLink href="#regolatori" label="2. Chi regola l’ingresso" />
                  <TocLink href="#cola" label="3. Serve una COLA?" />
                  <TocLink href="#importatore" label="4. Serve sempre importatore" />
                  <TocLink href="#passa" label="5. “Arriva lo stesso”" />
                  <TocLink href="#problemi" label="6. Quando diventa serio" />
                  <TocLink href="#modello" label="7. L’unico modello corretto" />
                  <TocLink href="#spst" label="8. Il punto di vista SPST" />
                  <TocLink href="#sintesi" label="9. In sintesi" />
                  <TocLink href="#collegati" label="Articoli collegati" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard id="intro" icon={<AlertTriangle className="h-5 w-5" />} title="1) Negli USA “campione” non è una categoria semplificata">
                <P>
                  Negli Stati Uniti non esiste una scorciatoia normativa per i campioni di vino.
                  Dal punto di vista delle autorità: il vino è un alcolico, e l’alcol è fortemente regolamentato.
                </P>
                <QuoteStrong>
                  Se il vino entra negli USA, entra nel mercato regolato degli alcolici — anche se è gratuito, per degustazione o valutazione.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard id="regolatori" icon={<Globe2 className="h-5 w-5" />} title="2) Chi regola l’ingresso del vino negli Stati Uniti">
                <P>A livello federale, i due attori principali sono:</P>
                <List
                  items={[
                    "TTB (Alcohol and Tobacco Tax and Trade Bureau): etichettatura (COLA), licenze, excise tax federali.",
                    "CBP (U.S. Customs and Border Protection): ingresso doganale.",
                  ]}
                />
                <P>
                  A questo si aggiungono autorità statali e regole di distribuzione (three-tier system).
                  Una dicitura sulla pro-forma non “bypassa” un sistema stratificato.
                </P>
              </ArticleCard>

              <ArticleCard id="cola" icon={<Stamp className="h-5 w-5" />} title="3) Serve una COLA anche per i campioni?">
                <P>
                  Nella maggior parte dei casi sì: la COLA (Certificate of Label Approval) approva l’etichetta ed è richiesta prima dell’importazione.
                </P>
                <P>
                  Esistono esenzioni limitate (quantitativi molto ridotti, casi specifici come fiere/analisi), ma:
                </P>
                <List items={["non sono automatiche", "non sono generalizzabili", "non sono pensate per spedizioni ripetute"]} />
                <Quote>
                  Basare un modello su “forse rientriamo nell’esenzione” non è sostenibile.
                </Quote>
              </ArticleCard>

              <ArticleCard id="importatore" icon={<Building2 className="h-5 w-5" />} title="4) Il punto chiave: serve sempre un importatore">
                <P>
                  Negli USA solo un soggetto con licenza federale può importare vino. Il destinatario non può essere un privato come importatore,
                  e senza Importer of Record la spedizione è irregolare.
                </P>
                <QuoteStrong>
                  Senza importatore USA autorizzato, il vino può essere bloccato o distrutto e il rischio è totalmente sul mittente.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard id="passa" icon={<Truck className="h-5 w-5" />} title="5) Perché allora “molti dicono che spedisce campioni e arriva tutto”?">
                <P>
                  A volte piccoli quantitativi passano senza controlli o senza approfondimenti. Ma questo:
                </P>
                <List items={["non crea una prassi legale", "non è replicabile", "non è difendibile"]} />
                <P>
                  Quando la frequenza cresce, il valore aumenta o il mittente diventa ricorrente,
                  i controlli arrivano spesso “dopo”.
                </P>
              </ArticleCard>

              <ArticleCard id="problemi" icon={<AlertTriangle className="h-5 w-5" />} title="6) Quando una campionatura USA diventa un problema serio">
                <P>I problemi iniziano quando:</P>
                <List
                  items={[
                    "invii campioni in modo sistematico a buyer/importatori/distributori",
                    "spedisci più bottiglie o più spedizioni ravvicinate",
                    "non esiste un soggetto USA responsabile del flusso",
                  ]}
                />
                <Quote>
                  In quel momento, la campionatura viene trattata come importazione commerciale e richiede tutto ciò che una vera importazione richiede.
                </Quote>
              </ArticleCard>

              <ArticleCard id="modello" icon={<ShieldCheck className="h-5 w-5" />} title="7) L’unico modo corretto di spedire campioni di vino negli USA">
                <P>Il flusso difendibile è sempre questo:</P>
                <List
                  items={[
                    "Importer of Record USA autorizzato",
                    "valutazione COLA o esenzione applicabile",
                    "ingresso doganale regolare",
                    "gestione excise tax federali e statali",
                    "consegna al destinatario finale (buyer, distributore, sommelier, ecc.)",
                  ]}
                />
                <QuoteStrong>
                  Non è “plug & play”, ma è l’unico modello sostenibile.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard id="spst" icon={<Sparkles className="h-5 w-5" />} title="8) Il punto di vista SPST">
                <List
                  items={[
                    "Distinguiamo tra curiosità esplorativa e mercato reale.",
                    "Segnaliamo quando una campionatura sta diventando un rischio.",
                    "Costruiamo flussi con importatori USA autorizzati.",
                  ]}
                />
                <Quote>
                  Gli USA non perdonano l’improvvisazione: non applichiamo logiche europee a un mercato diverso.
                </Quote>
              </ArticleCard>

              <ArticleCard id="sintesi" icon={<FileText className="h-5 w-5" />} title="9) In sintesi">
                <List
                  items={[
                    "“Campione” non significa “libero ingresso” negli USA.",
                    "Non si può spedire vino direttamente a un privato come fosse un pacco normale.",
                    "Senza importatore la spedizione è irregolare.",
                    "Serve struttura anche per i campioni.",
                    "Le spedizioni “andate a buon fine” non fanno giurisprudenza.",
                  ]}
                />
                <FinalCta />
              </ArticleCard>

              <ArticleCard id="collegati" icon={<LinkIcon className="h-5 w-5" />} title="Articoli collegati consigliati">
                <div className="grid gap-3 sm:grid-cols-2">
                  <RelatedLink
                    href="/blog/spedire-vino-b2c-europa"
                    title="Come spedire vino al cliente finale in Europa"
                    desc="Perché la spedizione diretta non è legale e qual è il modello corretto."
                  />
                  <RelatedLink
                    href="/blog/come-spedire-vino-usa"
                    title="Come spedire vino al cliente finale negli Stati Uniti (guida pratica)"
                    desc="La guida operativa e l’introduzione a Paylink USA."
                  />
                  <RelatedLink
                    href="/spst-paylink"
                    title="SPST Paylink USA: come funziona"
                    desc="Vendita domestica USA dopo importazione corretta, senza scorciatoie."
                  />
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Nota finale: le informazioni hanno finalità divulgative. Norme e prassi variano per Stato e casistica.
                </div>
              </ArticleCard>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ------------------------ CTA blocks ------------------------ */

function CtaBox() {
  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
        Hai un buyer USA e vuoi inviare campioni?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Dicci Stato, quantità e tipologia vini. Ti diciamo subito se serve importatore/COLA e qual è il flusso corretto.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="https://wa.me/393201441789"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="/spst-paylink"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Paylink USA <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">
        Vuoi spedire negli USA senza “tentativi” e senza rischio?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        SPST lavora con importatori USA autorizzati e imposta flussi difendibili per campioni e B2C.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="https://wa.me/393201441789"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="/spst-paylink"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Scopri Paylink USA <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ------------------------ UI helpers ------------------------ */

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
        <span className="mt-0.5 h-2 w-2 rounded-full" style={{ background: SPST_ORANGE }} />
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

function RelatedLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
    >
      <div className="text-[14px] font-semibold text-white/90 group-hover:text-white">
        {title}
      </div>
      <div className="mt-1 text-[12px] text-white/70">{desc}</div>
      <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-orange-200">
        Leggi <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}
