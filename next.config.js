/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
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
