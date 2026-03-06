import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rappresentanza Fiscale",
  description:
    "Rappresentanza fiscale SPST per vino: codice accisa, e-DAS, accisa assolta per 8 paesi UE. Servizio per cantine e spedizioni B2B Europa.",
  alternates: { canonical: "/listino-rappresentanza-fiscale" },
  robots: { index: true, follow: true },
};

export default function RappresentanzaFiscaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
