import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listino Prezzi - VeronaSped",
  description: "Consulta i nostri prezzi per spedizioni nazionali e internazionali",
};

export default function ListinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
