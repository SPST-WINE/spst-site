"use client";

import React, { useState } from "react";
import { StandardRatesTab } from "../../components/listino/StandardRatesTab";
import { ExportAllInTab } from "../../components/listino/ExportAllInTab";
import { StoreCartoniTab } from "../../components/listino/StoreCartoniTab";
import { B2CCalculator } from "../../components/listino/B2CCalculator";
import Image from "next/image";

type Tab = "standard" | "export-all-in" | "store-cartoni";

export default function ListinoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("standard");

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Header con logo */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <div className="relative h-12 w-auto">
              <Image
                src="/veronasped-logo.png"
                alt="VeronaSped Logo"
                width={200}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

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
              Export All-In
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
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === "standard" && <StandardRatesTab />}
          {activeTab === "export-all-in" && <ExportAllInTab />}
          {activeTab === "store-cartoni" && <StoreCartoniTab />}
        </div>
      </section>

      {/* B2C Calculator Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
              Calcolatore B2C
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Calcola il costo totale per spedizioni B2C in Europa
            </p>
          </div>
          <B2CCalculator />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} VeronaSped. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </main>
  );
}
