"use client";

import React from "react";
import { VeronaSpedHeader } from "../../components/listino/VeronaSpedHeader";

export default function ListinoDownloadPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <VeronaSpedHeader />

      <section className="bg-gradient-to-br from-gray-50 to-white py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            Download Listino VeronaSped
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600">
            Scarica i dati strutturati del listino e la documentazione tecnica per integrazioni interne VeronaSped.
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card JSON */}
          <a
            href="/listino/listino-pricing.json"
            download
            className="group relative flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center justify-between gap-2">
                File Dati Listino (JSON)
                <span className="text-[11px] sm:text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                  machine-friendly
                </span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                Contiene tariffe per zona, mappa accise/IVA europee e regole imballo. Ideale per portali, ERP, CRM e fogli di calcolo.
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm font-medium text-orange-600">
              <span>Scarica `listino-pricing.json`</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↓</span>
            </div>
          </a>

          {/* Card README */}
          <a
            href="/listino/README-VERONASPED-LISTINO.md"
            download
            className="group relative flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center justify-between gap-2">
                README Utilizzo (Markdown)
                <span className="text-[11px] sm:text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                  documentazione
                </span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                Descrive stack tecnico, struttura del JSON e modalità consigliate di integrazione nei sistemi VeronaSped.
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm font-medium text-orange-600">
              <span>Scarica `README-VERONASPED-LISTINO.md`</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↓</span>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

