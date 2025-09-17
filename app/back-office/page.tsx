// app/back-office/page.tsx
export default function BackOfficePage() {
  return (
    <>
      {/* UI minima + anchor/containers che il BO si aspetta */}
      <header className="bo-header">
        <div className="wrap">
          <nav className="tabbar" aria-label="Sezioni Back Office">
            <a href="#tab-spedizioni" data-tab="spedizioni" aria-current="page">Spedizioni</a>
            <a href="#tab-preventivi" data-tab="preventivi">Preventivi</a>
          </nav>
          <div className="bo-tools">
            <label className="chip">
              <input id="only-open" type="checkbox" />
              <span>Mostra solo aperte</span>
            </label>
            <input id="search" className="nice-input" type="text" placeholder="Cerca per ID cliente, Paese, città…" />
          </div>
        </div>
      </header>

      <main className="wrap">
        <span id="tab-spedizioni" className="anchor" aria-hidden="true"></span>
        <section id="view-spedizioni" className="view" aria-labelledby="h-sped">
          <h2 id="h-sped" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>Elenco spedizioni</h2>
          <div id="list"></div>
        </section>

        <span id="tab-preventivi" className="anchor" aria-hidden="true"></span>
        <section id="view-preventivi" className="view" aria-labelledby="h-prev">
          <h2 id="h-prev" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>Preventivi</h2>
          <div id="quotes-admin"></div>
        </section>
      </main>

      {/* Config PRIMA del loader ESM, così il bundle la trova subito */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.BACK_OFFICE_CONFIG = { PROXY_BASE: '/api/airtable', DEBUG: true };`,
        }}
      />
      {/* Carica il bundle ESM senza crossorigin per evitare mismatch con eventuale preload */}
      <script type="module" src="/bo-assets/esm/main.js"></script>
    </>
  );
}
