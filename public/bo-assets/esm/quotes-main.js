// public/bo-assets/esm/quotes-main.js
import { AIRTABLE, DEBUG } from '/bo-assets/config.js';
import { toast } from '/bo-assets/utils/dom.js';

let BOOTED = false;
let DATA   = [];

const elSearch   = document.getElementById('search');
const elOnlyOpen = document.getElementById('only-open');

const API_BASE =
  (AIRTABLE?.proxyBase || '').replace(/\/airtable\/?$/i, '') ||
  'https://spst-logistics.vercel.app/api';

function $(s){ return document.querySelector(s); }

function ensureContainers(){
  let host = $('#view-preventivi');
  if (!host){
    host = document.createElement('div');
    host.id = 'view-preventivi';
    (document.getElementById('view-spedizioni')?.parentElement || document.body).appendChild(host);
  }
  // admin form (sopra)
  let admin = $('#quotes-admin');
  if (!admin){
    admin = document.createElement('div');
    admin.id = 'quotes-admin';
    host.appendChild(admin);
  }
  // lista (sotto)
  let list = $('#quotes-list');
  if (!list){
    list = document.createElement('div');
    list.id = 'quotes-list';
    host.appendChild(list);
  }
  return { host, admin, list };
}

function debounce(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }

async function fetchQuotes({ q='', onlyOpen=false } = {}){
  const params = new URLSearchParams();
  if (q) params.set('search', q);
  if (onlyOpen) params.set('onlyOpen', '1');

  const url = `${API_BASE}/preventivi?${params.toString()}`;
  if (DEBUG) console.log('[quotes] GET', url);
  const r = await fetch(url, { method:'GET' });
  const j = await r.json().catch(()=> ({}));
  if (!r.ok || j?.ok === false) throw new Error(j?.error || `HTTP ${r.status}`);
  return Array.isArray(j?.records) ? j.records : (Array.isArray(j) ? j : []);
}

function sortByIdDesc(recs){
  return [...recs].sort((a,b)=>{
    const A = Number(a?.fields?.ID || 0);
    const B = Number(b?.fields?.ID || 0);
    return B - A;
  });
}

async function loadQuotes(){
  try{
    const q = (elSearch?.value || '').trim();
    const onlyOpen = !!elOnlyOpen?.checked;
    DATA = await fetchQuotes({ q, onlyOpen });
    const { list } = ensureContainers();

    const { renderQuotesList } = await import('/bo-assets/esm/quotes-render.js');
    renderQuotesList(sortByIdDesc(DATA), { host:list });
  }catch(err){
    console.error('[quotes] load error', err);
    toast('Errore nel caricamento preventivi');
  }
}

export async function bootQuotes(){
  if (BOOTED){
    await loadQuotes();
    return;
  }
  BOOTED = true;

  const { admin } = ensureContainers();

  // monta il form admin
  try{
    const mod = await import('/bo-assets/esm/quotes-admin.js');
    mod?.renderQuotesAdmin?.(admin, {
      onSaved: ()=> loadQuotes().catch(()=>{}),
    });
  }catch(e){
    console.error('[quotes] errore import quotes-admin.js', e);
  }

  if (elSearch)   elSearch.addEventListener('input', debounce(()=>loadQuotes(), 250));
  if (elOnlyOpen) elOnlyOpen.addEventListener('change', ()=>loadQuotes());

  await loadQuotes();
}
