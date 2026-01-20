"use client";

import React from "react";
import { motion } from "framer-motion";
import { TriangleAlert, Ship, Globe2, FileCheck2, Route, TrendingUp } from "lucide-react";
import { useLocale } from "../../i18n/LocaleProvider";

const SPST_ORANGE = "#f7931e";

export function ProblemsHowItWorksSection() {
  const { locale, t } = useLocale();

  return (
    <section id="scopri-funziona" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
          >
            {t.sections.problems.kicker} • {t.sections.howItWorks.kicker}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${SPST_ORANGE} 0%, #fff 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.sections.problems.title}
            </span>
            <br />
            <span className="text-white/90">{t.sections.howItWorks.title}</span>
          </motion.h2>
        </div>

        {/* Grid Problems + Solutions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              problem: {
                icon: <TriangleAlert className="h-6 w-6" />,
                title:
                  locale === "it"
                    ? "Documenti doganali complessi"
                    : "Complex customs documents",
                desc:
                  locale === "it"
                    ? "e-DAS, proforma, accise, HS code"
                    : "e-DAS, proforma, excise duties, HS code",
              },
              solution: {
                icon: <FileCheck2 className="h-6 w-6" />,
                title: locale === "it" ? "Documenti a norma" : "Compliant documents",
                desc:
                  locale === "it"
                    ? "Accise, COLA, Prior Notice, e-DAS e tutta la parte burocratica per partire in regola."
                    : "Excise duties, COLA, Prior Notice, e-DAS and all bureaucracy to start compliant.",
                step: "01",
              },
            },
            {
              problem: {
                icon: <Ship className="h-6 w-6" />,
                title:
                  locale === "it"
                    ? "Costi di spedizione variabili"
                    : "Variable shipping costs",
                desc:
                  locale === "it"
                    ? "Tariffe poco chiare e costi nascosti"
                    : "Unclear rates and hidden costs",
              },
              solution: {
                icon: <Route className="h-6 w-6" />,
                title: locale === "it" ? "Spedizione ottimizzata" : "Optimized shipping",
                desc:
                  locale === "it"
                    ? "Selezioniamo i corrieri e le tratte migliori (express o pallet), con tracking e assistenza dedicata."
                    : "We select the best carriers and routes (express or pallet), with tracking and dedicated support.",
                step: "02",
              },
            },
            {
              problem: {
                icon: <Globe2 className="h-6 w-6" />,
                title:
                  locale === "it"
                    ? "Buyer difficili da raggiungere"
                    : "Hard-to-reach buyers",
                desc:
                  locale === "it"
                    ? "Mercati complessi e relazioni fragili"
                    : "Complex markets and fragile relationships",
              },
              solution: {
                icon: <TrendingUp className="h-6 w-6" />,
                title: locale === "it" ? "Export che cresce" : "Growing export",
                desc:
                  locale === "it"
                    ? "Flussi ricorrenti e supporto operativo per abilitare la tua cantina al mercato estero."
                    : "Recurring flows and operational support to enable your winery to enter foreign markets.",
                step: "03",
              },
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                {/* Problem */}
                <div className="mb-6 flex items-start gap-4 pb-6 border-b border-white/10">
                  <div className="rounded-lg bg-red-500/20 p-3 text-red-400 shrink-0">
                    {item.problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-red-400/80 mb-1">
                      {locale === "it" ? "Problema" : "Problem"}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.problem.title}</h3>
                    <p className="text-sm text-white/70">{item.problem.desc}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#f7931e]/20 p-3 text-[#f7931e] shrink-0">
                    {item.solution.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#f7931e]/60">{item.solution.step}</span>
                      <span className="text-xs font-semibold text-[#f7931e]/80">
                        {locale === "it" ? "Soluzione" : "Solution"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.solution.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{item.solution.desc}</p>
                  </div>
                </div>

                {/* Connecting line animation */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-red-500/50 via-[#f7931e]/50 to-transparent mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
