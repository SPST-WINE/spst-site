import type { Metadata } from "next";
import Script from "next/script";

const URL = "https://www.spst.it/spst-paylink";

export const metadata: Metadata = {
  title: "Spedizioni Vino USA",
  description:
    "SPST Paylink USA: flusso B2C dedicato ai turisti americani. Pagamento da smartphone, documenti export (MRN), ritiro in cantina e spedizione door-to-door negli Stati Uniti.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Spedizioni Vino USA",
    description:
      "SPST Paylink USA: pagamento da smartphone + gestione documenti export + ritiro in cantina + consegna door-to-door negli Stati Uniti.",
    siteName: "SPST",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spedizioni Vino USA",
    description:
      "SPST Paylink USA: spedizioni B2C verso gli Stati Uniti con flusso dedicato ai turisti americani.",
  },
  robots: { index: true, follow: true },
};

export default function PaylinkLayout({ children }: { children: React.ReactNode }) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID; // es: G-XXXX
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID; // es: GTM-XXXX (opzionale)

  return (
    <>
      {/* =========================
          Meta Pixel
          - abilita window.fbq
          - il tuo page.tsx usa fbq.trackCustom, quindi serve che questo sia caricato
         ========================= */}
      {pixelId ? (
        <>
          <Script id="meta-pixel-base" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>

          {/* noscript pixel */}
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}

      {/* =========================
          Google Tag
          Opzione A) GA4 diretto (gtag.js) se NEXT_PUBLIC_GA_ID è presente
          Opzione B) GTM se NEXT_PUBLIC_GTM_ID è presente (e GA_ID non serve)
         ========================= */}

      {/* --- Opzione B: GTM (se vuoi GTM) --- */}
      {gtmId ? (
        <>
          <Script id="gtm-loader" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>

          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      ) : null}

      {/* --- Opzione A: GA4 diretto (se non usi GTM) --- */}
      {!gtmId && gaId ? (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}

      {children}
    </>
  );
}
