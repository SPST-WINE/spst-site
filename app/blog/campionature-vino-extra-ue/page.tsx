"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  FileText,
  AlertTriangle,
  ShieldCheck,
  ClipboardList,
  Receipt,
  Box,
  Plane,
  MessageCircle,
  ArrowRight,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogCampionatureExtraUEPage() {
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
            Extra-UE • Campionature • Dogana
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Come spedire campionature di vino{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              fuori dall’Unione Europea
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Cosa è obbligatorio, cosa è tollerato, e dove iniziano i problemi. Per le dogane
            extra-UE “campionatura” non è una categoria giuridica autonoma: contano merce,
            valore e scopo. Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#documenti"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai ai documenti
            </a>

            <a
              href="https://wa.me/393201441789"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href="/portale-quotazioni"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Richiedi quotazione <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Quick cards */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <MiniCard
              icon={<Globe2 className="h-5 w-5" />}
              title="“Sample” non basta"
              text="Per le dogane contano merce, valore e motivo d’ingresso. La dicitura aiuta ma non elimina obblighi."
            />
            <MiniCard
              icon={<ClipboardList className="h-5 w-5" />}
              title="Documenti sempre"
              text="Pro-forma, packing list, HS code, origine: senza questi il pacco è non dichiarabile."
            />
            <MiniCard
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Rischio = volume/frequenza/Paese"
              text="La tolleranza varia molto e cala rapidamente quando il flusso diventa sistematico."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuti divulgativi. Normative e controlli extra-UE variano per Paese e
            possono cambiare in base a interpretazioni locali.
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
                  <TocLink href="#principio" label="1. “Campionatura” ≠ categoria doganale" />
                  <TocLink href="#documenti" label="2. Documenti necessari" />
                  <TocLink href="#valore" label="3. Valore dichiarato" />
                  <TocLink href="#tasse" label="4. Tasse e regole locali" />
                  <TocLink href="#perche-passano" label="5. Perché spesso passano" />
                  <TocLink href="#problemi" label="6. Quando diventa un problema" />
                  <TocLink href="#usa" label="7. Caso USA" />
                  <TocLink href="#spst" label="8. Come opera SPST" />
                  <TocLink href="#differenza" label="9. Campione vs modello" />
                  <TocLink href="#sintesi" label="In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="principio"
                icon={<Globe2 className="h-5 w-5" />}
                title="1) “Campionatura” fuori dall’UE: non è una categoria doganale"
              >
                <P>
                  👉 Per le dogane extra-UE, “campionatura” <b>non</b> è una categoria giuridica autonoma.
                </P>
                <P>Per le autorità doganali contano:</P>
                <List items={["che cosa è la merce", "che valore ha", "dove va", "perché entra nel Paese"]} />
                <P>
                  Il vino è un prodotto alcolico soggetto a restrizioni e spesso a licenze/permessi.
                  La dicitura <i>“sample / no commercial value”</i> aiuta a spiegare lo scopo, ma:
                </P>
                <List
                  items={[
                    "non elimina gli obblighi",
                    "non garantisce l’ingresso",
                    "non sostituisce documenti coerenti",
                  ]}
                />
              </ArticleCard>

              <ArticleCard
                id="documenti"
                icon={<FileText className="h-5 w-5" />}
                title="2) Quali documenti servono davvero per spedire campioni extra-UE"
              >
                <P>
                  Anche per campionature, una spedizione corretta non parte mai senza documenti.
                  Senza questi elementi il pacco è tecnicamente <b>non dichiarabile</b>.
                </P>

                <H4>Documenti sempre necessari</H4>
                <List
                  items={[
                    "Pro-forma invoice (descrizione reale, quantità, valore coerente, motivo: sample/tasting/evaluation)",
                    "Packing list",
                    "Lettera di vettura / AWB",
                    "HS code corretto",
                    "Paese di origine",
                  ]}
                />

                <DocsGrid />
              </ArticleCard>

              <ArticleCard
                id="valore"
                icon={<Receipt className="h-5 w-5" />}
                title="3) Il valore dichiarato: né zero, né fittizio"
              >
                <P>
                  Uno degli errori più comuni è dichiarare valore “0” oppure valori palesemente irrealistici.
                  Questo non protegge: aumenta i controlli e può portare a blocchi, rivalutazioni e richieste di
                  documenti aggiuntivi.
                </P>

                <QuoteStrong>
                  Il valore di una campionatura non è il prezzo di vendita, ma deve essere credibile e coerente con il contenuto.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="tasse"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="4) Accise e tasse: cosa succede fuori dall’UE"
              >
                <P>
                  In linea generale le accise UE non si applicano fuori dall’UE. Ma il vino può essere soggetto a
                  dazi/tasse d’importazione, excise tax locali, regolamentazioni sanitarie e licenze specifiche.
                </P>

                <Quote>
                  Ogni Paese extra-UE fa storia a sé: ciò che entra facilmente in un Paese può essere respinto in un altro,
                  anche con una campionatura identica.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="perche-passano"
                icon={<Plane className="h-5 w-5" />}
                title="5) Perché molte campionature extra-UE “passano comunque”"
              >
                <P>
                  Serve realismo: molte campionature viaggiano in piccole quantità, destinate a operatori professionali,
                  e non generano allarme immediato. Può succedere che vengano consegnate senza autorizzazioni complesse.
                </P>

                <QuoteStrong>
                  Ma questo non crea un diritto, non è una procedura standard e non è replicabile su larga scala.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="problemi"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="6) Quando le campionature extra-UE diventano un problema serio"
              >
                <P>I problemi nascono quando:</P>
                <List
                  items={[
                    "i volumi aumentano",
                    "le spedizioni diventano frequenti",
                    "il Paese è restrittivo sugli alcolici",
                    "il destinatario non è strutturato",
                    "manca un importatore o referente locale",
                  ]}
                />

                <P>
                  In questi casi la campionatura smette di essere “tollerata”, viene trattata come importazione vera e può
                  richiedere permessi, registrazioni e soggetti abilitati.
                </P>
              </ArticleCard>

              <ArticleCard
                id="usa"
                icon={<LinkIcon className="h-5 w-5" />}
                title="7) Il caso USA (il più frainteso)"
              >
                <P>
                  Gli Stati Uniti meritano una nota a parte: anche le campionature di vino sono fortemente regolate e,
                  in molti casi, servono importatore, approvazioni etichette e struttura locale.
                </P>

                <QuoteStrong>
                  È il motivo per cui SPST separa nettamente “campionature extra-UE generiche” dal caso USA, che richiede un modello dedicato.
                </QuoteStrong>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-semibold text-white/90">
                    Spedizioni B2C USA: modello dedicato
                  </div>
                  <div className="mt-1 text-[13px] text-white/75">
                    Per il cliente finale negli Stati Uniti si usa un flusso strutturato (importatore + compliance). Vedi Paylink USA.
                  </div>
                  <div className="mt-3">
                    <a
                      href="/spst-paylink"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                      style={{ background: SPST_ORANGE, color: "#0f1720" }}
                    >
                      Scopri Paylink USA <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<Sparkles className="h-5 w-5" />}
                title="8) Come si muove SPST nella pratica"
              >
                <P>SPST lavora nel mondo reale, ma con consapevolezza:</P>
                <List
                  items={[
                    "valutiamo Paese per Paese",
                    "distinguiamo invii occasionali e flussi ricorrenti",
                    "prepariamo documentazione pulita e coerente",
                    "segnaliamo quando il rischio sta cambiando",
                  ]}
                />

                <Quote>
                  Non promettiamo “zero problemi”. Promettiamo scelte informate.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="differenza"
                icon={<Box className="h-5 w-5" />}
                title="9) Campionatura vs modello commerciale: la vera differenza"
              >
                <P>
                  Una campionatura occasionale può rientrare in prassi tollerate. Ma se stai costruendo un mercato e spedisci regolarmente,
                  allora non stai più spedendo campioni: stai iniziando a importare. E le regole cambiano.
                </P>

                <QuoteStrong>
                  Il rischio cresce rapidamente quando il flusso diventa sistematico.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<FileText className="h-5 w-5" />}
                title="In sintesi"
              >
                <List
                  items={[
                    "“Campionatura” non è una categoria doganale extra-UE.",
                    "Servono sempre documenti coerenti (pro-forma, packing list, HS code, origine).",
                    "La tolleranza dipende da Paese, volume e frequenza.",
                    "Il rischio cresce rapidamente se il flusso diventa sistematico.",
                    "SPST aiuta a capire quando si è ancora nella prassi e quando no.",
                  ]}
                />

                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<LinkIcon className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Posso scrivere “no commercial value” e basta?">
                  Aiuta a spiegare lo scopo, ma non elimina obblighi: servono documenti coerenti e un valore credibile.
                </FaqItem>
                <FaqItem q="Che valore devo dichiarare per una campionatura?">
                  Non “0” e non fittizio: deve essere credibile e coerente col contenuto. Non è il prezzo di vendita, ma deve reggere un controllo.
                </FaqItem>
                <FaqItem q="Quando devo considerare una struttura dedicata?">
                  Quando aumentano frequenza/volumi o il Paese è restrittivo: in quel momento la campionatura viene trattata come importazione vera.
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
        Vuoi capire subito se è “low risk”?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Dimmi Paese, numero bottiglie e frequenza. Ti diciamo cosa preparare e cosa aspettarti.
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
        Vuoi spedire campioni extra-UE senza improvvisare?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Ti aiutiamo a preparare documentazione pulita, coerente e “difendibile”, e a capire quando serve una struttura dedicata.
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

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="font-semibold text-white/90">{q}</div>
      <div className="mt-1 text-[13px] text-white/75">{children}</div>
    </div>
  );
}

function DocsGrid() {
  const items = [
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Pro-forma invoice",
      text: "Descrizione reale, quantità, valore coerente, motivo (sample/tasting/evaluation).",
    },
    {
      icon: <ClipboardList className="h-4 w-4" />,
      title: "Packing list",
      text: "Dettaglio bottiglie, litri, peso, eventuali riferimenti lotto (se utili).",
    },
    {
      icon: <Receipt className="h-4 w-4" />,
      title: "HS code + origine",
      text: "Codifica corretta e Paese di origine per la dichiarazione doganale.",
    },
    {
      icon: <Plane className="h-4 w-4" />,
      title: "AWB / Lettera di vettura",
      text: "Documento di trasporto: senza dati coerenti, la dogana blocca facilmente.",
    },
  ];

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((x, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
        >
          <div className="flex items-start gap-2">
            <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
              {x.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90">{x.title}</div>
              <div className="mt-1 text-[13px] text-white/70">{x.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
