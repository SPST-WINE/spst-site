"use client";

import React from "react";
import { motion } from "framer-motion";
import { PartnersCarousel } from "../PartnersCarousel";
import { CounterStat } from "./CounterStat";
import { useLocale } from "../../i18n/LocaleProvider";

export function StatsPartnersSection() {
  const { locale, t } = useLocale();

  return (
    <section className="relative -mt-4 pt-2 pb-8 md:-mt-6 md:pt-4 md:pb-12">
      <div className="mx-auto max-w-[1400px] px-5">
        {/* Componente unificato: Counter + Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-black/20"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative">
            {/* Stats counters */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
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

            {/* Separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

            {/* Partners carousel */}
            <div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-black sm:text-2xl md:text-3xl text-white">
                  {t.sections.partners.title}
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#f7931e] to-transparent mx-auto" />
              </div>
              <PartnersCarousel />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
