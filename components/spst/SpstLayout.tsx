"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SpstHeader } from "./SpstHeader";
import { SpstFooter } from "./SpstFooter";
import { useLocale } from "../i18n/LocaleProvider";

// Pagine che non devono avere header/footer
const EXCLUDED_PATHS = ["/back-office"];

export function SpstLayout({ children }: { children: React.ReactNode }) {
  const { t, locale } = useLocale();
  const pathname = usePathname();

  // Se la pagina è esclusa, renderizza solo i children
  if (EXCLUDED_PATHS.some((path) => pathname?.startsWith(path))) {
    return <>{children}</>;
  }

  // Memoizza i navItems per evitare ri-creazioni inutili
  // Include locale come dipendenza per aggiornare quando cambia la lingua
  const defaultNavItems = useMemo(
    () => [
      { href: "/", label: t.nav.home },
      { href: "/servizi-e-contatti", label: t.nav.services },
      { href: "/#vantaggi", label: t.nav.whySpst },
      { href: "/portale-quotazioni", label: t.nav.quote },
      { href: "/spst-paylink", label: t.nav.usaShipping },
      { href: "/#for-buyers", label: t.nav.forBuyers },
    ],
    [t.nav.home, t.nav.services, t.nav.whySpst, t.nav.quote, t.nav.usaShipping, t.nav.forBuyers, locale]
  );

  return (
    <>
      <SpstHeader key={locale} navItems={defaultNavItems} />
      {children}
      <SpstFooter />
    </>
  );
}
