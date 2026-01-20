"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Layers,
  Ruler,
  StretchHorizontal,
  ShieldCheck,
  AlertTriangle,
  Truck,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Info,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogPallettizzazioneVinoB2BPage() {
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
            B2B • Pallet • Best practice
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Pallettizzazione corretta del vino{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              nelle spedizioni B2B
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Reggette, film, angolari, altezza, layout e perché un pallet non sovrapponibile
            costa sempre di più. Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#sovrapponibile"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Pallet sovrapponibile vs no
            </a>

            <a
              href="/portale-quotazioni"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Richiedi quotazione <ArrowRight className="h-4 w-4" />
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
              icon={<Layers className="h-5 w-5" />}
              title="Layout “a mattone”"
              text="Incastro, top piano, niente sbalzi: la stabilità si costruisce col layout."
            />
            <MiniCard
              icon={<Ruler className="h-5 w-5" />}
              title="Altezza = costo"
              text="Troppo alto → instabile → spesso non sovrapponibile → extra inevitabili."
            />
            <MiniCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Film + reggette"
              text="Non “avvolgere tanto”: partire dal bancale e rendere carico e pallet un blocco unico."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-white/70" />
              <div>
                Nota: indicazioni operative “di campo”. Requisiti e tolleranze possono variare per vettore,
                tratta e tipologia di merce/packaging.
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
                  <TocLink href="#principio" label="1. Il pallet come unità" />
                  <TocLink href="#layout" label="2. Layout dei colli" />
                  <TocLink href="#altezza" label="3. Altezza massima" />
                  <TocLink href="#reggette" label="4. Reggette" />
                  <TocLink href="#film" label="5. Film estensibile" />
                  <TocLink href="#angolari" label="6. Angolari" />
                  <TocLink href="#sovrapponibile" label="7. Sovrapponibile vs NO" />
                  <TocLink href="#costi" label="8. Perché costa di più" />
                  <TocLink href="#spst" label="9. Come lavora SPST" />
                  <TocLink href="#schema" label="10. Schema rapido" />
                  <TocLink href="#sintesi" label="In sintesi" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="principio"
                icon={<Boxes className="h-5 w-5" />}
                title="1) Un principio fondamentale: il pallet è un’unità strutturale"
              >
                <P>
                  Un pallet non è la somma dei cartoni: è un’unità di carico che deve viaggiare,
                  essere sollevata e stoccata come blocco unico.
                </P>
                <P>Se il pallet si muove, flette, si deforma o non è stabile:</P>
                <QuoteStrong>
                  tutta la spedizione è a rischio, anche con buon vino e buoni cartoni.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="layout"
                icon={<Layers className="h-5 w-5" />}
                title="2) Layout dei colli: come disporre le scatole correttamente"
              >
                <H4>Regole base</H4>
                <List
                  items={[
                    "Disporre i cartoni a incastro (schema “a mattone”).",
                    "Evitare colonne verticali non alternate.",
                    "Mantenere la superficie superiore piana.",
                    "Evitare sbalzi laterali.",
                  ]}
                />
                <H4>Errori comuni</H4>
                <List
                  items={[
                    "Cartoni più piccoli sopra cartoni più grandi.",
                    "Forme irregolari e vuoti non compensati.",
                    "Top non piano (crea punti di schiacciamento).",
                  ]}
                />
                <P>👉 Un cattivo layout aumenta rischio di schiacciamento e ribaltamento.</P>
              </ArticleCard>

              <ArticleCard
                id="altezza"
                icon={<Ruler className="h-5 w-5" />}
                title="3) Altezza massima del pallet: più alto ≠ più efficiente"
              >
                <P>Nel vino B2B l’altezza conta moltissimo.</P>
                <H4>Indicazioni operative</H4>
                <List items={["Altezza tipica sicura: 120–160 cm (pallet incluso)."]} />
                <P>Oltre questa soglia:</P>
                <List items={["aumenta l’instabilità", "aumenta il rischio ribaltamento", "diminuisce la sovrapponibilità"]} />

                <Quote>
                  Un pallet troppo alto è più fragile e viene spesso trattato come non sovrapponibile: genera costi aggiuntivi.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="reggette"
                icon={<StretchHorizontal className="h-5 w-5" />}
                title="4) Reggette: quando e come usarle"
              >
                <P>Le reggette tengono insieme pallet e carico, riducono lo slittamento e aumentano rigidità.</P>
                <H4>Best practice</H4>
                <List
                  items={[
                    "Almeno 2 reggette longitudinali.",
                    "Meglio se integrate con film.",
                    "Ben tese, senza schiacciare i cartoni.",
                  ]}
                />
                <QuoteStrong>
                  Reggette da sole non bastano se il pallet non è ben costruito.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="film"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="5) Film estensibile: non serve “avvolgere tanto”, serve farlo bene"
              >
                <P>Il film stabilizza, protegge e rende carico e bancale un unico blocco.</P>
                <H4>Come usarlo correttamente</H4>
                <List
                  items={[
                    "Partire dal bancale, non dal primo cartone.",
                    "Più giri nei punti critici (base e sommità).",
                    "Tensione uniforme.",
                    "Coprire tutto il perimetro.",
                  ]}
                />
                <H4>Errori frequenti</H4>
                <List
                  items={[
                    "Film solo sui cartoni (pallet “slegato”).",
                    "Avvolgimento troppo lento / senza tensione.",
                    "Film solo estetico.",
                  ]}
                />
              </ArticleCard>

              <ArticleCard
                id="angolari"
                icon={<Truck className="h-5 w-5" />}
                title="6) Angolari: quando servono davvero"
              >
                <P>
                  Gli angolari proteggono gli spigoli, distribuiscono la pressione e aiutano la sovrapponibilità.
                  Sono fortemente consigliati quando:
                </P>
                <List
                  items={[
                    "il pallet è alto",
                    "i cartoni non sono molto rigidi",
                    "il carico viaggerà a lungo",
                    "è previsto stoccaggio intermedio",
                  ]}
                />
                <Quote>
                  Gli angolari costano poco e prevengono problemi grossi.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="sovrapponibile"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="7) Il punto cruciale: pallet sovrapponibile vs non sovrapponibile"
              >
                <H4>Pallet sovrapponibile</H4>
                <List
                  items={[
                    "Può sostenere peso sopra.",
                    "Ha superficie superiore piana.",
                    "È stabile e compatto.",
                    "Ottimizza lo spazio camion → costa meno.",
                  ]}
                />

                <H4>Pallet NON sovrapponibile ⚠️</H4>
                <P>Un pallet diventa non sovrapponibile quando:</P>
                <List
                  items={[
                    "è troppo alto",
                    "è instabile",
                    "ha carico irregolare",
                    "ha rischio schiacciamento",
                    "non può sostenere peso sopra",
                  ]}
                />

                <QuoteStrong>
                  Questo genera sempre un costo accessorio: non è un’opinione, è spazio perso misurabile nel camion.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="costi"
                icon={<Truck className="h-5 w-5" />}
                title="8) Perché questi costi non dipendono dal corriere"
              >
                <P>
                  Se un trasportatore applica supplementi per pallet non sovrapponibile o gestione particolare,
                  non “sta approfittando”: sta adattando il prezzo a un vincolo fisico reale.
                </P>
                <Quote>
                  Nessun trasportatore può regalare spazio perso.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<Sparkles className="h-5 w-5" />}
                title="9) Come lavora SPST sulla pallettizzazione"
              >
                <List
                  items={[
                    "Verifichiamo prima se un pallet sarà sovrapponibile.",
                    "Suggeriamo modifiche di layout.",
                    "Consigliamo altezza corretta, uso di angolari e stabilizzazione adeguata.",
                    "Avvisiamo prima se un pallet genererà costi accessori.",
                  ]}
                />
                <QuoteStrong>
                  Il nostro obiettivo non è applicare extra: è evitarli quando possibile.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="schema"
                icon={<Layers className="h-5 w-5" />}
                title="10) Schema rapido di buone pratiche"
              >
                <Table />
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<Boxes className="h-5 w-5" />}
                title="In sintesi"
              >
                <List
                  items={[
                    "La pallettizzazione è parte integrante del trasporto B2B.",
                    "Un pallet instabile genera rischi e costi.",
                    "Un pallet non sovrapponibile costa sempre di più.",
                    "SPST lavora per ottimizzare carico, sicurezza e costi.",
                  ]}
                />
                <FinalCta />
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
        Vuoi evitare extra e contestazioni?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Inviaci foto pallet + altezza totale + numero colli. Ti diciamo subito se è sovrapponibile e come migliorarlo.
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
          href="/portale-quotazioni"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Richiedi quotazione <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">
        Vuoi spedire pallet B2B senza costi “a sorpresa”?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        SPST verifica sovrapponibilità e layout prima della partenza, così riduci extra, danni e contestazioni allo scarico.
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
          href="/portale-quotazioni"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Richiedi quotazione <ArrowRight className="h-4 w-4" />
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

function Table() {
  const rows: Array<[string, string]> = [
    ["Layout colli", "A incastro (schema “a mattone”)"],
    ["Altezza totale", "≤ 160 cm (pallet incluso)"],
    ["Reggette", "Min. 2 longitudinali (meglio con film)"],
    ["Film", "Dal bancale + carico, tensione uniforme"],
    ["Angolari", "Consigliati (soprattutto pallet alti/viaggi lunghi)"],
    ["Superficie top", "Piana, senza avvallamenti/sbalzi"],
    ["Sovrapponibilità", "Sempre valutata prima del ritiro"],
  ];

  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-white/10">
      <div className="grid">
        {rows.map(([k, v], i) => (
          <div
            key={i}
            className="grid grid-cols-[.38fr_.62fr] gap-3 border-b border-white/10 bg-white/[0.02] p-4 last:border-b-0"
          >
            <div className="text-[12px] font-semibold uppercase tracking-wider text-white/65">
              {k}
            </div>
            <div className="text-[14px] text-white/85">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
