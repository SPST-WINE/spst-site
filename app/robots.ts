import type { MetadataRoute } from "next";

const BASE_URL = "https://www.spst.it";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/back-office/",
          "/register/thank-you",
          // eventuali altre aree private o non da indicizzare
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
