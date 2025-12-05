"use client";

import React from "react";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export function SpstHeader() {
  return (
    // HEADER IDENTICO A QUELLO DEL PORTALE QUOTAZIONI
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between gap-4">
        {/* LOGO + BRAND */}
        <a href="/" className="flex items-center gap-2 text-white font-extrabold">
          <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
          <span className="hidden sm:inline">SPST</span>
        </a>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-3 text-[0.95rem] font-semibold">
          {[
            ["/#funziona", "Come funziona"],
            ["/#servizi", "Servizi"],
            ["/#chi", "Clienti"],
            ["/#vantaggi", "Perché SPST"],
          ].map(([href, label]) => (
            <a
              key={href as string}
              href={href as string}
              className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}

          <a
            href="/servizi-e-contatti"
            className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            Contatti
          </a>

          <a
            href="https://www.spst.it/wine-connect-cantina"
            className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            Wine Connect
          </a>

          <a
            href="https://app.spst.it/login"
            className="inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
          >
            Area Riservata
          </a>
        </nav>

        {/* CTA MOBILE */}
        <a
          href="/portale-quotazioni"
          className="md:hidden inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-3 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
        >
          Richiedi
        </a>
      </div>
    </header>
  );
}
