// app/back-office/page.tsx
import Script from 'next/script';

export default function BackOfficePage() {
  return (
    <>
      {/* Brand bar */}
      <div className="brandbar">
        <div className="wrap">
          <div className="brand-left">
            <div className="title">Back Office</div>
          </div>
        </div>
      </div>

      {/* Header + tabbar + tools */}
      <header className="bo-header">
        <div className="wrap">
          <nav className="tabbar" aria-label="Sezioni Back Office">
            <a href="#tab-spedizioni" data-tab="spedizioni" aria-current="page">Spedizioni</a>
            <a href="#tab-preventivi" data-tab="preventivi">Preventivi</a>
          </nav>

          <div className="bo-tools">
            <label className="chip" title="Mostra solo spedizioni non evase">
              <input id="only-open" type="checkbox" />
              <span>Mostra solo aperte</span>
            </label>
            <input id="search" className="nice-input" type="text" placeholder="Cerca per ID cliente, Paese, città…" />
          </div>
        </div>
      </header>

      {/* Views */}
      <main className="wrap">
        <span id="tab-spedizioni" className="anchor" aria-hidden="true"></span>
        <section id="view-spedizioni" className="view" aria-labelledby="h-sped">
          <h2 id="h-sped" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>
            Elenco spedizioni
          </h2>
          {/* renderList() creerà/riempirà #list se non esiste */}
          <div id="list"></div>
        </section>

        <span id="tab-preventivi" className="anchor" aria-hidden="true"></span>
        <section id="view-preventivi" className="view" aria-labelledby="h-prev">
          <h2 id="h-prev" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>
            Preventivi
          </h2>
          <div id="quotes-admin"></div>
        </section>
      </main>

      {/* Config: forza le fetch su /api/airtable */}
      <Script id="bo-config" strategy="afterInteractive">{`
        window.BACK_OFFICE_CONFIG = {
          PROXY_BASE: '/api/airtable',
          DEBUG: true
        };
      `}</Script>

      {/* Bootstrap del back-office (ESM) */}
      <Script src="/bo-assets/esm/main.js" type="module" strategy="afterInteractive" crossOrigin="anonymous" />
    </>
  );
}
