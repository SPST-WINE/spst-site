"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Globe2,
  Stamp,
  Package,
  Receipt,
  ScrollText,
  Plane,
  Building2,
  ArrowRight,
  MessageCircle,
  Info,
  Sparkles,
  MapPinned,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "12/01/2026"; // dd/mm/yyyy

export default function BlogCampionatureVinoAsiaPage() {
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
            Asia • Campionature • Dogana
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Come spedire campionature di vino{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              in Asia
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Cosa è possibile, cosa è tollerato, perché ogni Paese fa storia a sé.
            Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#documenti"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Documenti minimi
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

          {/* Quick summary cards */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <MiniCard
              icon={<Globe2 className="h-5 w-5" />}
              title="Asia ≠ Asia"
              text="Giappone, Cina, HK, Singapore, Corea: regole diverse anche per poche bottiglie."
            />
            <MiniCard
              icon={<Stamp className="h-5 w-5" />}
              title="“Sample” non esenta"
              text="La dicitura aiuta a spiegare lo scopo, ma non crea un’esenzione automatica."
            />
            <MiniCard
              icon={<Receipt className="h-5 w-5" />}
              title="Tax sugli alcolici"
              text="Alcohol tax/dazi possono essere richiesti anche per campioni, spesso all’importazione."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-white/70" />
              <div>
                Nota: articolo divulgativo. In Asia le policy possono cambiare rapidamente e dipendono dal Paese e dal destinatario.
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
                  <TocLink href="#principio" label="1. “Campione” non esenta" />
                  <TocLink href="#documenti" label="2. Documenti minimi" />
                  <TocLink href="#valore" label="3. Valore dichiarato" />
                  <TocLink href="#tax" label="4. Alcohol tax e dazi" />
                  <TocLink href="#passano" label="5. Perché molte arrivano" />
                  <TocLink href="#paesi" label="6. Differenze tra Paesi" />
                  <TocLink href="#rischio" label="7. Quando sale il rischio" />
                  <TocLink href="#spst" label="8. Il ruolo di SPST" />
                  <TocLink href="#domani" label="9. Campioni oggi, mercato domani" />
                  <TocLink href="#sintesi" label="In sintesi" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="principio"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="1) In Asia “campione” NON significa “esente”"
              >
                <P>
                  Non esiste “l’Asia” come mercato unico: ogni Paese ha regole proprie.
                  In generale, la dicitura “sample” non crea un’esenzione automatica: le autorità valutano la merce, non l’intenzione.
                </P>
                <P>
                  Il vino è un alcolico e può essere soggetto a dazi, alcohol tax, controlli sanitari e regole di etichettatura.
                  La gratuità non elimina i controlli.
                </P>
              </ArticleCard>

              <ArticleCard
                id="documenti"
                icon={<ScrollText className="h-5 w-5" />}
                title="2) I documenti minimi sempre necessari"
              >
                <P>
                  Indipendentemente dal Paese, una campionatura extra-UE non dovrebbe partire senza documentazione pulita e coerente:
                </P>
                <List
                  items={[
                    "Pro-forma invoice: descrizione chiara, quantità, valore realistico, motivo (sample/tasting/evaluation).",
                    "Packing list.",
                    "Lettera di vettura / AWB.",
                    "HS code corretto.",
                    "Paese di origine.",
                  ]}
                />
                <QuoteStrong>
                  Dichiarazioni vaghe o valori “zero” aumentano i controlli: non li riducono.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="valore"
                icon={<Receipt className="h-5 w-5" />}
                title="3) Il valore dichiarato: l’equilibrio giusto"
              >
                <P>
                  Un valore irrisorio o scollegato dal prodotto può portare a blocchi, rivalutazioni doganali e richieste documentali.
                </P>
                <Quote>
                  Il valore dichiarato non è il prezzo di vendita, ma deve essere credibile e giustificabile in caso di verifica.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="tax"
                icon={<Stamp className="h-5 w-5" />}
                title="4) Accise e alcohol tax: il vero nodo asiatico"
              >
                <P>
                  Molti Paesi asiatici applicano alcohol tax o imposte specifiche sugli alcolici.
                  Anche per i campioni, le tasse possono essere richieste all’importazione e dipendono spesso dall’Incoterm (chi paga e quando).
                </P>
                <QuoteStrong>
                  Pensare “sono solo campioni, quindi non pago nulla” è una delle cause principali di blocchi e costi imprevisti.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="passano"
                icon={<Plane className="h-5 w-5" />}
                title="5) Perché molte campionature in Asia arrivano comunque"
              >
                <P>
                  Nella pratica, molte campionature sono poche bottiglie e vanno a destinatari professionali: per questo possono arrivare senza procedure complesse.
                </P>
                <List items={["non è una garanzia", "non è una procedura standard", "non è replicabile su larga scala"]} />
              </ArticleCard>

              <ArticleCard
                id="paesi"
                icon={<MapPinned className="h-5 w-5" />}
                title="6) Asia ≠ Asia: differenze enormi tra Paesi"
              >
                <P>Esempi operativi (indicativi):</P>
                <div className="grid gap-3 sm:grid-cols-2">
                  <CountryCard
                    title="Giappone"
                    text="Mercato regolato ma spesso prevedibile: documentazione chiara = flussi più fluidi."
                  />
                  <CountryCard
                    title="Hong Kong"
                    text="Storicamente più permissiva, ma non “senza regole”. Non va confusa con la Cina."
                  />
                  <CountryCard
                    title="Cina continentale"
                    text="Normativa complessa e rischio più alto senza importatore o referente locale strutturato."
                  />
                  <CountryCard
                    title="Singapore"
                    text="Controllo e tracciabilità elevati: campioni spesso tassati all’importazione."
                  />
                  <CountryCard
                    title="Corea del Sud"
                    text="Regole stringenti su alcolici, etichette e fiscalità: attenzione a requisiti specifici."
                  />
                </div>

                <Quote>
                  Applicare lo stesso approccio a tutti i Paesi è l’errore più comune.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="rischio"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="7) Quando la campionatura smette di essere “a basso rischio”"
              >
                <P>Il rischio cresce quando:</P>
                <List
                  items={[
                    "aumentano le quantità",
                    "le spedizioni diventano frequenti",
                    "il destinatario non è strutturato",
                    "il Paese è fiscalmente rigido sugli alcolici",
                  ]}
                />
                <P>
                  In quel momento la campionatura viene trattata come importazione vera e possono servire licenze,
                  importatore locale o registrazioni preventive.
                </P>
              </ArticleCard>

              <ArticleCard id="spst" icon={<Sparkles className="h-5 w-5" />} title="8) Il ruolo di SPST nelle spedizioni verso l’Asia">
                <List
                  items={[
                    "Valutiamo Paese per Paese (non “modello standard”).",
                    "Distinguiamo invii esplorativi vs flussi commerciali in costruzione.",
                    "Prepariamo documenti puliti e coerenti.",
                    "Segnaliamo quando il rischio operativo sta cambiando.",
                  ]}
                />
                <QuoteStrong>
                  Non promettiamo “zero problemi”. Promettiamo scelte consapevoli.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard id="domani" icon={<Building2 className="h-5 w-5" />} title="9) Campionature oggi, mercato domani">
                <P>
                  Spedire campioni è spesso il primo passo. Ma se i campioni “funzionano” e arrivano ordini,
                  bisogna cambiare modello: la campionatura non sostituisce l’importazione strutturata.
                </P>
              </ArticleCard>

              <ArticleCard id="sintesi" icon={<FileText className="h-5 w-5" />} title="In sintesi">
                <List
                  items={[
                    "“Campione” non significa spedizione libera in Asia.",
                    "Servono sempre documenti corretti e coerenti.",
                    "Le regole cambiano da Paese a Paese.",
                    "Il rischio cresce con volumi e frequenza.",
                    "SPST valuta caso per caso, senza improvvisazioni.",
                  ]}
                />

                <FinalCta />

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Nota finale: le normative asiatiche sugli alcolici variano per Paese e possono cambiare rapidamente.
                  Le informazioni hanno finalità divulgative e non sostituiscono verifiche locali puntuali.
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
        Vuoi inviare campioni in Asia?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Scrivici Paese, quantità, destinazione (buyer/importatore/ristorante) e Incoterm desiderato: ti diciamo subito la strada più sicura.
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
        Vuoi evitare blocchi, rivalutazioni e costi a sorpresa?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        SPST prepara documentazione coerente e ti aiuta a scegliere un modello adatto al Paese e al tuo livello di frequenza/volume.
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

function CountryCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-sm font-semibold text-white/90">{title}</div>
      <div className="mt-1 text-[13px] text-white/70">{text}</div>
    </div>
  );
}
