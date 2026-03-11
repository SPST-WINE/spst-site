"use client";

import React from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";
import { useLocale } from "../i18n/LocaleProvider";

const SPST_ORANGE = "#f97316";

export function CookieBanner() {
  const { consent, setConsent } = useCookieConsent();
  const { t } = useLocale();

  // Show banner only when user has not yet decided
  if (consent !== null) {
    return null;
  }

  const b = t.legal.cookieBanner;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:p-5"
      style={{
        background: "linear-gradient(180deg, rgba(10, 23, 34, 0.98) 0%, rgba(10, 23, 34, 0.99) 100%)",
        borderTop: `1px solid rgba(249, 115, 22, 0.25)`,
      }}
    >
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-4 text-sm text-white/90 md:text-base">
          {b.message}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setConsent(true)}
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#0f1720] transition-all hover:opacity-95 active:scale-[0.98]"
            style={{ background: SPST_ORANGE }}
          >
            {b.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => setConsent(false)}
            className="rounded-lg border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
          >
            {b.rejectNonEssential}
          </button>
          <Link
            href="/legal#cookie"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 underline decoration-orange-400/60 underline-offset-2 transition hover:text-white hover:decoration-orange-400"
          >
            {b.more}
          </Link>
        </div>
      </div>
    </div>
  );
}
