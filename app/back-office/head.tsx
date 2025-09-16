// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* CSS locali (niente link a spst-logistics per i CSS) */}
      <link rel="stylesheet" href="/back-office/base.css?v=1" />
      <link rel="stylesheet" href="/back-office/quotes-admin.css?v=1" />
      <style>{`
        /* opzionale: nasconde qualsiasi dump di debug residuo */
        body > pre, .debug-dump { display:none !important; }
      `}</style>
    </>
  );
}
