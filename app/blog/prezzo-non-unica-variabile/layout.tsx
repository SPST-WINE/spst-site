import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/prezzo-non-unica-variabile";

export const metadata: Metadata = {
  title: "Spedizioni vino: perché il prezzo non è l’unica variabile | SPST",
  description:
    "Perché il prezzo da solo non basta: supporto, tecnologia, dati e consulenza operativa fanno la differenza nelle spedizioni di vino. Un modello che scala vale più di uno sconto spot.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Spedizioni di vino: perché il prezzo non è sempre l’unica variabile",
    description:
      "Supporto, tecnologia e dati contano più di qualche euro in meno. Come scegliere un modello che regge nel tempo.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spedizioni vino: prezzo vs processo",
    description:
      "Supporto, web app e dati centralizzati: perché la tariffa non racconta tutta la storia.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spedizioni di vino: perché il prezzo non è sempre l’unica variabile",
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
