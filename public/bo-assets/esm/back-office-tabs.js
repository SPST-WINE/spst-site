// Router super-leggero per i tab "Spedizioni" / "Preventivi".
const TAB_ACTIVE_CLASS = 'active';
const $ = (sel) => document.querySelector(sel);

const viewSped = $('#view-spedizioni') || document.getElementById('list'); // fallback
let viewPrev   = $('#view-preventivi');

function ensurePrevContainer() {
  if (!viewPrev) {
    viewPrev = document.createElement('div');
    viewPrev.id = 'view-preventivi';
    (viewSped?.parentElement || document.body).appendChild(viewPrev);
  }
  return viewPrev;
}

function setActiveTab(name) {
  const btnSped = $('#tab-spedizioni');
  const btnPrev = $('#tab-preventivi');
  btnSped?.classList.toggle(TAB_ACTIVE_CLASS, name === 'spedizioni');
  btnPrev?.classList.toggle(TAB_ACTIVE_CLASS, name === 'preventivi');
}

function showView(name) {
  ensurePrevContainer();
  const prev = ensurePrevContainer();

  const spedVisible = (name === 'spedizioni') ? '' : 'none';
  const prevVisible = (name === 'preventivi') ? 'block' : 'none';

  if (viewSped) viewSped.style.display = spedVisible;
  if (prev)     prev.style.display     = prevVisible;

  // toggle "solo non evase" lo lasciamo sempre visibile (se vuoi nasconderlo nei preventivi: metti 'none')
  const toggleHolder = $('#only-open')?.closest('.search-row') || $('#only-open')?.parentElement;
  if (toggleHolder) toggleHolder.style.display = '';

  setActiveTab(name);
}

async function enterPreventivi() {
  showView('preventivi');
  const mod = await import('/bo-assets/esm/quotes-main.js');
  if (mod?.bootQuotes) mod.bootQuotes();
}

function enterSpedizioni() {
  showView('spedizioni');
}

function wireTabs() {
  const btnSped = $('#tab-spedizioni');
  const btnPrev = $('#tab-preventivi');

  btnSped?.addEventListener('click', (e)=>{ e.preventDefault(); location.hash = '#tab-spedizioni'; enterSpedizioni(); });
  btnPrev?.addEventListener('click', (e)=>{ e.preventDefault(); location.hash = '#tab-preventivi';  enterPreventivi();  });

  window.addEventListener('hashchange', ()=>{
    if (location.hash === '#tab-preventivi') enterPreventivi();
    else enterSpedizioni();
  });

  if (location.hash === '#tab-preventivi') enterPreventivi();
  else enterSpedizioni();
}

document.addEventListener('DOMContentLoaded', wireTabs);
