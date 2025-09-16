/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // fallback sicuro: /back-office → progetto logistics (anche se la tua pagina BO non caricasse)
  async rewrites() {
    return [
      { source: '/back-office', destination: 'https://spst-logistics.vercel.app/back-office' },
    ];
  },
};
