// public/bo-assets/esm/quotes-main.js
import { AIRTABLE, DEBUG } from '/bo-assets/config.js';
import { toast } from '/bo-assets/utils/dom.js';
import { renderQuotesList } from '/bo-assets/esm/quotes-render.js';

const LOG = (...a)=>console.log('[quotes]', ...a);

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
    LOG('creo #view-preventivi perché non esiste');
    el = document.createElement('div');
    el.id = 'view-preventivi';
    (document.getElementById('view-spedizioni')?.parentElement || document.body).appendChild(el);
  }
  // bordo visivo per capire dov’è
  if (!el.__debugBorderApplied){
    el.style.minHeight = '20px';
    el.style.boxShadow = 'inset 0 0 0 1px rgba(0,255,255,.25)';
    el.__debugBorderApplied = true;
  }
  return el;
}

async function fetchQuotes({ q='', onlyOpen=false } = {}){
  const params = new URLSearchParams();
  if (q) params.set('search', q);
  if (onlyOpen) params.set('onlyOpen', '1');
  const url = `${API_BASE}/preventivi?${params.toString()}`;
  LOG('GET', url || '/api/preventivi?');
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) {
    LOG('fetch error payload:', j);
    throw new Error(j?.error || `HTTP ${r.status}`);
  }
  const arr = Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
  LOG('records:', arr.length);
  return arr;
}

function applyQuotes(){
  ensurePrevContainer();
  renderQuotesList(DATA);

  const ql = document.getElementById('quotes-list');
  LOG('post-render — #view-preventivi display:', (document.getElementById('view-preventivi')||{}).style.display || '(default)');
  LOG('post-render — #quotes-list exists:', !!ql, 'children:', ql ? ql.children.length : '(no node)');
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked;
    DATA = await fetchQuotes({ q, onlyOpen });
    applyQuotes();
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

export function bootQuotes(){
  if (BOOTED) {
    LOG('bootQuotes già eseguito — ricarico dati');
    loadQuotes().catch(()=>{});
    return;
  }
  BOOTED = true;
  LOG('bootQuotes avviato');

  ensurePrevContainer();

  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());

  // primo caricamento
  loadQuotes().catch(()=>{});
}

// helper debug manuale in console
// window.__QUOTES_DEBUG = { loadQuotes, applyQuotes };
