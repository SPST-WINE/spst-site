// Loader logica "Preventivi" — idempotente

import { AIRTABLE, DEBUG } from '/bo-assets/config.js';
import { toast } from '/bo-assets/utils/dom.js';
import { renderQuotesList } from '/bo-assets/esm/quotes-render.js';

const API_BASE =
  (AIRTABLE?.proxyBase || '').replace(/\/airtable\/?$/i, '') ||
  (typeof location !== 'undefined' ? '' : ''); // usa lo stesso host ( /api/preventivi )

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
  if (DEBUG) console.log('[quotes] GET', url);
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) throw new Error(j?.error || `HTTP ${r.status}`);
  return Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
}

function applyQuotes(){
  const host = ensurePrevContainer();
  renderQuotesList(DATA, { host });
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked; // se non serve filtrare, lascia pure true/false
    DATA = await fetchQuotes({ q, onlyOpen });
    applyQuotes();
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

export function bootQuotes(){
  if (BOOTED){ loadQuotes().catch(()=>{}); return; }
  BOOTED = true;

  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());

  loadQuotes().catch(()=>{});
}
