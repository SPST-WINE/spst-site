// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <link rel="stylesheet" href="https://spst-logistics.vercel.app/assets/esm/base.css?v=1" />
      <link rel="stylesheet" href="https://spst-logistics.vercel.app/assets/esm/quotes-admin.css?v=1" />
    </>
  );
}

// app/back-office/page.tsx
'use client';
import Script from "next/script";

export default function BackOfficePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div id="spst-backoffice" />
      <Script id="bo-config" strategy="beforeInteractive">{`
        window.BACK_OFFICE_CONFIG = {
          PROXY_BASE: 'https://spst-logistics.vercel.app/api/airtable',
          DEBUG: true,
          CARRIERS: ['DHL','FedEx','UPS','TNT','Privato'],
          INCOTERMS: ['EXW','DAP','DDP']
        };
      `}</Script>
      <Script src="https://spst-logistics.vercel.app/assets/esm/main.js?v=1" type="module" strategy="afterInteractive" />
      <Script src="https://spst-logistics.vercel.app/assets/esm/quotes-admin.js?v=1" type="module" strategy="afterInteractive" />
      <Script src="https://spst-logistics.vercel.app/assets/esm/back-office-tabs.js?v=1" type="module" strategy="afterInteractive" />
      <Script src="https://spst-logistics.vercel.app/assets/esm/brandbar-offset.js?v=1" type="module" strategy="afterInteractive" />
    </main>
  );
}
