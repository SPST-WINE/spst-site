// app/spst-paylink/page.tsx
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SPST Paylink – Spedizioni B2C enoturismo | SPST",
  description:
    "Dal tasting in cantina alla porta di casa del cliente. SPST Paylink è il sistema B2C door-to-door con MRN incluso e ritiro in cantina.",
};

const primary = "bg-[#0A1722]";
const accent = "#F7921E";

export default function SpstPaylinkPage() {
  return (
    <div className={`${primary} min-h-screen text-white`}>
      {/* HEADER SEMPLICE – se hai già un SiteHeader, sostituisci questo blocco */}
      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
              <span className="text-xs font-semibold tracking-[0.2em]">
                SP
              </span>
            </div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/80">
              SPST
            </span>
          </Link>

          <nav className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-white/60 md:flex">
            <a href="/#services" className="hover:text-white/95">
              Soluzioni
            </a>
            <a href="/#sectors" className="hover:text-white/95">
              Settori
            </a>
            <a href="/#contact" className="hover:text-white/95">
              Contatti
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: accent }}
              />
              SPST PAYLINK · B2C ENOTURISMO
            </p>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Dal tasting in cantina
                <br />
                alla porta di casa del cliente.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                SPST Paylink è il sistema{" "}
                <span className="font-semibold text-white">
                  B2C door-to-door
                </span>{" "}
                per l’enoturismo: il cliente paga da smartphone, inserisce i
                dati di spedizione e noi gestiamo{" "}
                <span className="font-semibold">MRN, ritiro in cantina</span> e
                consegna a domicilio.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-white/80">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Pagamento online in pochi click
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                MRN e documenti gestiti da SPST
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                Ritiro in cantina incluso
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-[#0A1722]"
                style={{ backgroundColor: accent }}
              >
                Come funziona
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                Parla con SPST
              </a>
            </div>

            <p className="text-xs text-white/50">
              Pensato per{" "}
              <span className="font-semibold">
                cantine, agriturismi, enoteche
              </span>{" "}
              che lavorano con turisti esteri e vogliono spedire in modo
              regolamentato e professionale.
            </p>
          </div>

          {/* MOCKUP VISUALE */}
          <MockupPaylinkHero />
        </section>

        {/* SEZIONE: COME FUNZIONA */}
        <section id="how-it-works" className="mt-16 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Come funziona SPST Paylink
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                Una sola infrastruttura per tutto: link di pagamento, raccolta
                dati di spedizione, documenti doganali, MRN e ritiro in
                cantina.
              </p>
            </div>
            <p className="text-xs text-white/50">
              Tutto il flusso è tracciato e supportato dal team SPST.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Per la cantina
                </span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "rgba(247,146,30,0.18)" }}
                >
                  1
                </span>
              </div>
              <h3 className="text-sm font-semibold">
                Generi un Paylink dedicato
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                SPST crea per te un link o QR code dedicato alla cantina (o
                all&apos;evento). Lo condividi con il cliente al momento
                dell&apos;acquisto in cantina.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/65">
                <li>• Nessun gestionale da installare.</li>
                <li>• Tariffe e regole impostate da SPST.</li>
                <li>• Puoi avere più link per aree / listini.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Per il cliente enoturista
                </span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "rgba(80, 180, 120, 0.2)" }}
                >
                  2
                </span>
              </div>
              <h3 className="text-sm font-semibold">
                Compila dati & paga in pochi minuti
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Dal proprio smartphone il cliente inserisce indirizzo,
                contatti, eventuale documento richiesto e conferma il pagamento
                con carta.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/65">
                <li>• Interfaccia mobile-first.</li>
                <li>• Dati di spedizione completi e validati.</li>
                <li>• Email di conferma con riepilogo.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Operatività SPST
                </span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "rgba(59,130,246,0.2)" }}
                >
                  3
                </span>
              </div>
              <h3 className="text-sm font-semibold">
                MRN, ritiro in cantina e consegna
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                SPST riceve l&apos;ordine, genera documenti e MRN, programma il
                ritiro in cantina e segue la spedizione fino alla consegna
                door-to-door.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/65">
                <li>• MRN ed export gestiti da SPST.</li>
                <li>• Ritiro in cantina incluso nel servizio.</li>
                <li>• Tracking + supporto via WhatsApp/Email.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURE GRID */}
        <section className="mt-16 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Cosa fa concretamente SPST Paylink
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                È molto più di un link di pagamento: è una infrastruttura
                operativa pensata per il vino e l’enoturismo.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/30 text-xs">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                </div>
                <p className="text-xs text-white/70">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET */}
        <section className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Per chi è pensato SPST Paylink
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <TagCard
              label="Cantine con forte flusso enoturistico"
              body="Vuoi permettere ai turisti di spedire a casa il vino acquistato in cantina, senza gestire spedizioni, MRN e burocrazia."
            />
            <TagCard
              label="Agriturismi, wine resort, enoteche"
              body="Strutture che ospitano degustazioni e vendono vino a turisti stranieri che non possono portare tutto in valigia."
            />
            <TagCard
              label="Eventi e fiere B2C"
              body="Stand che vogliono vendere sul posto e offrire al cliente la spedizione door-to-door come servizio premium."
            />
          </div>
        </section>

        {/* CTA FINALE */}
        <section
          id="contact"
          className="mt-16 mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[1.3fr,0.7fr] md:items-center">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Attivazione SPST Paylink
              </p>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Vuoi offrire la spedizione door-to-door ai tuoi enoturisti?
              </h2>
              <p className="text-sm text-white/70">
                Raccontaci volumi, Paesi di destinazione e tipologia di clientela.
                Ti aiutiamo a capire se SPST Paylink è la soluzione giusta per la
                tua struttura e definiamo insieme listini e processi.
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-white/70">
                <li>• Setup tecnico e operativo gestito da SPST.</li>
                <li>• Nessun investimento iniziale in software.</li>
                <li>• Modello a margine per spedizione.</li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/15 bg-[#0A1722]/70 p-4">
              <p className="text-xs text-white/65">
                Scrivici o prenota una call:
              </p>
              <div className="space-y-1 text-sm">
                <p className="font-medium">Gianluca Laudante</p>
                <p className="text-xs text-white/65">Export Manager · SPST</p>
              </div>
              <div className="space-y-2 text-xs text-white/80">
                <p>
                  📞 <a href="tel:+393201441789">+39 320 144 1789</a>
                </p>
                <p>
                  ✉️{" "}
                  <a href="mailto:info@spst.it" className="underline">
                    info@spst.it
                  </a>
                </p>
                <p>
                  🌐{" "}
                  <a
                    href="https://www.spst.it"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.spst.it
                  </a>
                </p>
              </div>
              <a
                href="https://wa.me/393201441789"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium text-[#0A1722]"
                style={{ backgroundColor: accent }}
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const FEATURES = [
  {
    title: "Link di pagamento su misura",
    icon: "🔗",
    body: "Paylink collegato ai tuoi listini e alle tue regole: puoi differenziare per Paese, zona, evento o periodo dell’anno.",
  },
  {
    title: "Dati spedizione completi",
    icon: "📦",
    body: "Indirizzo, telefono, email, note di consegna, eventuale documento d’identità e dichiarazioni richieste dal Paese di destinazione.",
  },
  {
    title: "MRN e compliance export",
    icon: "📑",
    body: "SPST si occupa di MRN e documenti export, integrando le regole doganali nel flusso operativo senza impattare sulla cantina.",
  },
  {
    title: "Ritiro in cantina programmato",
    icon: "🚚",
    body: "Organizziamo il ritiro direttamente presso la cantina, con finestre orarie e istruzioni chiare su imballo e colli.",
  },
  {
    title: "Door-to-door enoturista",
    icon: "🏡",
    body: "Il cliente riceve il vino a casa sua, con tracking aggiornato e supporto per eventuali dubbi su tempi e procedure.",
  },
  {
    title: "Supporto SPST dedicato",
    icon: "🧩",
    body: "Non solo tecnologia: c’è un team che conosce logistica vino, accise, dogane e problemi reali delle cantine.",
  },
];

function TagCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-xs text-white/70">{body}</p>
    </div>
  );
}

function MockupPaylinkHero() {
  return (
    <div className="relative mx-auto max-w-sm">
      {/* bagliore dietro */}
      <div className="absolute inset-0 translate-y-6 scale-110 rounded-[2.5rem] bg-gradient-to-br from-[#F7921E33] via-[#F7921E11] to-transparent blur-3xl" />
      {/* telefono */}
      <div className="relative z-10 rounded-[2.5rem] border border-white/10 bg-[#050910] p-4 shadow-2xl shadow-black/60">
        {/* notch */}
        <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/10" />

        {/* header app */}
        <div className="flex items-center justify-between text-xs text-white/60">
          <span className="text-[11px] uppercase tracking-[0.22em]">
            SPST PAYLINK
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
            Enoturismo
          </span>
        </div>

        {/* card riepilogo */}
        <div className="mt-4 space-y-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Spedizione vino
              </p>
              <p className="text-sm font-semibold">Cantina di Montalcino</p>
            </div>
            <p className="text-right text-xs">
              <span className="text-[10px] text-white/55">Totale</span>
              <br />
              <span className="text-sm font-semibold text-white">
                189,00 €
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2">
            <div className="text-[11px] text-white/70">
              <p className="text-white/60">Destinazione</p>
              <p className="font-medium text-white">Paris, France</p>
            </div>
            <div className="text-[11px] text-white/70">
              <p className="text-white/60">Bottiglie</p>
              <p className="font-medium text-white">18</p>
            </div>
          </div>
        </div>

        {/* step form */}
        <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-black/40 p-3 text-[11px]">
          <p className="text-white/70">
            1. Indirizzo di spedizione ✅
          </p>
          <p className="text-white/70">
            2. Dati contatto & documento ✅
          </p>
          <p className="text-white/90">
            3. Pagamento sicuro con carta
          </p>
        </div>

        {/* bottone paga ora */}
        <button
          type="button"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium text-[#0A1722]"
          style={{ backgroundColor: "#F7921E" }}
        >
          Paga e conferma spedizione
        </button>

        {/* footer mini */}
        <p className="mt-3 text-center text-[10px] text-white/45">
          MRN, export e ritiro in cantina gestiti da SPST.
        </p>
      </div>
    </div>
  );
}
