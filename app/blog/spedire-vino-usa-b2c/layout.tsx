import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/spedire-vino-usa-b2c";

export const metadata: Metadata = {
  title:
    "Spedire vino negli USA al cliente finale: perché serve importatore e COLA (TTB)",
  description:
    "Guida pratica per cantine ed e-commerce: perché il B2C diretto dall’Europa agli USA non è un modello scalabile. COLA, Importer of Record, three-tier system e flusso corretto.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "Spedire vino negli USA (B2C): perché non basta un corriere",
    description:
      "Negli USA contano licenze, importatore e compliance label (COLA). Il modello corretto è importazione + vendita domestica.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vino negli USA: importatore + COLA, non “spedisco e basta”",
    description:
      "Guida operativa: cosa serve davvero per vendere B2C negli USA in modo difendibile e scalabile.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Spedire vino al cliente finale negli USA: perché serve importatore e COLA",
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
        name: "COLA serve sempre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spesso è necessaria per importazione/commercializzazione. Esistono eccezioni o percorsi particolari, ma non rappresentano un canale B2C semplice e replicabile. Va valutato caso per caso.",
        },
      },
      {
        "@type": "Question",
        name: "Perché non posso semplicemente usare un corriere espresso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il corriere gestisce il trasporto. Importazione e vendita di alcol richiedono licenze, responsabilità e adempimenti che non vengono sostituiti dalla spedizione.",
        },
      },
      {
        "@type": "Question",
        name: "Qual è la strada più veloce per iniziare col B2C USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In genere: definire Stato e canale, verificare etichette/compliance (COLA o percorso applicabile), appoggiarsi a un importatore USA autorizzato e vendere dall’interno degli USA.",
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
