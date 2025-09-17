// public/bo-assets/bo-enhance.js
// - Rimuove la voce "template"
// - Trasforma "apri" in bottone (usa la stessa classe del bottone "Carica": .mini-btn)
// - Re-applica le modifiche quando la lista si aggiorna
function enhanceDocs(ctx=document){
  // 1) Rimuovi "template"
  ctx.querySelectorAll('.doc a, .doc button').forEach(el=>{
    const t = (el.textContent||'').trim().toLowerCase();
    if (t === 'template') el.remove();
  });

  // 2) Trasforma "apri" in bottone stile "Carica"
  ctx.querySelectorAll('.doc a, .doc button').forEach(el=>{
    const t = (el.textContent||'').trim().toLowerCase();
    if (t === 'apri') {
      el.classList.add('mini-btn');
      el.setAttribute('role','button');
      // evitare sottolineatura sui link
      if (el.tagName === 'A') {
        el.style.textDecoration = 'none';
        el.setAttribute('target','_blank');
        el.setAttribute('rel','noopener');
      }
    }
  });
}

// Prima applicazione
enhanceDocs(document);

// Osserva cambi dinamici (filtri/refresh lista)
const target = document.getElementById('view-spedizioni') || document;
const mo = new MutationObserver((muts)=>{
  if (muts.some(m=>m.addedNodes && m.addedNodes.length)) enhanceDocs(target);
});
mo.observe(target, { childList:true, subtree:true });

// Ritocco al termine del boot
setTimeout(()=> enhanceDocs(document), 600);
