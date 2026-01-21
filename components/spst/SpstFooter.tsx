// components/spst/SpstFooter.tsx
"use client";

import React from "react";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export function SpstFooter() {
  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 sm:flex-row">
        <a className="flex items-center gap-2 font-extrabold text-white" href="/">
          <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
        </a>
        <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right">
          <small className="text-white/80 leading-tight">
            © SPST SRL · P.IVA IT03218840647
          </small>
          <small className="text-white/80 leading-tight">
            Sede Legale: Piazzale Gambale 23, Avellino (AV) 83100
          </small>
          <a
            href="https://www.spst.it/legal"
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            Termini e Condizioni
          </a>
        </div>
      </div>
    </footer>
  );
}
