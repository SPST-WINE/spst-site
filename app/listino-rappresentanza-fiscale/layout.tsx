import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPST - Rappresentanza Fiscale",
  description: "Servizio completo di rappresentanza fiscale, codice accisa e spedizione in accisa assolta per 8 paesi in Europa",
};

export default function RappresentanzaFiscaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
