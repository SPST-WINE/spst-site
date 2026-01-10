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
} from "lucide-react";

import { SpstHeader } from "../../components/spst/SpstHeader";
import { SpstFooter } from "../../components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogSpedireVinoB2CEuropaPage() {
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
            Guida pratica • B2C Europa
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Come spedire vino al cliente finale in{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              Europa
            </span>
            : cosa è legale, cosa no, e perché spesso si sbaglia
          </h1>

          <p className="mx-auto mt-3 max-w-[90ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Spedire vino a un privato in UE non è una “normale spedizione B2C”.
            Qui trovi una spiegazione chiara del modello corretto: accise,
            responsabilità e documenti minimi. Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#modello"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai al modello legale
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
              title="Non è “zero burocrazia”"
              text="In UE non c’è dogana, ma restano accise, IVA e responsabilità del venditore."
            />
            <MiniCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Accise: punto critico"
              text="Nel B2C intra-UE il privato non versa accise: l’obbligo ricade sul venditore o su operatori incaricati."
            />
            <MiniCard
              icon={<Ship className="h-5 w-5" />}
              title="Modello prima, logistica dopo"
              text="Chi fa le cose bene definisce il modello fiscale e poi struttura la spedizione."
            />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuto informativo. Non costituisce consulenza legale/fiscale.
            Per casi specifici consigliamo una verifica dedicata.
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
                  <TocLink href="#intro" label="1. Non è una normale B2C" />
                  <TocLink href="#accise" label="2. Accise: chi deve pagarle" />
                  <TocLink href="#modello" label="3. Il modello legale" />
                  <TocLink href="#rischi" label="4. L’alternativa rischiosa" />
                  <TocLink href="#documenti" label="5. Documenti minimi" />
                  <TocLink href="#corrieri" label="6. Perché il corriere blocca" />
                  <TocLink href="#approccio" label="7. Approccio corretto" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-6">
              <ArticleCard id="intro" icon={<FileText className="h-5 w-5" />} title="1) Spedire vino in Europa NON significa “zero burocrazia”">
                <P>
                  È vero: all’interno dell’Unione Europea non esiste dogana. Ma questo non elimina IVA,
                  <strong> accise sugli alcolici</strong> e responsabilità del venditore.
                </P>
                <P>
                  Il vino è un prodotto soggetto ad accisa: sono imposte sul consumo e non dipendono
                  dal “tipo di cliente”. Vale anche se l’acquirente è un privato.
                </P>
              </ArticleCard>

              <ArticleCard id="accise" icon={<ShieldCheck className="h-5 w-5" />} title="2) Le accise sono dovute anche nel B2C?">
                <P><strong>Sì. Sempre.</strong></P>
                <P>
                  Se il vino viene consumato in Francia, Germania, Svezia o qualsiasi altro Stato UE,
                  l’accisa è dovuta in quello Stato, indipendentemente dal fatto che l’acquirente sia
                  un privato o un’azienda.
                </P>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                    Chi paga (operativamente)?
                  </div>
                  <div className="mt-2 text-[13px] text-white/75">
                    Nel B2C intra-UE il privato non versa accise. L’obbligo ricade sul venditore
                    o su operatori incaricati dal venditore. Il cliente può “rimborsare” il costo nel prezzo,
                    ma non diventa il soggetto fiscalmente responsabile.
                  </div>
                </div>
              </ArticleCard>

              <ArticleCard id="modello" icon={<Scale className="h-5 w-5" />} title="3) Il modello LEGALE per spedire vino B2C in Europa con SPST">
                <P>
                  Non esistono “trucchi”. Esistono modelli strutturati e modelli non strutturati.
                </P>

                <H4>Venditore registrato / rappresentanza fiscale (dove previsto)</H4>
                <List
                  items={[
                    "Il venditore struttura il modello accise nel Paese di destinazione (direttamente o tramite operatori incaricati).",
                    "Il vino viaggia dentro un flusso coerente con il regime fiscale applicato.",
                    "La logistica si aggancia a un impianto documentale difendibile.",
                  ]}
                />

                <MidCta />
              </ArticleCard>

              <ArticleCard id="rischi" icon={<AlertTriangle className="h-5 w-5" />} title="4) L’alternativa rischiosa: spedire “come un pacco qualsiasi”">
                <P>
                  È diffusa, ma spesso non conforme. All’inizio “va tutto bene”, finché non c’è un controllo,
                  una richiesta documentale o un intervento dell’autorità fiscale.
                </P>

                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="Blocchi e giacenze" />
                  <RiskPill text="Sanzioni e contestazioni" />
                  <RiskPill text="Respingimenti / resi" />
                  <RiskPill text="Responsabilità sul mittente" />
                </div>
              </ArticleCard>

              <ArticleCard id="documenti" icon={<FileText className="h-5 w-5" />} title="5) Quali documenti servono davvero (B2C intra-UE)">
                <P>
                  Non esiste un “documento doganale” intra-UE, ma esistono obblighi documentali minimi.
                </P>

                <H4>Documenti sempre necessari</H4>
                <List
                  items={[
                    "Documento commerciale (fattura o equivalente).",
                    "Packing list (etichetta, tipologia, % alc., n° bottiglie, litri, prezzo unitario, peso).",
                    "Tracciabilità della spedizione (vettore / tracking).",
                  ]}
                />

                <H4>Documentazione accise</H4>
                <List
                  items={[
                    "Evidenza del regime accisa applicato.",
                    "Tracciabilità del flusso fiscale secondo il modello adottato.",
                  ]}
                />

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Se la parte “accise” non esiste o non è dimostrabile, il corriere non è obbligato a
                  “difendere” il mittente: si tutela operativamente.
                </div>
              </ArticleCard>

              <ArticleCard id="corrieri" icon={<Ship className="h-5 w-5" />} title="6) Perché molti problemi “con i corrieri” non sono colpa dei corrieri">
                <P>
                  Quando una spedizione viene bloccata, il corriere applica regole operative e di responsabilità:
                  chiede prove documentali e coerenza del flusso.
                </P>
                <P>
                  Se il modello accise non esiste (o non è dimostrabile), il rischio resta in capo al mittente.
                </P>
              </ArticleCard>

              <ArticleCard id="approccio" icon={<ShieldCheck className="h-5 w-5" />} title="7) Come approcciare correttamente il B2C europeo">
                <P>La domanda giusta non è “Posso spedire vino a un privato in Europa?”.</P>
                <P>
                  È: <strong>“Con quale modello fiscale e logistico?”</strong>
                </P>
                <List
                  items={[
                    "Definisci prima il modello accise.",
                    "Poi struttura la logistica.",
                    "Non il contrario.",
                  ]}
                />
              </ArticleCard>

              <ArticleCard id="faq" icon={<FileText className="h-5 w-5" />} title="FAQ">
                <FaqItem q="Posso spedire poche bottiglie ogni tanto senza problemi?">
                  Anche invii piccoli possono essere controllati. Il punto non è la quantità, ma la coerenza del modello e dei documenti.
                </FaqItem>
                <FaqItem q="Se il cliente mi dice “pago io le accise”, allora sono coperto?">
                  Il cliente può rimborsare il costo nel prezzo, ma nel B2C intra-UE non è lui a gestire la parte fiscale operativamente.
                </FaqItem>
                <FaqItem q="Che cosa devo fare prima di attivare l’e-commerce B2C in UE?">
                  Definire un modello accise sostenibile, poi strutturare logistica, documenti e comunicazione “tutto incluso”.
                </FaqItem>

                <FinalCta />
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
        Se vuoi spedire B2C in UE senza improvvisare, possiamo dirti subito se il modello è sostenibile.
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
        Prima di spedire: fai una verifica di 10 minuti
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Ti diciamo cosa serve (e cosa no) per evitare blocchi e richieste retroattive.
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
        Nel vino, la logistica è anche fiscalità. SPST ti aiuta a scegliere il modello corretto e a renderlo operativo.
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
