// public/bo-assets/esm/quotes-main.js
// Loader/logica della tab "Preventivi". Idempotente.

import { DEBUG } from '/bo-assets/config.js';
import { toast } from '/bo-assets/utils/dom.js';
import { renderQuotesList } from '/bo-assets/esm/quotes-render.js';

const LOG = (...a) => console.log('[quotes]', ...a);

// Usiamo il proxy locale Next: /api/preventivi
const API_BASE = '/api';

// Riferimenti alla topbar condivisa
const elSearch   = document.getElementById('search');
const elOnlyOpen = document.getElementById('only-open');

let BOOTED = false;
let DATA   = [];

/* ───────── utils ───────── */
function debounce(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }

function ensurePrevContainer(){
  let el = document.getElementById('view-preventivi');
  if (!el){
    el = document.createElement('div');
    el.id = 'view-preventivi';
    const sibling = document.getElementById('view-spedizioni') || document.getElementById('list') || document.body;
    sibling.parentElement ? sibling.parentElement.appendChild(el) : document.body.appendChild(el);
    LOG('creato #view-preventivi dinamicamente');
  }
  el.style.display = 'block';
  return el;
}

/* ───────── data fetch ───────── */
async function fetchQuotes({ q='', onlyOpen=false } = {}){
  const params = new URLSearchParams();
  if (q) params.set('search', q);
  if (onlyOpen) params.set('onlyOpen', '1');

  const url = `${API_BASE}/preventivi?${params.toString()}`;
  LOG('GET', url);
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) {
    throw (j?.error || new Error(`HTTP ${r.status}`));
  }
  const recs = Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
  LOG('records:', recs.length);
  return recs;
}

/* ───────── render flow ───────── */
function applyQuotes(){
  const host = ensurePrevContainer();
  renderQuotesList(DATA, { host });
  // piccoli log di stato visibilità
  LOG('post-render — #view-preventivi display:', getComputedStyle(host).display);
  const list = document.getElementById('quotes-list');
  LOG('post-render — #quotes-list exists:', !!list, 'children:', list ? list.children.length : 0);
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked; // se vuoi ignorarlo, metti sempre false
    const items = await fetchQuotes({ q, onlyOpen });
    DATA = items;
    applyQuotes();
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

/* ───────── public boot ───────── */
export function bootQuotes(){
  LOG('bootQuotes avviato');

  if (BOOTED) {
    // refresh quando si rientra nella tab
    loadQuotes().catch(()=>{});
    return;
  }
  BOOTED = true;

  // listeners condivisi con la top bar (idempotenti: li aggiungiamo una volta sola)
  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());

  // primo caricamento
  loadQuotes().catch(()=>{});
}
