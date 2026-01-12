import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/corriere-espresso-o-trasportatore-privato";

export const metadata: Metadata = {
  title: "Corriere espresso o trasportatore privato? Come scegliere | SPST",
  description:
    "Spedizioni di vino: differenze operative tra corriere espresso e trasportatore privato, pro/contro, quando usare l’uno o l’altro per B2C, campioni, multicollo e pallet B2B.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Spedizioni di vino: corriere espresso o trasportatore privato?",
    description:
      "Differenze reali, pro e contro, e come scegliere senza sbagliare. Multicollo, pallet B2B e rischio rotture.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corriere espresso vs trasportatore privato (vino)",
    description:
      "Quando usare espresso o privato: tabella confronto e criteri pratici per evitare danni e costi extra.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spedizioni di vino: corriere espresso o trasportatore privato?",
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
