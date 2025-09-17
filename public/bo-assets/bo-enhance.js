// public/bo-assets/bo-enhance.js
// Pulizia azioni documento nelle card:
// - rimuove "template"
// - rimuove "genera …" (Genera Commercial/Proforma)
// - trasforma "apri" in bottone come "Carica"
// - elimina i puntini separatori "·" / "•" (anche se sono text nodes)

function cleanSeparators(scope) {
  const containers = scope.querySelectorAll('.doc, .docs, .bo-docs, .docs-row, .docs-wrap, .pill-row');
  containers.forEach(box => {
    // 1) rimuovi elementi figli che sono solo "·" o "•"
    box.querySelectorAll('span, i, small, b, em').forEach(el => {
      const t = (el.textContent || '').trim();
      if (t === '·' || t === '•') el.remove();
    });
    // 2) rimuovi puntini come text node
    [...box.childNodes].forEach(n => {
      if (n.nodeType === Node.TEXT_NODE && n.nodeValue && /[·•]/.test(n.nodeValue)) {
        n.nodeValue = n.nodeValue.replace(/[·•]/g, ' ');
      }
    });
  });
}

function enhanceDocs(scope = document) {
  // Rimuovi "template"
  scope.querySelectorAll('.doc a, .doc button, .docs a, .docs button, .bo-docs a, .bo-docs button')
    .forEach(el => {
      const t = (el.textContent || '').trim().toLowerCase();
      if (t === 'template') el.remove();
    });

  // Rimuovi "genera …" (commercial/proforma, ecc.)
  scope.querySelectorAll('.doc a, .doc button, .docs a, .docs button, .bo-docs a, .bo-docs button')
    .forEach(el => {
      const t = (el.textContent || '').trim().toLowerCase();
      if (t.startsWith('genera')) el.remove();
    });

  // Trasforma "apri" in bottone stile "Carica" (usa la stessa classe mini-btn)
  scope.querySelectorAll('.doc a, .doc button, .docs a, .docs button, .bo-docs a, .bo-docs button')
    .forEach(el => {
      const t = (el.textContent || '').trim().toLowerCase();
      if (t === 'apri') {
        el.classList.add('mini-btn');
        el.setAttribute('role', 'button');
        if (el.tagName === 'A') {
          el.style.textDecoration = 'none';
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener');
        }
      }
    });

  // Elimina i puntini separatori
  cleanSeparators(scope);
}

// Prima applicazione
enhanceDocs(document);

// Osserva cambi dinamici (lista/filtri/refresh)
const target = document.getElementById('view-spedizioni') || document;
const mo = new MutationObserver(muts => {
  if (muts.some(m => m.addedNodes && m.addedNodes.length)) enhanceDocs(target);
});
mo.observe(target, { childList: true, subtree: true });

// Ritocco post-boot
setTimeout(() => enhanceDocs(document), 600);
