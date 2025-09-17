// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <title>Back Office • SPST</title>
      <meta name="robots" content="noindex,nofollow" />

      {/* ✅ CSS locale per il Back Office */}
      <link rel="stylesheet" href="/bo-assets/esm/base.css" />
      <link rel="stylesheet" href="/bo-assets/esm/quotes-admin.css" />

      {/* ❗️Disattiva l'iniezione CSS automatica (che punta a /assets/esm su un altro host) */}
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.__BO_CSS_INJECTED__ = true;',
        }}
      />
    </>
  );
}
