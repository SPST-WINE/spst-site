"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Euro,
  LifeBuoy,
  LaptopMinimal,
  Database,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  Info,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogPrezzoNonUnicaVariabilePage() {
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
            Operatività • Tecnologia • Supporto
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Spedizioni di vino:{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              perché il prezzo non è sempre l’unica variabile
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Supporto, tecnologia e dati contano più di qualche euro in meno.
            Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#indice"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai all’indice
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
              icon={<Euro className="h-5 w-5" />}
              title="Il prezzo è una foto"
              text="Dice quanto costa partire. Non dice cosa succede quando c’è un intoppo."
            />
            <MiniCard
              icon={<LifeBuoy className="h-5 w-5" />}
              title="Supporto = variabile nascosta"
              text="Quando qualcosa si blocca, la differenza tra servizi si vede subito."
            />
            <MiniCard
              icon={<Database className="h-5 w-5" />}
              title="Dati e processi scalano"
              text="Centralizzare info e documenti riduce errori e rende il flusso replicabile."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-white/70" />
              <div>
                Nota: articolo divulgativo. Nel vino, i problemi non sono
                un’eccezione: sono parte del processo. La qualità del processo
                conta più della tariffa “a colpo”.
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
              <div id="indice" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Indice
                </div>
                <div className="mt-3 grid gap-2 text-sm">
                  <TocLink href="#prezzo-processo" label="1. Il prezzo è una foto" />
                  <TocLink href="#supporto" label="2. Supporto" />
                  <TocLink href="#tecnologia" label="3. Tecnologia e web app" />
                  <TocLink href="#dati" label="4. Dati centralizzati" />
                  <TocLink href="#consulenza" label="5. Consulenza operativa" />
                  <TocLink href="#prezzo-basso" label="6. Il prezzo più basso costa di più" />
                  <TocLink href="#modello-spst" label="7. Il modello SPST" />
                  <TocLink href="#prezzo-dopo" label="8. Quando il prezzo conta davvero" />
                  <TocLink href="#sintesi" label="In sintesi" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="prezzo-processo"
                icon={<Euro className="h-5 w-5" />}
                title="1) Il prezzo fotografa solo un momento, non il processo"
              >
                <P>
                  La tariffa racconta quanto costa far partire una spedizione, ma non racconta
                  cosa succede quando c’è un intoppo: documenti, blocchi, richieste, danni, ritardi.
                </P>
                <QuoteStrong>
                  Il prezzo è una fotografia. La logistica è un film.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="supporto"
                icon={<LifeBuoy className="h-5 w-5" />}
                title="2) Supporto: quando qualcosa va storto, la differenza si vede subito"
              >
                <P>Nel trasporto del vino possono succedere:</P>
                <List items={["blocchi", "richieste documentali", "danni", "ritardi", "incomprensioni col destinatario"]} />
                <P>
                  In quei momenti la domanda vera diventa: <strong>chi mi aiuta a risolvere?</strong>
                </P>
                <div className="grid gap-3 sm:grid-cols-2">
                  <FeatureCard
                    title="Prezzo basso (spesso)"
                    items={[
                      "supporto minimo",
                      "solo tracking",
                      "gestione problemi “a carico del cliente”",
                    ]}
                  />
                  <FeatureCard
                    title="Servizio strutturato"
                    items={[
                      "presa in carico del problema",
                      "interfaccia con corrieri/trasportatori",
                      "decisioni operative guidate",
                      "riduzione errori evitabili",
                    ]}
                  />
                </div>
                <Quote>
                  Il supporto non è un extra: è una variabile di costo nascosta.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="tecnologia"
                icon={<LaptopMinimal className="h-5 w-5" />}
                title="3) Tecnologia e web app: perché “scrivere una mail” non scala"
              >
                <P>
                  Email, Excel e documenti sparsi funzionano finché fai poche spedizioni.
                  Quando cresci, diventano il collo di bottiglia.
                </P>
                <P>Una web app dedicata permette di:</P>
                <List
                  items={[
                    "centralizzare dati di spedizione",
                    "ridurre errori manuali",
                    "tracciare stato e storico",
                    "tagliare tempi morti",
                    "sapere sempre “a che punto siamo”",
                  ]}
                />
                <QuoteStrong>La tecnologia non serve a fare scena. Serve a non sbagliare.</QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="dati"
                icon={<Database className="h-5 w-5" />}
                title="4) Dati centralizzati: meno caos, più controllo"
              >
                <P>
                  Ogni spedizione porta dati, documenti, regimi fiscali, corriere, tracking, note.
                  Se questi elementi sono sparsi o duplicati, gli errori diventano inevitabili.
                </P>
                <P>Centralizzare i dati significa:</P>
                <List
                  items={[
                    "ridurre attriti",
                    "prendere decisioni più rapide",
                    "avere uno storico utilizzabile",
                    "migliorare negoziazioni future",
                    "costruire modelli ripetibili",
                  ]}
                />
                <Quote>Il dato è una leva operativa, non un archivio passivo.</Quote>
              </ArticleCard>

              <ArticleCard
                id="consulenza"
                icon={<ClipboardCheck className="h-5 w-5" />}
                title="5) Consulenza operativa: evitare errori prima che costino"
              >
                <P>
                  Molti errori nel vino nascono prima del ritiro, nella scelta sbagliata del modello.
                </P>
                <List
                  items={[
                    "spedizione diretta quando serviva struttura",
                    "pallet non sovrapponibile non dichiarato",
                    "campionature diventate flusso commerciale",
                    "B2B trattato come B2C",
                  ]}
                />
                <QuoteStrong>Un errore evitato vale più di uno sconto.</QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="prezzo-basso"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="6) Perché il prezzo più basso spesso costa di più"
              >
                <P>
                  Nel breve risparmi qualche euro. Nel medio perdi tempo, gestisci problemi, rifai spedizioni.
                  Nel lungo il modello non scala.
                </P>
                <QuoteStrong>Il prezzo più basso è spesso il più caro nel tempo.</QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="modello-spst"
                icon={<Sparkles className="h-5 w-5" />}
                title="7) Il modello SPST: non solo spedizioni"
              >
                <P>SPST non compete solo sulla tariffa. Il nostro approccio include:</P>
                <List
                  items={[
                    "supporto operativo reale",
                    "consulenza prima della spedizione",
                    "web app dedicata",
                    "dati centralizzati",
                    "gestione documentale",
                    "visione di medio-lungo periodo",
                  ]}
                />
                <Quote>
                  Non siamo “più cari”. Siamo più strutturati.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="prezzo-dopo"
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="8) Quando il prezzo torna a essere importante (nel modo giusto)"
              >
                <P>
                  Una volta che modello, dati e flussi sono corretti, anche il prezzo migliora:
                  meno errori, meno extra, migliore negoziazione.
                </P>
                <QuoteStrong>Il prezzo è l’ultimo anello, non il primo.</QuoteStrong>
              </ArticleCard>

              <ArticleCard id="sintesi" icon={<CheckCircle2 className="h-5 w-5" />} title="In sintesi">
                <List
                  items={[
                    "Il prezzo da solo non descrive una spedizione di vino.",
                    "Supporto, tecnologia e dati fanno la differenza.",
                    "Risparmiare all’inizio spesso costa dopo.",
                    "SPST lavora sul processo, non sul singolo pacco.",
                  ]}
                />

                <FinalCta />

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Nota finale: nel vino, la logistica è parte del processo commerciale. La solidità del flusso vale più della tariffa “spot”.
                </div>
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
        Vuoi un preventivo “giusto”, non solo “basso”?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Inviaci destinazione, quantità, tipo spedizione: ti rispondiamo con una soluzione coerente (e senza sorprese operative).
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
        Vuoi strutturare un flusso che scala?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        SPST lavora su supporto, dati e processi: così riduci problemi e migliori anche le condizioni economiche nel tempo.
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
          Richiedi una quotazione <ArrowRight className="h-4 w-4" />
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

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-sm font-semibold text-white/90">{title}</div>
      <ul className="mt-2 ml-4 list-disc space-y-1 text-[13px] text-white/75">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
