// app/blog/spedire-vino-b2c-europa/layout.tsx
import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/spedire-vino-b2c-europa";

export const metadata: Metadata = {
  title: "Spedire vino al cliente finale in Europa: cosa è legale e cosa no",
  description:
    "Guida pratica alla spedizione B2C intra-UE del vino: accise, responsabilità del venditore, documenti minimi e rischi delle scorciatoie.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Spedire vino B2C in Europa: cosa è legale, cosa no, e perché si sbaglia",
    description:
      "Accise, responsabilità e documenti minimi: come strutturare correttamente la spedizione di vino al cliente finale in UE.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spedire vino B2C in Europa (UE): guida SPST",
    description:
      "Accise, responsabilità e documenti minimi: guida pratica per cantine ed e-commerce.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Come spedire vino al cliente finale in Europa: cosa è legale, cosa no, e perché spesso si sbaglia",
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
        name: "Posso spedire poche bottiglie ogni tanto senza problemi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anche invii piccoli possono essere controllati. Il punto non è la quantità, ma la coerenza del modello e dei documenti.",
        },
      },
      {
        "@type": "Question",
        name: "Se il cliente dice “pago io le accise”, allora sono coperto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il cliente può rimborsare il costo nel prezzo, ma nel B2C intra-UE non è lui a gestire la parte fiscale operativamente.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa devo fare prima di attivare un e-commerce B2C in UE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Definire un modello accise sostenibile e poi strutturare logistica, documenti e comunicazione “tutto incluso”.",
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
