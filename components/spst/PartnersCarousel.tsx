"use client";

import React from "react";
import { motion } from "framer-motion";

// Placeholder per i loghi delle cantine - sostituire con URL reali
const PARTNER_LOGOS = [
  { name: "Cantina 1", logo: "/placeholder-logo.svg" },
  { name: "Cantina 2", logo: "/placeholder-logo.svg" },
  { name: "Cantina 3", logo: "/placeholder-logo.svg" },
  { name: "Cantina 4", logo: "/placeholder-logo.svg" },
  { name: "Cantina 5", logo: "/placeholder-logo.svg" },
  { name: "Cantina 6", logo: "/placeholder-logo.svg" },
  { name: "Cantina 7", logo: "/placeholder-logo.svg" },
  { name: "Cantina 8", logo: "/placeholder-logo.svg" },
];

export function PartnersCarousel() {
  // Duplica i loghi per effetto loop infinito
  const duplicatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0a1722] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0a1722] to-transparent" />

      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 * PARTNER_LOGOS.length * 120],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
          >
            <div className="text-xs font-semibold text-white/60">
              {partner.name}
            </div>
            {/* Quando avrai i loghi reali, usa:
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-full w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            */}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
