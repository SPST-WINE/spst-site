import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/imballaggi-multicollo-vino";

export const metadata: Metadata = {
  title: "Imballaggi per spedizioni multicollo di vino: quando servono davvero | SPST",
  description:
    "Perché l’imballaggio specifico è fondamentale nel multicollo (express/B2C/campioni) e perché sul pallet è spesso inutile. Guida pratica + schema rapido.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Imballaggi per vino: multicollo vs pallet",
    description:
      "Nel multicollo l’imballo tecnico riduce rotture e contestazioni. Sul pallet contano pallettizzazione e fissaggio.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imballaggi vino: multicollo vs pallet",
    description:
      "Quando serve l’imballo tecnico e quando è inutile. Schema rapido incluso.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Perché usare imballaggi specifici per il trasporto multicollo di vino",
    mainEntityOfPage: URL,
    publisher: {
      "@type": "Organization",
      name: "SPST",
      url: "https://www.spst.it",
    },
    dateModified: "2026-01-10",
    datePublished: "2026-01-10",
    inLanguage: "it-IT",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quindi sul pallet non serve mai un imballo “premium”?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sul pallet conta la stabilità dell’unità: pallettizzazione, fissaggio, regge/film e protezioni angolari. Un antiurto da multicollo raramente aggiunge valore e spesso riduce efficienza (spazio/costi).",
        },
      },
      {
        "@type": "Question",
        name: "Nel multicollo basta un cartone doppia onda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aiuta, ma il punto chiave è bloccare la bottiglia e separare vetro-vetro. Gli inserti dedicati riducono movimenti e urti.",
        },
      },
      {
        "@type": "Question",
        name: "Per spedizioni assicurate cosa cambia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spesso l’idoneità dell’imballo è un requisito essenziale: con imballi non adeguati, coperture e reclami possono diventare complicati.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      {children}
    </>
  );
}
