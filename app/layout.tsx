// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LocaleProvider } from "../components/i18n/LocaleProvider";
import { SpstLayout } from "../components/spst/SpstLayout";

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
};

const META_PIXEL_ID = "1938569710028909";
const GTM_ID = "GTM-PZ8NQDPF";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel */}

        {/* JSON-LD Organization per rich results Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SPST",
              url: CANONICAL_DOMAIN,
              logo: `${CANONICAL_DOMAIN}/bo-assets/img/spst-logo.png`,
              description: DEFAULT_DESCRIPTION,
              address: { "@type": "PostalAddress", addressCountry: "IT" },
            }),
          }}
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel (noscript) */}

        <LocaleProvider>
          <SpstLayout>
            {children}
          </SpstLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}
