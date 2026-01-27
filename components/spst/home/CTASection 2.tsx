"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "../../i18n/LocaleProvider";

export function CTASection() {
  const { t } = useLocale();

  return (
    <section id="preventivo" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl md:p-12"
        >
          {/* Tech grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(247,147,30,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(247,147,30,0.2) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
            <h3 className="text-base font-bold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left whitespace-nowrap">
              {t.sections.cta.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:justify-end">
              <a
                href="/portale-quotazioni"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
              >
                <span className="relative z-10">{t.sections.cta.quote}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </a>
              <a
                href="https://wa.me/393201441789"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 hover:scale-105"
              >
                {t.sections.cta.whatsapp}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
