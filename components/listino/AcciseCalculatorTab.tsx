"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "../../lib/pricing-data";

export function AcciseCalculatorTab() {
  const exciseMap = pricingData.european_excise_map;
  const entries = Object.entries(exciseMap);
  const [selectedKey, setSelectedKey] = useState<string>(entries[0]?.[0] ?? "italy");
  const [bottles, setBottles] = useState<number>(6);

  const data = exciseMap[selectedKey as keyof typeof exciseMap];

  const calculations = useMemo(() => {
    if (!data) return null;
    const excisePerBottle = data.excise_75cl;
    const vatRate = data.vat;
    const totalExcise = excisePerBottle * bottles;
    const vatOnExcise = totalExcise * vatRate;
    return {
      excisePerBottle,
      vatRate,
      totalExcise,
      vatOnExcise,
      totalWithVat: totalExcise + vatOnExcise,
    };
  }, [data, bottles]);

  if (!data || !calculations) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Selettore Paese */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Paese (accisa B2C)
          </label>
          <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
          >
            {entries.map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </div>

        {/* Numero bottiglie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Numero bottiglie (0,75L)
          </label>
          <input
            type="number"
            min={1}
            value={bottles}
            onChange={(e) => setBottles(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
          />
        </div>
      </div>

      {/* Breakdown */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3">
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
          Calcolo Accise {data.name}
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Accisa per bottiglia (0,75L):</span>
            <span className="font-semibold text-gray-900">€{calculations.excisePerBottle.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Accise totali ({bottles} bottiglie):</span>
            <span className="font-semibold text-gray-900">€{calculations.totalExcise.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">IVA su accise ({(calculations.vatRate * 100).toFixed(0)}%):</span>
            <span className="font-semibold text-gray-900">€{calculations.vatOnExcise.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-300 pt-3 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-bold text-gray-900">Totale accise + IVA:</span>
              <span className="text-lg sm:text-xl font-black text-orange-600">€{calculations.totalWithVat.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-[11px] sm:text-xs text-gray-500">
          Il calcolo è indicativo e considera solo accise e IVA sul valore delle accise. Non include costi di spedizione, imballo o altri oneri locali.
        </p>
      </div>
    </div>
  );
}
