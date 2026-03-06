import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listino Prezzi B2C",
  description:
    "Listino prezzi B2C SPST per spedizioni vino nazionali e internazionali. Tariffe trasparenti per cantine e e-commerce.",
  alternates: { canonical: "/listino-generico" },
  robots: { index: true, follow: true },
};

export default function ListinoGenericoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
