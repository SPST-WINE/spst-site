"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ship, Shield, FileCheck2, Building2, ArrowRight } from "lucide-react";
import { useLocale } from "../../i18n/LocaleProvider";

export function ForWineriesSection() {
  const { locale } = useLocale();

  return (
    <section id="for-wineries" className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-[1400px] px-5">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 order-2 md:order-1"
          >
            {[
              {
                icon: <Ship className="h-5 w-5" />,
                title:
                  locale === "it"
                    ? "Spedizioni in tutto il mondo"
                    : "Worldwide shipping",
                desc:
                  locale === "it"
                    ? "Logistica express e pallet verso USA, Europa, Asia e altri mercati internazionali."
                    : "Express and pallet logistics to USA, Europe, Asia and other international markets.",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title:
                  locale === "it"
                    ? "Servizio di rappresentanza fiscale"
                    : "Tax representation service",
                desc:
                  locale === "it"
                    ? "Supporto fiscale e doganale per semplificare le operazioni di export."
                    : "Tax and customs support to simplify export operations.",
              },
              {
                icon: <FileCheck2 className="h-5 w-5" />,
                title:
                  locale === "it"
                    ? "Consulenza e controllo documentale"
                    : "Consulting and document control",
                desc:
                  locale === "it"
                    ? "Gestione completa della documentazione necessaria per ogni spedizione."
                    : "Complete management of documentation required for each shipment.",
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
          <div className="order-1 md:order-2 md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 md:ml-auto"
            >
              <Building2 className="h-3 w-3" />
              {locale === "it" ? "For Wineries" : "For Wineries"}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl"
            >
              {locale === "it"
                ? "Servizi per cantine"
                : "Services for wineries"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg leading-relaxed text-white/80"
            >
              {locale === "it"
                ? "SPST supporta le cantine italiane nell'export del vino con servizi completi di logistica, documentazione e rappresentanza fiscale."
                : "SPST supports Italian wineries in wine export with complete logistics, documentation and tax representation services."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 md:flex md:justify-end"
            >
              <a
                href="/servizi-e-contatti"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f7931e] px-6 py-3 font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                {locale === "it" ? "Scopri i servizi" : "Discover services"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
