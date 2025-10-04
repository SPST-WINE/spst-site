"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  LayoutGrid,
  MessageSquareMore,
  Route,
  Ship,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATI SLIDES
// ─────────────────────────────────────────────

const slides = [
  {
    title: "I problemi reali",
    description:
      "Spedire vino non è solo una questione di logistica. Ogni spedizione comporta complessità normative, costi variabili e difficoltà di accesso ai buyer internazionali.",
    kind: "column",
    points: [
      {
        title: "Documenti complessi",
        text: "e-DAS, accise, HS code, COLA, Prior Notice. Ogni Paese ha regole diverse.",
      },
      {
        title: "Costi e rotte variabili",
        text: "Trovare il miglior corriere e la tratta più efficiente è un lavoro da broker.",
      },
      {
        title: "Accesso ai buyer",
        text: "Il vero ostacolo per crescere all’estero è trovare importatori affidabili.",
      },
    ],
  },
  {
    title: "Dalla carta al tracking, in 3 step",
    description:
      "Con SPST ogni spedizione diventa semplice, tracciata e conforme. Dalla burocrazia alla consegna, tutto passa da un’unica piattaforma.",
    kind: "column",
    points: [
      {
        title: "1. Documenti a norma",
        text: "Gestione automatica e controllo dei requisiti doganali e accise.",
      },
      {
        title: "2. Spedizione ottimizzata",
        text: "Selezione automatica di corriere, tariffa e rotta migliore.",
      },
      {
        title: "3. Crescita commerciale",
        text: "Connessione diretta con buyer esteri e tracciamento KPI reali.",
      },
    ],
  },
  {
    title: "La Web App",
    description:
      "Gestisci spedizioni, documenti e tracking. Salva i profili mittente, scarica LDV e monitora gli stati in tempo reale: meno email, più controllo.",
    kind: "column",
    points: [
      {
        title: "Dashboard operativa",
        text: "Anagrafiche, documenti, ritiro e tracking in un unico posto.",
      },
      {
        title: "Dati e KPI",
        text: "Storico spedizioni, tempi medi, costi e decisioni informate.",
      },
      {
        title: "Assistenza integrata",
        text: "WhatsApp e telefono direttamente dalla piattaforma.",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/R2Kj2EWMk_U",
  },
  {
    title: "Un’unica piattaforma per tutto",
    description:
      "SPST semplifica il lavoro di export per cantine e produttori. Una sola piattaforma per spedire, gestire documenti e connettersi ai buyer.",
    kind: "cta",
  },
];

// ─────────────────────────────────────────────
// SLIDE RENDERER (ottimizzato mobile)
// ─────────────────────────────────────────────

const SPST_ORANGE = "#f7911e";

function SlideRenderer({ slide }: { slide: any }) {
  if (slide.videoUrl) {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
          {slide.title}
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
          {slide.description}
        </p>

        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={slide.videoUrl}
            title="SPST Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="https://spst.it/register"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f7911e] hover:bg-[#d97812] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md"
        >
          Entra in SPST
        </a>
      </section>
    );
  }

  if (slide.kind === "cta") {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
          {slide.title}
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
          {slide.description}
        </p>
        <a
          href="https://spst.it/register"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f7911e] hover:bg-[#d97812] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md"
        >
          Entra in SPST
        </a>
      </section>
    );
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-snug">
          {slide.title}
        </h2>

        {slide.description && (
          <p className="text-white/80 mt-2 text-base md:text-lg leading-relaxed">
            {slide.description}
          </p>
        )}

        <div
          className="mt-3 h-[2px] w-20 mx-auto rounded-full opacity-70"
          style={{
            backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)`,
          }}
        />

        <div className="mt-8 flex flex-col space-y-4 text-left">
          {slide.points?.map((point: any, i: number) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow-sm hover:bg-white/10 transition"
            >
              <h3 className="text-white font-medium text-lg">{point.title}</h3>
              {point.text && (
                <p className="text-white/70 text-sm mt-1 leading-relaxed">
                  {point.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PAGINA PRINCIPALE
// ─────────────────────────────────────────────

export default function PresentazionePage() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key.toLowerCase() === "f") {
        document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative bg-[#0a0f1a] text-white overflow-hidden">
      <SlideRenderer slide={slides[index]} />

      {/* Navigazione */}
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-6 text-white/60 text-sm">
        <p>Usa ← → per cambiare slide • Premi “F” per fullscreen</p>
        <div className="flex space-x-2">
          <button
            onClick={prev}
            className="bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}
