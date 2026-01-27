import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi e Contatti - SPST",
  description:
    "Servizi completi per spedizioni vino: logistica internazionale, documenti doganali, accise, pallet e supporto export. Contatti diretti per cantine e importatori.",
  alternates: {
    canonical: "/servizi-e-contatti",
  },
};

export default function ServiziContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
