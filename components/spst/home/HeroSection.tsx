"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { useLocale } from "../../i18n/LocaleProvider";

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";

export function HeroSection() {
  const { locale, t } = useLocale();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 min-h-[85vh] flex items-center">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(247,147,30,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,147,30,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow effects */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}66, transparent 60%)`,
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}77, transparent 60%)`,
        }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative mx-auto max-w-[1200px] px-5 w-full"
      >
        <div className="flex flex-col items-center text-center">
          {/* Kicker badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm"
          >
            <Zap className="h-3 w-3" />
            {t.hero.kicker}
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-[36px] font-black leading-[1.05] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
          >
            {t.hero.title}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${SPST_ORANGE} 0%, #ffaa44 50%, ${SPST_BLUE_SOFT} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-[65ch] text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="/portale-quotazioni"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="/servizi-e-contatti"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
