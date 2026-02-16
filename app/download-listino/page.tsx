"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FileText, Code, Package } from "lucide-react";
import { useLocale } from "../../components/i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

const SPST_ORANGE = "#f7931e";
const SPST_BLUE_SOFT = "#1c3e5e";

const EMAIL_BODY = `Ciao,

Ti invio il pacchetto completo per integrare le pagine listino e calcolatori sul sito di Veronasped.

**COSA CONTIENE IL ZIP:**
- Tutti i componenti React necessari per le pagine listino
- I dati di pricing (prezzi, accise, zone geografiche)
- Gli stili CSS/Tailwind necessari
- Istruzioni dettagliate nel README.md

**STRUTTURA DEL PACCHETTO:**
- \`app/listino/\` - Pagina principale listino B2C
- \`app/listino-rappresentanza-fiscale/\` - Pagina rappresentanza fiscale
- \`components/listino/\` - Tutti i componenti React (tabelle, calcolatori, ecc.)
- \`lib/pricing-data.ts\` - Dati di pricing (prezzi, accise, zone)
- \`README.md\` - Istruzioni dettagliate per l'integrazione

**PERSONALIZZAZIONE LOGHI:**
I loghi SPST sono referenziati tramite URL CDN. Per sostituirli con i loghi Veronasped:
1. Cerca nel codice tutti i riferimenti a \`LOGO_URL\` o URL di immagini
2. Sostituisci con i loghi Veronasped (puoi usarli come URL o importarli localmente)
3. I loghi principali sono nell'header (se presente) e nelle email

**TECNOLOGIE UTILIZZATE:**
- Next.js 14.2.5 (App Router)
- React 18.2.0
- TypeScript
- Tailwind CSS
- Framer Motion (per animazioni)
- Lucide React (per icone)

**DIPENDENZE PRINCIPALI:**
- next, react, react-dom
- framer-motion
- lucide-react
- tailwindcss, autoprefixer, postcss

**NOTE TECNICHE:**
- I componenti sono completamente client-side ("use client")
- I dati di pricing sono in \`lib/pricing-data.ts\` e possono essere facilmente modificati
- Gli stili usano Tailwind CSS con classi utility
- I calcolatori sono interattivi e calcolano in tempo reale
- Le pagine sono responsive (mobile-first)

**PASSI PER L'INTEGRAZIONE:**
1. Estrai il contenuto del ZIP nella struttura del progetto Veronasped
2. Installa le dipendenze: \`npm install\`
3. Configura Tailwind CSS (vedi README.md)
4. Sostituisci i loghi SPST con quelli Veronasped
5. Personalizza i colori brand se necessario (cerca "orange-500", "orange-600" nel codice)
6. Testa le pagine e i calcolatori

**PERSONALIZZAZIONE COLORI:**
I colori brand SPST sono:
- Arancione: #f7931e (orange-500/orange-600 in Tailwind)
- Blu: #1c3e5e (SPST_BLUE_SOFT)
- Sfondo: gradient da #1c3e5e a #0a1722

Puoi sostituirli con i colori Veronasped cercando nel codice questi valori.

Se hai domande o hai bisogno di supporto per l'integrazione, fammi sapere!

Cordiali saluti`;

export default function DownloadListinoPage() {
  const { locale } = useLocale();
  const [downloading, setDownloading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch("/api/download-listino");
      if (!response.ok) throw new Error("Errore nel download");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `listino-veronasped-${new Date().toISOString().split("T")[0]}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Errore download:", error);
      alert("Errore durante il download. Riprova.");
    } finally {
      setDownloading(false);
    }
  };

  const copyEmailBody = () => {
    navigator.clipboard.writeText(EMAIL_BODY);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <main className="font-sans text-slate-100 selection:bg-orange-300/40 min-h-screen" style={{ background: SPST_PUBLIC_BG }}>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute -bottom-24 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)`,
          }}
        />

        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              <Package className="h-3 w-3" />
              Download Listino
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[34px] font-black leading-[1.1] sm:text-[40px] md:text-[58px]"
            >
              {locale === "it" ? (
                <>
                  Pacchetto completo per{" "}
                  <span className="block bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}>
                    integrazione listino
                  </span>
                </>
              ) : (
                <>
                  Complete package for{" "}
                  <span className="block bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                  }}>
                    listino integration
                  </span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-4 mb-2 max-w-[70ch] text-[15px] text-white/85 sm:text-base"
            >
              {locale === "it"
                ? "Scarica tutti i file necessari per riprodurre le pagine listino e calcolatori sul sito Veronasped. Include componenti React, dati di pricing, stili e istruzioni dettagliate."
                : "Download all files needed to reproduce the listino pages and calculators on the Veronasped website. Includes React components, pricing data, styles and detailed instructions."}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                {locale === "it" ? "Scarica il pacchetto completo" : "Download complete package"}
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                {locale === "it"
                  ? "Il ZIP contiene tutti i file necessari per integrare le pagine listino sul sito Veronasped"
                  : "The ZIP contains all files needed to integrate the listino pages on the Veronasped website"}
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-[#f7931e] px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-60 disabled:hover:scale-100"
              >
                <Download className="h-5 w-5" />
                <span>
                  {downloading
                    ? locale === "it" ? "Download in corso..." : "Downloading..."
                    : locale === "it" ? "Scarica ZIP" : "Download ZIP"}
                </span>
              </button>

              <div className="w-full max-w-2xl space-y-4 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Componenti React</p>
                    <p className="text-white/60">Tutti i componenti per listino, calcolatori e tabelle prezzi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Dati di pricing</p>
                    <p className="text-white/60">Prezzi, accise, zone geografiche in formato TypeScript</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Istruzioni complete</p>
                    <p className="text-white/60">README.md con guida dettagliata per l'integrazione</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Body Section */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                <Mail className="h-6 w-6 text-orange-400" />
                {locale === "it" ? "Corpo della mail" : "Email body"}
              </h2>
              <button
                onClick={copyEmailBody}
                className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-sm font-semibold"
              >
                {emailCopied ? (locale === "it" ? "Copiato!" : "Copied!") : (locale === "it" ? "Copia" : "Copy")}
              </button>
            </div>

            <div className="bg-black/30 rounded-lg p-6 border border-white/10">
              <pre className="text-xs sm:text-sm text-white/80 whitespace-pre-wrap font-mono overflow-x-auto">
                {EMAIL_BODY}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
