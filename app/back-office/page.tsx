export const dynamic = 'force-static';

export default function BackOffice() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/bo-assets/esm/base.css" />
        <link rel="stylesheet" href="/bo-assets/esm/quotes-admin.css" />
        <meta name="robots" content="noindex" />
        <title>SPST — Back Office</title>
      </head>
      <body>
        {/* mount point usato dallo JS */}
        <main id="view-spedizioni" className="page"></main>

        {/* JS ESM */}
        <script type="module" src="/bo-assets/esm/main.js"></script>
      </body>
    </html>
  );
}
