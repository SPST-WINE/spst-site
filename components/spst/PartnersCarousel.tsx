"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * LOGHI DELLE CANTINE PARTNER
 * 
 * Per aggiungere i loghi delle cantine:
 * 1. Posiziona i file immagine nella cartella: public/partners/
 *    Esempio: public/partners/cantina-1.png, public/partners/cantina-2.png, ecc.
 * 
 * 2. Aggiorna l'array PARTNER_LOGOS qui sotto con i nomi e i percorsi reali:
 *    - name: Nome della cantina (usato come alt text)
 *    - logo: Percorso relativo dalla cartella public (es. "/partners/cantina-1.png")
 * 
 * 3. Formato immagini richiesto:
 *    - PNG con sfondo trasparente
 *    - Dimensione: 800x800px (formato quadrato 1:1)
 *    - Ottimizzate per il web
 */
const PARTNER_LOGOS = [
  { name: "Cantina 1", logo: "/partners/cantina-1.png" },
  { name: "Cantina 2", logo: "/partners/cantina-2.png" },
  { name: "Cantina 3", logo: "/partners/cantina-3.png" },
  // Aggiungi altri loghi qui quando disponibili
  // { name: "Cantina 4", logo: "/partners/cantina-4.png" },
  // { name: "Cantina 5", logo: "/partners/cantina-5.png" },
];

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
            duration: 20,
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
