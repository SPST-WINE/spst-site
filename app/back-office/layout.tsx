// app/back-office/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Back Office — SPST',
};

export default function BackOfficeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* CSS statici del progetto logistics */}
        <link rel="stylesheet" href="https://spst-logistics.vercel.app/assets/esm/base.css?v=1" />
        <link rel="stylesheet" href="https://spst-logistics.vercel.app/assets/esm/quotes-admin.css?v=1" />
      </head>
      <body className="bg-black text-white">
        {children}

        {/* Config + JS ESM del back office */}
        <script
          id="bo-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.BACK_OFFICE_CONFIG = {
                PROXY_BASE: 'https://spst-logistics.vercel.app/api/airtable',
                DEBUG: true,
                CARRIERS: ['DHL','FedEx','UPS','TNT','Privato'],
                INCOTERMS: ['EXW','DAP','DDP']
              };
            `,
          }}
        />
        <script type="module" src="https://spst-logistics.vercel.app/assets/esm/main.js?v=1"></script>
        <script type="module" src="https://spst-logistics.vercel.app/assets/esm/quotes-admin.js?v=1"></script>
        <script type="module" src="https://spst-logistics.vercel.app/assets/esm/back-office-tabs.js?v=1"></script>
        <script type="module" src="https://spst-logistics.vercel.app/assets/esm/brandbar-offset.js?v=1"></script>
      </body>
    </html>
  );
}
