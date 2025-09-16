// app/back-office/page.tsx
export const dynamic = 'force-static';

export default function BackOfficePage() {
  return (
    <main className="wrap" style={{ paddingTop: 0 }}>
      {/* ancore legacy */}
      <a id="tab-spedizioni" className="anchor" aria-hidden="true"></a>
      <a id="tab-preventivi" className="anchor" aria-hidden="true"></a>

      {/* BRAND BAR */}
      <div className="brandbar">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="brand-left" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              className="logo"
              src="https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png"
              alt="SPST logo"
            />
            <div className="divider" aria-hidden="true"></div>
            <div className="title">Back Office</div>
          </div>
          <a
            href="https://spst-logistics-spsts-projects.vercel.app/api/tools/docs"
            target="_blank"
            rel="noopener"
            className="link-orange"
            style={{ marginLeft: 'auto' }}
          >
            Utility Documenti
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header>
        <div className="wrap">
          <div className="toolbar">
            <div className="toolbar-left">
              <input id="search" type="text" placeholder="Cerca per ID spedizione o cliente…" />
            </div>
            <div className="toolbar-right">
              <label className="chip small">
                <input id="only-open" type="checkbox" /> Solo non evase
              </label>
            </div>
          </div>

          <div className="hairline"></div>
          <div className="tabbar" style={{ marginTop: 10 }}>
            <a href="#tab-spedizioni" data-tab="spedizioni" className="is-active">
              Spedizioni
            </a>
            <a href="#tab-preventivi" data-tab="preventivi">
              Preventivi
            </a>
          </div>
        </div>
      </header>

      {/* Banner API */}
      <div id="api-banner" className="banner">
        Impossibile raggiungere il proxy API. Sto mostrando la lista vuota.
        <span className="small">(controlla ORIGIN_ALLOWLIST su Vercel e la connettività)</span>
      </div>

      {/* Viste */}
      <section id="view-preventivi" className="view" style={{ display: 'none' }}>
        <div id="quotes-admin">
          {/* … lascio la UI dei preventivi al JS (quotes-admin.js) */}
        </div>
      </section>

      <section id="view-spedizioni" className="view">
        <div id="list" className="grid"></div>
      </section>

      <div id="toast" className="toast"></div>

      {/* CONFIG */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.BACK_OFFICE_CONFIG = {
              PROXY_BASE: 'https://spst-logistics.vercel.app/api/airtable',
              DEBUG: false,
              CARRIERS: ['DHL','FedEx','UPS','TNT','Privato'],
              INCOTERMS: ['EXW','DAP','DDP']
            };
          `,
        }}
      />

      {/* JS (restano su spst-logistics) */}
      <script type="module" crossOrigin="anonymous" src="https://spst-logistics.vercel.app/assets/esm/main.js?v=1"></script>
      <script type="module" crossOrigin="anonymous" src="https://spst-logistics.vercel.app/assets/esm/quotes-admin.js?v=1"></script>
      <script type="module" crossOrigin="anonymous" src="https://spst-logistics.vercel.app/assets/esm/back-office-tabs.js?v=1"></script>
      <script type="module" crossOrigin="anonymous" src="https://spst-logistics.vercel.app/assets/esm/brandbar-offset.js?v=1"></script>

      {/* Patch “Colli”: normalizzazione riga + totali (come da tuo embed) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            const pkg = document.getElementById('qa-packages');
            const rows = document.getElementById('qa-pkg-rows');
            const totalsEl = document.getElementById('qa-pkg-totals');
            const sumEl = document.getElementById('sum-packages');
            if(!rows) return;

            function normalizeRow(row){
              if (!row || row.dataset.norm === '1') return;
              const head = document.querySelector('#qa-packages .pkg-head');
              if (head) {
                row.style.display = 'grid';
                row.style.gridTemplateColumns = getComputedStyle(head).gridTemplateColumns;
              }
              const allInputs = Array.from(row.querySelectorAll('input'));
              const inputs = allInputs.filter(i => !['button','submit','checkbox','radio'].includes(i.type));
              const cells = [];
              row.innerHTML = '';
              for (let i=0;i<6;i++){ const c = document.createElement('div'); cells.push(c); row.appendChild(c); }
              inputs.slice(0,5).forEach((inp, idx) => {
                if (idx>0 && ['L','W','H'].includes((inp.value||'').trim())) inp.value = '';
                inp.placeholder = '';
                cells[idx].appendChild(inp);
              });
              const del = document.createElement('button');
              del.type = 'button'; del.className = 'pkg-remove'; del.innerHTML = '&times;&nbsp;Elimina';
              del.addEventListener('click', ()=>{ row.remove(); recalc(); });
              cells[5].appendChild(del);
              row.dataset.norm = '1';
            }

            function recalc(){
              if(!rows || !totalsEl) return;
              let totQty = 0, totKg = 0;
              rows.querySelectorAll('.pkg-row').forEach(row=>{
                const ins = row.querySelectorAll('input');
                const qty = Number(ins[0]?.value) || 0;
                const kg  = Number(ins[4]?.value) || 0;
                totQty += qty;
                totKg  += kg * (qty || 1);
              });
              totalsEl.textContent = \`Totale colli: \${totQty} · Peso reale totale: \${totKg.toFixed(2)} kg\`;
              if (sumEl) sumEl.textContent = totQty ? \`\${totQty} collo\${totQty===1?'':'i'} (\${totKg.toFixed(2)} kg)\` : '—';
            }

            pkg?.addEventListener('input', (e)=>{ if (e.target.closest('.pkg-row')) recalc(); });

            const mo = new MutationObserver((muts)=>{
              for (const m of muts){
                m.addedNodes.forEach(n=>{
                  if (n.nodeType===1 && n.classList.contains('pkg-row')) {
                    setTimeout(()=>{ normalizeRow(n); recalc(); }, 0);
                  }
                });
              }
            });
            mo.observe(rows, {childList:true, subtree:false});

            document.getElementById('qa-pkg-add')?.addEventListener('click', ()=>{
              setTimeout(()=>{ const last = rows.querySelector('.pkg-row:last-child'); if (last) { normalizeRow(last); recalc(); } }, 0);
            });

            document.addEventListener('DOMContentLoaded', ()=>{
              rows.querySelectorAll('.pkg-row').forEach(normalizeRow);
              recalc();
            });
          })();
        `,
        }}
      />
    </main>
  );
}
