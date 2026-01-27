import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrazione - SPST",
  description:
    "Richiedi l'accesso al portale SPST per gestire spedizioni vino internazionali, documenti, tracking e flussi export ricorrenti.",
  alternates: {
    canonical: "/register",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
