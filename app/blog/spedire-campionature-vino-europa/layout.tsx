import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/spedire-campionature-vino-europa";

export const metadata: Metadata = {
  title: "Spedire campionature di vino in Europa: normativa e prassi reale",
  description:
    "Guida pratica alle campionature di vino intra-UE: prassi di mercato, quadro normativo, quando il rischio cresce con volumi e frequenza, e come gestire il flusso in modo consapevole.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Campionature di vino in Europa: normativa vs prassi reale",
    description:
      "Cosa succede davvero nel mercato e quando l’invio di campioni diventa un problema: volume, frequenza e destinazioni più rigorose.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campionature vino UE: normativa e prassi",
    description:
      "Prassi reale, quadro normativo e quando il rischio cresce con volumi e frequenza.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Come spedire campionature di vino in Europa: tra normativa e prassi reale",
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
        name: "Quante bottiglie rientrano in una “campionatura” nella pratica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non esiste una soglia unica valida ovunque: nella pratica sono spesso poche bottiglie. Il fattore decisivo è la frequenza e la ripetizione del flusso.",
        },
      },
      {
        "@type": "Question",
        name: "Se scrivo “sample” e metto valore simbolico sono al sicuro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aiuta a comunicare la natura dell’invio, ma non crea un’esenzione automatica. Se il flusso diventa sistematico, il rischio cresce.",
        },
      },
      {
        "@type": "Question",
        name: "Quando devo smettere di trattare i campioni “come pacchi standard”?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quando aumentano frequenza/volumi o quando operi con destinazioni o partner più rigorosi. In quel caso conviene valutare un modello più strutturato.",
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
