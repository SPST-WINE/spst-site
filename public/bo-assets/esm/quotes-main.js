// public/bo-assets/esm/quotes-main.js
// Loader della vista "Preventivi". Idempotente: chiamare bootQuotes() più volte è sicuro.

import { AIRTABLE, DEBUG } from '/bo-assets/config.js';
import { toast } from '/bo-assets/utils/dom.js';

// Se hai già un renderer fatto (già presente in repo):
//  - assicurati che exporti "renderQuotesList" (o adegua la riga qui sotto)
import { renderQuotes as renderQuotesList } from '/bo-assets/esm/quotes-render.js';

const API_BASE =
  (AIRTABLE?.proxyBase || '').replace(/\/airtable\/?$/i, '') ||
  'https://spst-logistics.vercel.app/api';

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

  const url = `${API_BASE}/preventivi?${params.toString()}`;
  if (DEBUG) console.log('[quotes] GET', url);
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) {
    throw new Error(j?.error || `HTTP ${r.status}`);
  }
  // atteso: array di record Airtable con { id, fields }
  return Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
}

function applyQuotes(){
  const host = ensurePrevContainer();
  host.innerHTML = ''; // pulisci prima
  renderQuotesList(DATA, { host }); // il renderer scrive dentro host o crea il suo container
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked; // se non lo vuoi sui preventivi, forza false
    const items = await fetchQuotes({ q, onlyOpen });
    DATA = items;
    applyQuotes();
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

export function bootQuotes(){
  if (BOOTED) {
    // refresh dati quando si rientra nella tab
    loadQuotes().catch(()=>{});
    return;
  }
  BOOTED = true;

  // listeners condivisi con la top bar
  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());

  // primo caricamento
  loadQuotes().catch(()=>{});
}
