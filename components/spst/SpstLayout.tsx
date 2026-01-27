"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SpstHeader } from "./SpstHeader";
import { SpstFooter } from "./SpstFooter";
import { useLocale } from "../i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

// Pagine che non devono avere header/footer
const EXCLUDED_PATHS = ["/back-office", "/listino"];

export function SpstLayout({ children }: { children: React.ReactNode }) {
  const { t, locale } = useLocale();
  const pathname = usePathname();

  // Se la pagina è esclusa, renderizza solo i children
  if (EXCLUDED_PATHS.some((path) => pathname?.startsWith(path))) {
    return <>{children}</>;
  }

  // Memoizza i navItems per evitare ri-creazioni inutili
  // Include locale e tutte le traduzioni come dipendenza per aggiornare quando cambia la lingua
  const defaultNavItems = useMemo(
    () => [
      { href: "/", label: t.nav.home },
      { href: "/servizi-e-contatti", label: t.nav.services },
      { href: "/portale-quotazioni", label: t.nav.quote },
      { href: "/spedizioni-usa", label: t.nav.usaShipping },
      { href: "/#for-buyers", label: t.nav.forBuyers },
    ],
    [t.nav.home, t.nav.services, t.nav.quote, t.nav.usaShipping, t.nav.forBuyers, locale]
  );

  // Crea una key univoca basata su locale e navItems per forzare il re-render
  const headerKey = `${locale}-${defaultNavItems.map((item) => item.label).join('-')}`;

  return (
    <div style={{ background: SPST_PUBLIC_BG, minHeight: "100vh" }}>
      {/* Estensione dello sfondo dietro l'header */}
      <div 
        className="fixed top-0 left-0 right-0 h-20 -z-10"
        style={{ background: SPST_PUBLIC_BG }}
      />
      <SpstHeader key={headerKey} navItems={defaultNavItems} />
      {children}
      {/* Estensione dello sfondo dietro il footer */}
      <div 
        className="relative -mt-40 h-40 -z-10"
        style={{ background: SPST_PUBLIC_BG }}
      />
      <SpstFooter />
    </div>
  );
}
