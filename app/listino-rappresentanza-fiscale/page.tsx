"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Package, Truck, Shield, Calculator } from "lucide-react";
import { AcciseCalculatorTab } from "../../components/listino/AcciseCalculatorTab";

type Tab = "info" | "prezzi" | "accise-calculator";

export default function RappresentanzaFiscalePage() {
  const [activeTab, setActiveTab] = useState<Tab>("info");

  const pricingData = [
    {
      countries: ["Francia", "Spagna", "Belgio"],
      under60: 130,
      over60: 150,
    },
    {
      countries: ["Olanda", "Danimarca", "Finlandia", "Svezia"],
      under60: 150,
      over60: 180,
    },
  ];

  return (
    <main className="min-h-screen font-sans text-slate-100 listino-spst selection:bg-orange-300/40">
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Rappresentanza Fiscale
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-200/80 max-w-2xl mx-auto">
              Codice accisa, spedizione in accisa assolta e rappresentanza fiscale all'estero
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button to B2C */}
      <section className="pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/listino"
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
          >
            Devi spedire al tuo cliente finale?
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-white/10 bg-black/20 sticky top-[64px] sm:top-[72px] z-40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto scrollbar-hide pb-px" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("info")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "info"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Informazioni
            </button>
            <button
              onClick={() => setActiveTab("prezzi")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "prezzi"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Prezzi
            </button>
            <button
              onClick={() => setActiveTab("accise-calculator")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "accise-calculator"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Calcolatore Accise
            </button>
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {activeTab === "info" && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                  Servizio Completo
                </h2>
                <p className="text-slate-200/90 text-sm sm:text-base mb-6">
                  SPST copre rappresentanza fiscale per 8 paesi in Europa. Forniamo codice accisa per mittente e destinatario con spedizione in accisa assolta. Il destinatario paga anticipatamente le accise e noi le versiamo per suo conto, permettendo spedizione diretta dalla cantina al buyer tramite trasportatore privato o corriere espresso.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Codice Accisa</h3>
                      <p className="text-sm text-slate-300">Emissione codice per mittente e destinatario</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Trasporto</h3>
                      <p className="text-sm text-slate-300">Trasportatore privato o corriere espresso</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Pratica Accise</h3>
                      <p className="text-sm text-slate-300">Emissione documento e-DAS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Documentazione</h3>
                      <p className="text-sm text-slate-300">Fattura commerciale e packing list con numero bottiglie e percentuale alcolica</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                  Soluzione Unica
                </h3>
                <p className="text-slate-200/90 text-sm sm:text-base">
                  Trasporto, pratica accise (con emissione documento e-DAS) e rappresentanza fiscale all'estero in unica soluzione.
                </p>
              </div>
            </div>
          )}

          {activeTab === "prezzi" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="subtitle-muted text-gray-600">
                  Prezzi per servizio di rappresentanza fiscale
                </p>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                          Paese
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                          Fino a 60 litri
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                          Oltre 60 litri
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pricingData.map((group, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {group.countries.join(", ")}
                          </td>
                          <td className="px-6 py-4 text-center text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 hover:scale-105 cursor-default">
                            €{group.under60.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-center text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 hover:scale-105 cursor-default">
                            €{group.over60.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {pricingData.map((group, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="text-base font-bold text-gray-900">
                        {group.countries.join(", ")}
                      </h3>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm font-medium text-gray-700">Fino a 60 litri</span>
                        <span className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200">
                          €{group.under60.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium text-gray-700">Oltre 60 litri</span>
                        <span className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200">
                          €{group.over60.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "accise-calculator" && <AcciseCalculatorTab />}
        </div>
      </section>
    </main>
  );
}
