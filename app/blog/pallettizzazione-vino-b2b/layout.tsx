import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/pallettizzazione-vino-b2b";

export const metadata: Metadata = {
  title: "Pallettizzazione vino B2B: reggette, film, angolari e sovrapponibilità | SPST",
  description:
    "Guida pratica alla pallettizzazione del vino per spedizioni B2B: layout a incastro, altezza, reggette, film, angolari e perché un pallet non sovrapponibile costa sempre di più.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Pallettizzazione corretta del vino nelle spedizioni B2B",
    description:
      "Best practice su layout, altezza, reggette, film e angolari. Sovrapponibile vs non sovrapponibile e impatto sui costi.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallettizzazione vino B2B: best practice e costi",
    description:
      "Come costruire pallet stabili e sovrapponibili per ridurre rischi, extra e contestazioni.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pallettizzazione corretta del vino nelle spedizioni B2B",
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
