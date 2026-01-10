import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/spedire-senza-codice-accisa";

export const metadata: Metadata = {
  title: "Buyer senza codice accisa: spedire vino B2B in Europa con rappresentanza fiscale",
  description:
    "Guida pratica: cosa significa buyer senza codice accisa, come funziona la rappresentanza fiscale, quando conviene l’accisa assolta e quando usare la sospensione via deposito fiscale.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Spedire vino B2B in UE quando il buyer non ha codice accisa",
    description:
      "Rappresentanza fiscale, accisa assolta e alternative in sospensione: come sbloccare ordini B2B in modo tracciabile e difendibile.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer senza codice accisa: soluzioni B2B UE",
    description:
      "Rappresentanza fiscale + accisa assolta: spesso la strada più semplice per spedire vino B2B in UE.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Spedire vino B2B in Europa quando il buyer non ha un codice accisa",
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
        name: "Se il buyer non ha codice accisa, posso spedire in sospensione?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Senza codice accisa il buyer non può ricevere vino in sospensione. Serve accisa assolta con rappresentanza fiscale o un deposito fiscale intermediario.",
        },
      },
      {
        "@type": "Question",
        name: "Accisa assolta è sempre la scelta migliore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spesso è la più semplice e rapida, ma dipende da volumi, frequenza e struttura del buyer. Per volumi elevati può avere senso la sospensione via deposito.",
        },
      },
      {
        "@type": "Question",
        name: "Quali info servono per scegliere l’opzione corretta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paese di destinazione, volumi e frequenza, tipo di buyer (distributore/horeca/importatore) e modalità di trasporto (pallet/multicollo).",
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
