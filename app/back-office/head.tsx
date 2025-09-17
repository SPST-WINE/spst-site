// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <title>Back Office — SPST</title>
      {/* CSS */}
      <link rel="stylesheet" href="/bo-assets/esm/base.css" />
      <link rel="stylesheet" href="/bo-assets/esm/quotes-admin.css" />

      {/* Preload modulo principale (opzionale). Se tieni il preload, aggiungi crossorigin */}
      <link
        rel="modulepreload"
        href="/bo-assets/esm/main.js"
        as="script"
        crossOrigin="anonymous"
      />
    </>
  );
}
