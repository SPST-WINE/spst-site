// public/bo-assets/esm/back-office-tabs.js
// Solo "Spedizioni". Qualsiasi #tab-preventivi viene normalizzato.

const $ = (s) => document.querySelector(s);

function showSpedizioni() {
  const sped = $('#view-spedizioni');
  const prev = $('#view-preventivi'); // se esistesse ancora, nascondilo
  if (sped) sped.style.display = '';
  if (prev)  prev.style.display  = 'none';

  const linkSped = document.querySelector('a[href="#tab-spedizioni"]');
  linkSped?.classList.add('active');
  linkSped?.setAttribute('aria-current', 'page');
}

function boot() {
  // se qualcuno arriva con #tab-preventivi → portalo su spedizioni
  if (location.hash === '#tab-preventivi') {
    history.replaceState(null, '', '#tab-spedizioni');
  }
  showSpedizioni();

  document
    .querySelector('a[href="#tab-spedizioni"]')
    ?.addEventListener('click', (e) => {
      e.preventDefault();
      location.hash = '#tab-spedizioni';
      showSpedizioni();
    });

  window.addEventListener('hashchange', showSpedizioni);
}

document.addEventListener('DOMContentLoaded', boot);
