"use client";

import React from "react";
import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "../../lib/partnerLogos";

/**
 * LOGHI DELLE CANTINE PARTNER
 * 
 * I loghi vengono caricati automaticamente da lib/partnerLogos.ts
 * 
 * Per aggiungere nuovi loghi:
 * 1. Posiziona il file PNG nella cartella: public/partners/
 *    Esempio: public/partners/cantina-14.png
 * 
 * 2. Aggiungi una nuova entry in lib/partnerLogos.ts:
 *    { name: "Cantina 14", logo: "/partners/cantina-14.png" }
 * 
 * 3. Formato immagini richiesto:
 *    - PNG con sfondo trasparente
 *    - Dimensione: 800x800px (formato quadrato 1:1)
 *    - Ottimizzate per il web
 */

export function PartnersCarousel() {
  // Duplica i loghi più volte per effetto loop infinito fluido
  // Duplichiamo abbastanza volte per avere sempre 4-5 loghi visibili
  const duplicatedLogos = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  // Calcolo della larghezza: 96px (w-24) + 32px (gap-8) = 128px per logo
  const logoWidth = 128; // 96px + 32px gap
  const totalWidth = PARTNER_LOGOS.length * logoWidth;

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0a1722] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0a1722] to-transparent" />

      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -totalWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 26, // Ridotto del 30% (20 * 1.3 = 26)
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white p-3 transition-all hover:border-white/40 hover:shadow-lg"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-full w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              onError={(e) => {
                // Fallback se l'immagine non esiste
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="hidden text-xs font-semibold text-white/60">
              {partner.name}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
