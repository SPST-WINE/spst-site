// public/bo-assets/esm/back-office-tabs.js
// Router super-leggero per i tab "Spedizioni" / "Preventivi".
// NON tocca la logica di Spedizioni (che resta in /esm/main.js).

const TAB_ACTIVE_CLASS = 'active';

const $ = (sel) => document.querySelector(sel);
const viewSped = $('#view-spedizioni') || document.getElementById('list'); // fallback
let viewPrev  = $('#view-preventivi');

// crea il container preventivi se manca
function ensurePrevContainer() {
  if (!viewPrev) {
    viewPrev = document.createElement('div');
    viewPrev.id = 'view-preventivi';
    // lo mettiamo subito dopo il container spedizioni
    (viewSped?.parentElement || document.body).appendChild(viewPrev);
  }
  return viewPrev;
}

// evidenzia il tab selezionato
function setActiveTab(name) {
  const btnSped = $('#tab-spedizioni');
  const btnPrev = $('#tab-preventivi');
  btnSped?.classList.toggle(TAB_ACTIVE_CLASS, name === 'spedizioni');
  btnPrev?.classList.toggle(TAB_ACTIVE_CLASS, name === 'preventivi');
}

// mostra/nasconde i contenitori e opzionale: il toggle "solo non evase"
// Aggiungi vicino a showView in back-office-tabs.js
function showView(name) {
  ensurePrevContainer();

  const onlyOpenWrap = document.getElementById('only-open')?.closest('.search-row') || document.getElementById('only-open')?.parentElement;

  const viewSped = document.getElementById('view-spedizioni') || document.getElementById('list');
  const viewPrev = document.getElementById('view-preventivi');

  if (name === 'spedizioni') {
    if (viewSped) viewSped.style.display = '';
    if (viewPrev) viewPrev.style.display = 'none';
    if (onlyOpenWrap) onlyOpenWrap.style.display = '';
  } else {
    if (viewSped) viewSped.style.display = 'none';
    if (viewPrev) viewPrev.style.display = '';
    if (onlyOpenWrap) onlyOpenWrap.style.display = '';
  }

  console.log('[tabs] showView:', name, {
    spedVisible: viewSped ? viewSped.style.display : '(no node)',
    prevVisible: viewPrev ? viewPrev.style.display : '(no node)'
  });

  setActiveTab(name);
}


  const onlyOpen = $('#only-open')?.closest('.search-row') || $('#only-open')?.parentElement;
  // Spedizioni visibili?
  if (name === 'spedizioni') {
    viewSped && (viewSped.style.display = '');
    viewPrev && (viewPrev.style.display = 'none');
    if (onlyOpen) onlyOpen.style.display = ''; // visibile per spedizioni
  } else {
    viewSped && (viewSped.style.display = 'none');
    viewPrev && (viewPrev.style.display = '');
    if (onlyOpen) onlyOpen.style.display = ''; // se vuoi nasconderlo nei preventivi -> 'none'
  }
  setActiveTab(name);
}

// attiva la vista preventivi (dynamic import per non appesantire)
async function enterPreventivi() {
  showView('preventivi');
  // Notifica personalizzata (utile se servisse in futuro)
  document.dispatchEvent(new CustomEvent('backoffice:enter-preventivi'));
  // carica la logica dei preventivi
  const mod = await import('/bo-assets/esm/quotes-main.js');
  if (mod && typeof mod.bootQuotes === 'function') {
    mod.bootQuotes(); // idempotente
  }
}

// attiva la vista spedizioni
function enterSpedizioni() {
  showView('spedizioni');
  document.dispatchEvent(new CustomEvent('backoffice:enter-spedizioni'));
}

// gestione dei click sui bottoni/tab
function wireTabs() {
  const btnSped = $('#tab-spedizioni');
  const btnPrev = $('#tab-preventivi');

  btnSped?.addEventListener('click', (e)=>{ e.preventDefault(); location.hash = '#tab-spedizioni'; enterSpedizioni(); });
  btnPrev?.addEventListener('click', (e)=>{ e.preventDefault(); location.hash = '#tab-preventivi';  enterPreventivi(); });

  // routing via hash (per link diretti)
  window.addEventListener('hashchange', ()=>{
    if (location.hash === '#tab-preventivi') enterPreventivi();
    else enterSpedizioni();
  });

  // boot iniziale
  if (location.hash === '#tab-preventivi') enterPreventivi();
  else enterSpedizioni();
}

document.addEventListener('DOMContentLoaded', wireTabs);
