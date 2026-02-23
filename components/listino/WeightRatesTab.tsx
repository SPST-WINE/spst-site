"use client";

import React from "react";
import { pricingData } from "../../lib/pricing-data";

// Mappa fasce di peso a numero di bottiglie (1 bottiglia = 1.5 kg)
const WEIGHT_TO_BOTTLES: Record<string, string> = {
  "0-5": "3",    // 0-5 kg ≈ 0-3 bottiglie (0-4.5 kg)
  "5-10": "6",   // 5-10 kg ≈ 4-6 bottiglie (6-9 kg)
  "10-20": "12", // 10-20 kg ≈ 7-13 bottiglie (10.5-19.5 kg)
  "20-30": "18", // 20-30 kg ≈ 14-20 bottiglie (21-30 kg)
  "30-50": "30", // 30-50 kg ≈ 21-33 bottiglie (31.5-49.5 kg)
};

const WEIGHT_RANGES = ["0-5", "5-10", "10-20", "20-30", "30-50"] as const;

export function WeightRatesTab() {
  const rates = pricingData.shipping_rates;

  // Raggruppa tutte le zone per visualizzazione
  const allZones = Object.entries(rates);

  // Funzione per ottenere il prezzo per una fascia di peso
  const getPriceForWeight = (zoneData: typeof rates[keyof typeof rates], weightRange: string): number | null => {
    const bottlesKey = WEIGHT_TO_BOTTLES[weightRange];
    if (!bottlesKey) return null;
    return zoneData.rates[bottlesKey as keyof typeof zoneData.rates] || null;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="subtitle-muted text-gray-600">
          Prezzi per spedizioni standard. I prezzi sono indicati per fasce di peso (1 bottiglia = 1,5 kg).
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="space-y-6">
          {allZones.map(([zoneKey, zoneData]) => (
            <div key={zoneKey} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {zoneData.destinations.join(", ")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{zoneData.notes}</p>
                {zoneKey === "usa_standard" && (
                  <p className="text-xs sm:text-sm font-semibold text-orange-600 mt-1">
                    ⚠️ Imballo Incluso
                  </p>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Peso (kg)
                      </th>
                      {WEIGHT_RANGES.map((weightRange) => (
                        <th
                          key={weightRange}
                          className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          {weightRange}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Prezzo (€)
                      </td>
                      {WEIGHT_RANGES.map((weightRange) => {
                        const price = getPriceForWeight(zoneData, weightRange);
                        return (
                          <td
                            key={weightRange}
                            className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-semibold transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 hover:scale-105 cursor-default"
                          >
                            {price !== null ? `€${price.toFixed(2)}` : "-"}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {allZones.map(([zoneKey, zoneData]) => (
          <div key={zoneKey} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-900">
                {zoneData.destinations.join(", ")}
              </h3>
              <p className="text-xs text-gray-600 mt-1">{zoneData.notes}</p>
              {zoneKey === "usa_standard" && (
                <p className="text-xs font-semibold text-orange-600 mt-1">
                  ⚠️ Imballo Incluso
                </p>
              )}
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {WEIGHT_RANGES.map((weightRange) => {
                  const price = getPriceForWeight(zoneData, weightRange);
                  return (
                    <div
                      key={weightRange}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 hover:bg-orange-50 hover:px-2 rounded transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {weightRange} kg
                      </span>
                      <span className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200">
                        {price !== null ? `€${price.toFixed(2)}` : "-"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
