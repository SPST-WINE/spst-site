import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPST - Listino B2C",
  description: "Listino B2C SPST per spedizioni nazionali e internazionali",
};

export default function ListinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
