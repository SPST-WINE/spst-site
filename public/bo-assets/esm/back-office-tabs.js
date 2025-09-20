// public/bo-assets/esm/back-office-tabs.js
// Router leggero per i tab "Spedizioni" / "Preventivi" con log di debug.

(function () {
  const LOG = (...a) => console.log('[tabs]', ...a);
  const TAB_ACTIVE_CLASS = 'active';

  function $(sel, root = document) { return root.querySelector(sel); }

  // Crea #view-preventivi se non esiste (accanto al contenitore spedizioni)
  function ensurePrevContainer() {
    let el = document.getElementById('view-preventivi');
    if (!el) {
      const anchor = document.getElementById('view-spedizioni') || document.getElementById('list') || document.body;
      el = document.createElement('div');
      el.id = 'view-preventivi';
      (anchor.parentElement || document.body).appendChild(el);
      LOG('creato #view-preventivi');
    }
    // bordo visivo per il debug
    if (!el.__debugBorderApplied) {
      el.style.minHeight = '8px';
      el.style.boxShadow = 'inset 0 0 0 1px rgba(247,145,29,.25)';
      el.__debugBorderApplied = true;
    }
    return el;
  }

  function setActiveTab(name) {
    const btnSped = $('#tab-spedizioni');
    const btnPrev = $('#tab-preventivi');
    btnSped?.classList.toggle(TAB_ACTIVE_CLASS, name === 'spedizioni');
    btnPrev?.classList.toggle(TAB_ACTIVE_CLASS, name === 'preventivi');
  }

  function findOnlyOpenWrap() {
    const el = document.getElementById('only-open');
    if (!el) return null;
    return el.closest('.switch') || el.closest('.bo-filters') || el.parentElement;
  }

  // Mostra/Nasconde i contenitori delle due viste
  function showView(name) {
    ensurePrevContainer();

    const viewSped = document.getElementById('view-spedizioni') || document.getElementById('list');
    const viewPrev = document.getElementById('view-preventivi');
    const onlyOpenWrap = findOnlyOpenWrap();

    if (name === 'spedizioni') {
      if (viewSped) viewSped.style.display = '';
      if (viewPrev) viewPrev.style.display = 'none';
      if (onlyOpenWrap) onlyOpenWrap.style.display = '';   // visibile anche qui
    } else {
      if (viewSped) viewSped.style.display = 'none';
      if (viewPrev) viewPrev.style.display = '';
      if (onlyOpenWrap) onlyOpenWrap.style.display = '';   // metti 'none' se vuoi nasconderlo nei preventivi
    }

    setActiveTab(name);
    LOG('showView', name, {
      spedVisible: viewSped ? (viewSped.style.display || '(default)') : '(no #view-spedizioni)',
      prevVisible: viewPrev ? (viewPrev.style.display || '(default)') : '(no #view-preventivi)',
    });
  }

  async function enterPreventivi() {
    showView('preventivi');
    document.dispatchEvent(new CustomEvent('backoffice:enter-preventivi'));
    try {
      const mod = await import('/bo-assets/esm/quotes-main.js');
      if (mod && typeof mod.bootQuotes === 'function') {
        mod.bootQuotes();
      } else {
        LOG('quotes-main.js caricato ma bootQuotes mancante', mod);
      }
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

    btnSped?.addEventListener('click', (e) => { e.preventDefault(); location.hash = '#tab-spedizioni'; enterSpedizioni(); });
    btnPrev?.addEventListener('click', (e) => { e.preventDefault(); location.hash = '#tab-preventivi';  enterPreventivi(); });

    // routing via hash (link diretti / refresh)
    window.addEventListener('hashchange', () => {
      if (location.hash === '#tab-preventivi') enterPreventivi();
      else enterSpedizioni();
    });

    // boot iniziale
    if (location.hash === '#tab-preventivi') enterPreventivi();
    else enterSpedizioni();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireTabs, { once: true });
  } else {
    wireTabs();
  }
})();
