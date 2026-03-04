import type { MetadataRoute } from "next";

const BASE_URL = "https://www.spst.it";

// Pagine principali e servizi (priorità alta, aggiornamento settimanale)
const mainPages: { url: string; changefreq?: "weekly" | "monthly"; priority?: number }[] = [
  { url: "", changefreq: "weekly", priority: 1 },
  { url: "/presentazione", changefreq: "weekly", priority: 0.9 },
  { url: "/servizi-e-contatti", changefreq: "weekly", priority: 0.9 },
  { url: "/spedizioni-usa", changefreq: "weekly", priority: 0.9 },
  { url: "/spedizioni-generiche", changefreq: "weekly", priority: 0.9 },
  { url: "/portale-quotazioni", changefreq: "weekly", priority: 0.9 },
  { url: "/listino", changefreq: "weekly", priority: 0.8 },
  { url: "/listino-generico", changefreq: "weekly", priority: 0.8 },
  { url: "/listino-rappresentanza-fiscale", changefreq: "weekly", priority: 0.8 },
  { url: "/listino-download", changefreq: "monthly", priority: 0.7 },
  { url: "/listinoveronasped", changefreq: "monthly", priority: 0.7 },
  { url: "/download-listino", changefreq: "monthly", priority: 0.7 },
  { url: "/spst-paylink", changefreq: "monthly", priority: 0.8 },
  { url: "/legal", changefreq: "monthly", priority: 0.5 },
  { url: "/register", changefreq: "monthly", priority: 0.6 },
  { url: "/blog", changefreq: "weekly", priority: 0.8 },
  { url: "/landing/spedire-senza-codice-accisa", changefreq: "monthly", priority: 0.7 },
];

// Articoli blog (priorità media, aggiornamento mensile)
const blogSlugs = [
  "spedire-vino-usa-b2c",
  "spedire-vino-b2c-europa",
  "spedire-vino-b2b-europa-accise",
  "spedire-senza-codice-accisa",
  "spedire-campionature-vino-europa",
  "prezzo-non-unica-variabile",
  "pallettizzazione-vino-b2b",
  "imballaggi-multicollo-vino",
  "documenti-dogane-spedizioni-vino",
  "corriere-espresso-o-trasportatore-privato",
  "come-spedire-vino-negli-usa",
  "campioni-vino-usa",
  "campionature-vino-extra-ue",
  "campionature-vino-asia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const main: MetadataRoute.Sitemap = mainPages.map(({ url, changefreq, priority }) => ({
    url: `${BASE_URL}${url || "/"}`,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority: priority ?? 0.7,
  }));

  const blog: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...main, ...blog];
}
