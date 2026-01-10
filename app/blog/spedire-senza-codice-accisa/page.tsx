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
  Link as LinkIcon,
  BadgeCheck,
  Boxes,
  FileCheck2,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogSpedireSenzaCodiceAccisaPage() {
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
            Caso reale • B2B UE • Buyer senza codice accisa
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Spedire vino B2B in Europa{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              quando il buyer non ha un codice accisa
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[95ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Scenario molto più comune di quanto si pensi: buyer serio, volumi reali,
            ma nessun codice accisa. Qui spieghiamo come funziona davvero la
            rappresentanza fiscale, quando conviene l’accisa assolta e quando invece
            entra in gioco la sospensione. Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#opzione1"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Soluzione più semplice (Opzione 1)
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
              icon={<BadgeCheck className="h-5 w-5" />}
              title="Non è un’anomalia"
              text="Buyer professionali spesso non hanno codice accisa perché non gestiscono sospensione o depositi fiscali."
            />
            <MiniCard
              icon={<Scale className="h-5 w-5" />}
              title="Il codice serve al flusso"
              text="La domanda non è “è un’azienda?”, ma “chi fornisce codice e responsabilità fiscale del movimento?”."
            />
            <MiniCard
              icon={<FileCheck2 className="h-5 w-5" />}
              title="Due strade reali"
              text="Accisa assolta con rappresentanza fiscale (di solito la più semplice) oppure sospensione via deposito fiscale."
            />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuto informativo. Non costituisce consulenza legale/fiscale.
            La soluzione corretta dipende da Paese, volumi, frequenza e struttura del buyer.
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
                  <TocLink href="#buyer" label="1. Buyer senza codice: normalissimo" />
                  <TocLink href="#puntochiave" label="2. Il codice serve al flusso" />
                  <TocLink href="#opzione1" label="3. Opzione 1: assolta + rappresentanza" />
                  <TocLink href="#opzione2" label="4. Opzione 2: sospesa via deposito" />
                  <TocLink href="#scorciatoie" label="5. Perché “spedire lo stesso” no" />
                  <TocLink href="#documenti" label="6. Documenti gestiti" />
                  <TocLink href="#vantaggio" label="7. Vantaggio commerciale" />
                  <TocLink href="#spst" label="8. Punto di vista SPST" />
                  <TocLink href="#sintesi" label="In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-6">
              <ArticleCard
                id="buyer"
                icon={<BadgeCheck className="h-5 w-5" />}
                title="1) Buyer senza codice accisa: non è un’anomalia"
              >
                <P>
                  Non avere un codice accisa non rende il buyer “non professionale”.
                  Molti buyer sono importatori, distributori o Horeca strutturati, ma:
                </P>
                <List
                  items={[
                    "non detengono vino in sospensione",
                    "non sono depositi fiscali",
                    "non vogliono (o non possono) gestire accise internamente",
                  ]}
                />
                <P>
                  È una situazione normalissima nel B2B europeo.
                </P>
              </ArticleCard>

              <ArticleCard
                id="puntochiave"
                icon={<Scale className="h-5 w-5" />}
                title="2) Il punto chiave: il codice accisa serve al flusso, non al contratto"
              >
                <P>
                  La domanda giusta non è “il buyer è un’azienda?”, ma:
                </P>
                <Quote>
                  Chi fornisce il codice accisa e chi si assume la responsabilità fiscale del movimento?
                </Quote>
                <P>
                  Se il buyer non ha codice accisa, non può ricevere vino in sospensione.
                  Da qui si aprono due strade reali.
                </P>
              </ArticleCard>

              <ArticleCard
                id="opzione1"
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="3) Opzione 1 – Accisa assolta con rappresentanza fiscale (spesso la soluzione più semplice)"
              >
                <P>
                  Questa è la soluzione che SPST utilizza più spesso nei casi “buyer senza codice”.
                </P>

                <H4>Come funziona</H4>
                <List
                  items={[
                    "Il vino viene spedito in accisa assolta.",
                    "SPST fornisce la rappresentanza fiscale / riferimento operativo per il flusso.",
                    "Il buyer può ricevere il vino senza codice accisa.",
                    "Operazione B2B regolare, chiara e tracciata.",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <FileCheck2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                    Cosa fa SPST, concretamente
                  </div>
                  <ul className="ml-6 mt-2 list-disc space-y-1 text-[13px] text-white/75">
                    <li>forniamo il riferimento accisa necessario al flusso</li>
                    <li>emettiamo noi l’e-DAS (quando applicabile al contesto operativo)</li>
                    <li>gestiamo la tracciabilità del movimento</li>
                    <li>coordiniamo logistica + documentazione</li>
                  </ul>
                </div>

                <H4 className="mt-4">Perché è spesso il modello preferito</H4>
                <List
                  items={[
                    "funziona anche con buyer piccoli o medi",
                    "è rapido da attivare",
                    "riduce attriti commerciali",
                    "è scalabile nel tempo",
                  ]}
                />

                <MidCta />
              </ArticleCard>

              <ArticleCard
                id="opzione2"
                icon={<Boxes className="h-5 w-5" />}
                title="4) Opzione 2 – Accisa sospesa tramite deposito fiscale (possibile, ma più pesante)"
              >
                <P>
                  Alternativa: regime di accisa sospesa. In questo caso:
                </P>
                <List
                  items={[
                    "il buyer non riceve direttamente il vino in sospensione",
                    "la merce passa tramite un deposito fiscale autorizzato",
                    "l’accisa viene assolta successivamente secondo il flusso previsto",
                  ]}
                />
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  È una soluzione più costosa e più “pesante”: ha senso soprattutto per volumi elevati o flussi continuativi.
                </div>
              </ArticleCard>

              <ArticleCard
                id="scorciatoie"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="5) Perché “spedire lo stesso” non è una strategia B2B"
              >
                <P>
                  Nel B2B (pallet, multicollo, ordini ripetuti) le scorciatoie durano poco.
                  Il punto non è se la prima spedizione arriva, ma cosa succede alla seconda, terza, e quando entrano controlli.
                </P>
                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="maggiore probabilità di controlli nel tempo" />
                  <RiskPill text="rischio contrattuale col buyer" />
                  <RiskPill text="corrieri meno flessibili" />
                  <RiskPill text="esposizione reputazionale" />
                </div>
              </ArticleCard>

              <ArticleCard
                id="documenti"
                icon={<FileText className="h-5 w-5" />}
                title="6) Quali documenti vengono gestiti in questi flussi"
              >
                <P>In una spedizione B2B strutturata con SPST:</P>
                <List
                  items={[
                    "fattura B2B",
                    "packing list",
                    "documenti di trasporto / CMR / tracking",
                    "e-DAS emesso/gestito da SPST (quando applicabile)",
                    "tracciabilità del flusso accisa",
                  ]}
                />
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Il buyer non deve inventarsi nulla. La cantina non deve improvvisarsi fiscalista.
                </div>
              </ArticleCard>

              <ArticleCard
                id="vantaggio"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="7) Perché la rappresentanza fiscale è un vantaggio commerciale"
              >
                <P>
                  Molte vendite si bloccano su “il buyer non ha codice accisa”.
                  Con la rappresentanza fiscale:
                </P>
                <List
                  items={[
                    "il problema scompare",
                    "la vendita parte",
                    "il buyer si concentra sul mercato",
                    "la cantina non perde l’ordine",
                  ]}
                />
                <Quote>
                  Non è burocrazia. È enablement commerciale.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<Ship className="h-5 w-5" />}
                title="8) Il punto di vista SPST"
              >
                <P>
                  SPST non si limita a trovare un camion o un pallet. Noi:
                </P>
                <List
                  items={[
                    "forniamo strutture fiscali operative",
                    "emettiamo/gestiamo e-DAS quando serve",
                    "permettiamo a buyer senza codice accisa di lavorare",
                    "rendiamo possibile ciò che altrimenti resterebbe “sulla carta”",
                  ]}
                />
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Nel B2B del vino: chi controlla il flusso accisa controlla il mercato.
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <LinkIcon className="mt-0.5 h-4 w-4 text-orange-200" />
                    Vuoi capire qual è l’opzione corretta per il tuo buyer?
                  </div>
                  <div className="mt-2 text-[13px] text-white/75">
                    Scrivici su WhatsApp o richiedi una quotazione: in 10 minuti capiamo se conviene assolta con rappresentanza o sospesa via deposito.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="/portale-quotazioni"
                      className="rounded-full px-4 py-2 text-sm font-semibold"
                      style={{ background: SPST_ORANGE, color: "#0f1720" }}
                    >
                      Richiedi una quotazione <ArrowRight className="h-4 w-4 inline" />
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
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<FileText className="h-5 w-5" />}
                title="In sintesi"
              >
                <List
                  items={[
                    "Buyer senza codice accisa ≠ vendita impossibile.",
                    "Accisa assolta + rappresentanza fiscale è spesso la soluzione più semplice.",
                    "Accisa sospesa via deposito è valida ma più onerosa.",
                    "SPST può gestire codice/riferimento, e-DAS e flusso completo.",
                  ]}
                />
                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<FileText className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Se il buyer non ha codice accisa, posso spedire comunque in sospensione?">
                  No: senza codice accisa il buyer non può ricevere vino in sospensione. Serve un flusso alternativo (assolta con rappresentanza) o un deposito fiscale intermediario.
                </FaqItem>
                <FaqItem q="L’accisa assolta è sempre la scelta migliore?">
                  Spesso sì per rapidità e semplicità, ma dipende da volumi, frequenza e struttura del buyer. Per volumi elevati può avere senso la sospensione via deposito.
                </FaqItem>
                <FaqItem q="Cosa serve a SPST per dirti la soluzione corretta?">
                  Paese di destinazione, volumi, frequenza, tipo di buyer (distributore/horeca/importatore), e modalità di trasporto (pallet/multicollo).
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
        Check immediato
      </div>
      <div className="mt-2 text-sm text-white/80">
        Buyer senza codice accisa? Ti diciamo subito se conviene assolta con rappresentanza o sospesa via deposito.
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
        Il buyer è serio, ma non ha codice: sblocchiamo l’ordine
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Con rappresentanza fiscale in assolta, spesso la vendita riparte subito (senza far diventare il buyer un “deposito fiscale”).
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
      <div className="text-sm font-semibold text-white/90">
        SPST = logistica + struttura fiscale operativa
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Se il buyer non ha codice accisa, ti aiutiamo a scegliere il flusso giusto e a renderlo tracciabile.
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

function H4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={
        className
          ? className
          : "pt-2 text-[13px] font-bold uppercase tracking-wider text-white/85"
      }
    >
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
