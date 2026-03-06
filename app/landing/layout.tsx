import type { Metadata } from "next";

/**
 * Le pagine in /landing/ sono versioni per campagne (stesso contenuto del blog).
 * Canonical punta alla versione blog per evitare contenuto duplicato in Google.
 * noindex: non invitiamo Google a indicizzare la landing (solo il blog).
 */
const BLOG_CANONICAL = "https://www.spst.it/blog/spedire-senza-codice-accisa";

export const metadata: Metadata = {
  alternates: { canonical: BLOG_CANONICAL },
  robots: { index: false, follow: true },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
