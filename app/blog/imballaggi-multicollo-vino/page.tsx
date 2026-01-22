"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Boxes,
  ShieldCheck,
  AlertTriangle,
  PackageCheck,
  Truck,
  Package, // ✅ FIX: lucide-react non esporta "Pallet"
  Table2,
  MessageCircle,
  ArrowRight,
  FileText,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogImballaggiMulticolloVinoPage() {
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
            Imballaggi • Multicollo • Pallet
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Perché usare imballaggi specifici per il trasporto{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              multicollo
            </span>{" "}
            di vino
          </h1>

          <p className="mx-auto mt-3 max-w-[110ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            E perché non servono (e sono inutili) sul pallet. L’imballaggio va scelto in base
            al tipo di trasporto, non al valore percepito del vino. Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#schema"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai allo schema rapido
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
              icon={<Boxes className="h-5 w-5" />}
              title="Multicollo = urti e manipolazione"
              text="Nastratura, hub, rulli, cadute: qui l’imballo tecnico fa la differenza."
            />
            <MiniCard
              icon={<Package className="h-5 w-5" />} // ✅ FIX
              title="Pallet = unità stabile"
              text="Movimentazione meccanizzata e poca manipolazione del singolo cartone."
            />
            <MiniCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Assicurazioni e contestazioni"
              text="Su express l’idoneità dell’imballo è spesso requisito per coperture e reclami."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: buone pratiche. In caso di spedizioni assicurate, l’idoneità dell’imballo
            è spesso un requisito essenziale.
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
                  <TocLink href="#distinzione" label="1. Multicollo vs pallet" />
                  <TocLink href="#perche" label="2. Perché nel multicollo serve" />
                  <TocLink href="#cosa-fa" label="3. Cosa fa un imballo vino" />
                  <TocLink href="#perche-spst" label="4. Cosa fa SPST" />
                  <TocLink href="#pallet" label="5. Perché sul pallet è inutile" />
                  <TocLink href="#errore" label="6. Errore tipico" />
                  <TocLink href="#schema" label="7. Schema rapido" />
                  <TocLink href="#punto" label="8. Punto di vista SPST" />
                  <TocLink href="#sintesi" label="In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* ARTICLE */}
            <div className="space-y-6">
              <ArticleCard
                id="distinzione"
                icon={<Truck className="h-5 w-5" />}
                title="1) Multicollo e pallet NON sono la stessa cosa"
              >
                <H4>🚚 Multicollo</H4>
                <List
                  items={[
                    "singoli pacchi, movimentazione manuale",
                    "passaggi su nastri/rulli e hub di smistamento",
                    "rischio di cadute, ribaltamenti, urti laterali",
                  ]}
                />

                <H4>🚛 Pallet</H4>
                <List
                  items={[
                    "merce unitaria, movimentazione meccanizzata (muletti/transpallet)",
                    "carico stabile, poca manipolazione del singolo collo",
                    "la sicurezza dipende dalla pallettizzazione e dal fissaggio",
                  ]}
                />

                <QuoteStrong>
                  Trattare allo stesso modo multicollo e pallet è un errore tecnico.
                </QuoteStrong>
              </ArticleCard>

              <ArticleCard
                id="perche"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="2) Perché nel multicollo l’imballaggio è fondamentale"
              >
                <P>
                  Nel multicollo l’imballaggio non serve solo a contenere: serve ad assorbire urti,
                  vibrazioni e compressioni. Nel trasporto espresso i colli possono essere capovolti,
                  scorrere su rulli e subire pressioni laterali.
                </P>

                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="cadute da altezze standard" />
                  <RiskPill text="urti laterali e compressioni" />
                  <RiskPill text="movimentazioni ripetute in hub" />
                  <RiskPill text="capovolgimenti e vibrazioni" />
                </div>

                <P>
                  Un cartone “normale” protegge dalla polvere, ma non isola il vetro e non blocca
                  la bottiglia. Qui entrano gli imballaggi specifici per vino.
                </P>
              </ArticleCard>

              <ArticleCard
                id="cosa-fa"
                icon={<PackageCheck className="h-5 w-5" />}
                title="3) Cosa fa un imballaggio specifico per vino (davvero)"
              >
                <P>Un buon imballaggio tecnico:</P>
                <List
                  items={[
                    "blocca la bottiglia (niente gioco interno)",
                    "separa vetro da vetro",
                    "assorbe energia d’urto",
                    "impedisce movimenti e micro-urti",
                    "riduce rotture anche in caso di caduta",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Non serve a “rendere elegante” la spedizione: serve a farla arrivare intera.
                </div>
              </ArticleCard>

              <ArticleCard
                id="perche-spst"
                icon={<Box className="h-5 w-5" />}
                title="4) Perché SPST consiglia (e può fornire) imballaggi dedicati nel multicollo"
              >
                <P>
                  Nel multicollo il rischio di danno è reale. Inoltre assicurazioni e contestazioni
                  spesso richiedono imballi idonei: il “come era confezionata” la bottiglia conta.
                </P>

                <List
                  items={[
                    "SPST può fornire imballaggi specifici su richiesta",
                    "li abbiniamo quando ha senso operativo",
                    "non è upselling: è prevenzione e riduzione dei reclami",
                  ]}
                />

                <InlineCta />
              </ArticleCard>

              <ArticleCard
                id="pallet"
                icon={<Package className="h-5 w-5" />} // ✅ FIX (ex Pallet)
                title="5) Perché usare questi imballaggi sul pallet è inutile (e fa solo spendere di più)"
              >
                <P>
                  Sul pallet le bottiglie non subiscono cadute singole e non passano su nastri
                  automatici. Il pallet viene sollevato come unità, resta verticale e viene
                  vincolato con reggette/film.
                </P>

                <QuoteStrong>
                  Usare imballaggi antiurto da multicollo su un pallet non aumenta la sicurezza:
                  aumenta i costi e riduce efficienza.
                </QuoteStrong>

                <P className="m-0">
                  Sul pallet contano: pallettizzazione corretta, stabilità, fissaggio e protezione
                  del carico come unità — non il singolo cartone “super protetto”.
                </P>
              </ArticleCard>

              <ArticleCard
                id="errore"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="6) L’errore tipico che vediamo spesso"
              >
                <List
                  items={[
                    "si risparmia sull’imballo multicollo (dove serve)",
                    "si sovrainveste sull’imballo pallet (dove non serve)",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Risultato: rotture nei pacchi, costi inutili sui bancali e discussioni su
                  responsabilità/rimborsi. È l’opposto di ciò che andrebbe fatto.
                </div>
              </ArticleCard>

              <ArticleCard
                id="schema"
                icon={<Table2 className="h-5 w-5" />}
                title="7) Schema rapido: quando servono gli imballaggi specifici"
              >
                <Table />
              </ArticleCard>

              <ArticleCard
                id="punto"
                icon={<Sparkles className="h-5 w-5" />}
                title="8) Il punto di vista SPST"
              >
                <P>
                  SPST non vende imballaggi “a catalogo”. Li proponiamo quando servono e non li
                  proponiamo quando non servono.
                </P>
                <P>
                  Perché l’obiettivo non è vendere cartoni: è far arrivare il vino integro ed evitare
                  problemi dopo la consegna.
                </P>

                <Quote>
                  Nel vino, l’imballaggio giusto è quello adeguato al trasporto.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<FileText className="h-5 w-5" />}
                title="In sintesi"
              >
                <List
                  items={[
                    "Nel multicollo l’imballaggio specifico è fondamentale.",
                    "Sul pallet è inutile.",
                    "Usare l’imballaggio sbagliato costa di più (danni o inefficienza).",
                    "SPST fornisce imballaggi tecnici su richiesta, dove ha senso farlo.",
                  ]}
                />

                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<LinkIcon className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Quindi sul pallet non serve mai un imballo “premium”?">
                  Sul pallet conta la stabilità dell’unità: pallettizzazione, fissaggio, regge/film,
                  protezioni angolari. Un antiurto da multicollo raramente aggiunge valore e spesso
                  riduce efficienza (spazio/costi).
                </FaqItem>
                <FaqItem q="Nel multicollo basta un cartone doppia onda?">
                  Aiuta, ma il punto chiave è bloccare la bottiglia e separare vetro-vetro. Gli
                  inserti dedicati riducono drasticamente movimenti e urti.
                </FaqItem>
                <FaqItem q="Per spedizioni assicurate cosa cambia?">
                  Spesso l’idoneità dell’imballo è un requisito essenziale: se l’imballo non è
                  adeguato, le coperture/reclami possono diventare complicati.
                </FaqItem>
              </ArticleCard>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ---------------- CTA blocks ---------------- */

function CtaBox() {
  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
        Vuoi un consiglio rapido sul tuo caso?
      </div>
      <div className="mt-2 text-sm text-white/80">
        Dimmi: multicollo o pallet, quante bottiglie e destinazione. Ti diciamo subito l’imballo
        corretto.
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

function InlineCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">Se fai multicollo, non improvvisare</div>
      <div className="mt-1 text-[13px] text-white/75">
        L’imballo idoneo riduce rotture e contestazioni. SPST può fornirlo su richiesta quando ha
        senso.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="https://wa.me/393201441789"
          className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
          style={{ borderColor: `${SPST_ORANGE}55` }}
        >
          Chiedi disponibilità su WhatsApp
        </a>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">Vuoi evitare rotture e costi inutili?</div>
      <div className="mt-1 text-[13px] text-white/75">
        Scrivici: ti diciamo subito se serve imballo tecnico (multicollo) o se basta lavorare sulla
        pallettizzazione (pallet).
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

/* ---------------- UI ---------------- */

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
      <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-white/80">{children}</div>
    </section>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="pt-2 text-[13px] font-bold uppercase tracking-wider text-white/85">{children}</h4>
  );
}

function P({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: React.ReactNode }) {
  return (
    <p className={`m-0 ${className}`.trim()} {...props}>
      {children}
    </p>
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

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="font-semibold text-white/90">{q}</div>
      <div className="mt-1 text-[13px] text-white/75">{children}</div>
    </div>
  );
}

function Table() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.03] text-[12px] font-semibold uppercase tracking-wider text-white/70">
        <div className="px-4 py-3">Tipo spedizione</div>
        <div className="px-4 py-3">Imballaggio dedicato</div>
      </div>

      {[
        ["Multicollo espresso", "✅ Sì"],
        ["Spedizioni campioni", "✅ Consigliato"],
        ["B2C", "✅ Sempre"],
        ["Pallet B2B", "❌ No"],
        ["Pallet consolidati", "❌ No"],
      ].map(([a, b], i) => (
        <div
          key={i}
          className="grid grid-cols-2 border-b border-white/10 text-[13px] text-white/80 last:border-b-0"
        >
          <div className="px-4 py-3">{a}</div>
          <div className="px-4 py-3 font-semibold text-white/90">{b}</div>
        </div>
      ))}
    </div>
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
