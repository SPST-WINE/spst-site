import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentazione SPST - Export & Wine Logistics",
  description:
    "SPST: piattaforma unica per spedizioni vino internazionali. Gestione documentale, accise, compliance e logistica B2B/B2C verso USA, Europa e mercati globali.",
  alternates: {
    canonical: "/presentazione",
  },
};

export default function PresentazioneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
