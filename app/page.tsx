'use client';

import { motion } from 'framer-motion';
import { TriangleAlert, Mail, Phone, Building2, Ship, Globe2, ChevronDown, Route, FileCheck2, TrendingUp } from 'lucide-react';

const SPST_BLUE = '#0a1722'; // base blu scuro (sfondo)
const SPST_BLUE_SOFT = '#1c3e5e'; // accenti
const SPST_ORANGE = '#f7931e';
const LOGO_URL = 'https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png';

export default function Home() {
  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        // sfondo blu SPST esteso più in basso per evitare il "nero piatto"
        background:
          'radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)',
      }}
    >
      {/* ===== STICKY HEADER ===== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>
          <nav className="hidden md:flex items-center gap-3 text-[0.95rem] font-semibold">
            {[
              ['#funziona', 'Come funziona'],
              ['#servizi', 'Servizi'],
              ['#chi', 'Clienti'],
              ['#vantaggi', 'Perché SPST'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors">
                {label}
              </a>
            ))}
            <a href="https://www.spst.it/wine-connect-cantina" className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors">Wine Connect</a>
            <a
              href="https://app.spst.it/login"
              className="inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              Area Riservata
            </a>
          </nav>
          <a
            href="#contatti"
            className="md:hidden inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-3 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
          >
            Contatti
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* glow brand morbidi */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)` }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute -bottom-24 right-1/2 translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)` }}
        />

        <div className="mx-auto max-w-[1200px] px-5 grid md:grid-cols-[1.05fr_.95fr] gap-8 items-center pt-10 md:pt-16 pb-12">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs tracking-wider uppercase text-white/70">Export vino all‑in‑one</span>
            <h1 className="mt-2 text-[34px] sm:text-[40px] md:text-[58px] font-black leading-[1.03]">
              Il tuo vino nel mondo,
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})` }}>senza pensieri.</span>
            </h1>
            <p className="mt-3 text-white/85 text-[15px] sm:text-base max-w-[60ch] mx-auto md:mx-0">
              SPST gestisce documenti doganali e fiscali, organizza la spedizione (express o pallet) e ti aiuta a vendere all'estero con Wine Connect. Un partner unico dall'Italia ai tuoi buyer.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://www.spst.it/portale-quotazioni"
                className="px-4 py-2 rounded-full font-semibold text-sm shadow transition-all duration-200 hover:shadow-orange-500/20 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
                style={{ background: SPST_ORANGE, color: '#0f1720' }}
              >
                Richiedi una quotazione
              </a>
              <a
                href="https://www.spst.it/servizi-e-contatti"
                className="px-4 py-2 rounded-full border font-semibold text-sm transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                Servizi e contatti
              </a>
            </div>

            {/* pills animate */}
            <div className="mt-6 overflow-hidden">
              <Marquee>
                <Pill>Accise</Pill>
                <Pill>COLA</Pill>
                <Pill>Prior Notice</Pill>
                <Pill>Corrieri espressi</Pill>
                <Pill>e‑DAS</Pill>
                <Pill>HS Code</Pill>
                <Pill>Accisa Assolta</Pill>
                <Pill>Wine Connect</Pill>
              </Marquee>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.8 }}
              className="mt-10 hidden md:flex items-center gap-2 text-white/50"
            >
              <ChevronDown className="h-5 w-5" />
              <span className="text-xs">Scorri</span>
            </motion.div>
          </div>

          {/* === HERO VISUAL SOLO "S" con sheen === */}
          <HeroVisual />
        </div>
      </section>

      {/* ===== PROBLEMI ===== */}
      <section id="scopri" className="relative py-10">
        <SectionHeader kicker="I problemi reali" title={<>Perché è complicato<br className="sm:hidden"/> spedire vino</>} tone="problem"/>
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 md:grid-cols-3">
          {[
            { icon: <TriangleAlert className="h-5 w-5" />, title: 'Documenti doganali complessi', desc: 'e-DAS, proforma, accise, HS code: facciamo tutto noi.' },
            { icon: <Ship className="h-5 w-5" />, title: 'Costi di spedizione variabili', desc: 'Tariffe chiare e competitive con corrieri espressi.' },
            { icon: <Globe2 className="h-5 w-5" />, title: 'Buyer difficili da raggiungere', desc: 'Rete e qualifica lead sui mercati esteri.' },
          ].map((x, i) => (
            <motion.div key={i} initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl p-4 border bg-white/[0.03] border-white/10">
              <div className="flex items-center gap-3">
                <div className="shrink-0 grid place-items-center rounded-xl w-9 h-9 bg-white/5 border border-white/10">{x.icon}</div>
                <div>
                  <div className="font-semibold text-[16px]">{x.title}</div>
                  <div className="text-white/70 text-[13px] leading-snug">{x.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== COME FUNZIONA (3 step) ===== */}
      <section id="funziona" className="py-12">
        <SectionHeader kicker="Come funziona" title="Dalla carta al tracking, in 3 step" tone="solution" />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 md:grid-cols-3">
          {[
            { title: '1) Documenti a norma', text: 'Accise, COLA, Prior Notice, e‑DAS e tutta la parte burocratica per partire in regola.', icon: (
              <FileCheck2 className="h-5 w-5" />
            ) },
            { title: '2) Spedizione ottimizzata', text: 'Scegliamo i corrieri e le tratte migliori (express o pallet), con tracking e assistenza dedicata.', icon: (
              <Route className="h-5 w-5" />
            ) },
            { title: '3) Crescita commerciale', text: 'Con Wine Connect colleghiamo cantine e buyer esteri. Campionature e ordini veloci e sicuri', icon: (
              <TrendingUp className="h-5 w-5" />
            ) },
          ].map(({ title, text, icon }) => (
            <Card key={title} title={title} text={text} icon={icon} />
          ))}
        </div>
      </section>

      {/* ===== COSA FACCIAMO ===== */}
      <section id="servizi" className="py-12">
        <SectionHeader kicker="Cosa facciamo" title="Operatività, non promesse" tone="accent" />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            ['Logistica & Spedizioni', 'Express, campionature e pallet in Europa e USA. Consolidamento e soluzioni temperature‑safe.'],
            ['Dogana & Fisco', 'Accise assolta/sospesa, COLA, Prior Notice, e‑DAS. Documenti generati e archiviati in modo smart.'],
            ['Deposito & Rappresentanza', 'Stoccaggio e rappresentanza fiscale per semplificare la vendita nei diversi Paesi.'],
            ['Wine Connect', 'Matchmaking cantine‑buyer, onboarding, KPI e supporto commerciale per entrare in nuovi mercati.'],
          ].map(([title, text]) => (
            <Card key={title} title={title} text={text} />
          ))}
        </div>

        {/* KPI band Wine Connect */}
        <div className="mx-auto max-w-[1200px] px-5 mt-6">
          <div className="rounded-2xl p-5 border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02]">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ num: '50+', label: 'Cantine' }, { num: '20+', label: 'Buyer' }, { num: 'USA, ASIA, UE', label: 'Mercati' }].map((k, i) => (
                <motion.div key={i} initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="text-xl font-extrabold">{k.num}</div>
                  <div className="text-xs text-white/70">{k.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PER CHI ===== */}
      <section id="chi" className="py-12">
        <SectionHeader kicker="Per chi lavoriamo" title="Partner per cantine, distributori, importatori ed e‑commerce" tone="plain" />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            ['Cantine', 'Da chi inizia a esportare fino a realtà strutturate.'],
            ['Distributori', 'Flussi costanti e palette ricorrenti in EU/USA.'],
            ['Importatori', 'Assistenza documentale, consolidamenti e tempi rapidi.'],
            ['E‑commerce', 'Campionature e B2C, integrazioni e automazioni.'],
          ].map(([title, text]) => <Card key={title} title={title} text={text} />)}
        </div>
      </section>

      {/* ===== PERCHÉ SPST ===== */}
      <section id="vantaggi" className="py-12">
        <SectionHeader kicker="Perché scegliere SPST" title="Unico partner, tariffe ottimizzate, assistenza reale" tone="plain" />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 md:grid-cols-3">
          {[
            ['Un unico partner', 'Documenti + logistica + supporto commerciale → meno errori, tempi più rapidi.'],
            ['Tariffe e tratte ottimizzate', 'Multi‑corriere e selezione dinamica delle rotte per ridurre costi e transit time.'],
            ['Assistenza reale', 'WhatsApp dedicato, SLA chiari e dashboard spedizioni sempre aggiornato.'],
          ].map(([title, text]) => <Card key={title} title={title} text={text} />)}
        </div>
      </section>

      {/* ===== CTA BLUR ===== */}
      <section id="preventivo" className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)]">
            <h3 className="text-xl font-bold text-white m-0">Pronto a spedire il tuo vino nel mondo?</h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50" style={{ background: SPST_ORANGE }} href="https://www.spst.it/portale-quotazioni">Richiedi una quotazione</a>
              <a className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30" href="https://wa.me/393201441789">Supporto WhatsApp</a>
              <a className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30" href="https://www.spst.it/wine-connect-cantina">Wine Connect</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTATTI (quick lead) ===== */}
      <section id="contatti" className="py-12">
        <SectionHeader kicker="Parliamo della tua cantina" title="Richiedi informazioni" tone="accent" />
        <div className="mx-auto max-w-[820px] px-5">{/* più largo come le card */}
          <QuickForm />
          <div className="mt-3 text-center text-[12px] text-white/60">Compili in 30 secondi. Ti rispondiamo in giornata.</div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8">
        <div className="mx-auto max-w-[1200px] px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a className="flex items-center gap-2 text-white font-extrabold" href="/">
            <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
          </a>
          <small className="text-white/80 leading-tight text-center sm:text-right">
            © SPST SRL · P.IVA IT03218840647 · Sede Legale: Piazzale Gambale 23, Avellino (AV) 83100
          </small>
        </div>
      </footer>
    </main>
  );
}

/* ------------------------ COMPONENTS ------------------------ */
function SectionHeader({ kicker, title, tone = 'plain' }: { kicker: string; title: React.ReactNode; tone?: 'problem' | 'solution' | 'accent' | 'plain' }) {
  const gradients: Record<string, string> = {
    problem: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    solution: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    accent: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    plain: `linear-gradient(90deg, #fff, #fff)`,
  };
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-5 text-center md:text-left">
      <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[11px] tracking-wider uppercase text-white/60">
        {kicker}
      </motion.div>
      <div className="relative inline-block">
        {/* blur arancio-bianco dietro al titolo */}
        <div aria-hidden className="absolute -inset-x-6 -inset-y-2 blur-xl md:blur-2xl opacity-25 pointer-events-none"
             style={{ background: `radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.45) 0%, rgba(247,147,30,.28) 40%, transparent 65%), radial-gradient(90% 120% at 50% 50%, rgba(28,62,94,.18) 0%, transparent 60%)` }} />
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-[26px] sm:text-[30px] md:text-[38px] font-black mt-1"
        >
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradients[tone] }}>{title}</span>
        </motion.h2>
      </div>
      <div className="mt-2 h-[3px] w-24 rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)` }} />
    </div>
  );
}


function Card({ title, text, icon }: { title: string; text: string; icon?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]"
    >
      {icon && (
        <div className="w-10 h-10 rounded-xl grid place-items-center text-white/90 bg-white/5 border border-white/10 mb-2">
          {icon}
        </div>
      )}
      <h3 className="text-white font-extrabold text-[1.1rem]">{title}</h3>
      <p className="text-white/80 text-[0.98rem]">{text}</p>
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-1 rounded-full text-white/80 text-xs font-semibold whitespace-nowrap border border-white/15 bg-white/5 shadow">
      {children}
    </div>
  );
}

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-8">
      <motion.div initial={{ x: 0 }} animate={{ x: [0, -160, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} className="absolute left-0 top-0 flex items-center gap-3">
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function QuickForm() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie! Ti contatteremo a breve.');
  };
  return (
    <form onSubmit={onSubmit} className="rounded-2xl p-5 grid gap-4 border border-white/10 bg-white/[0.04]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Field label="Azienda">
          <Building2 className="h-4 w-4 text-white/60" />
          <input required placeholder="Cantina / Azienda" className="bg-transparent outline-none w-full placeholder:text-white/40" />
        </Field>
        <Field label="Nome referente">
          <Building2 className="h-4 w-4 text-white/60" />
          <input required placeholder="Nome e cognome" className="bg-transparent outline-none w-full placeholder:text-white/40" />
        </Field>
        <Field label="Email">
          <Mail className="h-4 w-4 text-white/60" />
          <input required type="email" placeholder="nome@azienda.it" className="bg-transparent outline-none w-full placeholder:text-white/40" />
        </Field>
        <Field label="Telefono">
          <Phone className="h-4 w-4 text-white/60" />
          <input inputMode="tel" placeholder="+39 ..." className="bg-transparent outline-none w-full placeholder:text-white/40" />
        </Field>
        <Field label="Produzione annua (bottiglie)">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 20h12M9 20V8h6v12M10 4h4"/></svg>
          <input type="number" min="0" step="100" placeholder="es. 50.000" className="bg-transparent outline-none w-full placeholder:text-white/40" />
        </Field>
        <div className="grid gap-1">
          <div className="text-[11px] text-white/60">Spedisci già all'estero?</div>
          <div className="flex items-center gap-2 rounded-xl px-3 py-3 bg-black/30 border border-white/10">
            <select className="bg-transparent outline-none w-full">
              <option className="text-black" value="">Seleziona</option>
              <option className="text-black" value="si">Sì</option>
              <option className="text-black" value="no">No</option>
              <option className="text-black" value="saltuariamente">Saltuariamente</option>
            </select>
          </div>
        </div>
      </div>
      <motion.button whileTap={{ scale: 0.98 }} className="mt-1 h-12 rounded-xl font-semibold text-base text-[#0f1720] w-full transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50" style={{ background: SPST_ORANGE }}>
        Richiedi informazioni
      </motion.button>
      <div className="text-[11px] text-white/50 text-center">Invio protetto. Nessuno spam.</div>
    </form>
  );
}


function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="group grid gap-1">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="flex items-center gap-2 rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
        {children}
      </div>
    </label>
  );
}

/* ===== HERO VISUAL: solo S con sheen ===== */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-72 sm:w-80 md:w-full aspect-square">
      {/* glow morbido dietro la S */}
      <div className="absolute inset-0 rounded-full blur-[140px] opacity-50" style={{ background: `radial-gradient(60% 60% at 50% 50%, ${SPST_BLUE_SOFT}88, transparent 70%)` }} />

      {/* S con sheen CLIPPATO alla forma */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-40 md:w-48">
          <img src={LOGO_URL} alt="SPST" className="w-full drop-shadow-[0_8px_30px_rgba(247,147,30,.35)]" />
          
        </div>
      </div>
    </div>
  );
}
