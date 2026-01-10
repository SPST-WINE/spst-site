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
  Boxes,
  FileCheck2,
  Link as LinkIcon,
} from "lucide-react";

import { SpstHeader } from "@/components/spst/SpstHeader";
import { SpstFooter } from "@/components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "@/lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogSpedireVinoB2BEuropaAccisePage() {
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
            Guida pratica • B2B UE • Accise
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            B2B vino in UE:{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              cosa è legale, cosa no
            </span>{" "}
            e come funzionano davvero le accise
          </h1>

          <p className="mx-auto mt-3 max-w-[95ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Nel B2B intra-UE la tolleranza operativa cambia: pallet, multicollo e
            frequenza richiedono un regime accise chiaro e documentazione
            difendibile. Qui spieghiamo modelli, documenti e rischi reali. Ultimo
            aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#regimi"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai ai regimi accise
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
              icon={<Scale className="h-5 w-5" />}
              title="Niente dogana ≠ libero"
              text="Intra-UE non c’è dogana, ma restano IVA, accise e tracciabilità dei movimenti."
            />
            <MiniCard
              icon={<FileCheck2 className="h-5 w-5" />}
              title="Due soli regimi validi"
              text="Accisa sospesa (EMCS e-AD) oppure accisa assolta (flussi strutturati, es. e-DAS)."
            />
            <MiniCard
              icon={<Boxes className="h-5 w-5" />}
              title="Pallet = zero scorciatoie"
              text="Quantità commerciali e frequenza non rientrano nelle “zone grigie”: serve struttura."
            />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuto informativo. Non costituisce consulenza legale/fiscale.
            Per casi specifici (Paese, buyer, regimi, autorizzazioni) serve una verifica dedicata.
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
                  <TocLink href="#intro" label="1. UE: non è libero scambio" />
                  <TocLink href="#regimi" label="2. Accisa sospesa vs assolta" />
                  <TocLink href="#pallet" label="3. Pallet e multicollo" />
                  <TocLink href="#documenti" label="4. Documenti necessari" />
                  <TocLink href="#chi-paga" label="5. Chi paga le accise" />
                  <TocLink href="#rischi" label="6. Perché i problemi sono più gravi" />
                  <TocLink href="#spst" label="7. Posizione operativa SPST" />
                  <TocLink href="#sintesi" label="8. In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-6">
              <ArticleCard
                id="intro"
                icon={<Ship className="h-5 w-5" />}
                title="1) B2B di vino in UE: non c’è dogana, ma non è “libero scambio”"
              >
                <P>
                  In UE non esistono formalità doganali e non si parla di esportazione/importazione.
                  Ma questo non significa assenza di controlli o obblighi.
                </P>
                <List
                  items={[
                    "IVA intracomunitaria",
                    "accise sugli alcolici",
                    "tracciabilità dei movimenti",
                  ]}
                />
              </ArticleCard>

              <ArticleCard
                id="regimi"
                icon={<Scale className="h-5 w-5" />}
                title="2) La distinzione fondamentale: accisa sospesa o accisa assolta"
              >
                <P>
                  Nel B2B europeo esistono due regimi giuridicamente validi. La scelta cambia documenti,
                  responsabilità e il “peso” della spedizione.
                </P>

                <H4>Regime 1 – Accisa sospesa (modello “classico” B2B)</H4>
                <List
                  items={[
                    "Il vino non è ancora immesso in consumo.",
                    "Viaggia tra soggetti autorizzati.",
                    "L’accisa verrà assolta nel Paese di destino dal buyer/importatore.",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <FileCheck2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                    Documento chiave: EMCS (e-AD / DAA elettronico)
                  </div>
                  <div className="mt-2 text-[13px] text-white/75">
                    Senza EMCS una spedizione in sospensione non è regolare e il rischio resta in capo al mittente.
                  </div>
                </div>

                <H4 className="mt-4">Regime 2 – Accisa assolta (vino già immesso in consumo)</H4>
                <List
                  items={[
                    "L’accisa è già stata pagata in uno Stato UE.",
                    "Il vino viene spedito a un buyer in un altro Stato membro per fini commerciali.",
                    "Accisa assolta non significa “spedizione libera”: servono flussi coerenti e tracciabili.",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Nel pratico (Italia) l’operatività è stata chiarita da ADM nel 2023 (es. Circolare n. 3/2023).
                </div>
              </ArticleCard>

              <ArticleCard
                id="pallet"
                icon={<Boxes className="h-5 w-5" />}
                title="3) Pallet e multicollo: perché qui non valgono le “scorciatoie”"
              >
                <P>
                  Una spedizione su pallet, con quantità commerciali, verso un buyer professionale e con frequenza
                  non è assimilabile a una campionatura.
                </P>
                <List
                  items={[
                    "assenza di regime accisa chiaro = errore strutturale",
                    "controlli più probabili",
                    "corrieri meno flessibili",
                    "buyer spesso richiedono coperture formali",
                  ]}
                />
                <MidCta />
              </ArticleCard>

              <ArticleCard
                id="documenti"
                icon={<FileText className="h-5 w-5" />}
                title="4) Quali documenti servono in una spedizione B2B di vino in UE"
              >
                <H4>Documenti sempre necessari</H4>
                <List
                  items={[
                    "Fattura B2B intracomunitaria (P.IVA buyer, regime IVA, indicazione del regime accise).",
                    "Packing list dettagliata.",
                    "Documento di trasporto / CMR / tracking.",
                  ]}
                />

                <H4 className="mt-4">Documentazione accise (fondamentale)</H4>
                <List
                  items={[
                    "Regime sospeso → EMCS con e-AD / DAA.",
                    "Accisa assolta → flusso/documento previsto (es. e-DAS o equivalente operativo secondo contesto).",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Senza la parte “accise”, la spedizione può arrivare fisicamente, ma resta tecnicamente scoperta.
                </div>
              </ArticleCard>

              <ArticleCard
                id="chi-paga"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="5) Chi paga le accise nel B2B?"
              >
                <P>
                  Nel B2B il buyer è un operatore economico: può ricevere vino in sospensione e assolvere
                  le accise localmente. Per questo il modello “classico” usa spesso la sospensione (EMCS).
                </P>
              </ArticleCard>

              <ArticleCard
                id="rischi"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="6) Perché i problemi nel B2B sono più gravi (e meno perdonabili)"
              >
                <P>
                  Se una spedizione B2B è irregolare non è “errore occasionale”, ma violazione sistemica.
                </P>
                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="sanzioni e contestazioni" />
                  <RiskPill text="blocchi e giacenze" />
                  <RiskPill text="responsabilità contrattuali" />
                  <RiskPill text="perdita di fiducia del buyer" />
                </div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Nel B2B, “è sempre andata bene” non è una strategia.
                </div>
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<Scale className="h-5 w-5" />}
                title="7) La posizione operativa di SPST"
              >
                <P>
                  SPST nasce per lavorare soprattutto sul B2B strutturato. Il nostro approccio:
                </P>
                <List
                  items={[
                    "chiarire prima il regime accise",
                    "allineare cantina, buyer e trasportatore",
                    "evitare spedizioni borderline su pallet o grandi quantitativi",
                    "lavorare su modelli scalabili e difendibili",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <LinkIcon className="mt-0.5 h-4 w-4 text-orange-200" />
                    Caso tipico: buyer senza codice accisa (accisa assolta)
                  </div>
                  <div className="mt-2 text-[13px] text-white/75">
                    In alcuni contesti possiamo supportare buyer che non hanno un codice accisa con flussi di accisa assolta.
                    Approfondimento:{" "}
                    <a
                      href="/blog/spedire-senza-codice-accisa"
                      className="font-semibold text-orange-200 hover:underline"
                    >
                      spedire-senza-codice-accisa
                    </a>
                    .
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Nel B2B, la logistica senza fiscalità non scala.
                </div>
              </ArticleCard>

              <ArticleCard
                id="sintesi"
                icon={<FileText className="h-5 w-5" />}
                title="8) In sintesi"
              >
                <List
                  items={[
                    "Le spedizioni B2B di vino in UE devono avere un regime accisa chiaro.",
                    "Pallet e multicollo richiedono strutture formali.",
                    "Le scorciatoie operative funzionano solo nel breve periodo.",
                    "SPST lavora nel mondo reale, ma con modelli solidi.",
                  ]}
                />
                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<FileText className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Se spedisco pallet B2B senza EMCS, cosa rischio?">
                  Dipende dal contesto e dai controlli, ma in sospensione senza EMCS la spedizione non è regolare: il rischio resta sul mittente.
                </FaqItem>
                <FaqItem q="Accisa assolta significa che posso spedire liberamente in UE?">
                  No: “assolta” significa che l’accisa è stata pagata in uno Stato UE, ma restano obblighi di tracciabilità e flussi coerenti.
                </FaqItem>
                <FaqItem q="Qual è il primo passo per fare B2B strutturato?">
                  Definire con chiarezza il regime accise (sospesa/assolta), poi impostare documenti e responsabilità tra cantina, buyer e trasportatore.
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
        Verifica rapida
      </div>
      <div className="mt-2 text-sm text-white/80">
        Pallet o multicollo B2B? Prima di spedire, verifichiamo regime accise e documenti minimi per evitare blocchi.
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
        B2B su pallet: verifica 10 minuti prima di spedire
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Ti diciamo se stai andando in sospensione o assolta, e cosa serve per rendere il flusso difendibile.
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
      <div className="text-sm font-semibold text-white/90">Il punto di vista SPST</div>
      <div className="mt-1 text-[13px] text-white/75">
        Nel B2B, la struttura fiscale è parte della logistica. SPST imposta flussi scalabili e difendibili.
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
