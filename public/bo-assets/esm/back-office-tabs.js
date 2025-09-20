// public/bo-assets/esm/back-office-tabs.js
(function () {
  const LOG = (...a) => console.log('[tabs]', ...a);
  const TAB_ACTIVE_CLASS = 'active';
  const $ = (sel, root = document) => root.querySelector(sel);

  function ensurePrevContainer() {
    let el = document.getElementById('view-preventivi');
    if (!el) {
      const viewSped = document.getElementById('view-spedizioni') || document.getElementById('list');
      el = document.createElement('div');
      el.id = 'view-preventivi';
      if (viewSped && viewSped.parentElement) {
        // posizione FRATELLO: subito dopo le spedizioni
        viewSped.insertAdjacentElement('afterend', el);
      } else {
        (viewSped?.parentElement || document.body).appendChild(el);
      }
      LOG('creato #view-preventivi come sibling di #view-spedizioni');
    }
    if (!el.__debugBorderApplied) {
      el.style.minHeight = '8px';
      el.style.boxShadow = 'inset 0 0 0 1px rgba(247,145,29,.12)';
      el.style.borderRadius = '8px';
      el.__debugBorderApplied = true;
    }
    return el;
  }

  function setActiveTab(name) {
    $('#tab-spedizioni')?.classList.toggle(TAB_ACTIVE_CLASS, name === 'spedizioni');
    $('#tab-preventivi')?.classList.toggle(TAB_ACTIVE_CLASS, name === 'preventivi');
  }

  function findOnlyOpenWrap() {
    const el = document.getElementById('only-open');
    if (!el) return null;
    return el.closest('.switch') || el.closest('.bo-filters') || el.parentElement;
  }

  function showView(name) {
    ensurePrevContainer();

    const viewSped = document.getElementById('view-spedizioni') || document.getElementById('list');
    const viewPrev = document.getElementById('view-preventivi');
    const onlyOpenWrap = findOnlyOpenWrap();

    if (name === 'spedizioni') {
      if (viewSped) viewSped.style.display = '';
      if (viewPrev) viewPrev.style.display = 'none';
      if (onlyOpenWrap) onlyOpenWrap.style.display = '';
    } else {
      if (viewSped) viewSped.style.display = 'none';
      if (viewPrev) viewPrev.style.display = 'block';
      if (onlyOpenWrap) onlyOpenWrap.style.display = '';
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
    $('#tab-spedizioni')?.addEventListener('click', (e) => { e.preventDefault(); location.hash = '#tab-spedizioni'; enterSpedizioni(); });
    $('#tab-preventivi')?.addEventListener('click', (e) => { e.preventDefault(); location.hash = '#tab-preventivi';  enterPreventivi(); });

    window.addEventListener('hashchange', () => {
      if (location.hash === '#tab-preventivi') enterPreventivi();
      else enterSpedizioni();
    });

    if (location.hash === '#tab-preventivi') enterPreventivi();
    else enterSpedizioni();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireTabs, { once: true });
  } else {
    wireTabs();
  }
})();
