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
  TriangleAlert,
  Ship,
  Globe2,
  Route,
  FileCheck2,
  TrendingUp,
  Building2,
  LineChart,
  MessageSquareMore,
} from 'lucide-react';
import { useLocale } from '../../components/i18n/LocaleProvider';
import { SPST_PUBLIC_BG } from '../../lib/spstTheme';

const SPST_BLUE_SOFT = '#1c3e5e';
const SPST_ORANGE = '#f7931e';
const LOGO_URL =
  'https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png';

// 👉 link al video YouTube
const TUTORIAL_URL = 'https://youtu.be/R2Kj2EWMk_U';

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

// Slides will be generated dynamically based on locale
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
      kicker: t.sections.problems.kicker,
      title: t.sections.problems.title,
      description: 'Ogni Paese ha prassi diverse. Senza processi chiari si perdono tempo e margini, con maggior rischio di blocchi.',
      items: [
        { icon: <TriangleAlert className="h-5 w-5" />, title: 'Documenti complessi', desc: 'e-DAS, accise, HS code, COLA, Prior Notice: basta un errore per fermare la spedizione.' },
        { icon: <Ship className="h-5 w-5" />, title: 'Costi e rotte variabili', desc: 'Senza comparazione reale rischi costi più alti e tempi incerti.' },
        { icon: <Globe2 className="h-5 w-5" />, title: 'Accesso ai buyer', desc: 'Serve metodo e rete per qualificare clienti esteri affidabili.' },
      ],
    },
    {
      kind: 'column',
      kicker: t.sections.howItWorks.kicker,
      title: t.sections.howItWorks.title,
      description: "Ti seguiamo dall'impostazione documentale alla consegna, con KPI e tracciabilità chiari.",
      items: [
        { icon: <FileCheck2 className="h-5 w-5" />, title: '1) Documenti a norma', desc: 'Generiamo e archiviamo modulistica fiscale e doganale.' },
        { icon: <Route className="h-5 w-5" />, title: '2) Spedizione ottimizzata', desc: 'Express, campionature o pallet: scegliamo tratta e vettore più efficienti.' },
        { icon: <TrendingUp className="h-5 w-5" />, title: '3) Crescita commerciale', desc: 'Wine Connect ti collega a buyer internazionali qualificati.' },
      ],
    },
    {
      kind: 'column',
      kicker: 'La Web App',
      title: "Un'unica piattaforma per tutto",
      description: 'Gestisci spedizioni, documenti e tracking. Salva i profili mittente, scarica LDV e monitora gli stati in tempo reale: meno email, più controllo.',
      items: [
        { icon: <Building2 className="h-5 w-5" />, title: 'Dashboard operativa', desc: 'Anagrafiche, documenti, ritiro, tracking in un posto solo.' },
        { icon: <LineChart className="h-5 w-5" />, title: 'Dati e KPI', desc: 'Storico spedizioni, tempi medi, costi: decisioni informate.' },
        { icon: <MessageSquareMore className="h-5 w-5" />, title: 'Assistenza integrata', desc: 'WhatsApp/telefono direttamente dalla piattaforma.' },
      ],
    },
    {
      kind: 'column',
      kicker: t.sections.whySpst.kicker,
      title: 'Tecnologia + persone',
      description: 'La piattaforma riduce tempi ed errori; il team garantisce continuità e risoluzione. Dalla prima spedizione, non sei mai solo.',
      items: [
        { title: 'Unico partner', desc: 'Documenti, logistica e supporto commerciale coordinati.' },
        { title: 'Tariffe ottimizzate', desc: 'Multi-corriere e rotte selezionate su dati reali.' },
        { title: 'SLA chiari', desc: 'Tempi certi e comunicazione proattiva sugli stati.' },
      ],
    },
    {
      kind: 'cta',
      title: t.sections.cta.title,
      bullets: ['Preventivi chiari', 'Documenti a norma', 'Supporto reale'],
      primary: { label: 'Entra in SPST', href: 'https://spst.it/register' },
      secondary: { label: 'Guarda il video tutorial', href: TUTORIAL_URL },
    },
  ];
}

export default function PresentationPage() {
  const { t } = useLocale();
  const slides = getSlides(t);
  const [i, setI] = React.useState(0);
  const [grid, setGrid] = React.useState(false);
  const [fs, setFs] = React.useState(false);

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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-[1200px] px-4 h-14 flex items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setGrid((v) => !v)} title="Indice (G)" className="rounded-lg hover:bg-white/10 p-2">
              {grid ? <X className="h-5 w-5" /> : <LayoutGrid className="h-5 w-5" />}
            </button>
            <button onClick={toggleFs} title="Fullscreen (F)" className="rounded-lg hover:bg-white/10 p-2">
              {fs ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* progress */}
        <div className="h-1 bg-white/10">
          <div className="h-1 bg-[var(--spst-orange,#f7931e)]" style={{ width: `${((i + 1) / total) * 100}%` }} />
        </div>
      </header>

      {/* Viewport */}
      <section className="mx-auto max-w-[1400px] px-4 py-4 md:py-6">
        <div
          className="
            relative mx-auto w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,.25)]
            h-[calc(100svh-56px-4px-2rem)] md:h-auto md:max-w-[1200px] md:aspect-[16/9]
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
              <SlideRenderer slide={slides[i]} t={t} />
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
                  <div className="text-[11px] text-white/60 mb-1">{t.locale === 'it' ? 'Slide' : 'Slide'} {idx + 1}</div>
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
function SlideRenderer({ slide, t }: { slide: Slide; t: any }) {
  if (slide.kind === 'title') {
    return (
      <div className="w-full h-full grid place-items-center p-4 sm:p-6 text-center">
        <div className="max-w-[80ch] px-1">
          {slide.kicker && <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/70">{slide.kicker}</div>}
          <h1 className="mt-1 text-[26px] sm:text-[34px] md:text-[44px] font-black leading-tight">{slide.title}</h1>
          {slide.subtitle && <p className="mt-3 text-white/80 text-[14px] sm:text-base">{slide.subtitle}</p>}
        </div>
      </div>
    );
  }

  if (slide.kind === 'column') {
    const columnSlide = slide;
    return (
      <div className="w-full h-full p-4 sm:p-6 md:p-10">
        {/* contenuto centrato su desktop; su mobile è scrollabile */}
        <div className="mx-auto max-w-[980px] md:h-full md:flex md:flex-col md:justify-center">
          <div className="mb-3 sm:mb-4">
            {columnSlide.kicker && <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/70">{columnSlide.kicker}</div>}
            <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-black">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)` }}>
                {columnSlide.title}
              </span>
            </h2>
            {columnSlide.description && <p className="text-white/80 mt-2 text-[14px] sm:text-[15px]">{columnSlide.description}</p>}
            {/* underline alleggerita e più stabile */}
            <div
              className="mt-3 h-[2px] w-20 rounded-full opacity-70"
              style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)` }}
            />
          </div>

          {columnSlide.items && (
            <div className="grid grid-cols-1 gap-3">
              {columnSlide.items.map((it, i) => (
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

          {/* link tutorial per la slide Web App */}
          {slide.title.includes('Un'unica piattaforma') && (
            <div className="mt-4">
              <a
                href={TUTORIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold border border-white/30 hover:bg-white/10 transition text-sm"
              >
                <MessageSquareMore className="h-4 w-4" />
                {t.locale === 'it' ? 'Guarda il video tutorial' : 'Watch the tutorial video'}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (slide.kind === 'cta') {
    const ctaSlide = slide;
    return (
      <div className="w-full h-full grid place-items-center p-4 sm:p-6 text-center">
        <div className="max-w-[70ch]">
          <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-black">{ctaSlide.title}</h2>
          {ctaSlide.bullets && (
            <ul className="mt-3 text-white/80 text-[14px] sm:text-[15px]">
              {ctaSlide.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={ctaSlide.primary.href}
              className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
              style={{ background: SPST_ORANGE }}
            >
              {ctaSlide.primary.label}
            </a>
            <a
              href={ctaSlide.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30"
            >
              {ctaSlide.secondary.label}
            </a>
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
