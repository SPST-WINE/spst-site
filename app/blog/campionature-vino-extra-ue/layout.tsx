import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/campionature-vino-extra-ue";

export const metadata: Metadata = {
  title: "Spedire campionature di vino fuori UE: documenti, valore e rischi | SPST",
  description:
    "Guida pratica alle campionature extra-UE: perché “sample” non basta, quali documenti servono sempre, come dichiarare un valore credibile e quando il rischio aumenta (volume/frequenza/Paese).",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Come spedire campionature di vino fuori dall’Unione Europea",
    description:
      "Documenti obbligatori, valore dichiarato e rischi reali: cosa è tollerato e quando iniziano i problemi.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campionature vino extra-UE: cosa serve davvero",
    description:
      "Pro-forma, packing list, HS code, origine e valore credibile. Il rischio cresce con frequenza e volumi.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Come spedire campionature di vino fuori dall’Unione Europea",
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

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Posso scrivere “no commercial value” e basta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La dicitura aiuta a spiegare lo scopo, ma non elimina gli obblighi: servono documenti coerenti e un valore credibile.",
        },
      },
      {
        "@type": "Question",
        name: "Che valore devo dichiarare per una campionatura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non “0” e non fittizio: deve essere credibile e coerente col contenuto. Non è il prezzo di vendita, ma deve reggere un controllo.",
        },
      },
      {
        "@type": "Question",
        name: "Quando devo considerare una struttura dedicata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quando aumentano frequenza/volumi o il Paese è restrittivo: in quel momento la campionatura può essere trattata come importazione vera e richiedere permessi/registrazioni/soggetti abilitati.",
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
