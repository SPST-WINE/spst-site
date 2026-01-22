import type { Metadata } from "next";

const PATH = "/blog/come-spedire-vino-negli-usa";

export const metadata: Metadata = {
  title: "Come spedire vino negli USA al cliente finale (guida pratica) | SPST",
  description:
    "Guida pratica per cantine ed e-commerce: perché la spedizione diretta dall'Europa al cliente USA è fuorviante. Requisiti chiave: importatore USA, compliance label (spesso COLA) e vendita domestica. Scopri Paylink USA.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: `https://www.spst.it${PATH}`,
    title: "Come spedire vino al cliente finale negli USA (senza blocchi e false promesse)",
    description:
      "Il problema non è il corriere: è il modello. Importatore USA, compliance label e vendita domestica. Paylink USA rende tutto semplice per la cantina.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spedire vino negli USA: cosa serve davvero",
    description:
      "Importatore USA + compliance label (spesso COLA) + vendita domestica. Paylink USA per cantine con enoturisti americani.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Come spedire vino al cliente finale negli Stati Uniti",
    mainEntityOfPage: `https://www.spst.it${PATH}`,
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
        name: "Quindi non posso mai spedire vino negli USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il punto è “al cliente finale dall’Europa come un pacco”: non è un modello scalabile e difendibile. Il modello corretto è importazione + vendita domestica USA tramite soggetti autorizzati.",
        },
      },
      {
        "@type": "Question",
        name: "Se una volta è arrivato, vuol dire che è legale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Può significare che non è stata intercettata. Il rischio resta e aumenta con frequenza e volumi.",
        },
      },
      {
        "@type": "Question",
        name: "Paylink USA è per cantine o anche per e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "È ideale per cantine con enoturisti USA e flussi B2C ricorrenti. Per e-commerce si valuta in base a volumi e canale.",
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
