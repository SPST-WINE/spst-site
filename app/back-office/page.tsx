// app/back-office/page.tsx
export default function BackOfficePage() {
  return (
    <>
      <header className="bo-header">
        <div className="wrap">
          <div className="bo-brandbar">
            <div className="bo-brand">
              <img className="bo-logo-img" src="/bo-assets/img/spst-logo.png" alt="SPST" />
              <span className="bo-title">Back Office</span>
            </div>
            <div className="bo-utils">
              <a className="util-link" href="https://spst-logistics-spsts-projects.vercel.app/api/tools/docs" target="_blank" rel="noopener">
                Utility Documenti
              </a>
            </div>
          </div>

          {/* tab singolo */}
          <nav className="tabbar" aria-label="Sezioni Back Office">
            <a href="#tab-spedizioni" data-tab="spedizioni" aria-current="page">Spedizioni</a>
          </nav>

          {/* filtri delle spedizioni */}
          <div className="bo-filters">
            <input id="search" className="nice-input" type="text" placeholder="Cerca per ID cliente, Paese, città…" />
            <label className="switch" title="Mostra solo spedizioni non evase">
              <input id="only-open" type="checkbox" />
              <span className="slider" aria-hidden="true"></span>
              <span className="lbl">Solo non evase</span>
            </label>
          </div>
        </div>
      </header>

      <main className="wrap">
        <span id="tab-spedizioni" className="anchor" aria-hidden="true"></span>
        <section id="view-spedizioni" className="view" aria-labelledby="h-sped">
          <h2 id="h-sped" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>Elenco spedizioni</h2>
          <div id="list"></div>
        </section>
      </main>

      {/* Config e loader JS */}
      <script dangerouslySetInnerHTML={{ __html: `window.BACK_OFFICE_CONFIG = { PROXY_BASE: '/api', DEBUG: true };` }} />
      <script type="module" src="/bo-assets/esm/main.js"></script>
      <script type="module" src="/bo-assets/bo-enhance.js"></script>
    </>
  );
}
