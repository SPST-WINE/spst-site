"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck2, Shield, Route, Users, ArrowRight } from "lucide-react";
import { useLocale } from "../../i18n/LocaleProvider";

export function ForBuyersSection() {
  const { locale, t } = useLocale();

  return (
    <section id="for-buyers" className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-[1400px] px-5">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              <Users className="h-3 w-3" />
              {t.sections.forBuyers.kicker}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl"
            >
              {t.sections.forBuyers.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg leading-relaxed text-white/80"
            >
              {t.sections.forBuyers.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <a
                href="/servizi-e-contatti"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                {locale === "it" ? "Contattaci" : "Contact us"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              {
                icon: <FileCheck2 className="h-5 w-5" />,
                title: locale === "it" ? "Documentazione completa" : "Complete documentation",
                desc:
                  locale === "it"
                    ? "Gestione di tutti i documenti necessari per l'export"
                    : "Management of all documents needed for export",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: locale === "it" ? "Compliance garantita" : "Guaranteed compliance",
                desc:
                  locale === "it"
                    ? "Conformità con normative internazionali"
                    : "Compliance with international regulations",
              },
              {
                icon: <Route className="h-5 w-5" />,
                title: locale === "it" ? "Logistica ottimizzata" : "Optimized logistics",
                desc:
                  locale === "it"
                    ? "Spedizioni efficienti verso tutto il mondo"
                    : "Efficient shipping worldwide",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#f7931e]/20 p-2 text-[#f7931e]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
