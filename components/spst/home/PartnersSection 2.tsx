"use client";

import React from "react";
import { motion } from "framer-motion";
import { PartnersCarousel } from "../PartnersCarousel";
import { useLocale } from "../../i18n/LocaleProvider";

export function PartnersSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black sm:text-4xl md:text-5xl text-white"
          >
            {t.sections.partners.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#f7931e] to-transparent mx-auto"
          />
        </div>
        <div className="mt-12">
          <PartnersCarousel />
        </div>
      </div>
    </section>
  );
}
