'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  X,
  Building2,
  LineChart,
  MessageSquareMore,
  Lock,
  Users,
  BadgeCheck,
  Plane,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { useLocale } from '../../components/i18n/LocaleProvider';
import { SPST_PUBLIC_BG } from '../../lib/spstTheme';

const SPST_BLUE_SOFT = '#1c3e5e';
const SPST_ORANGE = '#f7931e';
const LOGO_URL =
  'https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png';

// Link alla sezione contatto in home (Parliamo della tua cantina · Richiedi informazioni)
const HOME_CONTATTI = '/#contatti';
const BLOG_URL = '/blog';

type Slide =
  | { kind: 'title'; kicker?: string; title: React.ReactNode; subtitle?: string }
  | {
      kind: 'column';
      kicker?: string;
      title: string;
      description?: string;
      items?: Array<{ icon?: React.ReactNode; title: string; desc?: string }>;
    }
  | { kind: 'cta'; title: string; bullets?: string[]; primary: { label: string; href: string }; secondary?: { label: string; href: string } };

// Slides: focus su area riservata, B2C/B2B, codice accisa buyer, enoturismo USA, fatturazione
function getSlides(t: any): Slide[] {
  return [
    {
      kind: 'title',
      kicker: t.hero.kicker,
      title: (
        <>
          {t.hero.title}{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})` }}
          >
            {t.hero.titleHighlight}
          </span>
        </>
      ),
      subtitle: t.hero.description,
    },
    {
      kind: 'column',
      kicker: 'Area riservata',
      title: 'Tutto in un’unica piattaforma',
      description: 'Dashboard, documenti, tracking e anagrafiche: gestisci spedizioni e pratiche senza uscire dalla web app. Meno email, più controllo.',
      items: [
        { icon: <Building2 className="h-5 w-5" />, title: 'Dashboard operativa', desc: 'Anagrafiche mittente/destinatario, ritiro, stati e tracking in tempo reale.' },
        { icon: <FileText className="h-5 w-5" />, title: 'Documenti e archivio', desc: 'LDV, e-DAS, accise: generazione, verifica e download in un solo posto.' },
        { icon: <LineChart className="h-5 w-5" />, title: 'Storico e KPI', desc: 'Spedizioni passate, tempi medi, costi: decisioni informate.' },
        { icon: <MessageSquareMore className="h-5 w-5" />, title: 'Assistenza integrata', desc: 'WhatsApp e telefono direttamente dalla piattaforma.' },
      ],
    },
    {
      kind: 'column',
      kicker: 'Per chi lavoriamo',
      title: 'Servizio B2C e B2B',
      description: 'Dalle cantine che spediscono a privati e buyer, ai distributori e agli e-commerce: un unico partner per export vino in regola.',
      items: [
        { icon: <Users className="h-5 w-5" />, title: 'B2C', desc: 'Spedizioni al cliente finale (Europa e USA) con documentazione e compliance a posto.' },
        { icon: <Building2 className="h-5 w-5" />, title: 'B2B', desc: 'Campionature, pallet e flussi ricorrenti verso importatori e buyer esteri.' },
        { icon: <MessageSquareMore className="h-5 w-5" />, title: 'Un solo interlocutore', desc: 'Documenti, logistica e supporto coordinati per entrambi i canali.' },
      ],
    },
    {
      kind: 'column',
      kicker: 'Buyer senza codice accisa',
      title: 'Codice accisa per chi non ce l’ha',
      description: 'Il tuo buyer è serio ma non ha un codice accisa? Con la rappresentanza fiscale SPST puoi vendere in Europa in regola. Accisa assolta o sospesa, a seconda del caso.',
      items: [
        { icon: <BadgeCheck className="h-5 w-5" />, title: 'Rappresentanza fiscale', desc: 'SPST agisce come rappresentante: il buyer riceve senza dover avere codice accisa.' },
        { icon: <FileText className="h-5 w-5" />, title: 'Pratiche accise', desc: 'Gestiamo assolta/sospesa e documentazione richiesta dai Paesi di destinazione.' },
        { icon: <MessageSquareMore className="h-5 w-5" />, title: 'Approfondimenti', desc: 'Sul blog: “Spedire vino B2B in Europa quando il buyer non ha un codice accisa”.' },
      ],
    },
    {
      kind: 'column',
      kicker: 'Spedizioni USA',
      title: 'Enoturismo e cliente finale negli USA',
      description: 'Visite in cantina, degustazioni e ordini dal cliente USA: con Paylink e il nostro flusso importazione + vendita domestica spedisci in modo legale e scalabile.',
      items: [
        { icon: <Plane className="h-5 w-5" />, title: 'Modello corretto', desc: 'Importatore USA, COLA e Prior Notice: niente “spedisco e basta”, zero rischi.' },
        { icon: <FileText className="h-5 w-5" />, title: 'Paylink USA', desc: 'Checkout dedicato per invii verso Stati Uniti con documentazione inclusa.' },
        { icon: <MessageSquareMore className="h-5 w-5" />, title: 'Approfondimenti', desc: 'Sul blog: guide su B2C USA, campioni e come spedire vino negli USA.' },
      ],
    },
    {
      kind: 'column',
      kicker: 'Trasparenza',
      title: 'Fatturazione chiara e trasparente',
      description: 'Niente sorprese: costi spiegati in anticipo, voci leggibili in fattura e supporto per ogni dubbio.',
      items: [
        { icon: <FileText className="h-5 w-5" />, title: 'Preventivi chiari', desc: 'Quotazioni con voci distinte (spedizione, documenti, assicurazione, ecc.).' },
        { icon: <LineChart className="h-5 w-5" />, title: 'Fatture leggibili', desc: 'Dettaglio per servizio e per spedizione, facile da conciliare.' },
        { icon: <MessageSquareMore className="h-5 w-5" />, title: 'Supporto', desc: 'Per qualsiasi chiarimento su costi e fatturazione.' },
      ],
    },
    {
      kind: 'cta',
      title: 'Parliamo della tua cantina',
      bullets: ['Preventivi chiari', 'Documenti a norma', 'Fatturazione trasparente'],
      primary: { label: 'Richiedi informazioni', href: HOME_CONTATTI },
      secondary: { label: 'Scopri i servizi sul blog', href: BLOG_URL },
    },
  ];
}

export default function PresentationPage() {
  const { t, locale } = useLocale();
  const slides = getSlides(t);
  const [i, setI] = React.useState(0);
  const [grid, setGrid] = React.useState(false);
  const [fs, setFs] = React.useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/#vantaggi", label: t.nav.whySpst },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
  ];

  const total = slides.length;
  const clamp = (n: number) => Math.max(0, Math.min(total - 1, n));
  const go = (dir: number) => setI((v) => clamp(v + dir));
  const goto = (idx: number) => setI(clamp(idx));

  // keyboard
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (grid) {
        if (e.key === 'Escape') setGrid(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(1);
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1);
      if (e.key.toLowerCase() === 'g') setGrid((v) => !v);
      if (e.key.toLowerCase() === 'f') toggleFs();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [grid]);

  // swipe
  const startX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  // fullscreen
  const toggleFs = async () => {
    const el: any = document.documentElement;
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.();
      setFs(true);
    } else {
      await document.exitFullscreen?.();
      setFs(false);
    }
  };

  return (
    <main
      className="min-h-[100svh] antialiased font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Header con controlli presentazione */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        
        {/* Controlli presentazione */}
        <div className="mx-auto max-w-[1200px] px-4 h-12 flex items-center justify-end gap-1 sm:gap-2">
          <button onClick={() => setGrid((v) => !v)} title="Indice (G)" className="rounded-lg hover:bg-white/10 p-2">
            {grid ? <X className="h-5 w-5" /> : <LayoutGrid className="h-5 w-5" />}
          </button>
          <button onClick={toggleFs} title="Fullscreen (F)" className="rounded-lg hover:bg-white/10 p-2">
            {fs ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </button>
        </div>

        {/* progress */}
        <div className="h-1 bg-white/10">
          <div className="h-1 bg-[var(--spst-orange,#f7931e)]" style={{ width: `${((i + 1) / total) * 100}%` }} />
        </div>
      </div>

      {/* Viewport */}
      <section className="mx-auto max-w-[1400px] px-4 py-4 md:py-6">
        <div
          className="
            relative mx-auto w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,.25)]
            min-h-[280px] h-[calc(100svh-56px-4px-2rem)] md:min-h-0 md:h-auto md:max-w-[1200px] md:aspect-[16/9]
          "
        >
          {/* Nav: mobile bottom, desktop laterali */}
          <div className="md:hidden absolute inset-x-0 bottom-3 flex items-center justify-between px-3 pointer-events-none">
            <button
              className="pointer-events-auto p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur hover:bg-white/10"
              onClick={() => go(-1)}
              title="Indietro"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              className="pointer-events-auto p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur hover:bg-white/10"
              onClick={() => go(1)}
              title="Avanti"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <button
            className="hidden md:inline-flex absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/30 border border-white/10 hover:bg-white/10"
            onClick={() => go(-1)}
            title="Indietro"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            className="hidden md:inline-flex absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/30 border border-white/10 hover:bg-white/10"
            onClick={() => go(1)}
            title="Avanti"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 md:p-0 overflow-auto md:overflow-hidden"
              onClick={() => go(1)}
            >
              <SlideRenderer slide={slides[i]} t={t} locale={locale} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index grid */}
        <AnimatePresence>
          {grid && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 grid gap-3 grid-cols-2 md:grid-cols-3">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    goto(idx);
                    setGrid(false);
                  }}
                  className="text-left rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4 hover:bg-white/[0.07] transition"
                >
                  <div className="text-[11px] text-white/60 mb-1">{locale === 'it' ? 'Slide' : 'Slide'} {idx + 1}</div>
                  <Preview slide={s} />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Helper comandi tastiera (ripristinato) */}
        <div className="mt-4 text-center text-white/60 text-[11px] sm:text-xs">
          Usa <kbd className="px-1 py-[2px] bg-white/10 rounded">←</kbd> / <kbd className="px-1 py-[2px] bg-white/10 rounded">→</kbd>,{' '}
          <kbd className="px-1 py-[2px] bg-white/10 rounded">G</kbd> per indice, <kbd className="px-1 py-[2px] bg-white/10 rounded">F</kbd> per fullscreen.
        </div>
      </section>
      
    </main>
  );
}

/* ---------------- RENDERERS ---------------- */
function SlideRenderer({ slide, t, locale }: { slide: Slide; t: any; locale: 'it' | 'en' }) {
  if (slide.kind === 'title') {
    return (
      <div className="w-full h-full grid place-items-center p-4 sm:p-6 text-center">
        <div className="max-w-[80ch] px-1">
          {slide.kicker && <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/70">{slide.kicker}</div>}
          <h1 className="mt-1 text-[26px] sm:text-[34px] md:text-[44px] font-black leading-tight">{slide.title}</h1>
          {slide.subtitle && <p className="mt-3 text-white/80 text-[14px] sm:text-base">{slide.subtitle}</p>}
          <a
            href={BLOG_URL}
            className="mt-4 inline-flex items-center gap-2 text-[13px] sm:text-sm text-white/70 hover:text-white/90 transition"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {locale === 'it' ? 'Scopri i servizi sul blog' : 'Discover our services on the blog'}
          </a>
        </div>
      </div>
    );
  } else if (slide.kind === 'column') {
    return (
      <div className="w-full h-full p-4 sm:p-6 md:p-10">
        {/* contenuto centrato su desktop; su mobile è scrollabile */}
        <div className="mx-auto max-w-[980px] md:h-full md:flex md:flex-col md:justify-center">
          <div className="mb-3 sm:mb-4">
            {slide.kicker && <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/70">{slide.kicker}</div>}
            <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-black">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)` }}>
                {slide.title}
              </span>
            </h2>
            {slide.description && <p className="text-white/80 mt-2 text-[14px] sm:text-[15px]">{slide.description}</p>}
            {/* underline alleggerita e più stabile */}
            <div
              className="mt-3 h-[2px] w-20 rounded-full opacity-70"
              style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)` }}
            />
          </div>

          {slide.items && (
            <div className="grid grid-cols-1 gap-3">
              {slide.items.map((it, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl p-4 sm:p-5 border border-white/10 bg-white/[0.04]"
                >
                  <div className="flex items-start gap-3">
                    {it.icon && (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 shrink-0">
                        {it.icon}
                      </div>
                    )}
                    <div>
                      <div className="font-extrabold text-[15px] sm:text-base">{it.title}</div>
                      {it.desc && <div className="text-white/75 text-[13px] sm:text-sm">{it.desc}</div>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    );
  } else if (slide.kind === 'cta') {
    return (
      <div className="w-full h-full grid place-items-center p-4 sm:p-6 text-center">
        <div className="max-w-[70ch]">
          <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-black">{slide.title}</h2>
          {slide.bullets && (
            <ul className="mt-3 text-white/80 text-[14px] sm:text-[15px]">
              {slide.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={slide.primary.href}
              className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
              style={{ background: SPST_ORANGE }}
            >
              {slide.primary.label}
            </a>
            {slide.secondary && (
              <a
                href={slide.secondary.href}
                target={slide.secondary.href.startsWith('http') ? '_blank' : undefined}
                rel={slide.secondary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30"
              >
                {slide.secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function Preview({ slide }: { slide: Slide }) {
  if (slide.kind === 'title') return <div className="font-semibold">Intro</div>;
  if (slide.kind === 'column')
    return (
      <div>
        <div className="font-semibold">{slide.title}</div>
        {slide.items && <div className="text-white/70 text-[11px]">{slide.items.map((i) => i.title).join(' • ')}</div>}
      </div>
    );
  if (slide.kind === 'cta') return <div className="font-semibold">{slide.title}</div>;
  return null;
}
