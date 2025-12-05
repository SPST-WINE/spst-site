// components/spst/SpstHeader.tsx
"use client";

import React from "react";

const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/servizi-e-contatti", label: "Servizi" },
  { href: "/#vantaggi", label: "Perché SPST" },
  { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
  { href: "/spst-paylink", label: "Paylink USA" },
];

export function SpstHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5">
        <a href="/" className="flex items-center gap-2 font-extrabold text-white">
          <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
          <span className="hidden sm:inline">SPST</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 text-[0.95rem] font-semibold md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-1 text-white/85 transition-colors hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://app.spst.it/login"
            className="inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] px-4 py-2 font-bold text-black ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:ring-2 active:translate-y-[1px]"
          >
            Area Riservata
          </a>
        </nav>

        {/* CTA mobile rapida */}
        <a
          href="/portale-quotazioni"
          className="inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] px-3 py-2 text-sm font-bold text-black ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:ring-2 active:translate-y-[1px] md:hidden"
        >
          Preventivo
        </a>
      </div>
    </header>
  );
}
