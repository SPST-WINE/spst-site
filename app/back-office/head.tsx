// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      {/* Colori chiari per evitare il "nero" globale */}
      <style>{`html,body{background:#fff;color:#111;}`}</style>

      {/* Config come in Webflow */}
      <script
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

      {/* CSS ora servite dal sito pubblico (evitiamo i 404) */}
      <link rel="stylesheet" href="/bo-assets/base.css?v=1" />
      <link rel="stylesheet" href="/bo-assets/quotes-admin.css?v=1" />

      {/* JS ESM dal progetto backoffice */}
      <script type="module" src="https://spst-logistics.vercel.app/assets/esm/main.js?v=1" defer></script>
      <script type="module" src="https://spst-logistics.vercel.app/assets/esm/quotes-admin.js?v=1" defer></script>
      <script type="module" src="https://spst-logistics.vercel.app/assets/esm/back-office-tabs.js?v=1" defer></script>
      <script type="module" src="https://spst-logistics.vercel.app/assets/esm/brandbar-offset.js?v=1" defer></script>
    </>
  );
}
