// public/bo-assets/esm/back-office-tabs.js
const TAB_ACTIVE_CLASS = 'active';

const $ = (sel) => document.querySelector(sel);
const viewSped = $('#view-spedizioni') || document.getElementById('list');
let viewPrev  = $('#view-preventivi');

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
  const onlyOpenWrap = $('#only-open')?.closest('.search-row') || $('#only-open')?.parentElement;

  if (name === 'spedizioni') {
    if (viewSped) viewSped.style.display = '';
    if (viewPrev) viewPrev.style.display = 'none';
    if (onlyOpenWrap) onlyOpenWrap.style.display = '';
  } else {
    if (viewSped) viewSped.style.display = 'none';
    if (viewPrev) viewPrev.style.display = '';
    if (onlyOpenWrap) onlyOpenWrap.style.display = '';
  }
  setActiveTab(name);
}

async function enterPreventivi() {
  showView('preventivi');
  try {
    const mod = await import('/bo-assets/esm/quotes-main.js');
    mod?.bootQuotes?.();
  } catch (e) {
    console.error('[tabs] errore import quotes-main.js', e);
  }
}

function enterSpedizioni() {
  showView('spedizioni');
  document.dispatchEvent(new CustomEvent('backoffice:enter-spedizioni'));
}

function wireTabs() {
  const btnSped = $('#tab-spedizioni');
  const btnPrev = $('#tab-preventivi');

  btnSped?.addEventListener('click', (e)=>{ e.preventDefault(); location.hash = '#tab-spedizioni'; enterSpedizioni(); });
  btnPrev?.addEventListener('click', (e)=>{ e.preventDefault(); location.hash = '#tab-preventivi';  enterPreventivi(); });

  window.addEventListener('hashchange', ()=>{
    if (location.hash === '#tab-preventivi') enterPreventivi();
    else enterSpedizioni();
  });

  if (location.hash === '#tab-preventivi') enterPreventivi();
  else enterSpedizioni();
}

document.addEventListener('DOMContentLoaded', wireTabs);
