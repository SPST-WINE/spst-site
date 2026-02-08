import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spedizioni Generiche - SPST",
  description:
    "Soluzioni di spedizione complete per diverse tipologie di merci: express, pallet e spedizioni internazionali. Servizi personalizzati per ogni esigenza.",
  alternates: {
    canonical: "/spedizioni-generiche",
  },
};

export default function SpedizioniGenericheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
