import type { Metadata } from "next";

const URL = "https://www.spst.it/blog/spedire-vino-b2b-europa-accise";

export const metadata: Metadata = {
  title: "Spedizioni B2B di vino in UE: accisa sospesa, assolta e documenti",
  description:
    "Guida pratica al B2B intra-UE del vino: accisa sospesa (EMCS e-AD), accisa assolta, documenti minimi, rischi su pallet e multicollo e approccio operativo SPST.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "B2B vino in UE: cosa è legale, cosa no, e come funzionano le accise",
    description:
      "Due regimi validi (sospesa/assolta), documenti e rischi reali su pallet e multicollo: guida pratica SPST.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B vino UE: regimi accise e documenti",
    description:
      "Accisa sospesa (EMCS) vs assolta, documenti e rischi reali: guida pratica SPST.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "B2B vino in UE: cosa è legale, cosa no, e come funzionano davvero le accise",
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
        name: "Se spedisco pallet B2B senza EMCS, cosa rischio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In sospensione senza EMCS la spedizione non è regolare: il rischio resta in capo al mittente. L’esposizione dipende dal contesto e dai controlli.",
        },
      },
      {
        "@type": "Question",
        name: "Accisa assolta significa spedizione libera in UE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Significa che l’accisa è stata pagata in uno Stato UE, ma restano obblighi di tracciabilità e flussi/documenti coerenti.",
        },
      },
      {
        "@type": "Question",
        name: "Qual è il primo passo per fare B2B strutturato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Definire il regime accise (sospesa/assolta), poi impostare documenti e responsabilità tra cantina, buyer e trasportatore.",
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
