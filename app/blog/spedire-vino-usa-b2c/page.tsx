"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  AlertTriangle,
  FileCheck2,
  ShieldCheck,
  Ship,
  Scale,
  MessageCircle,
  ArrowRight,
  Link as LinkIcon,
  Building2,
  FileText,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

const LAST_UPDATED = "10/01/2026"; // dd/mm/yyyy

export default function BlogSpedireVinoUsaB2CPage() {
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
            USA • B2C • Importazione & compliance
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            Spedire vino a un cliente finale{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              negli USA
            </span>{" "}
            (dall’Europa): perché è quasi sempre frainteso
          </h1>

          <p className="mx-auto mt-3 max-w-[100ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Gli Stati Uniti sono uno dei mercati più desiderati, ma anche tra i più
            fraintesi. Il punto non è il corriere: è la struttura legale/fiscale.
            In questa guida spieghiamo perché servono <strong>COLA</strong> e un{" "}
            <strong>Importatore USA</strong>, e qual è il flusso corretto e scalabile.
            Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{LAST_UPDATED}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#modello"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vedi il modello corretto
            </a>

            <a
              href="/spst-paylink"
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Scopri Paylink USA
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
              title="Non è una “spedizione”"
              text="Negli USA l’accesso al mercato alcol è regolato: trasporto e diritto di importare sono due cose diverse."
            />
            <MiniCard
              icon={<FileCheck2 className="h-5 w-5" />}
              title="Serve COLA"
              text="Per importare/commercializzare vino serve approvazione etichetta (COLA), salvo casi specifici/limitati."
            />
            <MiniCard
              icon={<Building2 className="h-5 w-5" />}
              title="Serve Importatore USA"
              text="L’importazione richiede un soggetto autorizzato negli Stati Uniti (Importer of Record / licenze)."
            />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            Nota: contenuto divulgativo. Le regole USA variano anche per Stato e
            canale (DTC/retail). Questa pagina descrive il principio operativo:
            per vendere B2C in modo difendibile serve un flusso di importazione e
            vendita domestica USA.
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
                  <TocLink href="#principio" label="1. Il principio chiave" />
                  <TocLink href="#cola" label="2. Perché serve COLA" />
                  <TocLink href="#importatore" label="3. Perché serve importatore" />
                  <TocLink href="#perche-no" label="4. Perché “spedire al cliente” non funziona" />
                  <TocLink href="#three-tier" label="5. Three-Tier System" />
                  <TocLink href="#passa" label="6. “Ma a volte passa”" />
                  <TocLink href="#modello" label="7. L’unico modello corretto" />
                  <TocLink href="#spst" label="8. Cosa fa SPST" />
                  <TocLink href="#sintesi" label="In sintesi" />
                  <TocLink href="#faq" label="FAQ" />
                </div>

                <CtaBox />
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-6">
              <ArticleCard
                id="principio"
                icon={<Scale className="h-5 w-5" />}
                title="1) Negli USA il vino non entra liberamente"
              >
                <P>
                  Negli Stati Uniti il vino è una bevanda alcolica regolata a livello
                  federale e statale. Non esiste un equivalente semplice del “B2C
                  dall’estero” come spesso viene immaginato in UE.
                </P>
                <P>
                  Chi tenta di “spedire e basta” confonde il <strong>trasporto</strong>{" "}
                  con il <strong>diritto di importare e vendere</strong>.
                </P>
              </ArticleCard>

              <ArticleCard
                id="cola"
                icon={<FileCheck2 className="h-5 w-5" />}
                title="2) Perché serve una COLA (Certificate of Label Approval)"
              >
                <P>
                  In generale, per importare e commercializzare vino negli USA serve una{" "}
                  <strong>COLA</strong> rilasciata dalla <strong>TTB</strong>: certifica
                  che etichetta e informazioni obbligatorie siano conformi.
                </P>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-300" />
                    Punto importante
                  </div>
                  <div className="mt-1 text-[13px] text-white/75">
                    “È un regalo / una tantum / per un cliente affezionato” non cambia il tema:
                    se il prodotto entra nel circuito commerciale/regolato, serve struttura.
                  </div>
                </div>
              </ArticleCard>

              <ArticleCard
                id="importatore"
                icon={<Building2 className="h-5 w-5" />}
                title="3) Perché serve un Importatore USA (Importer of Record)"
              >
                <P>
                  Altro punto non negoziabile: l’importazione di alcol richiede un{" "}
                  <strong>soggetto USA autorizzato</strong> (licenze/permessi),
                  che interagisce con dogana e autorità, paga dazi/tasse e si assume
                  la responsabilità legale.
                </P>
                <P>
                  Il cliente finale (privato) di norma non può sostituirsi a questo ruolo
                  in modo “semplice” e replicabile.
                </P>
              </ArticleCard>

              <ArticleCard
                id="perche-no"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="4) Perché “spedire direttamente al cliente” non funziona"
              >
                <P>Mettiamo insieme i pezzi:</P>
                <div className="grid gap-3 sm:grid-cols-2">
                  <CheckPill bad text="Importatore USA autorizzato: non aggirabile" />
                  <CheckPill bad text="Licenze/permessi: non aggirabili" />
                  <CheckPill bad text="COLA: spesso necessaria" />
                  <CheckPill bad text="Tasse, dazi, excise: parte del flusso" />
                  <CheckPill bad text="Regole statali / canali: non uniformi" />
                  <CheckPill bad text="Corriere ≠ diritto di importare" />
                </div>

                <Quote>
                  “Basta spedire con DHL/UPS/FedEx” confonde il trasporto con l’abilitazione legale all’importazione/vendita.
                </Quote>
              </ArticleCard>

              <ArticleCard
                id="three-tier"
                icon={<Ship className="h-5 w-5" />}
                title="5) Il Three-Tier System: perché qualcuno negli USA deve essere “nel mezzo”"
              >
                <P>
                  Negli USA l’alcol è storicamente regolato con un sistema a livelli
                  (produttore / importatore-distributore / retail). La forma e rigidità
                  variano da Stato a Stato, ma il principio è: non si “salta” il canale.
                </P>
                <P>
                  Anche nel B2C, per essere difendibile e scalabile, la vendita al consumatore
                  avviene attraverso un canale autorizzato dall’interno degli USA.
                </P>
              </ArticleCard>

              <ArticleCard
                id="passa"
                icon={<AlertTriangle className="h-5 w-5" />}
                title='6) "Ma conosco gente che spedisce e arriva lo stesso"'
              >
                <P>
                  Può succedere. Ma “passare” non è sinonimo di conformità:
                  spesso significa che non è stata intercettata.
                </P>
                <div className="grid gap-3 sm:grid-cols-2">
                  <RiskPill text="sequestro o respingimento" />
                  <RiskPill text="distruzione merce" />
                  <RiskPill text="problemi futuri con vettori/autorità" />
                  <RiskPill text="modello non scalabile" />
                </div>
              </ArticleCard>

              <ArticleCard
                id="modello"
                icon={<BadgeCheck className="h-5 w-5" />}
                title="7) L’unico modello corretto (e scalabile) per il B2C USA"
              >
                <P>Il flusso “difendibile” è questo:</P>
                <List
                  items={[
                    "Il vino viene importato tramite un soggetto USA autorizzato (Importer of Record / licenze).",
                    "Il prodotto è gestito correttamente a livello etichette/approval (COLA o percorso applicabile).",
                    "Vengono assolti dazi, excise tax e adempimenti.",
                    "La vendita al cliente finale avviene dall’interno degli USA (canale autorizzato).",
                  ]}
                />
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[13px] text-white/75">
                  Non è una “spedizione diretta”: è una vendita domestica USA dopo importazione corretta.
                </div>

                <MidCta />
              </ArticleCard>

              <ArticleCard
                id="spst"
                icon={<LinkIcon className="h-5 w-5" />}
                title="8) Cosa fa SPST in questo scenario"
              >
                <P>
                  SPST non promette scorciatoie. Strutturiamo quello che serve davvero:
                </P>
                <List
                  items={[
                    "lavoriamo con importatori USA autorizzati",
                    "valutiamo fattibilità COLA e compliance label",
                    "definiamo il flusso corretto in base a Stato/canale",
                    "rendiamo il modello scalabile (non “una spedizione e via”)",
                  ]}
                />

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-white/90">
                    <FileText className="mt-0.5 h-4 w-4 text-orange-200" />
                    Se ti interessa il B2C USA “vero”
                  </div>
                  <div className="mt-1 text-[13px] text-white/75">
                    Vai su Paylink USA oppure chiedici una call: capiamo volumi, stato di destinazione,
                    etichette e modello più rapido.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="/spst-paylink"
                      className="rounded-full px-4 py-2 text-sm font-semibold"
                      style={{ background: SPST_ORANGE, color: "#0f1720" }}
                    >
                      Apri Paylink USA <ArrowRight className="h-4 w-4 inline" />
                    </a>
                    <a
                      href="/portale-quotazioni"
                      className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
                      style={{ borderColor: `${SPST_ORANGE}55` }}
                    >
                      Richiedi una quotazione
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
                    "Non esiste un “canale semplice” e scalabile per spedire B2C dall’Europa al consumatore USA senza struttura.",
                    "Spesso serve COLA (TTB) e comunque un percorso di compliance label.",
                    "Serve un Importer of Record / soggetto USA autorizzato.",
                    "Il modello corretto è importazione + vendita domestica USA.",
                  ]}
                />
                <FinalCta />
              </ArticleCard>

              <ArticleCard id="faq" icon={<FileText className="h-5 w-5" />} title="FAQ">
                <FaqItem q="COLA serve sempre?">
                  Nella pratica, per importazione/commercializzazione è molto spesso necessaria. Esistono casi particolari/eccezioni,
                  ma non sono un “canale B2C semplice” replicabile. SPST valuta il caso in base a prodotto, etichetta e canale.
                </FaqItem>
                <FaqItem q="Perché non posso semplicemente usare un corriere espresso?">
                  Perché il corriere gestisce il trasporto. L’importazione/vendita di alcol richiede licenze, responsabilità e adempimenti
                  che non vengono “sostituiti” dalla spedizione.
                </FaqItem>
                <FaqItem q="Qual è la strada più veloce per iniziare col B2C USA?">
                  In genere: definire Stato/canale, verificare etichette (COLA), appoggiarsi a un importatore USA e vendere dall’interno degli USA.
                </FaqItem>
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
        Valutazione rapida USA
      </div>
      <div className="mt-2 text-sm text-white/80">
        Dimmi: Stato, volumi, etichette e canale (DTC/retail). Ti diciamo subito se è fattibile e con quale flusso.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/spst-paylink"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Paylink USA <ArrowRight className="h-4 w-4" />
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
        Vuoi vendere B2C USA in modo scalabile?
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Se manca importatore/COLA, il modello non regge. Ti aiutiamo a impostare il flusso corretto.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/spst-paylink"
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Scopri Paylink USA
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

function FinalCta() {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-sm font-semibold text-white/90">
        B2C USA = importazione corretta + vendita domestica
      </div>
      <div className="mt-1 text-[13px] text-white/75">
        Se vuoi evitare zone grigie e costruire un canale stabile negli USA, partiamo da etichette, importatore e canale statale.
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="/spst-paylink"
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: SPST_ORANGE, color: "#0f1720" }}
        >
          Vai a Paylink USA
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

function CheckPill({ text, bad }: { text: string; bad?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80">
      <div className="flex items-start gap-2">
        {bad ? (
          <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-300" />
        ) : (
          <BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-300" />
        )}
        <span>{text}</span>
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
