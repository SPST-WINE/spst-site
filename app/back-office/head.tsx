// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <title>Back Office • SPST</title>
      <meta name="robots" content="noindex,nofollow" />

      {/* CSS locali */}
      <link rel="stylesheet" href="/bo-assets/esm/base.css" />
      <link rel="stylesheet" href="/bo-assets/esm/quotes-admin.css" />

      {/* Evita che il bundle provi a iniettare CSS da /assets/esm */}
      <script dangerouslySetInnerHTML={{ __html: `window.__BO_CSS_INJECTED__ = true;` }} />
    </>
  );
}
