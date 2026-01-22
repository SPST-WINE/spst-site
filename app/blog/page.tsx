"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Tag,
  Calendar,
  FileText,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { SPST_PUBLIC_BG } from "@/lib/spstTheme";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

/**
 * ✅ Aggiorniamo SOLO questo array man mano che pubblichi i post.
 * - slug: path finale (/blog/...)
 * - tags: per filtri + SEO semantico
 */
type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // dd/mm/yyyy (visuale)
  isoDate: string; // yyyy-mm-dd (ordinamento)
  readingTime: string;
  tags: string[];
  featured?: boolean;
};

const POSTS: BlogPost[] = [
  // =========================
  // USA / Paylink
  // =========================
  {
    slug: "/blog/come-spedire-vino-negli-usa",
    title: "Come spedire vino al cliente finale negli Stati Uniti",
    description:
      "Guida pratica per evitare blocchi, sequestri e false promesse. Modello corretto: importazione + vendita domestica USA. Link a Paylink USA.",
    date: "10/01/2026",
    isoDate: "2026-01-10",
    readingTime: "6 min",
    tags: ["USA", "B2C", "Paylink", "Compliance"],
    featured: true,
  },
  {
    slug: "/blog/spedire-vino-usa-b2c",
    title: "Perché è impossibile spedire vino direttamente al cliente negli USA",
    description:
      "COLA, Importer of Record, three-tier system e perché “spedisco e basta” non funziona. Chiarezza tra trasporto e diritto di importare.",
    date: "10/01/2026",
    isoDate: "2026-01-10",
    readingTime: "7 min",
    tags: ["USA", "B2C", "Compliance", "Dogane"],
  },
  {
    slug: "/blog/campioni-vino-usa",
    title: "Campioni di vino negli Stati Uniti: cosa è possibile, cosa no",
    description:
      "Perché “sono solo campioni” non è una scusa valida: importatore, COLA/esenzioni limitate, controlli e rischi su invii ripetuti.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "7 min",
    tags: ["USA", "Campioni", "Campionature", "Compliance"],
  },

  // =========================
  // Europa / Accise
  // =========================
  {
    slug: "/blog/spedire-senza-codice-accisa",
    title: "Spedire vino B2B in Europa quando il buyer non ha un codice accisa",
    description:
      "Rappresentanza fiscale, accisa assolta e quando serve la sospensione. Cosa fa SPST: codice, e-DAS e gestione completa del flusso.",
    date: "10/01/2026",
    isoDate: "2026-01-10",
    readingTime: "7 min",
    tags: ["Europa", "B2B", "Accise", "Rappresentanza fiscale"],
  },
  {
    slug: "/blog/spedire-vino-b2b-europa-accise",
    title: "B2B di vino in UE: cosa è legale, cosa no, come funzionano davvero le accise",
    description:
      "Accisa sospesa vs accisa assolta, EMCS, e-AD, e-DAS, documenti e perché su pallet/multicollo non esistono scorciatoie.",
    date: "10/01/2026",
    isoDate: "2026-01-10",
    readingTime: "7 min",
    tags: ["Europa", "B2B", "Accise", "Pallet"],
  },
  {
    slug: "/blog/spedire-vino-b2c-europa",
    title: "Come spedire vino al cliente finale in Europa: cosa è legale, cosa no",
    description:
      "B2C intra-UE ≠ spedizione standard: accise, responsabilità del venditore, documenti minimi e perché ‘le accise le paga il cliente’ è fuorviante.",
    date: "10/01/2026",
    isoDate: "2026-01-10",
    readingTime: "8 min",
    tags: ["Europa", "B2C", "Accise", "E-commerce"],
  },
  {
    slug: "/blog/spedire-campionature-vino-europa",
    title: "Come spedire campionature di vino in Europa: tra normativa e prassi reale",
    description:
      "Onestà operativa: prassi di mercato vs quadro normativo. Quando la campionatura è “occasionale” e quando diventa un modello rischioso.",
    date: "10/01/2026",
    isoDate: "2026-01-10",
    readingTime: "6 min",
    tags: ["Europa", "Campionature", "Accise", "Prassi"],
  },

  // =========================
  // Extra-UE / Asia
  // =========================
  {
    slug: "/blog/campionature-vino-extra-ue",
    title: "Come spedire campionature di vino fuori dall’Unione Europea",
    description:
      "Perché “campionatura” non è una categoria doganale. Documenti minimi, valore dichiarato credibile, tolleranze e quando iniziano i problemi.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "7 min",
    tags: ["Extra-UE", "Campionature", "Dogane", "Documenti"],
  },
  {
    slug: "/blog/campionature-vino-asia",
    title: "Come spedire campionature di vino in Asia",
    description:
      "Asia ≠ mercato unico: regole diverse per Giappone, Cina, Hong Kong, Singapore, Corea. Documenti, alcohol tax e rischi su volumi/frequenza.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "7 min",
    tags: ["Asia", "Extra-UE", "Campionature", "Dogane"],
  },

  // =========================
  // Operatività / Trasporto / Packaging
  // =========================
  {
    slug: "/blog/corriere-espresso-o-trasportatore-privato",
    title: "Spedizioni di vino: corriere espresso o trasportatore privato?",
    description:
      "Differenze operative reali, pro/contro e come scegliere. Multicollo, pallet, movimentazione e trade-off tra velocità e controllo.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "6 min",
    tags: ["Trasporto", "Corrieri", "Pallet", "Multicollo"],
  },
  {
    slug: "/blog/imballaggi-multicollo-vino",
    title: "Perché usare imballaggi specifici per il trasporto multicollo di vino",
    description:
      "Nel multicollo l’imballaggio tecnico riduce rotture e contenziosi. Sul pallet è spesso inutile: conta la pallettizzazione, non il cartone super rinforzato.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "5 min",
    tags: ["Imballaggi", "Packaging", "Multicollo", "B2C"],
  },
  {
    slug: "/blog/pallettizzazione-vino-b2b",
    title: "Pallettizzazione corretta del vino nelle spedizioni B2B",
    description:
      "Reggette, film, angolari, altezza, layout e perché un pallet non sovrapponibile costa sempre di più. Come ridurre rischi e extra.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "7 min",
    tags: ["Pallet", "B2B", "Pallettizzazione", "Trasporto"],
  },

  // =========================
  // Processo / Valore / Documenti
  // =========================
  {
    slug: "/blog/prezzo-non-unica-variabile",
    title: "Spedizioni di vino: perché il prezzo non è sempre l’unica variabile",
    description:
      "Supporto, tecnologia e dati contano più di qualche euro in meno. Perché il prezzo è una fotografia e la logistica è un processo.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "6 min",
    tags: ["Supporto", "Tecnologia", "Dati", "Prezzo"],
  },
  {
    slug: "/blog/documenti-dogane-spedizioni-vino",
    title: "Documenti per le spedizioni di vino e dogane",
    description:
      "Cosa sono le dogane, quando esistono e quando no, quali documenti servono per spedire vino e perché i blocchi nascono quasi sempre a monte.",
    date: "12/01/2026",
    isoDate: "2026-01-12",
    readingTime: "8 min",
    tags: ["Documenti", "Dogane", "Compliance", "Extra-UE"],
  },
];

const TAG_ORDER = [
  "Featured",

  // macro
  "USA",
  "Europa",
  "Extra-UE",
  "Asia",

  // modelli
  "B2C",
  "B2B",
  "E-commerce",

  // compliance
  "Accise",
  "Rappresentanza fiscale",
  "Compliance",
  "Dogane",
  "Documenti",
  "Prassi",

  // operatività
  "Trasporto",
  "Corrieri",
  "Multicollo",
  "Pallet",
  "Pallettizzazione",
  "Imballaggi",
  "Packaging",

  // valore
  "Supporto",
  "Tecnologia",
  "Dati",
  "Prezzo",

  // campioni
  "Campionature",
  "Campioni",
];

export default function BlogIndexPage() {
  const { t } = useLocale();
  
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/#vantaggi", label: t.nav.whySpst },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
    { href: "/blog", label: "Blog" },
  ];

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    POSTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    const base = Array.from(set);

    // ordine “curato”
    const ordered = [
      ...TAG_ORDER.filter((t) => base.includes(t)),
      ...base.filter((t) => !TAG_ORDER.includes(t)).sort(),
    ];

    return ordered;
  }, []);

  const featured = useMemo(() => POSTS.find((p) => p.featured), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const byTag = (p: BlogPost) => {
      if (activeTag === "All") return true;
      if (activeTag === "Featured") return !!p.featured;
      return p.tags.includes(activeTag);
    };

    return [...POSTS]
      .filter(byTag)
      .filter((p) => {
        if (!q) return true;
        const hay = `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
  }, [query, activeTag]);

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
            {t.blog.kicker}
          </span>

          <h1 className="mt-3 text-center text-[28px] font-black leading-[1.08] sm:text-[34px] md:text-left md:text-[46px]">
            {t.blog.title}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
              }}
            >
              {t.blog.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[100ch] text-center text-[14px] text-white/80 sm:text-base md:mx-0 md:text-left">
            {t.blog.description}
          </p>

          {/* Search + quick CTA */}
          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.blog.searchPlaceholder}
                  className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/45 outline-none"
                />
              </div>
            </div>

            <a
              href="https://wa.me/393201441789"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              <MessageCircle className="h-4 w-4" />
              {t.blog.whatsappSupport}
            </a>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <TagChip active={activeTag === "All"} onClick={() => setActiveTag("All")}>
              {t.blog.allTags}
            </TagChip>

            <TagChip
              active={activeTag === "Featured"}
              onClick={() => setActiveTag("Featured")}
            >
              <Sparkles className="h-3.5 w-3.5" /> {t.blog.featured}
            </TagChip>

            {allTags.map((t) => (
              <TagChip key={t} active={activeTag === t} onClick={() => setActiveTag(t)}>
                <Tag className="h-3.5 w-3.5" />
                {t}
              </TagChip>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="pb-6">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Articolo in evidenza
                </div>

                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Calendar className="h-4 w-4" />
                  {featured.date} • {featured.readingTime}
                </div>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h2 className="text-[18px] font-extrabold text-white md:text-[22px]">
                    {featured.title}
                  </h2>
                  <p className="mt-2 max-w-[90ch] text-[14px] text-white/75">
                    {featured.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {featured.tags.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[12px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={featured.slug}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                  style={{ background: SPST_ORANGE, color: "#0f1720" }}
                >
                  {t.blog.readNow} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GRID */}
      <section className="pb-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-white/70">
              {t.blog.results}{" "}
              <span className="font-semibold text-white/90">{filtered.length}</span>
            </div>

            <a
              href="/portale-quotazioni"
              className="hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-white/85 transition-all hover:bg-white/5 md:inline-flex"
              style={{ borderColor: `${SPST_ORANGE}55` }}
            >
              {t.blog.requestQuote} <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {filtered.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-white/90">
                  {t.blog.ctaTitle}
                </div>
                <div className="mt-1 text-[13px] text-white/75">
                  {t.blog.ctaDesc}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/393201441789"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:bg-white/5"
                  style={{ borderColor: `${SPST_ORANGE}55` }}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="/portale-quotazioni"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{ background: SPST_ORANGE, color: "#0f1720" }}
                >
                  {t.blog.requestQuote} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-white/75">
              {t.blog.noResults}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

/* ---------------- UI ---------------- */

function TagChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all ${
        active
          ? "bg-white/10 text-white border-white/20"
          : "bg-white/[0.02] text-white/75 border-white/10 hover:bg-white/[0.04]"
      }`}
    >
      {children}
    </button>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const { t } = useLocale();
  return (
    <motion.a
      href={post.slug}
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-[1px] hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
          <FileText className="h-3.5 w-3.5" />
          {t.blog.article}
        </div>

        <div className="flex items-center gap-2 text-xs text-white/60">
          <Calendar className="h-4 w-4" />
          {post.date} • {post.readingTime}
        </div>
      </div>

      <h3 className="mt-3 text-[16px] font-extrabold text-white group-hover:text-white">
        {post.title}
      </h3>

      <p className="mt-2 text-[13px] leading-relaxed text-white/75">
        {post.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 7).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[12px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85">
        {t.blog.read} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </motion.a>
  );
}
