"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "../../lib/pricing-data";

export function ExportAllInTab() {
  const rates = pricingData.shipping_rates;
  const packaging = pricingData.export_packaging;
  const [selectedZone, setSelectedZone] = useState<string>("italia");
  const [bottles, setBottles] = useState<number>(6);

  // Calcola cartoni necessari (arrotonda per eccesso)
  const cartonsNeeded = Math.ceil(bottles / packaging.bottles_per_carton);
  
  // Calcola pacchi da 10 cartoni
  const packsNeeded = Math.ceil(cartonsNeeded / 10);
  
  // Trova lo sconto applicabile
  const applicableDiscount = packaging.discounts
    .slice()
    .sort((a, b) => b.min_packs - a.min_packs)
    .find((d) => packsNeeded >= d.min_packs) || packaging.discounts[0];
  
  // Calcola costo imballo
  const packagingCost = packsNeeded * applicableDiscount.price_per_unit * 10; // 10 cartoni per pacco
  
  // Trova il prezzo spedizione per la zona selezionata
  const zoneData = rates[selectedZone as keyof typeof rates];
  const shippingRate = zoneData?.rates[bottles.toString() as keyof typeof zoneData.rates] as number | undefined;
  const shippingCost = shippingRate ? shippingRate + 5 : 0; // Aggiungi €5 al prezzo base
  
  // Totale
  const total = shippingCost + packagingCost;

  const allZones = Object.entries(rates);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Prezzi listino standard con imballo incluso. Aggiunta di €5 rispetto al listino standard.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Calcolatore Listino con Imballo</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zona di destinazione
            </label>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              {allZones.map(([key, data]) => (
                <option key={key} value={key}>
                  {data.destinations.join(", ")}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Numero bottiglie
            </label>
            <input
              type="number"
              min="1"
              value={bottles}
              onChange={(e) => setBottles(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Cartoni necessari:</span>
            <span className="font-semibold text-gray-900">{cartonsNeeded} cartoni</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Pacchi da 10 cartoni:</span>
            <span className="font-semibold text-gray-900">{packsNeeded} pacchi</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Prezzo spedizione:</span>
            <span className="font-semibold text-gray-900">€{shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Costo imballo ({applicableDiscount.price_per_unit}€/cartone):</span>
            <span className="font-semibold text-gray-900">€{packagingCost.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-300 pt-2 mt-2">
            <div className="flex justify-between">
              <span className="text-base font-bold text-gray-900">Totale:</span>
              <span className="text-lg font-black text-orange-600">€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table View - Desktop */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="space-y-6">
          {allZones.map(([zoneKey, zoneData]) => {
            const zoneRates = Object.entries(zoneData.rates);
            
            return (
              <div key={zoneKey} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900">
                    {zoneData.destinations.join(", ")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{zoneData.notes}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Bottiglie
                        </th>
                        {zoneRates.map(([bottles]) => {
                          const cartons = Math.ceil(parseInt(bottles) / packaging.bottles_per_carton);
                          const packs = Math.ceil(cartons / 10);
                          const discount = packaging.discounts
                            .slice()
                            .sort((a, b) => b.min_packs - a.min_packs)
                            .find((d) => packs >= d.min_packs) || packaging.discounts[0];
                          const packCost = packs * discount.price_per_unit * 10;
                          const shipCost = zoneData.rates[bottles as keyof typeof zoneData.rates] as number;
                          const total = shipCost + packCost;
                          
                          return (
                            <th
                              key={bottles}
                              className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                            >
                              {bottles}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Prezzo All-In (€)
                        </td>
                        {zoneRates.map(([bottles]) => {
                          const cartons = Math.ceil(parseInt(bottles) / packaging.bottles_per_carton);
                          const packs = Math.ceil(cartons / 10);
                          const discount = packaging.discounts
                            .slice()
                            .sort((a, b) => b.min_packs - a.min_packs)
                            .find((d) => packs >= d.min_packs) || packaging.discounts[0];
                          const packCost = packs * discount.price_per_unit * 10;
                          const baseShipCost = zoneData.rates[bottles as keyof typeof zoneData.rates] as number;
                          const shipCost = baseShipCost + 5; // Aggiungi €5
                          const total = shipCost + packCost;
                          
                          return (
                            <td
                              key={bottles}
                              className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-semibold"
                            >
                              €{total.toFixed(2)}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {allZones.map(([zoneKey, zoneData]) => {
          const zoneRates = Object.entries(zoneData.rates);
          
          return (
            <div key={zoneKey} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="text-base font-bold text-gray-900">
                  {zoneData.destinations.join(", ")}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{zoneData.notes}</p>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  {zoneRates.map(([bottles]) => {
                    const cartons = Math.ceil(parseInt(bottles) / packaging.bottles_per_carton);
                    const packs = Math.ceil(cartons / 10);
                    const discount = packaging.discounts
                      .slice()
                      .sort((a, b) => b.min_packs - a.min_packs)
                      .find((d) => packs >= d.min_packs) || packaging.discounts[0];
                    const packCost = packs * discount.price_per_unit * 10;
                    const baseShipCost = zoneData.rates[bottles as keyof typeof zoneData.rates] as number;
                    const shipCost = baseShipCost + 5; // Aggiungi €5
                    const total = shipCost + packCost;
                    
                    return (
                      <div
                        key={bottles}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {bottles} bottiglie
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          €{total.toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
