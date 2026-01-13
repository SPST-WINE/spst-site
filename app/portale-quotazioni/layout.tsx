// app/portale-quotazioni/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richiedi un preventivo - SPST Spedizioni di Vino",
};

export default function PortaleQuotazioniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
