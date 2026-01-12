import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/campionature-vino-asia";

export const metadata: Metadata = {
  title: "Campionature di vino in Asia: regole, documenti e rischi | SPST",
  description:
    "Spedire campioni di vino in Asia non segue un modello unico: dazi, alcohol tax, documenti minimi e differenze tra Paesi (Giappone, Cina, Hong Kong, Singapore, Corea).",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Come spedire campionature di vino in Asia",
    description:
      "Cosa è possibile, cosa è tollerato e perché ogni Paese fa storia a sé. Documenti minimi, valore dichiarato e tax sugli alcolici.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campioni di vino in Asia: come farli arrivare",
    description:
      "Documenti minimi, valore dichiarato, alcohol tax e differenze tra Paesi. Approccio caso per caso.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Come spedire campionature di vino in Asia",
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
