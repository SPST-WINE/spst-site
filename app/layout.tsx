// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "../components/i18n/LocaleProvider";
import { SpstLayout } from "../components/spst/SpstLayout";
import { CookieConsentProvider } from "../components/spst/CookieConsentContext";
import { CookieBanner } from "../components/spst/CookieBanner";
import { CookieScripts } from "../components/spst/CookieScripts";

const CANONICAL_DOMAIN = "https://www.spst.it";
const DEFAULT_TITLE = "SPST - Export & Wine Logistics";
const DEFAULT_DESCRIPTION =
  "Spedizioni vino internazionali: accise, compliance, pallet e logistica B2B/B2C. Servizi export per cantine verso USA, Europa e mercati globali. Supporto operativo e documentale.";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_DOMAIN),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | SPST`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "spedizioni vino",
    "export vino",
    "logistica vino",
    "spedizioni USA",
    "accise vino",
    "compliance vino",
    "B2B vino",
    "B2C vino",
    "pallet vino",
    "SPST",
  ],
  authors: [{ name: "SPST", url: CANONICAL_DOMAIN }],
  creator: "SPST",
  publisher: "SPST",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: CANONICAL_DOMAIN,
    siteName: "SPST - Export & Wine Logistics",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/bo-assets/img/spst-logo.png", width: 512, height: 512, alt: "SPST Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/bo-assets/img/spst-logo.png", type: "image/png", sizes: "32x32" },
      { url: "/bo-assets/img/spst-logo.png", type: "image/png", sizes: "192x192" },
      { url: "/bo-assets/img/spst-logo.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/bo-assets/img/spst-logo.png" }],
    shortcut: ["/bo-assets/img/spst-logo.png"],
  },
  themeColor: "#0b1220",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* GTM and Meta Pixel are loaded only after cookie consent (see CookieScripts) */}
        {/* JSON-LD Organization + WebSite per rich results Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${CANONICAL_DOMAIN}/#organization`,
              name: "SPST",
              url: CANONICAL_DOMAIN,
              logo: `${CANONICAL_DOMAIN}/bo-assets/img/spst-logo.png`,
              description: DEFAULT_DESCRIPTION,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Piazzale Gambale 23",
                addressLocality: "Avellino",
                addressRegion: "AV",
                postalCode: "83100",
                addressCountry: "IT",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SPST - Export & Wine Logistics",
              url: CANONICAL_DOMAIN,
              description: DEFAULT_DESCRIPTION,
              publisher: { "@id": `${CANONICAL_DOMAIN}/#organization` },
              inLanguage: "it",
            }),
          }}
        />
      </head>

      <body>
        <CookieConsentProvider>
          <CookieScripts />
          <LocaleProvider>
            <SpstLayout>
              {children}
            </SpstLayout>
            <CookieBanner />
          </LocaleProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
