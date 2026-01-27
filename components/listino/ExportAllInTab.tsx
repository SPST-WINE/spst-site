"use client";

import React from "react";
import { pricingData } from "../../lib/pricing-data";

export function ExportAllInTab() {
  const rates = pricingData.shipping_rates;
  const allZones = Object.entries(rates);

  // Calcola il prezzo con imballo: aggiunge 5€ ogni 6 bottiglie
  const calculatePriceWithPackaging = (basePrice: number, bottles: number): number => {
    const cartonsNeeded = Math.ceil(bottles / 6); // 1 cartone ogni 6 bottiglie
    const packagingCost = cartonsNeeded * 5; // 5€ per cartone
    return basePrice + packagingCost;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Prezzi listino standard con imballo incluso. Aggiunta di €5 ogni 6 bottiglie (1 cartone = 6 bottiglie = €5).
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
                <p className="text-xs sm:text-sm font-semibold text-orange-600 mt-1">
                  Imballo incluso (+€5 ogni 6 bottiglie)
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Bottiglie
                      </th>
                      {Object.keys(zoneData.rates).map((bottles) => (
                        <th
                          key={bottles}
                          className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          {bottles}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Prezzo con Imballo (€)
                      </td>
                      {Object.entries(zoneData.rates).map(([bottles, basePrice]) => {
                        const totalPrice = calculatePriceWithPackaging(basePrice, parseInt(bottles));
                        return (
                          <td
                            key={bottles}
                            className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-semibold transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 hover:scale-105 cursor-default"
                          >
                            €{totalPrice.toFixed(2)}
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
              <p className="text-xs font-semibold text-orange-600 mt-1">
                Imballo incluso (+€5 ogni 6 bottiglie)
              </p>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {Object.entries(zoneData.rates).map(([bottles, basePrice]) => {
                  const totalPrice = calculatePriceWithPackaging(basePrice, parseInt(bottles));
                  return (
                    <div
                      key={bottles}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 hover:bg-orange-50 hover:px-2 rounded transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {bottles} bottiglie
                      </span>
                      <span className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200">
                        €{totalPrice.toFixed(2)}
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
