"use client";

import React from "react";
import { motion } from "framer-motion";
import { PartnersCarousel } from "../PartnersCarousel";
import { CounterStat } from "./CounterStat";
import { useLocale } from "../../i18n/LocaleProvider";

export function StatsPartnersSection() {
  const { locale, t } = useLocale();

  return (
    <section className="relative -mt-8 pt-4 pb-8 md:-mt-12 md:pt-6 md:pb-12">
      <div className="mx-auto max-w-[1400px] px-5">
        {/* Stats counters - Card elegante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 w-full max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-black/20">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative grid grid-cols-2 gap-6 md:gap-8">
              <CounterStat
                from={49}
                to={50}
                suffix="+"
                label={locale === "it" ? "Cantine" : "Wineries"}
                delay={0.4}
                autoStart={true}
              />
              <CounterStat
                from={19}
                to={20}
                suffix="+"
                label={locale === "it" ? "Buyer attivi" : "Active buyers"}
                delay={0.6}
                autoStart={true}
              />
            </div>
          </div>
        </motion.div>

        {/* Partners carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black sm:text-3xl md:text-4xl text-white">
              {t.sections.partners.title}
            </h2>
            <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#f7931e] to-transparent mx-auto" />
          </div>
          <PartnersCarousel />
        </motion.div>
      </div>
    </section>
  );
}
