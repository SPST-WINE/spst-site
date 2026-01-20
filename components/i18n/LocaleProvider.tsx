"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { Locale, defaultLocale, getTranslations, Translations } from "../../lib/i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Helper per leggere il locale dal localStorage in modo sicuro (solo client-side)
function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }
  try {
    const saved = localStorage.getItem("spst-locale") as Locale | null;
    if (saved && (saved === "it" || saved === "en")) {
      return saved;
    }
  } catch (e) {
    // localStorage potrebbe non essere disponibile
  }
  return defaultLocale;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Inizializza direttamente dal localStorage se disponibile
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  // Sincronizza con localStorage dopo l'hydration
  useEffect(() => {
    setIsHydrated(true);
    const saved = getInitialLocale();
    if (saved !== locale) {
      setLocaleState(saved);
    }
  }, []);

  // Funzione setLocale memoizzata per evitare ri-render inutili
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("spst-locale", newLocale);
    } catch (e) {
      // localStorage potrebbe non essere disponibile
    }
  }, []);

  // Memoizza le traduzioni per evitare ri-calcoli inutili
  const t = useMemo(() => getTranslations(locale), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
