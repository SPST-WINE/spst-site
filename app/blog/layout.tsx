import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog SPST | Logistica vino, accise, documenti e spedizioni internazionali",
  description:
    "Guide pratiche su spedizioni vino in Europa e USA: accise, B2B/B2C, campionature, rappresentanza fiscale e Paylink USA. Articoli operativi, senza terrorismo normativo.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://www.spst.it/blog",
    title: "Blog SPST | Logistica vino & compliance",
    description:
      "Articoli pratici su accise, documenti e flussi reali per spedire vino in UE e USA.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog SPST | Logistica vino & compliance",
    description:
      "Guide operative su UE/USA, accise, documenti, campionature e Paylink USA.",
  },
  robots: { index: true, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
