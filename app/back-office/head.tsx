// app/back-office/head.tsx
export default function Head() {
  return (
    <>
      <title>Back Office • SPST</title>
      <meta name="robots" content="noindex,nofollow" />
      {/* NIENTE preload: evitiamo mismatch di crossorigin/credentials */}
      {/* Se vuoi preloading, usa:
      <link rel="preload" href="/bo-assets/esm/main.js" as="script" crossOrigin="anonymous" />
      */}
    </>
  );
}
