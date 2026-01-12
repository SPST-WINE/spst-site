import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/documenti-dogane-spedizioni-vino";

export const metadata: Metadata = {
  title: "Documenti e dogane per spedire vino | SPST",
  description:
    "Guida pratica ai documenti per le spedizioni di vino e al ruolo delle dogane: quando esistono, quando no, cosa serve davvero e perché i blocchi nascono quasi sempre a monte.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Documenti per le spedizioni di vino e dogane",
    description:
      "Cosa sono le dogane, quando entrano in gioco e quali documenti servono davvero per spedire vino senza blocchi evitabili.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documenti e dogane per spedire vino | SPST",
    description:
      "Il vero nodo della logistica internazionale: documenti coerenti, HS code, valore, origine e modello corretto.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Documenti per le spedizioni di vino e dogane",
    mainEntityOfPage: URL,
    publisher: {
      "@type": "Organization",
      name: "SPST",
      url: "https://www.spst.it",
    },
    dateModified: "2026-01-12",
    datePublished: "2026-01-12",
    inLanguage: "it-IT",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {children}
    </>
  );
}
