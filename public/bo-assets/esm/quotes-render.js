// public/bo-assets/esm/quotes-render.js

// piccolo helper per recuperare un campo anche se cambia etichetta su Airtable
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

function ensureListContainer() {
  let el = document.getElementById('list');
  if (el) return el;
  const host = document.getElementById('view-preventivi') || document.getElementById('view-spedizioni') || document.body;
  el = document.createElement('div'); el.id = 'list'; host.appendChild(el);
  return el;
}

export function renderQuotes(records = []) {
  const elList = ensureListContainer();
  try { elList.innerHTML = ''; } catch { /* noop */ }

  if (!records.length) {
    elList.innerHTML = '<div class="small" style="opacity:.8">Nessun preventivo trovato</div>';
    return;
  }

  records.forEach(rec => {
    const f = rec.fields || {};

    const id     = pickLoose(f, 'ID', 'Id', 'N°') || rec.id;
    const email  = pickLoose(f, 'Creato da', 'Email', 'Contatto', 'Richiedente') || '-';

    const tipo   = pickLoose(f, 'Sottotipo', 'Tipo Spedizione', 'Tipo') || '-';
    const paese  = pickLoose(f, 'Destinatario - Paese', 'Paese') || '-';
    const citta  = pickLoose(f, 'Destinatario - Città', 'Città') || '-';
    const rsMitt = pickLoose(f, 'Mittente - Ragione Sociale', 'Mittente');
    const rsDest = pickLoose(f, 'Destinatario - Ragione Sociale', 'Destinatario');

    const created = pickLoose(f, 'Creato il', 'Created time', 'Created') || '';

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-head" style="display:flex;gap:12px;align-items:center;">
        <div class="title-line" style="display:flex;gap:12px;align-items:center;">
          <span class="id-chip" style="background:#f7911e;color:#111;border-color:rgba(0,0,0,.15)">#${id}</span>
          <span class="dest">${rsDest || rsMitt || '—'}</span>
        </div>
        <div style="margin-left:auto;display:flex;gap:10px;align-items:center;">
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
  });
}
