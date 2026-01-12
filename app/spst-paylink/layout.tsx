// app/spst-paylink/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Spedizioni Vino USA",
  description:
    "SPST Paylink: spedizioni vino B2C verso gli Stati Uniti per turisti americani in visita in Italia. Pagamento via link, MRN, ritiro in cantina e consegna door-to-door.",
};

const META_PIXEL_ID = "1938569710028909";
const GA_ID = "G-SW6R3Z1VJX";

export default function SpstPaylinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ================== META PIXEL ================== */}
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

          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>

      {/* ================== GOOGLE TAG (GA4) ================== */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            page_title: 'Spedizioni Vino USA',
            page_path: '/spst-paylink'
          });
        `}
      </Script>

      {/* ================== PAGE CONTENT ================== */}
      {children}
    </>
  );
}
