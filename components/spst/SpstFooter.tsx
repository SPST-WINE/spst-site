// components/spst/SpstFooter.tsx
"use client";

import React from "react";
import { useLocale } from "../i18n/LocaleProvider";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export function SpstFooter() {
  const { t } = useLocale();

  return (
    <footer className="relative py-12 backdrop-blur-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a className="flex items-center gap-2 font-extrabold text-white" href="/">
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>
          <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end">
              <a
                href="https://www.spst.it/legal"
                className="text-white/70 hover:text-white transition-colors"
              >
                {t.footer.termsAndConditions}
              </a>
            </div>
            <small className="text-white/80 leading-relaxed">
              © SPST SRL · P.IVA IT03218840647
            </small>
            <small className="text-white/60 text-sm leading-relaxed">
              Sede Legale: Piazzale Gambale 23, Avellino (AV) 83100
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
