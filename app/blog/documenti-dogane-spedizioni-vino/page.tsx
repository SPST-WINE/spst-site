"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Stamp,
  Globe2,
  FileCheck2,
  Package,
  Truck,
  MapPin,
  AlertTriangle,
  Info,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogDocumentiDoganeVinoPage() {
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
            Dogane • Documenti • Processo
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Documenti per le spedizioni di vino e dogane
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Cosa sono, quando entrano in gioco e perché sono il vero nodo della logistica
            internazionale. Ultimo aggiornamento:{" "}
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
              icon={<Stamp className="h-5 w-5" />}
              title="La dogana non “blocca” per sport"
              text="Di solito segnala incoerenze a monte: valore, descrizione, modello, documenti."
            />
            <MiniCard
              icon={<FileText className="h-5 w-5" />}
              title="Documenti = parte della spedizione"
              text="Nel vino la componente informativa pesa quanto il trasporto."
            />
            <MiniCard
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Intra-UE ≠ senza regole"
              text="Niente dogana, ma restano IVA, accise e controlli a posteriori."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-white/70" />
              <div>
                Nota: articolo divulgativo. Requisiti e documenti possono variare per destinazione,
                tipo vino e modello (B2B/B2C/campionature).
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
                  <TocLink href="#cosa-sono-dogane" label="1. Cosa sono le dogane" />
                  <TocLink href="#quando-dogana" label="2. Quando c’è dogana e quando no" />
                  <TocLink href="#vino-sensibile" label="3. Perché il vino è “sensibile”" />
                  <TocLink href="#documenti" label="4. Documenti fondamentali" />
                  <TocLink href="#sintomo" label="5. “Dogana ha bloccato” = sintomo" />
                  <TocLink href="#corriere" label="6. Ruolo del corriere (limiti)" />
                  <TocLink href="#perche-cambia" label="7. Perché conoscere i documenti cambia tutto" />
                  <TocLink href="#spst" label="8. Punto di vista SPST" />
                  <TocLink href="#sintesi" label="In sintesi" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="cosa-sono-dogane"
                icon={<Stamp className="h-5 w-5" />}
                title="1) Cosa sono le dogane (in parole semplici)"
              >
                <P>
                  Le dogane sono autorità pubbliche che controllano ingresso/uscita merci, correttezza
                  fiscale e commerciale, e la coerenza di ciò che viene dichiarato (valore, origine,
                  classificazione, requisiti).
                </P>
                <QuoteStrong>
                  La dogana non spedisce, non vende e non trasporta: verifica che ciò che dichiari sia coerente.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="quando-dogana"
                icon={<Globe2 className="h-5 w-5" />}
                title="2) Quando c’è dogana e quando no"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <FeatureCard
                    title="Spedizioni intra-UE"
                    badge="🚫 Niente dogana"
                    items={[
                      "non ci sono dichiarazioni import/export",
                      "non ci sono dazi",
                      "restano IVA e accise (vino = soggetto)",
                      "restano controlli a posteriori",
                    ]}
                  />
                  <FeatureCard
                    title="Spedizioni extra-UE"
                    badge="✅ Dogana sempre"
                    items={[
                      "dichiarazione di esportazione (uscita UE)",
                      "dichiarazione di importazione (Paese destino)",
                      "documentazione completa e coerente",
                    ]}
                  />
                </div>

                <Quote>
                  L’assenza di dogana non significa assenza di regole: nel vino restano IVA/accise e tracciabilità.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="vino-sensibile"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="3) Perché il vino è un prodotto “sensibile”"
              >
                <P>
                  Il vino è alcolico e alimentare: quindi è spesso soggetto ad accise, controlli e restrizioni
                  che rendono più frequenti verifiche e richieste documentali.
                </P>
                <QuoteStrong>Con il vino, le approssimazioni durano poco.</QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="documenti"
                icon={<FileText className="h-5 w-5" />}
                title="4) I documenti fondamentali per spedire vino"
              >
                <DocCard
                  icon={<FileText className="h-5 w-5" />}
                  title="1) Fattura commerciale / Pro-forma"
                  text="Documento principale: descrizione, valore, scopo spedizione. Anche per campioni serve una pro-forma coerente."
                  bullets={[
                    "mittente/destinatario",
                    "descrizione chiara del vino",
                    "quantità e formato",
                    "valore e valuta",
                    "Incoterm (se applicabile)",
                  ]}
                />
                <DocCard
                  icon={<Package className="h-5 w-5" />}
                  title="2) Packing list"
                  text="Dettaglia colli, contenuti, pesi e dimensioni. Non sempre obbligatoria, ma nel vino è fortemente consigliata (multicollo/pallet)."
                  bullets={["numero colli", "contenuto per collo", "peso e dimensioni"]}
                />
                <DocCard
                  icon={<FileCheck2 className="h-5 w-5" />}
                  title="3) HS code (classificazione)"
                  text="Codice che identifica la merce. Errori qui generano blocchi, rivalutazioni e richieste aggiuntive."
                  bullets={["HS code corretto per vino/alcolici", "coerenza con descrizione e valore"]}
                />
                <DocCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="4) Origine della merce"
                  text="Indica dove è stato prodotto il vino. In alcuni casi impatta su accordi o riduzioni daziarie."
                  bullets={["dichiarazione su fattura", "certificato specifico se richiesto"]}
                />
                <DocCard
                  icon={<Truck className="h-5 w-5" />}
                  title="5) Documento di trasporto / Lettera di vettura"
                  text="Traccia fisicamente la spedizione e collega merce e documenti."
                  bullets={["tracking/numero spedizione", "collegamento con fattura e colli"]}
                />
                <DocCard
                  icon={<Stamp className="h-5 w-5" />}
                  title="6) Dichiarazione doganale (extra-UE)"
                  text="Dichiarazione ufficiale alla dogana: si basa su fattura, HS code, valore, origine e regime doganale."
                  bullets={[
                    "presentata da operatore doganale o corriere (a seconda del modello)",
                    "se i documenti a monte sono sbagliati, la dogana non può “aggiustarli”",
                  ]}
                />
              </ArticleCard>

              <ArticleCard
                id="sintomo"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="5) Perché “la dogana ha bloccato” è quasi sempre un sintomo"
              >
                <P>
                  Quando una spedizione si ferma, raramente è “per caso”. Di solito emergono incoerenze:
                  descrizioni vaghe, valori non credibili, documenti incompleti o modello sbagliato.
                </P>
                <QuoteStrong>La dogana segnala un problema. Non lo crea.</QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="corriere"
                icon={<Truck className="h-5 w-5" />}
                title="6) Il ruolo del corriere (e i suoi limiti)"
              >
                <P>
                  Il corriere trasporta e può trasmettere documenti, ma non decide le regole e non può
                  sanare errori strutturali. In caso di problemi, il rischio resta sul mittente.
                </P>
                <Quote>
                  Il corriere è un canale operativo, non un “paracadute normativo”.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="perche-cambia"
                icon={<Info className="h-5 w-5" />}
                title="7) Perché conoscere questi documenti cambia tutto"
              >
                <P>
                  Capire dogane, documenti e ruoli significa prevenire blocchi, scegliere modelli corretti,
                  evitare costi inutili e sapere quando fermarsi prima.
                </P>
                <QuoteStrong>La logistica non è solo movimento. È informazione.</QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="8) Il punto di vista SPST"
              >
                <P>
                  SPST non si limita a spedire: verifichiamo i documenti prima, aiutiamo a scegliere il modello
                  corretto e lavoriamo con operatori doganali/importatori per tradurre regole in soluzioni operative.
                </P>
                <Quote>
                  Una spedizione ben documentata viaggia meglio di una veloce.
                </Quote>

                <FinalCta />
              </ArticleCard>

              <ArticleCard id="sintesi" icon={<CheckCircle2 className="h-5 w-5" />} title="In sintesi">
                <List
                  items={[
                    "Le dogane controllano, non ostacolano.",
                    "I problemi nascono quasi sempre nei documenti o nel modello scelto.",
                    "Il vino è un prodotto sensibile: le incoerenze emergono prima.",
                    "Documenti e dati sono parte integrante della spedizione.",
                    "SPST lavora sul processo, non solo sul trasporto.",
                  ]}
                />
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Nota finale: requisiti documentali e controlli variano per destinazione e modello operativo.
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
        Vuoi evitare blocchi e richieste infinite?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Mandaci destinazione + tipo spedizione + lista prodotti: ti diciamo subito quali documenti servono e dove si rischia davvero.
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
        Vuoi un check documentale prima della partenza?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Inviaci la pro-forma/fattura e la lista colli: se qualcosa non torna (valore, HS code, descrizione, origine), lo sistemiamo prima che diventi un blocco.
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

function DocCard({
  icon,
  title,
  text,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
          {icon}
        </div>
        <div>
          <div className="text-[15px] font-semibold text-white/90">{title}</div>
          <div className="mt-1 text-[13px] text-white/75">{text}</div>
        </div>
      </div>
      <ul className="mt-3 ml-4 list-disc space-y-1 text-[13px] text-white/75">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
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

function FeatureCard({
  title,
  badge,
  items,
}: {
  title: string;
  badge: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-white/90">{title}</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
          {badge}
        </div>
      </div>
      <ul className="mt-2 ml-4 list-disc space-y-1 text-[13px] text-white/75">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
