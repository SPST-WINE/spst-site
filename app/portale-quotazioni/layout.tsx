// app/portale-quotazioni/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richiedi un preventivo - SPST Spedizioni di Vino",
  description:
    "Richiedi una quotazione per spedizioni vino internazionali: USA, Europa, Asia. Calcolo preventivo rapido con supporto documentale, accise e compliance.",
  alternates: {
    canonical: "/portale-quotazioni",
  },
};

export default function PortaleQuotazioniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
