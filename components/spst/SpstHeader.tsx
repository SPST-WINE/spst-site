"use client";

import React, { useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "../i18n/LocaleProvider";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export function SpstHeader({
  navItems,
}: {
  navItems: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  
  // Forza il re-render quando cambiano i navItems
  const navItemsKey = navItems.map((item) => item.label).join('|');

  // Toggle lingua semplice (un click) - usa useCallback per stabilità
  const toggleLocale = React.useCallback(() => {
    const newLocale = locale === "it" ? "en" : "it";
    setLocale(newLocale);
  }, [locale, setLocale]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between gap-4">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 font-extrabold" style={{ color: '#0a1722' }}>
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>

          {/* DESKTOP NAV */}
          <nav key={navItemsKey} className="hidden md:flex items-center gap-5 text-[0.95rem] font-semibold">
            {navItems.map((item) => (
              <a
                key={`${item.href}-${locale}-${item.label}`}
                href={item.href}
                className="px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                style={{ color: '#0a1722' }}
              >
                {item.label}
              </a>
            ))}

            {/* LANGUAGE TOGGLE - Un click per cambiare */}
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 hover:bg-gray-100 transition-all"
              aria-label="Toggle language"
            >
              <span className="text-xs font-semibold" style={{ color: '#0a1722' }}>
                {locale === "it" ? "IT" : "EN"}
              </span>
              <motion.div
                animate={{ rotate: locale === "en" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: '#0a1722' }}
              >
                <Globe2 className="h-3.5 w-3.5" />
              </motion.div>
            </button>

            {/* AREA RISERVATA (desktop) */}
            <a
              href="https://dashboard.spst.it"
              className="inline-flex items-center rounded-lg bg-[#f7931e] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              Area Riservata
            </a>
          </nav>

          {/* MOBILE CTA + MENU BUTTON */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Menu className="text-white h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm">
          <div className="absolute top-0 right-0 h-full w-[78%] max-w-[300px] bg-white border-l border-gray-200 p-6 flex flex-col gap-6 shadow-xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-lg hover:bg-white/10"
            >
              <X className="text-white w-6 h-6" />
            </button>

            {/* LOGO MOBILE */}
            <a
              href="/"
              className="flex items-center gap-2 font-extrabold mt-2"
              onClick={() => setOpen(false)}
              style={{ color: '#0a1722' }}
            >
              <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
              SPST
            </a>

            {/* MOBILE NAV LINKS */}
            <nav key={navItemsKey} className="flex flex-col gap-4 mt-6" style={{ color: '#0a1722' }}>
              {navItems.map((item) => (
                <a
                  key={`${item.href}-${locale}-${item.label}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[1.05rem] font-semibold hover:opacity-80 transition"
                  style={{ color: '#0a1722' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* LANGUAGE TOGGLE (mobile) */}
            <button
              type="button"
              onClick={() => {
                toggleLocale();
                setOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 hover:bg-gray-100 transition-all"
              aria-label="Toggle language"
              style={{ color: '#0a1722' }}
            >
              <span className="text-sm font-semibold">
                {locale === "it" ? "IT" : "EN"}
              </span>
              <Globe2 className="h-4 w-4" />
            </button>

            {/* AREA RISERVATA (mobile) */}
            <a
              href="https://dashboard.spst.it"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center rounded-lg bg-[#f7931e] text-black px-4 py-2 font-bold text-[1rem] transition-all hover:-translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              Area Riservata
            </a>
          </div>
        </div>
      )}
    </>
  );
}
