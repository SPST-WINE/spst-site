// public/bo-assets/esm/quotes-render.js

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
}

function ensureQuotesHost(){
  let host = document.getElementById('view-preventivi');
  if (!host){
    LOG('view-preventivi NON trovato, lo creo accanto a #list');
    const sibling = document.getElementById('view-spedizioni') || document.getElementById('list') || document.body;
    host = document.createElement('div');
    host.id = 'view-preventivi';
    sibling.parentElement ? sibling.parentElement.appendChild(host) : document.body.appendChild(host);
  }
  // DEBUG: bordo visivo
  if (!host.__debugBorderApplied){
    host.style.minHeight = '20px';
    host.style.boxShadow = 'inset 0 0 0 1px rgba(247,145,29,.35)';
    host.__debugBorderApplied = true;
  }
  return host;
}

function ensureQuotesContainer(){
  const host = ensureQuotesHost();
  let el = document.getElementById('quotes-list');
  if (!el){
    el = document.createElement('div');
    el.id = 'quotes-list';
    host.appendChild(el);
    LOG('creato #quotes-list dentro #view-preventivi');
  }
  return el;
}

export function renderQuotesList(records = []){
  const elList = ensureQuotesContainer();
  LOG('render start — records:', Array.isArray(records) ? records.length : '(non-array)');
  try { elList.innerHTML = ''; } catch {}

  // Banner di debug visibile
  const dbg = document.createElement('div');
  dbg.style.cssText = 'margin:6px 0 10px;color:#f7b25a;font-size:12px';
  dbg.textContent = `DEBUG preventivi: ${Array.isArray(records)?records.length:0} record`;
  elList.appendChild(dbg);

  if (!records.length){
    elList.insertAdjacentHTML('beforeend','<div class="small" style="opacity:.8">Nessun preventivo trovato</div>');
    LOG('nessun record da mostrare');
    LOG('quotes-list child count:', elList.children.length);
    return;
  }

  records.forEach((rec, idx)=>{
    try{
      const f = rec?.fields || {};
      const id      = pickLoose(f, 'ID','Id','N°') || rec.id;
      const email   = pickLoose(f, 'Creato da','Email','Contatto','Richiedente') || '-';
      const tipo    = pickLoose(f, 'Sottotipo','Tipo Spedizione','Tipo') || '-';
      const paese   = pickLoose(f, 'Destinatario - Paese','Paese') || '-';
      const citta   = pickLoose(f, 'Destinatario - Città','Città') || '-';
      const rsMitt  = pickLoose(f, 'Mittente - Ragione Sociale','Mittente');
      const rsDest  = pickLoose(f, 'Destinatario - Ragione Sociale','Destinatario');
      const created = pickLoose(f, 'Creato il','Created time','Created') || '';
      const stato   = pickLoose(f, 'Stato','Stato Preventivo') || 'Bozza';

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-head" style="display:flex;gap:12px;align-items:center;">
          <div class="title-line" style="display:flex;gap:12px;align-items:center;">
            <span class="id-chip" style="background:#f7911e;color:#111;border-color:rgba(0,0,0,.15)">#${id}</span>
            <span class="dest">${rsDest || rsMitt || '—'}</span>
          </div>
          <div style="margin-left:auto;display:flex;gap:10px;align-items:center;">
            <span class="badge ghost">${stato}</span>
            <span class="small" style="opacity:.8">${created ? String(created) : ''}</span>
          </div>
        </div>

        <div class="kv">
          <div class="k">Richiedente</div><div>${email}</div>
          <div class="k">Destinazione</div><div>${paese} • ${citta || '—'}</div>
          <div class="k">Tipo spedizione</div><div>${tipo}</div>
        </div>
      `;
      elList.appendChild(card);
    }catch(err){
      LOG('errore render card idx', idx, err);
    }
  });

  LOG('render end — quotes-list child count:', elList.children.length);
}
