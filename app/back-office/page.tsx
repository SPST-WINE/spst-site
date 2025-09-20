// app/back-office/page.tsx
export default function BackOfficePage() {
  return (
    <>
      <header className="bo-header">
        <div className="wrap">
          {/* brand/top utilities */}
          <div className="bo-brandbar">
            <div className="bo-brand">
              <img
                className="bo-logo-img"
                src="/bo-assets/img/spst-logo.png"
                alt="SPST"
              />
              <span className="bo-title">Back Office</span>
            </div>
            <div className="bo-utils">
              <a
                className="util-link"
                href="https://spst-logistics-spsts-projects.vercel.app/api/tools/docs"
                target="_blank"
                rel="noopener"
              >
                Utility Documenti
              </a>
            </div>
          </div>

          {/* tabs */}
          <nav className="tabbar" aria-label="Sezioni Back Office">
            <a href="#tab-spedizioni" data-tab="spedizioni" aria-current="page">Spedizioni</a>
            <a href="#tab-preventivi" data-tab="preventivi">Preventivi</a>
          </nav>

          {/* filters row */}
          <div className="bo-filters">
            <input
              id="search"
              className="nice-input"
              type="text"
              placeholder="Cerca per ID cliente, Paese, città…"
            />
            <label className="switch" title="Mostra solo spedizioni non evase">
              <input id="only-open" type="checkbox" />
              <span className="slider" aria-hidden="true"></span>
              <span className="lbl">Solo non evase</span>
            </label>
          </div>
        </div>
      </header>

      <main className="wrap">
        {/* ───── Spedizioni ───── */}
        <span id="tab-spedizioni" className="anchor" aria-hidden="true"></span>
        <section id="view-spedizioni" className="view" aria-labelledby="h-sped">
          <h2 id="h-sped" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>Elenco spedizioni</h2>
          <div id="list"></div>
        </section>

        {/* ───── Preventivi ───── */}
        <span id="tab-preventivi" className="anchor" aria-hidden="true"></span>
        <section id="view-preventivi" className="view" aria-labelledby="h-prev">
          <h2 id="h-prev" className="small" style={{ margin: '0 0 8px 0', opacity: 0.85 }}>Preventivi</h2>

          <div id="quotes-admin" className="qa">
            {/* --- CARD: dati di base --- */}
            <div className="card">
              <div className="kv" style={{ gridTemplateColumns: '220px 1fr' }}>
                <div className="k">Email cliente</div>
                <div><input id="customer-email" className="nice-input" type="email" placeholder="cliente@azienda.com" /></div>

                <div className="k">Valuta</div>
                <div><input id="quote-currency" className="nice-input" type="text" defaultValue="EUR" style={{ maxWidth:'120px' }} /></div>

                <div className="k">Validità</div>
                <div><input id="quote-validity" className="nice-input" type="date" /></div>

                <div className="k">Note (facoltative)</div>
                <div><textarea id="quote-notes" className="nice-input" rows={2} placeholder="Note generali…"></textarea></div>

                <div className="k">Note generiche sulla spedizione</div>
                <div><textarea id="shipment-notes" className="nice-input" rows={2} placeholder="Note spedizione…"></textarea></div>

                <div className="k">Visibilità link</div>
                <div>
                  <select id="link-visibility" className="nice-input" style={{ maxWidth:'220px' }}>
                    <option value="Immediata">Immediata</option>
                    <option value="Solo_Bozza">Solo bozza (non pubblico)</option>
                  </select>
                </div>

                <div className="k">Scadenza link (giorni)</div>
                <div><input id="link-expiry" className="nice-input" type="number" min={0} placeholder="es. 7" style={{ maxWidth:'120px' }} /></div>

                <div className="k">Versione termini</div>
                <div><input id="terms-version" className="nice-input" type="text" defaultValue="v1.0" style={{ maxWidth:'120px' }} /></div>
              </div>
            </div>

            {/* --- CARD: Mittente --- */}
            <div className="card">
              <div className="k" style={{ marginBottom: 6 }}>Mittente</div>
              <div className="kv" style={{ gridTemplateColumns: '220px 1fr' }}>
                <div className="k">Ragione sociale</div>
                <div><input data-field="sender_name" className="nice-input" type="text" /></div>

                <div className="k">Indirizzo</div>
                <div><input data-field="sender_address" className="nice-input" type="text" /></div>

                <div className="k">CAP / Città / Paese</div>
                <div style={{ display:'grid', gridTemplateColumns:'120px 1fr 180px', gap:8 }}>
                  <input data-field="sender_zip" className="nice-input" type="text" placeholder="CAP" />
                  <input data-field="sender_city" className="nice-input" type="text" placeholder="Città" />
                  <input data-field="sender_country" className="nice-input" type="text" placeholder="Paese" />
                </div>

                <div className="k">Telefono / P.IVA-EORI</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                  <input data-field="sender_phone" className="nice-input" type="text" placeholder="Telefono" />
                  <input data-field="sender_tax" className="nice-input" type="text" placeholder="P.IVA / EORI" />
                </div>
              </div>
            </div>

            {/* --- CARD: Destinatario --- */}
            <div className="card">
              <div className="k" style={{ marginBottom: 6 }}>Destinatario</div>
              <div className="kv" style={{ gridTemplateColumns: '220px 1fr' }}>
                <div className="k">Ragione sociale</div>
                <div><input data-field="rcpt_name" className="nice-input" type="text" /></div>

                <div className="k">Indirizzo</div>
                <div><input data-field="rcpt_address" className="nice-input" type="text" /></div>

                <div className="k">CAP / Città / Paese</div>
                <div style={{ display:'grid', gridTemplateColumns:'120px 1fr 180px', gap:8 }}>
                  <input data-field="rcpt_zip" className="nice-input" type="text" placeholder="CAP" />
                  <input data-field="rcpt_city" className="nice-input" type="text" placeholder="Città" />
                  <input data-field="rcpt_country" className="nice-input" type="text" placeholder="Paese" />
                </div>

                <div className="k">Telefono / Tax ID-EORI</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                  <input data-field="rcpt_phone" className="nice-input" type="text" placeholder="Telefono" />
                  <input data-field="rcpt_tax" className="nice-input" type="text" placeholder="Tax ID / EORI" />
                </div>
              </div>
            </div>

            {/* --- CARD: Opzioni --- */}
            <div className="card">
              <div className="k" style={{ marginBottom: 6 }}>Opzioni di spedizione</div>

              {/* Opzione 1 */}
              <div className="qa-option" data-option="1" style={{ padding:'10px', border:'1px solid var(--bo-border)', borderRadius:12, marginBottom:10 }}>
                <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:8 }}>
                  <label className="qa-recommend"><input type="checkbox" /> Consigliata</label>
                  <label style={{ marginLeft: 'auto' }}><input type="radio" name="bestOption" value="1" /> Best</label>
                </div>
                <div className="grid" style={{ gridTemplateColumns:'1fr 1fr 1fr 120px 1fr 120px 1fr', gap:10 }}>
                  <select className="nice-input qa-carrier"><option value="">Corriere…</option></select>
                  <input  className="nice-input qa-service"  type="text" placeholder="Servizio" />
                  <input  className="nice-input qa-transit"  type="text" placeholder="Tempo resa" />
                  <select className="nice-input qa-incoterm">
                    <option value="">Incoterm…</option>
                    <option>EXW</option><option>DAP</option><option>DDP</option>
                  </select>
                  <select className="nice-input qa-payer">
                    <option value="">Oneri a carico…</option>
                    <option value="Mittente">Mittente</option>
                    <option value="Destinatario">Destinatario</option>
                  </select>
                  <input  className="nice-input qa-price"    type="number" step="0.01" min={0} placeholder="Prezzo" />
                  <select className="nice-input qa-currency"><option>EUR</option><option>USD</option></select>
                </div>
                <div style={{ marginTop:8 }}>
                  <input className="nice-input qa-notes" type="text" placeholder="Note operative" />
                </div>
              </div>

              {/* Opzione 2 */}
              <div className="qa-option" data-option="2" style={{ padding:'10px', border:'1px solid var(--bo-border)', borderRadius:12 }}>
                <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:8 }}>
                  <label className="qa-recommend"><input type="checkbox" /> Consigliata</label>
                  <label style={{ marginLeft: 'auto' }}><input type="radio" name="bestOption" value="2" /> Best</label>
                </div>
                <div className="grid" style={{ gridTemplateColumns:'1fr 1fr 1fr 120px 1fr 120px 1fr', gap:10 }}>
                  <select className="nice-input qa-carrier"><option value="">Corriere…</option></select>
                  <input  className="nice-input qa-service"  type="text" placeholder="Servizio" />
                  <input  className="nice-input qa-transit"  type="text" placeholder="Tempo resa" />
                  <select className="nice-input qa-incoterm">
                    <option value="">Incoterm…</option>
                    <option>EXW</option><option>DAP</option><option>DDP</option>
                  </select>
                  <select className="nice-input qa-payer">
                    <option value="">Oneri a carico…</option>
                    <option value="Mittente">Mittente</option>
                    <option value="Destinatario">Destinatario</option>
                  </select>
                  <input  className="nice-input qa-price"    type="number" step="0.01" min={0} placeholder="Prezzo" />
                  <select className="nice-input qa-currency"><option>EUR</option><option>USD</option></select>
                </div>
                <div style={{ marginTop:8 }}>
                  <input className="nice-input qa-notes" type="text" placeholder="Note operative" />
                </div>
              </div>
            </div>

            {/* --- CARD: Colli --- */}
            <div className="card">
              <div className="k" style={{ marginBottom: 6 }}>Colli</div>
              <div id="qa-pkg-rows"></div>
              <div className="small" id="qa-pkg-totals" style={{ marginTop: 8, opacity: .85 }}>—</div>
              <div style={{ marginTop: 8 }}><button id="qa-pkg-add" className="mini-btn">+ Aggiungi collo</button></div>
            </div>

            {/* --- CARD: Riepilogo + Azioni --- */}
            <div className="card">
              <div className="k" style={{ marginBottom: 6 }}>Riepilogo</div>
              <div className="grid" style={{ gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:10 }}>
                <div><div className="k">Cliente</div><div className="v" id="sum-customer">—</div></div>
                <div><div className="k">Valuta</div><div className="v" id="sum-currency">EUR</div></div>
                <div><div className="k">Validità</div><div className="v" id="sum-validity">—</div></div>
                <div><div className="k">Colli</div><div className="v" id="sum-packages">—</div></div>
                <div><div className="k">Opzione consigliata</div><div className="v" id="sum-best">—</div></div>
              </div>
              <div className="actions" style={{ display:'flex', gap:10, justifyContent:'flex-end', marginTop:14 }}>
                <button id="btn-preview" className="btn">Anteprima</button>
                <button id="btn-create"  className="btn">Crea preventivo</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Config per le API locali */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.BACK_OFFICE_CONFIG = {
              PROXY_BASE: '/api',
              DEBUG: true,
              CARRIERS: ['DHL','UPS','FedEx','TNT','Privato'],
              INCOTERMS: ['EXW','DAP','DDP']
            };
          `
        }}
      />
      {/* Loader ESM del Back Office */}
      <script type="module" src="/bo-assets/esm/main.js"></script>
      {/* Enhancer UI per doc: rimuove "template", trasforma "apri" in bottone */}
      <script type="module" src="/bo-assets/bo-enhance.js"></script>
    </>
  );
}
