import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listino B2C",
  description:
    "Listino prezzi SPST per spedizioni vino B2C: nazionali e internazionali, multicollo e pallet. Tariffe e calcolatore per export vino.",
  alternates: { canonical: "/listino" },
  robots: { index: true, follow: true },
};

export default function ListinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
