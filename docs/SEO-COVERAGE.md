# SEO – Copertura Google Search Console

Riferimento report: **spst.it Coverage** (es. 2026-03-06).

## Problemi tipici e cosa fare

### 1. Non trovata (404) – 20 pagine

**Cosa significa:** Google ha trovato (o aveva in indice) URL che ora restituiscono 404.

**Cosa fare:**

1. In GSC: **Copertura** → clic su **“Non trovata (404)”** → **Scarica elenco** (o apri le URL una per una).
2. Controlla le URL:
   - **Vecchie URL** (sito riorganizzato): aggiungi redirect 301 in `next.config.js` verso la nuova URL (o homepage).
   - **Parametri** (es. `?utm_source=...`): di solito non servono redirect; Google le normalizza.
   - **Errori di battitura / link sbagliati**: correggi i link nel sito (menu, footer, articoli).
3. Dopo aver aggiunto i redirect, in GSC usa **Convalida correzione** per la risorsa 404.

**Esempio redirect in `next.config.js`:**

```js
async redirects() {
  return [
    { source: '/vecchia-pagina', destination: '/nuova-pagina', permanent: true },
    // Aggiungi qui le vecchie URL una volta scaricate da GSC
  ];
}
```

---

### 2. Pagina con reindirizzamento – 3 pagine

**Cosa significa:** L’URL viene servita con un redirect (es. 301). Non è per forza un errore.

**Cosa controllare:**

- Con `trailingSlash: false`, Next.js reindirizza `/blog/` → `/blog`. Queste 3 possono essere proprio quelle.
- Se le 3 URL sono solo “con reindirizzamento” e non “errore”, va bene così.
- Se una di esse è una pagina importante (es. vecchia homepage), assicurati che il redirect sia **301** e che la destinazione sia quella giusta.

---

### 3. Pagina scansionata ma non indicizzata – 14 pagine

**Cosa significa:** Google ha scansionato la pagina ma ha scelto di **non** metterla in indice (contenuto duplicato, sottile o di basso valore).

**Cosa è stato fatto in sito:**

- **Landing vs blog:** La landing `/landing/spedire-senza-codice-accisa` è in **noindex** e ha **canonical** sulla versione blog. È stata **rimossa dalla sitemap**. Così si evita duplicato e si punta tutto sulla versione blog.
- **Canonical:** Le pagine principali e gli articoli blog hanno `alternates.canonical` impostato.

**Cosa fare in più:**

1. Controlla in GSC quali sono le 14 URL (elenco sotto “Scansionata – attualmente non indicizzata”).
2. Se sono articoli blog: verifica che abbiano **testo sufficiente** e **contenuto unico** (titolo, intro, paragrafi).
3. Evita pagine “sottili” (solo titolo + form o poche righe); aggiungi contenuto utile.
4. Se due URL hanno lo stesso contenuto, mantieni una sola “versione principale” e usa **canonical** sulla principale; l’altra può essere noindex (come per la landing).

---

## Riepilogo modifiche tecniche (sito)

**Già applicato:** Redirect 301 per le 20 URL 404 (drilldown 2026-03-06) in `next.config.js`.

- **`app/landing/layout.tsx`:** canonical sulla versione blog + `robots: { index: false }` per le pagine in `/landing/`.
- **`app/sitemap.ts`:** rimossa la URL della landing dalla sitemap.
- **Redirect 404:** vanno aggiunti in `next.config.js` solo dopo aver **scaricato l’elenco 404 da GSC** e deciso le destinazioni.

---

## Prossimi passi consigliati

1. Scaricare da GSC l’elenco delle **20 URL con 404** e aggiungere i redirect necessari.
2. Verificare in GSC le **14 URL “scansionate ma non indicizzate”** e migliorare contenuto/canonical dove serve.
3. Dopo ogni modifica, usare **Controllo URL** in GSC e, se previsto, **Richiedi indicizzazione** per le pagine importanti.
