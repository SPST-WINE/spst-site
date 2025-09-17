export default function Head() {
  return (
    <>
      <title>Back Office — Spedizioni</title>
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* CSS */}
      <link rel="preload" href="/bo-assets/ui/base.css" as="style" />
      <link rel="stylesheet" href="/bo-assets/ui/base.css" />

      {/* (opzionale) pre-carico dei moduli principali */}
      <link rel="modulepreload" href="/bo-assets/esm/config.js" />
      <link rel="modulepreload" href="/bo-assets/esm/utils/dom.js" />
      <link rel="modulepreload" href="/bo-assets/esm/utils/misc.js" />
      <link rel="modulepreload" href="/bo-assets/esm/ui/render.js" />
      <link rel="modulepreload" href="/bo-assets/esm/airtable/api.js" />
      <link rel="modulepreload" href="/bo-assets/esm/back-office-tabs.js" />
      <link rel="modulepreload" href="/bo-assets/esm/main.js" />
    </>
  );
}
