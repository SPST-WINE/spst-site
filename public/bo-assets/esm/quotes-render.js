// Renderer "dumb": stampa un form per nuovo preventivo e le card dei record
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

function ensureList(host){
  let list = document.getElementById('quotes-list');
  if (!list){
    list = document.createElement('div');
    list.id = 'quotes-list';
    host.appendChild(list);
  }
  return list;
}

function newQuoteForm(onCreate){
  const wrap = document.createElement('div');
  wrap.className = 'card';
  wrap.innerHTML = `
    <div class="card-head">
      <div class="title-line"><strong>Nuovo preventivo</strong></div>
    </div>
    <form class="kv quotes-form">
      <div class="k">Email richiedente</div><div><input name="email" type="email" placeholder="email@cliente.com" required></div>

      <div class="k">Tipo spedizione</div>
      <div>
        <select name="tipo" required>
          <option value="">Seleziona…</option>
          <option value="B2B">B2B</option>
          <option value="B2C">B2C</option>
          <option value="Sample">Sample</option>
        </select>
      </div>

      <div class="k">Corriere</div><div><input name="corriere" type="text" placeholder="DHL/UPS/TNT…"></div>
      <div class="k">Prezzo</div><div><input name="prezzo" type="number" step="0.01" placeholder="0.00"></div>
      <div class="k">Note</div><div><input name="note" type="text" placeholder="Note (facoltative)"></div>

      <div class="k">Mittente – Ragione sociale</div><div><input name="mittenteRagione" type="text"></div>
      <div class="k">Mittente – Paese</div><div><input name="mittentePaese" type="text"></div>
      <div class="k">Mittente – Città</div><div><input name="mittenteCitta" type="text"></div>
      <div class="k">Mittente – CAP</div><div><input name="mittenteCap" type="text"></div>
      <div class="k">Mittente – Indirizzo</div><div><input name="mittenteIndirizzo" type="text"></div>

      <div class="k">Destinatario – Ragione sociale</div><div><input name="destRagione" type="text"></div>
      <div class="k">Destinatario – Paese</div><div><input name="destPaese" type="text"></div>
      <div class="k">Destinatario – Città</div><div><input name="destCitta" type="text"></div>
      <div class="k">Destinatario – CAP</div><div><input name="destCap" type="text"></div>
      <div class="k">Destinatario – Indirizzo</div><div><input name="destIndirizzo" type="text"></div>

      <div></div>
      <div style="display:flex;gap:8px;">
        <button class="btn" type="submit">Crea preventivo</button>
        <button class="btn ghost" type="reset">Reset</button>
      </div>
    </form>
  `;
  const form = wrap.querySelector('form');
  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    onCreate && onCreate(form);
  });
  return wrap;
}

export function renderQuotesList(records = [], { host = document.body, onCreate } = {}){
  const list = ensureList(host);
  list.innerHTML = '';

  // Form "nuovo"
  list.appendChild(newQuoteForm(onCreate));

  // Nessun record?
  if (!records.length) {
    const empty = document.createElement('div');
    empty.className = 'small';
    empty.style.opacity = '0.8';
    empty.style.marginTop = '8px';
    empty.textContent = 'Nessun preventivo trovato';
    list.appendChild(empty);
    return;
  }

  // Card per ciascun preventivo
  records.forEach(rec=>{
    const f = rec.fields || {};
    const id     = pickLoose(f, 'ID','N°') || rec.id;
    const email  = pickLoose(f, 'Creato da','Email','Contatto','Richiedente') || '—';
    const tipo   = pickLoose(f, 'Sottotipo','Tipo Spedizione','Tipo') || '—';
    const paese  = pickLoose(f, 'Destinatario - Paese','Paese') || '—';
    const citta  = pickLoose(f, 'Destinatario - Città','Città') || '—';
    const prezzo = pickLoose(f, 'Prezzo') ?? '';
    const corr   = pickLoose(f, 'Corriere') || '';
    const created= pickLoose(f, 'Creato il','Created time','Created') || '';

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-head" style="display:flex;gap:12px;align-items:center;">
        <div class="title-line" style="display:flex;gap:12px;align-items:center;">
          <span class="id-chip" style="background:#f7911e;color:#111;border-color:rgba(0,0,0,.15)">#${id}</span>
          <span class="dest">${email}</span>
        </div>
        <div style="margin-left:auto;display:flex;gap:10px;align-items:center;">
          <span class="small" style="opacity:.8">${created ? String(created) : ''}</span>
        </div>
      </div>

      <div class="kv">
        <div class="k">Richiedente</div><div>${email}</div>
        <div class="k">Destinazione</div><div>${paese} • ${citta}</div>
        <div class="k">Tipo spedizione</div><div>${tipo}</div>
        <div class="k">Corriere</div><div>${corr || '—'}</div>
        <div class="k">Prezzo</div><div>${prezzo !== '' ? String(prezzo) : '—'}</div>
      </div>
    `;
    list.appendChild(card);
  });
}
