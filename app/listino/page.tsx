"use client";

import React, { useState } from "react";
import { StandardRatesTab } from "../../components/listino/StandardRatesTab";
import { ExportAllInTab } from "../../components/listino/ExportAllInTab";
import { StoreCartoniTab } from "../../components/listino/StoreCartoniTab";
import { B2CCalculator } from "../../components/listino/B2CCalculator";
import { VeronaSpedHeader } from "../../components/listino/VeronaSpedHeader";

type Tab = "standard" | "export-all-in" | "store-cartoni" | "b2c-calculator";

export default function ListinoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("standard");

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <VeronaSpedHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Listino Prezzi
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Consulta i nostri prezzi per spedizioni nazionali e internazionali
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-gray-200 bg-white sticky top-[73px] z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto scrollbar-hide" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("standard")}
              className={`whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "standard"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Listino Standard
            </button>
            <button
              onClick={() => setActiveTab("export-all-in")}
              className={`whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "export-all-in"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Listino Standard con Imballo Incluso
            </button>
            <button
              onClick={() => setActiveTab("store-cartoni")}
              className={`whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "store-cartoni"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Store Cartoni
            </button>
            <button
              onClick={() => setActiveTab("b2c-calculator")}
              className={`whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === "b2c-calculator"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Calcolatore B2C
            </button>
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === "standard" && <StandardRatesTab />}
          {activeTab === "export-all-in" && <ExportAllInTab />}
          {activeTab === "store-cartoni" && <StoreCartoniTab />}
          {activeTab === "b2c-calculator" && <B2CCalculator />}
        </div>
      </section>
    </main>
  );
}
