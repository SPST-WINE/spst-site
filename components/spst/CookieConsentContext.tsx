"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "spst-cookie-consent";

export type CookieConsentStatus = boolean | null; // null = not decided yet

type CookieConsentContextType = {
  consent: CookieConsentStatus;
  setConsent: (accepted: boolean) => void;
  hasDecided: boolean;
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

function readStoredConsent(): CookieConsentStatus {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    // ignore
  }
  return null;
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsentStatus>(null);

  useEffect(() => {
    setConsentState(readStoredConsent());
  }, []);

  const setConsent = useCallback((accepted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, String(accepted));
    } catch {
      // ignore
    }
    setConsentState(accepted);
  }, []);

  const value: CookieConsentContextType = {
    consent,
    setConsent,
    hasDecided: consent !== null,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (ctx === undefined) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
