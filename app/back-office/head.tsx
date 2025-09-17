// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <title>Back Office — Spedizioni</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* CSS: ora sotto /bo-assets/esm */}
      <link rel="stylesheet" href="/bo-assets/esm/base.css" />

      {/* Se/quando servi la pagina “quotes admin”, aggiungi lì anche: */}
      {/* <link rel="stylesheet" href="/bo-assets/esm/quotes-admin.css" /> */}

      {/* Togliamo il modulepreload per evitare il warning “preload not used…” */}
      {/* <link rel="modulepreload" href="/bo-assets/esm/main.js" /> */}
    </>
  );
}
