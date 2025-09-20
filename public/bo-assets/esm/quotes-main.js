// Loader della vista "Preventivi": fetch, form "nuovo", render card.
import { toast } from '/bo-assets/utils/dom.js';
import { renderQuotesList } from '/bo-assets/esm/quotes-render.js';

const elSearch   = document.getElementById('search');
const elOnlyOpen = document.getElementById('only-open');

let BOOTED = false;
let DATA   = [];

function debounce(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }

function ensurePrevContainer(){
  let el = document.getElementById('view-preventivi');
  if (!el){
    el = document.createElement('div');
    el.id = 'view-preventivi';
    (document.getElementById('view-spedizioni')?.parentElement || document.body).appendChild(el);
  }
  return el;
}


async function fetchQuotes({ q='', onlyOpen=false } = {}){
  const params = new URLSearchParams();
  if (q) params.set('search', q);
  if (onlyOpen) params.set('onlyOpen', '1');

  const url = `/api/preventivi?${params.toString()}`;
  console.debug('[quotes] GET', url);
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));

  if (!r.ok || j?.ok === false) {
    console.error('[quotes] GET error', { status: r.status, body: j });
    throw new Error(j?.error || `HTTP ${r.status}`);
  }
  console.debug('[quotes] records:', Array.isArray(j?.records) ? j.records.length : 0);
  return Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
}


async function createQuote(formData){
  const payload = Object.fromEntries(new FormData(formData).entries());
  // cast numero
  if (payload.prezzo) payload.prezzo = Number(String(payload.prezzo).replace(',', '.'));
  const r = await fetch('/api/preventivi/create', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(payload),
  });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) throw new Error(j?.error || `HTTP ${r.status}`);
  return j?.record;
}

function applyQuotes(){
  const host = ensurePrevContainer();
  host.innerHTML = ''; // pulisco
  renderQuotesList(DATA, { host, onCreate: async(formEl)=>{
    try{
      const rec = await createQuote(formEl);
      toast('Preventivo creato ✓');
      await loadQuotes(); // refresh lista
    }catch(err){
      console.error('[quotes] create error', err);
      toast('Errore creazione preventivo');
    }
  }});
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked;
    const items = await fetchQuotes({ q, onlyOpen });
    DATA = items;
    applyQuotes();
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

export function bootQuotes(){
  if (BOOTED) { loadQuotes().catch(()=>{}); return; }
  BOOTED = true;
  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());
  loadQuotes().catch(()=>{});
}
