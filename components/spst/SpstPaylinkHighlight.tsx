// components/spst/SpstPaylinkHighlight.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

const SPST_ORANGE = '#f7931e';

export function SpstPaylinkHighlight() {
  return (
    <section className="py-12 border-t border-white/10 bg-white/[0.01]">
      <div className="mx-auto max-w-[1200px] px-5 grid gap-8 md:grid-cols-[1.1fr_.9fr] items-center">
        {/* LEFT TEXT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-wide bg-white/5 border border-white/15 text-white/70 mb-3">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span>SPST Paylink · Enoturismo USA</span>
          </div>
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-black leading-tight">
            Spedisci il vino dei tuoi turisti
            <span className="block text-transparent bg-clip-text mt-1"
              style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, #ffffff)` }}>
              direttamente a casa loro negli USA.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] text-white/80 max-w-[46ch]">
            Con SPST Paylink generi un link di pagamento per il tuo cliente
            americano: lui paga dal proprio smartphone, inserisce l’indirizzo
            USA e SPST gestisce MRN, export, ritiro in cantina e consegna
            door-to-door.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 max-w-[520px]">
            {[
              'Pagamento sicuro da smartphone con carta.',
              'Solo spedizioni verso Stati Uniti, pensato per il turismo americano.',
              'MRN, export e ritiro in cantina gestiti da SPST.',
              'Perfetto per cantine, agriturismi ed eventi con pubblico USA.',
            ].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-[13px] text-white/80"
              >
                <span className="mt-[3px] inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span>{label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/spst-paylink"
              className="px-4 py-2 rounded-full text-sm font-semibold text-[#0b1018] shadow transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
              style={{ background: SPST_ORANGE }}
            >
              Scopri SPST Paylink
            </a>
            <a
              href="mailto:info@spst.it?subject=Info%20SPST%20Paylink%20USA"
              className="px-4 py-2 rounded-full text-sm font-semibold border border-white/30 text-white/90 hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-[1px] transition-all"
            >
              Parla con SPST
            </a>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative mx-auto w-64 sm:w-72 md:w-80">
          {/* glow */}
          <div className="absolute -inset-10 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_top,_rgba(247,147,30,0.35),_transparent_65%)]" />
          {/* phone frame */}
          <div className="relative rounded-[2.2rem] bg-black/80 border border-white/15 shadow-[0_18px_60px_rgba(0,0,0,.7)] px-3 pt-4 pb-5 overflow-hidden">
            {/* notch fake */}
            <div className="mx-auto mb-3 h-5 w-28 rounded-full bg-black/80 border border-white/10" />
            {/* screenshot */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 h-[380px]">
              <img
                src="/paylink-usa-checkout.png"
                alt="Schermata di checkout SPST Paylink USA"
                className="h-full w-full object-cover translate-y-[0px] scale-[1.08]"
                style={{ objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
