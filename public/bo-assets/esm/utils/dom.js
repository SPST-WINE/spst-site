// utils/dom.js — helpers leggeri usati da main.js
export const $  = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** Event listener con delega opzionale */
export function on(target, type, selectorOrHandler, maybeHandler) {
  if (typeof selectorOrHandler === 'function') {
    target.addEventListener(type, selectorOrHandler);
    return;
  }
  const selector = selectorOrHandler;
  const handler = maybeHandler;
  target.addEventListener(type, (e) => {
    const el = e.target.closest(selector);
    if (el && target.contains(el)) handler.call(el, e);
  });
}
