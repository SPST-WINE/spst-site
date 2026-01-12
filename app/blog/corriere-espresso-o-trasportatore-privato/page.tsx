"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Timer,
  ShieldCheck,
  AlertTriangle,
  Boxes,
  Pallet,
  ArrowRight,
  MessageCircle,
  Info,
  Sparkles,
  Route,
  Package,
  CheckCircle2,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogCorriereEspressoVsTrasportatorePrivatoPage() {
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
            Logistica • Scelta canale • Rischio
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Spedizioni di vino:{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              corriere espresso o trasportatore privato?
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Differenze reali, pro e contro, e come scegliere senza sbagliare.
            Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#confronto"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai al confronto
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
              icon={<Timer className="h-5 w-5" />}
              title="Espresso = velocità"
              text="Ottimo per B2C, campioni e pochi colli. Ma la movimentazione è aggressiva."
            />
            <MiniCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Privato = controllo"
              text="Meno passaggi, più stabilità. Scelta naturale per pallet B2B e flussi continui."
            />
            <MiniCard
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Errore tipico"
              text="Confrontare solo il prezzo: spesso il costo vero arriva dopo (danni/extra)."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-white/70" />
              <div>
                Nota: articolo divulgativo. La scelta corretta dipende da volumi,
                destinazione, frequenza e rischio accettabile.
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
                  <TocLink href="#due-mondi" label="1. Due mondi diversi" />
                  <TocLink href="#espresso" label="2. Quando ha senso l’espresso" />
                  <TocLink href="#privato" label="3. Perché il privato è B2B" />
                  <TocLink href="#movimentazione" label="4. Il fattore movimentazione" />
                  <TocLink href="#multicollo" label="5. Multicollo: zona grigia" />
                  <TocLink href="#pallet" label="6. Pallet: scelta naturale" />
                  <TocLink href="#tempi-rischi" label="7. Tempi vs rischi" />
                  <TocLink href="#posizione" label="8. La posizione di SPST" />
                  <TocLink href="#confronto" label="9. Tabella confronto" />
                  <TocLink href="#sintesi" label="In sintesi" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="due-mondi"
                icon={<Route className="h-5 w-5" />}
                title="1) Due mondi diversi, non due prezzi diversi"
              >
                <P>
                  Non stiamo parlando dello stesso servizio con tariffe diverse.
                  Sono due modelli logistici con logiche operative differenti.
                </P>

                <div className="grid gap-3 sm:grid-cols-2">
                  <FeatureCard
                    title="🚚 Corriere espresso"
                    items={[
                      "Rete standardizzata",
                      "Hub di smistamento",
                      "Movimentazione automatizzata",
                      "Tempi rapidi",
                      "Progettato per pacchi (non per bottiglie)",
                    ]}
                  />
                  <FeatureCard
                    title="🚛 Trasportatore privato"
                    items={[
                      "Trasporto dedicato o semi-dedicato",
                      "Movimentazione più controllata",
                      "Meno passaggi",
                      "Tempi meno “espressi” ma stabili",
                      "Pensato per merce commerciale su pallet",
                    ]}
                  />
                </div>

                <QuoteStrong>
                  Confrontare solo il prezzo è l’errore più comune.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="espresso"
                icon={<Truck className="h-5 w-5" />}
                title="2) Corriere espresso: quando ha senso davvero"
              >
                <P>Il corriere espresso è indicato quando:</P>
                <List
                  items={[
                    "spedisci pochi colli",
                    "i volumi sono ridotti",
                    "la spedizione è B2C, campionatura o ad alta urgenza",
                  ]}
                />

                <SubTitle>Vantaggi</SubTitle>
                <List
                  items={[
                    "tempi rapidi",
                    "facilità di attivazione",
                    "tracking dettagliato",
                    "costi contenuti su piccoli volumi",
                  ]}
                />

                <SubTitle>Limiti strutturali</SubTitle>
                <List
                  items={[
                    "movimentazione aggressiva",
                    "passaggi multipli",
                    "urti, ribaltamenti, cadute",
                    "rischio alto con imballaggi non idonei",
                  ]}
                />

                <Quote>
                  Il corriere non distingue una bottiglia di vino da un altro pacco fragile, se non tramite l’imballo.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="privato"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="3) Trasportatore privato: perché è la scelta B2B"
              >
                <P>Il trasportatore privato entra in gioco quando:</P>
                <List
                  items={[
                    "spedisci pallet o multicollo importanti",
                    "il cliente è B2B",
                    "conta la continuità del flusso",
                    "vuoi ridurre al minimo il rischio",
                  ]}
                />

                <SubTitle>Vantaggi</SubTitle>
                <List
                  items={[
                    "meno passaggi",
                    "carico unitario",
                    "maggiore stabilità",
                    "minor rischio rottura",
                    "gestione più adatta al vino",
                  ]}
                />

                <SubTitle>Svantaggi</SubTitle>
                <List
                  items={[
                    "tempi meno “espressi”",
                    "costi minimi più alti",
                    "meno flessibile su singole bottiglie",
                  ]}
                />

                <QuoteStrong>
                  È il modello usato dal commercio professionale del vino.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="movimentazione"
                icon={<Boxes className="h-5 w-5" />}
                title="4) Il fattore chiave: movimentazione"
              >
                <P>
                  La differenza non è il camion: è come viene trattata la merce.
                  Il vino soffre la movimentazione, non la distanza.
                </P>

                <div className="grid gap-3 sm:grid-cols-2">
                  <FeatureCard
                    title="Corriere espresso"
                    items={[
                      "nastri automatici",
                      "cadute standard",
                      "carichi misti",
                      "zero gestione “su misura”",
                    ]}
                  />
                  <FeatureCard
                    title="Trasportatore privato"
                    items={[
                      "carico/scarico con transpallet o muletto",
                      "pallet fermi e compatti",
                      "meno vibrazioni",
                      "meno stress sul prodotto",
                    ]}
                  />
                </div>
              </ArticleCard>

              <ArticleCard
                id="multicollo"
                icon={<Package className="h-5 w-5" />}
                title="5) Multicollo: la zona grigia"
              >
                <P>
                  “Sono solo 5–10 cartoni, vado di espresso” è spesso la scelta che genera più danni.
                  È qui che l’imballaggio diventa cruciale e la decisione sbagliata si paga dopo.
                </P>

                <List
                  items={[
                    "Multicollo + espresso → richiede imballaggi specifici per vino",
                    "Multicollo + privato → riduce il rischio, ma spesso costa di più",
                  ]}
                />

                <QuoteStrong>
                  Multicollo non significa “semplice”: significa “più movimentazione”.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="pallet"
                icon={<Pallet className="h-5 w-5" />}
                title="6) Pallet: qui il corriere espresso non è la scelta giusta"
              >
                <P>
                  Sui pallet, il discorso è lineare: sono unità di carico pensate per movimentazione meccanica e camion.
                  Gli hub espressi sono un compromesso forzato.
                </P>

                <List
                  items={[
                    "Pallet + corriere espresso = compromesso forzato",
                    "Pallet + trasportatore privato = scelta naturale",
                  ]}
                />
              </ArticleCard>

              <ArticleCard
                id="tempi-rischi"
                icon={<Timer className="h-5 w-5" />}
                title="7) Tempi vs rischi: cosa stai davvero comprando"
              >
                <P>
                  Se scegli l’espresso, stai comprando velocità.
                  Se scegli il privato, stai comprando controllo.
                </P>

                <Quote>
                  Nel vino, spesso un giorno in più vale più di una bottiglia rotta, una contestazione o un cliente scontento.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="posizione"
                icon={<Sparkles className="h-5 w-5" />}
                title="8) La posizione operativa di SPST"
              >
                <P>SPST non spinge una soluzione unica. Noi:</P>
                <List
                  items={[
                    "analizziamo volumi e destinazione",
                    "valutiamo rischio e frequenza",
                    "proponiamo espresso quando ha senso",
                    "proponiamo trasportatore privato quando è la scelta corretta",
                    "spieghiamo prima cosa comporta ogni opzione",
                  ]}
                />

                <QuoteStrong>
                  Non vendiamo “spedizioni”. Vendiamo scelte consapevoli.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="confronto"
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="9) Schema rapido di confronto"
              >
                <CompareTable />
              </ArticleCard>

              <ArticleCard id="sintesi" icon={<ShieldCheck className="h-5 w-5" />} title="In sintesi">
                <List
                  items={[
                    "Non esiste “il miglior trasporto” in assoluto.",
                    "Esiste il trasporto giusto per ogni spedizione.",
                    "Sbagliare scelta costa più del risparmio iniziale.",
                    "SPST guida la scelta sulla base del flusso reale.",
                  ]}
                />

                <FinalCta />

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Nota finale: nel trasporto del vino, la differenza tra un buon risultato e un problema nasce quasi sempre prima del ritiro,
                  nella scelta del canale logistico.
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
        Hai dubbi sul canale giusto?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Inviaci volumi, destinazione e urgenza: ti diciamo subito se conviene espresso o privato (e cosa cambia in rischio/costi).
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
        Vuoi scegliere il canale giusto al primo colpo?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        SPST ti aiuta a bilanciare tempi, rischio e continuità del flusso (senza sorprese dopo).
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

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="pt-2 text-[13px] font-bold uppercase tracking-wider text-white/85">
      {children}
    </h4>
  );
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

function CompareTable() {
  const rows: Array<{ a: string; b: string; c: string }> = [
    { a: "Volumi piccoli", b: "✅", c: "❌" },
    { a: "B2C", b: "✅", c: "❌" },
    { a: "Campioni", b: "✅", c: "⚠️" },
    { a: "Multicollo", b: "⚠️", c: "✅" },
    { a: "Pallet B2B", b: "❌", c: "✅" },
    { a: "Rischio rotture", b: "Alto", c: "Basso" },
    { a: "Velocità", b: "Alta", c: "Media" },
    { a: "Stabilità", b: "Bassa", c: "Alta" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03] text-[12px] font-semibold uppercase tracking-wider text-white/70">
        <div className="px-4 py-3">Aspetto</div>
        <div className="px-4 py-3">Espresso</div>
        <div className="px-4 py-3">Privato</div>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-3 text-[13px] text-white/80">
            <div className="px-4 py-3">{r.a}</div>
            <div className="px-4 py-3">{r.b}</div>
            <div className="px-4 py-3">{r.c}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
