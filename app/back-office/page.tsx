import Script from "next/script";

export default function BackOfficePage() {
  return (
    <>
      <main id="bo-root" className="bo-admin">
        <section id="view-spedizioni" className="container">
          <header className="bo-header">
            <h1 className="page-title">Back Office — Spedizioni</h1>
            <div className="filters" style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input id="search" type="search" placeholder="Cerca spedizioni…" />
              <label style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                <input id="only-open" type="checkbox" /> Solo da evadere
              </label>
            </div>
          </header>

          {/* Qui il BO inietta la lista */}
          <div id="list" />
        </section>
      </main>

      {/* JS legacy serviti da /public: NON con import, ma con <Script src> */}
      <Script src="/bo-assets/esm/header-compact.js" strategy="afterInteractive" />
      <Script src="/bo-assets/esm/brandbar-offset.js" strategy="afterInteractive" />
      <Script src="/bo-assets/esm/back-office-tabs.js" strategy="afterInteractive" />
      <Script type="module" src="/bo-assets/esm/main.js" strategy="afterInteractive" />
    </>
  );
}
