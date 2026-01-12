import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/campioni-vino-usa";

export const metadata: Metadata = {
  title: "Campioni di vino negli USA: cosa è legale e cosa no | SPST",
  description:
    "Campionature di vino negli Stati Uniti: perché “sono solo campioni” non semplifica nulla. Importatore USA, COLA, rischi e modello corretto.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Campioni di vino negli Stati Uniti",
    description:
      "Cosa è possibile, cosa no, e perché “sono solo campioni” non è una scusa valida. Importatore, COLA ed errori comuni.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campioni di vino negli USA: regole reali",
    description:
      "Perché serve struttura (importatore, COLA/esenzioni) anche per le campionature negli Stati Uniti.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Campioni di vino negli Stati Uniti",
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
