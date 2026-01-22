import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini e Condizioni - SPST",
  description:
    "Termini e condizioni, privacy policy e cookie policy di SPST. Informazioni legali su servizi di spedizione vino internazionale, trattamento dati e responsabilità.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
