// app/back-office/page.tsx
'use client';

import { useEffect } from 'react';

export default function BackOfficePage() {
  useEffect(() => {
    // carico gli script SOLO lato client (evita errori React 418/423)
    (async () => {
      try {
        // opzionali/estetica; se mancano non blocchiamo nulla
        import('/bo-assets/esm/header-compact.js').catch(() => {});
        import('/bo-assets/esm/brandbar-offset.js').catch(() => {});
        // app
        await import('/bo-assets/esm/main.js');
      } catch (e) {
        console.warn('BO bootstrap error', e);
      }
    })();
  }, []);

  return (
    <main id="view-spedizioni" className="bo-host">
      <div className="toolbar">
        <input id="search" type="search" placeholder="Cerca spedizioni…" />
        <label className="only-open">
          <input id="only-open" type="checkbox" />
          <span>Solo aperte</span>
        </label>
      </div>

      {/* il contenitore lista verrà creato/gestito da JS (ensureListContainer) */}
      <div id="list"></div>

      {/* toaster per notifiche */}
      <div id="toaster" className="toaster"></div>
    </main>
  );
}
