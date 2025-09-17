// Utils DOM “vanilla” per Back Office

export function qs(sel, parent = document)  { return parent.querySelector(sel); }
export function qsa(sel, parent = document) { return [...parent.querySelectorAll(sel)]; }

// ── Toast (bottom-right)
let _toastEl;
function ensureToast(){
  if (_toastEl) return;
  _toastEl = document.createElement('div');
  _toastEl.id = 'bo-toast';
  Object.assign(_toastEl.style, {
    position:'fixed', right:'16px', bottom:'16px', zIndex:'9999',
    padding:'10px 12px', background:'#111', color:'#fff',
    borderRadius:'10px', border:'1px solid #333',
    boxShadow:'0 4px 18px rgba(0,0,0,.25)', fontSize:'13px'
  });
  document.body.appendChild(_toastEl);
}
export function toast(msg, opts = {}){
  ensureToast();
  _toastEl.textContent = String(msg ?? '');
  clearTimeout(_toastEl._t);
  _toastEl.style.opacity = '1';
  _toastEl._t = setTimeout(()=> { _toastEl.style.opacity = '0'; }, opts.duration ?? 2200);
}

// ── Banner (top) — usato da api.js per messaggi/cors-debug
let _bannerEl;
export function showBanner(text, type = 'info'){
  if (!_bannerEl){
    _bannerEl = document.createElement('div');
    _bannerEl.id = 'bo-banner';
    Object.assign(_bannerEl.style, {
      position:'fixed', left:0, right:0, top:0, zIndex:'9999',
      padding:'10px 14px', textAlign:'center', fontSize:'13px',
      color:'#fff'
    });
    document.body.appendChild(_bannerEl);
  }
  _bannerEl.textContent = String(text ?? '');
  _bannerEl.style.background =
    type === 'error' ? '#7a1f1f' : type === 'warn' ? '#7a611f' : '#1f477a';
  clearTimeout(_bannerEl._t);
  _bannerEl._t = setTimeout(()=> { _bannerEl.remove(); _bannerEl = null; }, 3500);
}
