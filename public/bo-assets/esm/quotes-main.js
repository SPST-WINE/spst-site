// public/bo-assets/esm/quotes-main.js
import { AIRTABLE, DEBUG } from '/bo-assets/config.js';
import { toast } from '/bo-assets/utils/dom.js';
import { renderQuotesList } from '/bo-assets/esm/quotes-render.js';

const log = (...a)=>console.log('[quotes]', ...a);

const API_BASE =
  (AIRTABLE?.proxyBase || '').replace(/\/airtable\/?$/i, '') ||
  (typeof location !== 'undefined' ? location.origin : '');

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
  el.style.display = 'block';
  return el;
}

async function fetchQuotes({ q='', onlyOpen=false } = {}){
  const params = new URLSearchParams();
  if (q) params.set('search', q);
  if (onlyOpen) params.set('onlyOpen', '1');

  const url = `${API_BASE}/api/preventivi?${params.toString()}`;
  log('GET /api/preventivi?');
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) {
    throw (j?.error || new Error(`HTTP ${r.status}`));
  }
  const arr = Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
  return arr;
}

function applyQuotes(){
  ensurePrevContainer();
  renderQuotesList(DATA);
  const host = document.getElementById('view-preventivi');
  const list = document.getElementById('quotes-list');
  log('post-render — #view-preventivi display:', host?.style.display || '(default)');
  log('post-render — #quotes-list exists:', !!list, 'children:', list?.children?.length ?? 0);
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked;
    DATA = await fetchQuotes({ q, onlyOpen });
    log('records:', DATA.length);
    applyQuotes();
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

export function bootQuotes(){
  log('bootQuotes avviato');
  if (BOOTED) { loadQuotes().catch(()=>{}); return; }
  BOOTED = true;

  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());

  loadQuotes
