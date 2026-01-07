// app/legal/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Cookie,
  Mail,
  Scale,
  RefreshCcw,
  Lock,
} from "lucide-react";

import { SpstHeader } from "../components/spst/SpstHeader";
import { SpstFooter } from "../components/spst/SpstFooter";
import { SPST_PUBLIC_BG } from "../lib/spstTheme";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

export default function LegalPage() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servizi-e-contatti", label: "Servizi" },
    { href: "/#vantaggi", label: "Perché SPST" },
    { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
    { href: "/spst-paylink", label: "Paylink USA" },
  ];

  const lastUpdated = "07/01/2026";

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      <SpstHeader navItems={navItems} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* glow brand */}
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
            Documentazione legale
          </span>

          <h1 className="mt-3 text-center text-[30px] font-black leading-[1.08] sm:text-[36px] md:text-left md:text-[48px]">
            Termini, condizioni e{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              privacy
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[80ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            Qui trovi i Termini di utilizzo e l’informativa Privacy relativi al
            sito e ai servizi SPST (inclusi portale, richieste di quotazione e
            Paylink USA). Ultimo aggiornamento:{" "}
            <span className="font-semibold text-white/90">{lastUpdated}</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#termini"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
              style={{ background: SPST_ORANGE, color: "#0f1720" }}
            >
              Vai ai Termini
            </a>
            <a
              href="#privacy"
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              Vai alla Privacy
            </a>
          </div>

          {/* Quick summary cards */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <MiniCard
              icon={<FileText className="h-5 w-5" />}
              title="Termini d’uso"
              text="Regole di utilizzo del sito, del portale e dei flussi di richiesta/checkout."
            />
            <MiniCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Privacy"
              text="Come trattiamo i dati: finalità, basi giuridiche, conservazione e diritti."
            />
            <MiniCard
              icon={<Cookie className="h-5 w-5" />}
              title="Cookie"
              text="Informazioni essenziali su cookie tecnici e, se presenti, strumenti di analytics."
            />
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
                  <TocLink href="#termini" label="1. Termini e condizioni" />
                  <TocLink href="#servizi" label="2. Descrizione dei servizi" />
                  <TocLink href="#responsabilita" label="3. Responsabilità" />
                  <TocLink href="#pagamenti" label="4. Pagamenti e rimborsi" />
                  <TocLink href="#privacy" label="5. Privacy policy" />
                  <TocLink href="#cookie" label="6. Cookie" />
                  <TocLink href="#contatti" label="7. Contatti" />
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Nota: questo testo è un template “pronto-pubblicazione” ma non
                  sostituisce una consulenza legale. Se vuoi lo rendiamo 100%
                  aderente alla tua ragione sociale/partita IVA e ai tuoi flussi
                  (Stripe, vettori, importatori).
                </div>
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-6">
              {/* TERMINI */}
              <LegalCard id="termini" icon={<Scale className="h-5 w-5" />} title="1) Termini e condizioni">
                <LegalP>
                  I presenti Termini e Condizioni (“Termini”) disciplinano
                  l’accesso e l’uso del sito SPST, dei moduli di richiesta
                  quotazione, del portale cliente e di eventuali flussi di
                  pagamento (es. Paylink USA).
                </LegalP>
                <LegalP>
                  Accedendo o utilizzando i servizi, l’utente dichiara di aver
                  letto e accettato i Termini. Se non si accettano i Termini, si
                  prega di non utilizzare il sito o i servizi.
                </LegalP>

                <LegalH4>Ambito</LegalH4>
                <LegalList
                  items={[
                    "Il sito fornisce informazioni commerciali e canali di contatto.",
                    "Il portale consente funzioni operative (es. richiesta e gestione spedizioni, documenti e tracking).",
                    "I pagamenti, ove presenti, possono essere gestiti tramite provider terzi (es. Stripe).",
                  ]}
                />

                <LegalH4>Requisiti</LegalH4>
                <LegalList
                  items={[
                    "L’utente garantisce che le informazioni fornite siano veritiere e aggiornate.",
                    "L’utente è responsabile della custodia delle proprie credenziali di accesso.",
                  ]}
                />
              </LegalCard>

              {/* SERVIZI */}
              <LegalCard id="servizi" icon={<ShipIcon />} title="2) Descrizione dei servizi">
                <LegalP>
                  SPST supporta l’operatività export e logistica del vino,
                  includendo (a titolo esemplificativo) gestione documentale,
                  organizzazione ritiri, spedizioni express o pallet, e supporto
                  clienti.
                </LegalP>

                <LegalH4>Documenti e compliance</LegalH4>
                <LegalP>
                  Le pratiche/documenti possono variare in base a Paese,
                  normativa e tipologia di spedizione (B2B/B2C/campionature). Il
                  cliente si impegna a fornire informazioni complete e corrette
                  (valori, destinatari, contenuto, quantità, ecc.).
                </LegalP>

                <LegalH4>Tempistiche e tracking</LegalH4>
                <LegalP>
                  Le tempistiche sono stime operative e possono subire variazioni
                  per controlli doganali, picchi stagionali, eventi di forza
                  maggiore o policy dei trasportatori.
                </LegalP>
              </LegalCard>

              {/* RESPONSABILITA */}
              <LegalCard
                id="responsabilita"
                icon={<Lock className="h-5 w-5" />}
                title="3) Responsabilità"
              >
                <LegalP>
                  SPST si impegna a svolgere il servizio con diligenza
                  professionale. Tuttavia:
                </LegalP>
                <LegalList
                  items={[
                    "SPST non risponde di ritardi/fermi dovuti a controlli doganali, decisioni delle autorità o eventi non imputabili a SPST.",
                    "SPST non è responsabile per dati errati/incompleti forniti dal cliente (indirizzo, valore, contenuto, destinatario, documenti).",
                    "Eventuali limitazioni o esclusioni di merce (es. prodotti non spedibili) prevalgono e possono comportare blocchi/reso/distruzione secondo policy del vettore o autorità.",
                  ]}
                />

                <LegalH4>Uso improprio</LegalH4>
                <LegalP>
                  È vietato utilizzare il sito/portale per finalità illecite o
                  in violazione di norme applicabili, incluse norme doganali,
                  fiscali e di export/import.
                </LegalP>
              </LegalCard>

              {/* PAGAMENTI */}
              <LegalCard
                id="pagamenti"
                icon={<RefreshCcw className="h-5 w-5" />}
                title="4) Pagamenti e rimborsi"
              >
                <LegalP>
                  Se sono previsti pagamenti online, questi possono essere
                  processati da provider terzi (es. Stripe) e soggetti ai loro
                  termini e privacy.
                </LegalP>

                <LegalH4>Prezzi</LegalH4>
                <LegalP>
                  I prezzi possono dipendere da peso/volume, destinazione,
                  servizi accessori, dazi/tasse e requisiti documentali.
                  Eventuali differenze dovute a dati errati o variazioni
                  operative possono richiedere un adeguamento.
                </LegalP>

                <LegalH4>Rimborsi</LegalH4>
                <LegalP>
                  I rimborsi, se applicabili, sono valutati caso per caso in base
                  allo stato della lavorazione (es. ritiro già effettuato,
                  documenti già emessi, spedizione avviata). In presenza di costi
                  non recuperabili, potrebbe non essere possibile il rimborso
                  integrale.
                </LegalP>
              </LegalCard>

              {/* PRIVACY */}
              <LegalCard id="privacy" icon={<ShieldCheck className="h-5 w-5" />} title="5) Privacy policy">
                <LegalP>
                  Questa informativa descrive come SPST tratta i dati personali
                  degli utenti ai sensi della normativa applicabile (es. GDPR).
                </LegalP>

                <LegalH4>Titolare del trattamento</LegalH4>
                <LegalP>
                  Il Titolare è SPST. Per richieste privacy puoi scrivere a{" "}
                  <a
                    className="font-semibold text-orange-200 hover:underline"
                    href="mailto:info@spst.it"
                  >
                    info@spst.it
                  </a>
                  .
                </LegalP>

                <LegalH4>Dati trattati</LegalH4>
                <LegalList
                  items={[
                    "Dati di contatto: nome, email, telefono.",
                    "Dati operativi di spedizione: indirizzi, destinatari, contenuto dichiarato, documentazione e riferimenti di consegna.",
                    "Dati di accesso al portale: credenziali/identificativi (gestiti tramite provider di autenticazione).",
                    "Dati tecnici: log essenziali, indirizzo IP, identificativi di sessione (se necessari al funzionamento).",
                  ]}
                />

                <LegalH4>Finalità e base giuridica</LegalH4>
                <LegalList
                  items={[
                    "Erogazione del servizio e gestione richieste (esecuzione del contratto / misure precontrattuali).",
                    "Adempimenti legali, fiscali e doganali (obbligo legale).",
                    "Sicurezza del portale e prevenzione abusi (legittimo interesse).",
                    "Comunicazioni di servizio (esecuzione del contratto / legittimo interesse).",
                  ]}
                />

                <LegalH4>Conservazione</LegalH4>
                <LegalP>
                  Conserviamo i dati per il tempo necessario alle finalità
                  indicate e, quando richiesto, per gli obblighi di legge
                  (es. fiscale/amministrativo).
                </LegalP>

                <LegalH4>Destinatari / Responsabili</LegalH4>
                <LegalP>
                  I dati possono essere trattati da fornitori tecnici (es.
                  hosting, email, analytics, pagamento) nominati responsabili,
                  e condivisi con vettori, consulenti o autorità quando necessario
                  all’esecuzione del servizio o per obbligo di legge.
                </LegalP>

                <LegalH4>Diritti dell’interessato</LegalH4>
                <LegalP>
                  Puoi esercitare i diritti di accesso, rettifica, cancellazione,
                  limitazione, opposizione e portabilità, nei limiti previsti
                  dalla legge, scrivendo a{" "}
                  <a
                    className="font-semibold text-orange-200 hover:underline"
                    href="mailto:info@spst.it"
                  >
                    info@spst.it
                  </a>
                  .
                </LegalP>
              </LegalCard>

              {/* COOKIE */}
              <LegalCard id="cookie" icon={<Cookie className="h-5 w-5" />} title="6) Cookie">
                <LegalP>
                  Il sito può utilizzare cookie tecnici necessari al
                  funzionamento (es. sessione, preferenze). Se vengono utilizzati
                  strumenti di analytics o cookie non essenziali, SPST potrà
                  richiedere il consenso tramite banner/cookie manager.
                </LegalP>

                <LegalH4>Tipologie</LegalH4>
                <LegalList
                  items={[
                    "Cookie tecnici: indispensabili per navigazione e autenticazione.",
                    "Cookie analytics (eventuali): misurazione aggregata del traffico.",
                    "Cookie di terze parti (eventuali): servizi esterni incorporati.",
                  ]}
                />
              </LegalCard>

              {/* CONTATTI */}
              <LegalCard id="contatti" icon={<Mail className="h-5 w-5" />} title="7) Contatti">
                <LegalP>
                  Per informazioni legali o privacy, contattaci:
                </LegalP>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <ContactPill
                    title="Email"
                    value="info@spst.it"
                    href="mailto:info@spst.it"
                  />
                  <ContactPill
                    title="WhatsApp"
                    value="+39 320 144 1789"
                    href="https://wa.me/393201441789"
                  />
                </div>

                <div className="mt-5 text-xs text-white/60">
                  Sezione “Legal” pubblicata a scopo informativo. Per esigenze
                  specifiche (ragione sociale, sede, P.IVA, DPO, sub-responsabili,
                  clausole USA), aggiorniamo il testo in base al tuo assetto.
                </div>
              </LegalCard>
            </div>
          </div>
        </div>
      </section>

      <SpstFooter />
    </main>
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

function LegalCard({
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

function LegalH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="pt-2 text-[13px] font-bold uppercase tracking-wider text-white/85">
      {children}
    </h4>
  );
}

function LegalP({ children }: { children: React.ReactNode }) {
  return <p className="m-0">{children}</p>;
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1 text-white/80">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

function ContactPill({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
    >
      <div className="text-[11px] uppercase tracking-wider text-white/55">
        {title}
      </div>
      <div className="mt-1 font-semibold text-white/85 group-hover:text-white">
        {value}
      </div>
    </a>
  );
}

function ShipIcon() {
  return <Ship className="h-5 w-5" />;
}
