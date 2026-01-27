"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "../../lib/pricing-data";

export function StoreCartoniTab() {
  const packaging = pricingData.export_packaging;
  const [packs, setPacks] = useState<number>(1);

  // Calcola lo sconto applicabile
  const applicableDiscount = packaging.discounts
    .slice()
    .sort((a, b) => b.min_packs - a.min_packs)
    .find((d) => packs >= d.min_packs) || packaging.discounts[0];

  // Calcola prezzi
  const pricePerUnit = applicableDiscount.price_per_unit;
  const totalCartons = packs * 10; // 10 cartoni per pacco
  const totalPrice = totalCartons * pricePerUnit;
  const savings = packs >= 10 
    ? totalCartons * (packaging.discounts[0].price_per_unit - pricePerUnit)
    : packs >= 5
    ? totalCartons * (packaging.discounts[0].price_per_unit - pricePerUnit)
    : 0;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Ordina pacchi da 10 cartoni per imballo export. Sconti progressivi per quantità.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Ordine Cartoni</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Numero di pacchi (10 cartoni ciascuno)
          </label>
          <input
            type="number"
            min="1"
            value={packs}
            onChange={(e) => setPacks(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Pricing Breakdown */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Pacchi ordinati:</span>
            <span className="font-semibold text-gray-900">{packs} pacchi</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Cartoni totali:</span>
            <span className="font-semibold text-gray-900">{totalCartons} cartoni</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Prezzo per cartone:</span>
            <span className="font-semibold text-gray-900">€{pricePerUnit.toFixed(2)}</span>
          </div>
          {savings > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Risparmio:</span>
              <span className="font-semibold">-€{savings.toFixed(2)}</span>
            </div>
          )}
          <div className="border-t border-gray-300 pt-3 mt-3">
            <div className="flex justify-between">
              <span className="text-base font-bold text-gray-900">Totale:</span>
              <span className="text-lg font-black text-orange-600">€{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Tabella Prezzi</h3>
          <p className="text-sm text-gray-600 mt-1">
            Prezzo base: €{packaging.discounts[0].price_per_unit.toFixed(2)} per cartone
          </p>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Pacchi (10 cartoni)
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Prezzo per cartone
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Prezzo per pacco
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Sconto
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {packaging.discounts.map((discount, idx) => {
                const packPrice = 10 * discount.price_per_unit;
                const prevPrice = idx > 0 ? packaging.discounts[idx - 1].price_per_unit : discount.price_per_unit;
                const discountPercent = idx > 0 
                  ? ((prevPrice - discount.price_per_unit) / prevPrice * 100).toFixed(0)
                  : "0";
                
                return (
                  <tr key={idx} className={packs >= discount.min_packs ? "bg-orange-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {discount.min_packs === 1 ? "1+" : `${discount.min_packs}+`} pacchi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-semibold">
                      €{discount.price_per_unit.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-semibold">
                      €{packPrice.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                      {discountPercent !== "0" && `-${discountPercent}%`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden p-4 space-y-3">
          {packaging.discounts.map((discount, idx) => {
            const packPrice = 10 * discount.price_per_unit;
            const prevPrice = idx > 0 ? packaging.discounts[idx - 1].price_per_unit : discount.price_per_unit;
            const discountPercent = idx > 0 
              ? ((prevPrice - discount.price_per_unit) / prevPrice * 100).toFixed(0)
              : "0";
            const isActive = packs >= discount.min_packs;
            
            return (
              <div
                key={idx}
                className={`p-4 rounded-lg border ${
                  isActive
                    ? "bg-orange-50 border-orange-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-900">
                    {discount.min_packs === 1 ? "1+" : `${discount.min_packs}+`} pacchi
                  </span>
                  {discountPercent !== "0" && (
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      -{discountPercent}%
                    </span>
                  )}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Per cartone:</span>
                  <span className="font-semibold text-gray-900">€{discount.price_per_unit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Per pacco (10 cartoni):</span>
                  <span className="font-semibold text-gray-900">€{packPrice.toFixed(2)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
