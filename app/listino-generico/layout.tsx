import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listino Prezzi B2C",
  description: "Listino prezzi B2C per spedizioni nazionali e internazionali",
};

export default function ListinoGenericoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
