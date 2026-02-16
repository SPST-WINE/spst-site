// app/api/download-listino/route.ts
import { NextResponse } from "next/server";
import archiver from "archiver";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Crea uno stream per il ZIP
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Massima compressione
    });

    // Leggi i file necessari
    const basePath = process.cwd();

    // File da includere nel ZIP
    const filesToInclude = [
      // Pagine
      { source: "app/listino/page.tsx", dest: "app/listino/page.tsx" },
      { source: "app/listino/layout.tsx", dest: "app/listino/layout.tsx" },
      { source: "app/listino-rappresentanza-fiscale/page.tsx", dest: "app/listino-rappresentanza-fiscale/page.tsx" },
      { source: "app/listino-rappresentanza-fiscale/layout.tsx", dest: "app/listino-rappresentanza-fiscale/layout.tsx" },
      
      // Componenti
      { source: "components/listino/StandardRatesTab.tsx", dest: "components/listino/StandardRatesTab.tsx" },
      { source: "components/listino/ExportAllInTab.tsx", dest: "components/listino/ExportAllInTab.tsx" },
      { source: "components/listino/StoreCartoniTab.tsx", dest: "components/listino/StoreCartoniTab.tsx" },
      { source: "components/listino/B2CCalculator.tsx", dest: "components/listino/B2CCalculator.tsx" },
      { source: "components/listino/AcciseCalculatorTab.tsx", dest: "components/listino/AcciseCalculatorTab.tsx" },
      { source: "components/listino/USARulesTab.tsx", dest: "components/listino/USARulesTab.tsx" },
      { source: "components/listino/USAShippingRulesCard.tsx", dest: "components/listino/USAShippingRulesCard.tsx" },
      { source: "components/listino/TermsAndConditionsTab.tsx", dest: "components/listino/TermsAndConditionsTab.tsx" },
      
      // Dati
      { source: "lib/pricing-data.ts", dest: "lib/pricing-data.ts" },
      { source: "lib/spstTheme.ts", dest: "lib/spstTheme.ts" },
    ];

    // Aggiungi i file al ZIP
    for (const file of filesToInclude) {
      const filePath = path.join(basePath, file.source);
      if (fs.existsSync(filePath)) {
        archive.file(filePath, { name: file.dest });
      }
    }

    // Crea README.md
    const readmeContent = `# Listino e Calcolatori - Pacchetto Integrazione

Questo pacchetto contiene tutti i file necessari per integrare le pagine listino e calcolatori sul sito Veronasped.

## 📁 Struttura File

\`\`\`
app/
  listino/
    page.tsx              # Pagina principale listino B2C
    layout.tsx            # Layout pagina listino
  listino-rappresentanza-fiscale/
    page.tsx              # Pagina rappresentanza fiscale
    layout.tsx            # Layout rappresentanza fiscale

components/
  listino/
    StandardRatesTab.tsx          # Tab listino standard
    ExportAllInTab.tsx            # Tab listino con imballo incluso
    StoreCartoniTab.tsx           # Tab store cartoni
    B2CCalculator.tsx             # Calcolatore B2C completo
    AcciseCalculatorTab.tsx       # Calcolatore accise
    USARulesTab.tsx               # Tab regole USA
    USAShippingRulesCard.tsx      # Card regole spedizioni USA
    TermsAndConditionsTab.tsx     # Tab condizioni fiscali

lib/
  pricing-data.ts         # Dati di pricing (prezzi, accise, zone)
  spstTheme.ts           # Tema e colori brand
\`\`\`

## 🚀 Installazione

1. **Installa le dipendenze:**
   \`\`\`bash
   npm install next@14.2.5 react@18.2.0 react-dom@18.2.0 framer-motion@^10.18.0 lucide-react@^0.378.0
   npm install -D tailwindcss@^3.4.10 autoprefixer@^10.4.20 postcss@^8.4.47 typescript@^5.6.3 @types/react@^18.3.3 @types/node@^20.14.9
   \`\`\`

2. **Configura Tailwind CSS:**
   Assicurati di avere \`tailwind.config.js\` e \`postcss.config.js\` configurati correttamente.

3. **Aggiungi gli stili CSS:**
   Nel tuo file CSS globale, aggiungi:
   \`\`\`css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   .scrollbar-hide {
     -ms-overflow-style: none;
     scrollbar-width: none;
   }
   .scrollbar-hide::-webkit-scrollbar {
     display: none;
   }

   .listino-spst .subtitle-muted {
     @apply text-slate-100/90;
   }
   \`\`\`

## 🎨 Personalizzazione

### Sostituire i Loghi

I loghi SPST sono referenziati tramite URL CDN. Per sostituirli:

1. Cerca nel codice tutti i riferimenti a \`LOGO_URL\` o URL di immagini
2. Sostituisci con i loghi Veronasped (puoi usarli come URL o importarli localmente)
3. I loghi principali sono nell'header (se presente) e nelle email

### Personalizzare i Colori

I colori brand SPST sono:
- **Arancione**: \`#f7931e\` (classe Tailwind: \`orange-500\`, \`orange-600\`)
- **Blu**: \`#1c3e5e\` (SPST_BLUE_SOFT)
- **Sfondo**: gradient da \`#1c3e5e\` a \`#0a1722\`

Per sostituirli con i colori Veronasped:
1. Cerca nel codice questi valori esadecimali
2. Sostituisci con i colori Veronasped
3. Aggiorna anche le classi Tailwind se necessario

### Modificare i Dati di Pricing

I dati di pricing sono in \`lib/pricing-data.ts\`. Puoi modificare:
- Prezzi per zona geografica
- Accise per paese
- Note e descrizioni
- Regole per USA (stati proibiti, supplementi)

## 📋 Dipendenze Principali

- **Next.js 14.2.5** (App Router)
- **React 18.2.0**
- **TypeScript**
- **Tailwind CSS** (per gli stili)
- **Framer Motion** (per animazioni)
- **Lucide React** (per icone)

## 🔧 Note Tecniche

- Tutti i componenti sono client-side (\`"use client"\`)
- I dati di pricing sono in formato TypeScript e possono essere facilmente modificati
- Gli stili usano Tailwind CSS con classi utility
- I calcolatori sono interattivi e calcolano in tempo reale
- Le pagine sono responsive (mobile-first)

## 📝 Componenti Principali

### ListinoPage
Pagina principale con tab navigation per:
- Listino Standard
- Listino con Imballo Incluso
- Store Cartoni
- Calcolatore B2C
- Calcolatore Accise
- Regole USA
- Condizioni Fiscali

### RappresentanzaFiscalePage
Pagina per servizio di rappresentanza fiscale con:
- Informazioni sul servizio
- Tabella prezzi
- Calcolatore accise

### B2CCalculator
Calcolatore completo che include:
- Selezione paese di destinazione
- Numero bottiglie
- Calcolo spedizione, imballo, accise, gestione fiscale
- Toggle per imballo
- Gestione IVA (inclusa per UE, non dovuta per extra-UE)

## 🐛 Troubleshooting

Se riscontri problemi:

1. **Errori di compilazione TypeScript**: Verifica che tutte le dipendenze siano installate
2. **Stili non applicati**: Controlla la configurazione Tailwind CSS
3. **Calcolatori non funzionano**: Verifica che i componenti siano marcati con \`"use client"\`
4. **Dati mancanti**: Controlla che \`lib/pricing-data.ts\` sia presente e corretto

## 📞 Supporto

Per domande o supporto sull'integrazione, contatta il team SPST.

---

**Versione**: 1.0
**Data**: ${new Date().toISOString().split("T")[0]}
**Compatibilità**: Next.js 14.2.5+, React 18.2.0+
`;

    archive.append(readmeContent, { name: "README.md" });

    // Crea package.json minimo
    const packageJson = {
      name: "listino-veronasped",
      version: "1.0.0",
      private: true,
      dependencies: {
        next: "14.2.5",
        react: "18.2.0",
        "react-dom": "18.2.0",
        "framer-motion": "^10.18.0",
        "lucide-react": "^0.378.0",
      },
      devDependencies: {
        autoprefixer: "^10.4.20",
        postcss: "^8.4.47",
        tailwindcss: "^3.4.10",
        typescript: "^5.6.3",
        "@types/react": "^18.3.3",
        "@types/node": "^20.14.9",
      },
    };

    archive.append(JSON.stringify(packageJson, null, 2), { name: "package.json" });

    // Crea file CSS necessario
    const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* Utility per nascondere scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Sottotitoli chiari per pagina listino */
.listino-spst .subtitle-muted {
  @apply text-slate-100/90;
}
`;

    archive.append(cssContent, { name: "styles/listino.css" });

    // Raccogli i chunk in un buffer
    const chunks: Buffer[] = [];
    archive.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    // Finalizza l'archivio e attendi il completamento
    archive.finalize();

    // Attendi che l'archivio sia completato
    await new Promise<void>((resolve, reject) => {
      archive.on("end", () => resolve());
      archive.on("error", (err) => reject(err));
    });

    // Combina tutti i chunk in un unico buffer
    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="listino-veronasped-${new Date().toISOString().split("T")[0]}.zip"`,
      },
    });
  } catch (error: any) {
    console.error("Errore generazione ZIP:", error);
    return NextResponse.json(
      { ok: false, error: error?.message || "Errore generazione ZIP" },
      { status: 500 }
    );
  }
}
