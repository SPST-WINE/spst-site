"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StandardRatesTab } from "../../components/listino/StandardRatesTab";
import { ExportAllInTab } from "../../components/listino/ExportAllInTab";
import { StoreCartoniTab } from "../../components/listino/StoreCartoniTab";
import { B2CCalculator } from "../../components/listino/B2CCalculator";
import { USARulesTab } from "../../components/listino/USARulesTab";
import { AcciseCalculatorTab } from "../../components/listino/AcciseCalculatorTab";

type Tab = "standard" | "export-all-in" | "store-cartoni" | "b2c-calculator" | "accise-calculator" | "usa-rules";

export default function ListinoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("standard");

  return (
    <main className="min-h-screen font-sans text-slate-100 listino-spst selection:bg-orange-300/40">
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Listino Prezzi B2C
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-200/80 max-w-2xl mx-auto">
              Spedizioni dirette al cliente finale in tutto il mondo
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button to Rappresentanza Fiscale */}
      <section className="pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/listino-rappresentanza-fiscale"
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
          >
            Il tuo cliente finale è un business e non ha codice accisa?
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-white/10 bg-black/20 sticky top-[64px] sm:top-[72px] z-40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto scrollbar-hide pb-px" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("standard")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "standard"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Listino Standard
            </button>
            <button
              onClick={() => setActiveTab("export-all-in")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "export-all-in"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              <span className="hidden sm:inline">Listino Standard con Imballo Incluso</span>
              <span className="sm:hidden">Con Imballo</span>
            </button>
            <button
              onClick={() => setActiveTab("store-cartoni")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "store-cartoni"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Store Cartoni
            </button>
            <button
              onClick={() => setActiveTab("b2c-calculator")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "b2c-calculator"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Calcolatore B2C
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
            <button
              onClick={() => setActiveTab("usa-rules")}
              className={`whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "usa-rules"
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent text-slate-300/80 hover:text-white hover:border-slate-500/60"
              }`}
            >
              Regole USA
            </button>
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {activeTab === "standard" && <StandardRatesTab />}
          {activeTab === "export-all-in" && <ExportAllInTab />}
          {activeTab === "store-cartoni" && <StoreCartoniTab />}
          {activeTab === "b2c-calculator" && <B2CCalculator />}
          {activeTab === "accise-calculator" && <AcciseCalculatorTab />}
          {activeTab === "usa-rules" && <USARulesTab />}
        </div>
      </section>
    </main>
  );
}
