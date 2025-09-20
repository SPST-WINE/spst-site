// public/bo-assets/esm/quotes-render.js
(function(){
  const LOG = (...a)=>console.log('[quotes:render]', ...a);

  function normKey(s){return String(s||'').replace(/[–—]/g,'-').replace(/\s+/g,' ').trim().toLowerCase();}
  function pickLoose(fields,...names){
    if(!fields) return;
    const m = new Map(Object.keys(fields).map(k=>[normKey(k),k]));
    for(const n of names){
      const real = m.get(normKey(n));
      if(real!=null){
        const v = fields[real];
        if(v!=='' && v!=null) return v;
      }
    }
    for(const n of names){
      if(n in fields && fields[n]!=='' && fields[n]!=null) return fields[n];
    }
    return;
  }

  function ensureHost(){
    let host = document.getElementById('view-preventivi');
    if(!host){
      host = document.createElement('div');
      host.id = 'view-preventivi';
      (document.getElementById('view-spedizioni')?.parentElement || document.body)
        .appendChild(host);
      console.warn('[quotes:render] creato #view-preventivi al volo');
    }
    host.style.display = 'block';
    host.style.padding = host.style.padding || '0';
    return host;
  }

  function ensureList(host){
    let list = document.getElementById('quotes-list');
    if(!list){
      list = document.createElement('div');
      list.id = 'quotes-list';
      list.style.marginTop = '12px';
      list.style.display = 'block';
      host.appendChild(list);
      LOG('creato #quotes-list dentro #view-preventivi');
    }
    return list;
  }

  function fmtDate(v){
    if(!v) return '';
    try{
      const d = new Date(v);
      if(!isNaN(+d)) return d.toLocaleDateString('it-IT');
    }catch{}
    return String(v);
  }

  // API pubblica usata da quotes-main.js
  window.renderQuotesList = function(records = []){
    const host = ensureHost();
    const list = ensureList(host);

    try { list.innerHTML = ''; } catch {}
    LOG('render start — records:', records.length);

    if(!records.length){
      list.innerHTML = '<div class="small" style="opacity:.8">Nessun preventivo trovato</div>';
      return;
    }

    records.forEach(rec=>{
      const f = rec.fields || {};
      const id     = pickLoose(f, 'ID', 'Id', 'N°') || rec.id;
      const email  = pickLoose(f, 'Creato da', 'Email', 'Contatto', 'Richiedente') || '-';
      const tipo   = pickLoose(f, 'Sottotipo', 'Tipo Spedizione', 'Tipo') || '-';
      const paese  = pickLoose(f, 'Destinatario - Paese', 'Paese') || '-';
      const citta  = pickLoose(f, 'Destinatario - Città', 'Città') || '-';
      const rsMitt = pickLoose(f, 'Mittente - Ragione Sociale', 'Mittente');
      const rsDest = pickLoose(f, 'Destinatario - Ragione Sociale', 'Destinatario');
      const created= pickLoose(f, 'Creato il', 'Created time', 'Created') || '';

      const card = document.createElement('div');
      card.className = 'card bo-quote';
      card.innerHTML = `
        <div class="card-head" style="display:flex;gap:12px;align-items:center;">
          <div class="title-line" style="display:flex;gap:12px;align-items:center;">
            <span class="id-chip" style="background:#f7911e;color:#111;border-color:rgba(0,0,0,.15)">#${id}</span>
            <span class="dest">${(rsDest || rsMitt || '—')}</span>
          </div>
          <div style="margin-left:auto;display:flex;gap:10px;align-items:center;">
            <span class="small" style="opacity:.8">${fmtDate(created)}</span>
          </div>
        </div>

        <div class="kv">
          <div class="k">Richiedente</div><div>${email}</div>
          <div class="k">Destinazione</div><div>${paese} • ${citta || '—'}</div>
          <div class="k">Tipo spedizione</div><div>${tipo}</div>
        </div>
      `;
      list.appendChild(card);
    });

    LOG('render end — quotes-list child count:', list.children.length);
  };
})();
