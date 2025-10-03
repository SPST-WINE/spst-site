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
  ChartLine,
  CheckCircle2,
  MessageSquareMore,
} from 'lucide-react';

const SPST_BLUE = '#0a1722';
const SPST_BLUE_SOFT = '#1c3e5e';
const SPST_ORANGE = '#f7931e';
const LOGO_URL =
  'https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png';

/* ---------------------------- SLIDES DATA ---------------------------- */
type Slide =
  | {
      kind: 'title';
      kicker?: string;
      title: React.ReactNode;
      subtitle?: string;
    }
  | {
      kind: 'bullets';
      title: string;
      kicker?: string;
      items: Array<{ icon?: React.ReactNode; title: string; desc?: string }>;
      cols?: 2 | 3 | 4;
    }
  | {
      kind: 'kpi';
      title: string;
      items: Array<{ num: string; label: string }>;
    }
  | {
      kind: 'image';
      title?: string;
      src: string;
      caption?: string;
    }
  | {
      kind: 'cta';
      title: string;
      bullets?: string[];
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
    };

const slides: Slide[] = [
  {
    kind: 'title',
    kicker: 'Export vino all-in-one',
    title: (
      <>
        Il tuo vino nel mondo, <br />
        <span
          className="text-transparent bg-clip-text"
          style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})` }}
        >
          senza pensieri.
        </span>
      </>
    ),
    subtitle:
      'Documenti doganali e fiscali, spedizioni express o pallet e supporto commerciale con Wine Connect: un unico partner, dall’Italia ai tuoi buyer.',
  },
  {
    kind: 'bullets',
    kicker: 'I problemi reali',
    title: 'Perché è complicato spedire vino',
    cols: 3,
    items: [
      { icon: <TriangleAlert className="h-5 w-5" />, title: 'Documenti complessi', desc: 'e-DAS, accise, HS code, COLA, Prior Notice' },
      { icon: <Ship className="h-5 w-5" />, title: 'Costi e rotte variabili', desc: 'Scelta corrieri e tratte ottimali' },
      { icon: <Globe2 className="h-5 w-5" />, title: 'Accesso ai buyer', desc: 'Qualifica lead e rete internazionale' },
    ],
  },
  {
    kind: 'bullets',
    kicker: 'Come funziona',
    title: 'Dalla carta al tracking, in 3 step',
    cols: 3,
    items: [
      { icon: <FileCheck2 className="h-5 w-5" />, title: '1) Documenti a norma', desc: 'Accise, COLA, Prior Notice, e-DAS' },
      { icon: <Route className="h-5 w-5" />, title: '2) Spedizione ottimizzata', desc: 'Express, campionature e pallet' },
      { icon: <TrendingUp className="h-5 w-5" />, title: '3) Crescita commerciale', desc: 'Wine Connect per ordini e campioni' },
    ],
  },
  {
    kind: 'bullets',
    kicker: 'Cosa facciamo',
    title: 'Operatività, non promesse',
    cols: 4,
    items: [
      { title: 'Logistica & Spedizioni', desc: 'EU/USA, consolidamenti, temperature-safe' },
      { title: 'Dogana & Fisco', desc: 'Accisa assolta/sospesa, e-DAS, proforma' },
      { title: 'Deposito & Rappresentanza', desc: 'Snelliamo la vendita nei Paesi target' },
      { title: 'Wine Connect', desc: 'Matchmaking cantine-buyer e KPI' },
    ],
  },
  {
    kind: 'kpi',
    title: 'La nostra rete',
    items: [
      { num: '50+', label: 'Cantine' },
      { num: '20+', label: 'Buyer' },
      { num: 'USA • ASIA • UE', label: 'Mercati' },
    ],
  },
  {
    kind: 'bullets',
    kicker: 'Per chi',
    title: 'Partner per…',
    cols: 4,
    items: [
      { icon: <Building2 className="h-5 w-5" />, title: 'Cantine', desc: 'Da chi inizia a esportare a realtà strutturate' },
      { icon: <Ship className="h-5 w-5" />, title: 'Distributori', desc: 'Flussi ricorrenti in EU/USA' },
      { icon: <Globe2 className="h-5 w-5" />, title: 'Importatori', desc: 'Documenti, consolidamenti, tempi rapidi' },
      { icon: <ChartLine className="h-5 w-5" />, title: 'E-commerce', desc: 'Campionature e B2C, automazioni' },
    ],
  },
  {
    kind: 'bullets',
    kicker: 'Onboarding',
    title: 'Come si parte',
    cols: 3,
    items: [
      { icon: <CheckCircle2 className="h-5 w-5" />, title: '1) Registrazione', desc: 'Dati mittente + call di presentazione' },
      { icon: <CheckCircle2 className="h-5 w-5" />, title: '2) Setup documenti', desc: 'Template fiscali e doganali' },
      { icon: <CheckCircle2 className="h-5 w-5" />, title: '3) Primo invio', desc: 'Campionature o primo ordine' },
    ],
  },
  {
    kind: 'cta',
    title: 'Pronti a spedire il tuo vino nel mondo?',
    bullets: ['Preventivi chiari', 'Documenti a norma', 'Supporto reale, WhatsApp dedicato'],
    primary: { label: 'Richiedi una quotazione', href: 'https://www.spst.it/portale-quotazioni' },
    secondary: { label: 'Supporto WhatsApp', href: 'https://wa.me/393201441789' },
  },
];

/* ---------------------------- PAGE ---------------------------- */
export default function PresentationPage() {
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
      if (e.key === 'g') setGrid((v) => !v);
      if (e.key === 'f') toggleFs();
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
      className="min-h-screen font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        background:
          'radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)',
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-[1200px] px-5 h-14 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setGrid((v) => !v)}
              title="Indice (G)"
              className="rounded-lg hover:bg-white/10 p-2"
            >
              {grid ? <X className="h-5 w-5" /> : <LayoutGrid className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleFs}
              title="Fullscreen (F)"
              className="rounded-lg hover:bg-white/10 p-2"
            >
              {fs ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* progress */}
        <div className="h-1 bg-white/10">
          <div
            className="h-1 bg-[var(--spst-orange,#f7931e)]"
            style={{ width: `${((i + 1) / total) * 100}%` }}
          />
        </div>
      </header>

      {/* Slides viewport */}
      <section className="mx-auto max-w-[1400px] px-5 py-6 select-none">
        <div className="relative mx-auto w-full max-w-[1200px] aspect-[16/9] rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,.25)]">
          {/* Nav arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/30 border border-white/10 hover:bg-white/10"
            onClick={() => go(-1)}
            title="Indietro"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/30 border border-white/10 hover:bg-white/10"
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
              className="absolute inset-0 grid place-items-center p-6 md:p-10"
              onClick={() => go(1)}
            >
              <SlideRenderer slide={slides[i]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index grid */}
        <AnimatePresence>
          {grid && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
            >
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    goto(idx);
                    setGrid(false);
                  }}
                  className="text-left rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.07] transition"
                >
                  <div className="text-xs text-white/60 mb-1">Slide {idx + 1}</div>
                  <Preview slide={s} />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* helper */}
        <div className="mt-4 text-center text-white/60 text-xs">
          Suggerimenti: usa <kbd className="px-1 py-[2px] bg-white/10 rounded">←</kbd> /{' '}
          <kbd className="px-1 py-[2px] bg-white/10 rounded">→</kbd>, <kbd className="px-1 py-[2px] bg-white/10 rounded">G</kbd> per indice,{' '}
          <kbd className="px-1 py-[2px] bg-white/10 rounded">F</kbd> per fullscreen.
        </div>
      </section>
    </main>
  );
}

/* ---------------------------- RENDERERS ---------------------------- */
function SlideRenderer({ slide }: { slide: Slide }) {
  if (slide.kind === 'title') {
    return (
      <div className="w-full h-full grid place-items-center text-center p-4">
        <div>
          {slide.kicker && <div className="text-[12px] uppercase tracking-wider text-white/70">{slide.kicker}</div>}
          <h1 className="mt-1 text-[28px] sm:text-[36px] md:text-[48px] font-black leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && <p className="mt-3 text-white/80 max-w-[70ch] mx-auto">{slide.subtitle}</p>}
        </div>
      </div>
    );
  }

  if (slide.kind === 'bullets') {
    const cols =
      slide.cols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
      slide.cols === 3 ? 'grid-cols-1 md:grid-cols-3' :
      'grid-cols-1 md:grid-cols-2';

    return (
      <div className="w-full h-full flex flex-col">
        <HeaderSmall kicker={slide.kicker} title={slide.title} />
        <div className={`grid ${cols} gap-4 mt-2`}>
          {slide.items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl p-4 border border-white/10 bg-white/[0.04]"
            >
              {it.icon && (
                <div className="w-10 h-10 mb-2 grid place-items-center rounded-xl bg-white/5 border border-white/10">
                  {it.icon}
                </div>
              )}
              <div className="font-extrabold">{it.title}</div>
              {it.desc && <div className="text-white/75 text-sm">{it.desc}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.kind === 'kpi') {
    return (
      <div className="w-full h-full grid place-items-center text-center p-4">
        <div className="w-full">
          <HeaderSmall title={slide.title} />
          <div className="grid grid-cols-3 gap-4 mt-2">
            {slide.items.map((k, i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/[0.04]"
              >
                <div className="text-2xl md:text-3xl font-extrabold">{k.num}</div>
                <div className="text-xs text-white/70">{k.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (slide.kind === 'image') {
    return (
      <div className="w-full h-full grid place-items-center text-center p-4">
        {slide.title && <HeaderSmall title={slide.title} />}
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.src} alt={slide.caption || ''} className="w-full h-full object-contain" />
        </div>
        {slide.caption && <div className="text-white/70 text-sm mt-2">{slide.caption}</div>}
      </div>
    );
  }

  if (slide.kind === 'cta') {
    return (
      <div className="w-full h-full grid place-items-center text-center p-4">
        <h2 className="text-[26px] md:text-[36px] font-black">{slide.title}</h2>
        {slide.bullets && (
          <ul className="mt-3 text-white/80">
            {slide.bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={slide.primary.href}
            className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
            style={{ background: SPST_ORANGE }}
          >
            {slide.primary.label}
          </a>
          {slide.secondary && (
            <a
              href={slide.secondary.href}
              className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30"
            >
              {slide.secondary.label}
            </a>
          )}
        </div>
        <div className="mt-6 text-white/60 text-xs flex items-center justify-center gap-2">
          <MessageSquareMore className="h-4 w-4" />
          Domande? Apri WhatsApp e parliamo subito.
        </div>
      </div>
    );
  }

  return null;
}

function HeaderSmall({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center md:text-left">
      {kicker && <div className="text-[11px] tracking-wider uppercase text-white/60">{kicker}</div>}
      <div className="relative inline-block">
        <div
          aria-hidden
          className="absolute -inset-x-6 -inset-y-2 blur-xl md:blur-2xl opacity-25 pointer-events-none"
          style={{
            background: `radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.45) 0%, rgba(247,147,30,.28) 40%, transparent 65%), radial-gradient(90% 120% at 50% 50%, rgba(28,62,94,.18) 0%, transparent 60%)`,
          }}
        />
        <h2 className="relative text-[22px] sm:text-[28px] md:text-[34px] font-black mt-1">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)` }}
          >
            {title}
          </span>
        </h2>
      </div>
      <div className="mt-2 h-[3px] w-24 mx-auto md:mx-0 rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)` }} />
    </div>
  );
}

function Preview({ slide }: { slide: Slide }) {
  if (slide.kind === 'title') {
    return <div className="font-semibold">{stripReact(slide.title)}</div>;
  }
  if (slide.kind === 'bullets') {
    return (
      <div>
        <div className="font-semibold">{slide.title}</div>
        <div className="text-white/70 text-xs">{slide.items.map((i) => i.title).join(' • ')}</div>
      </div>
    );
  }
  if (slide.kind === 'kpi') {
    return (
      <div>
        <div className="font-semibold">{slide.title}</div>
        <div className="text-white/70 text-xs">{slide.items.map((i) => i.num).join(' / ')}</div>
      </div>
    );
  }
  if (slide.kind === 'cta') {
    return <div className="font-semibold">{slide.title}</div>;
  }
  if (slide.kind === 'image') {
    return <div className="font-semibold">{slide.title || 'Image'}</div>;
  }
  return null;
}

function stripReact(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(stripReact).join(' ');
  return '';
}
