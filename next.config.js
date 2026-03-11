/** @type {import('next').NextConfig} */
const DASHBOARD = "https://dashboard.spst.it";

module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      // Vecchie URL (drilldown GSC 2026-03-06) → destinazione attuale
      { source: "/home-nuova", destination: "/", permanent: true },
      { source: "/termini-di-utilizzo", destination: "/legal", permanent: true },
      { source: "/cookie-policy", destination: "/legal", permanent: true },
      { source: "/documenti-e-informazioni-utili", destination: "/servizi-e-contatti", permanent: true },
      { source: "/crea-spedizione", destination: "/portale-quotazioni", permanent: true },
      { source: "/spedizione-confermata", destination: "/portale-quotazioni", permanent: true },
      { source: "/wine-connect-request", destination: "/portale-quotazioni", permanent: true },
      { source: "/wine-connect-request-it", destination: "/portale-quotazioni", permanent: true },
      { source: "/wine-connect", destination: "/", permanent: true },
      { source: "/wine-connect-buyer", destination: "/", permanent: true },
      { source: "/wine-connect-buyer-it", destination: "/", permanent: true },
      { source: "/wine-connect-cantina", destination: "/", permanent: true },
      { source: "/vcard", destination: "/servizi-e-contatti", permanent: true },
      { source: "/firma", destination: "/", permanent: true },
      // Area riservata / back-office (esterno)
      { source: "/login", destination: DASHBOARD, permanent: true },
      { source: "/areariservata", destination: DASHBOARD, permanent: true },
      { source: "/gestionale", destination: DASHBOARD, permanent: true },
      { source: "/tracking-back-office", destination: DASHBOARD, permanent: true },
      { source: "/estrai-tracking", destination: DASHBOARD, permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600" },
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600" },
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
        ],
      },
    ];
  },
};
