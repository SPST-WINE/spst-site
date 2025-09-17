import { ensureBoAssets } from '/bo-assets/esm/main.js';

window.BACK_OFFICE_CONFIG = { PROXY_BASE: '/api/airtable' };

<main className="wrap">
    <brandbar />
    <header />
    <nav />
    <section id="view-spedizioni">
        <div id="list"></div>
    </section>
    <section id="view-preventivi">
        <!-- admin forms qui -->
    </section>
    <script type="module" src="/bo-assets/esm/main.js" crossOrigin="anonymous" suppressHydrationWarning></script>
    {ensureBoAssets()}
</main>
