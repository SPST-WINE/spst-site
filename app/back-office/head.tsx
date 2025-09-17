// app/back-office/head.tsx
export default function Head(){
  return (
    <>
      <title>Back Office — Spedizioni</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* CSS back-office */}
      <link rel="preload" href="/bo-assets/esm/base.css" as="style" />
      <link rel="stylesheet" href="/bo-assets/esm/base.css" />
      <link rel="preload" href="/bo-assets/esm/quotes-admin.css" as="style" />
      <link rel="stylesheet" href="/bo-assets/esm/quotes-admin.css" />

      {/* JS back-office (niente preload per evitare il warning “credentials mode”) */}
      <script type="module" src="/bo-assets/esm/main.js" />
    </>
  );
}
