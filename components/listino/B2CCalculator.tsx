"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "../../lib/pricing-data";

export function B2CCalculator() {
  const [selectedCountry, setSelectedCountry] = useState<string>("france");
  const [bottles, setBottles] = useState<number>(6);
  const [isLiquor, setIsLiquor] = useState<boolean>(false);
  const [usaStateType, setUsaStateType] = useState<"standard" | "alaska-hawaii">("standard");

  const exciseRates = pricingData.b2c_excise_rates;
  const shippingRates = pricingData.shipping_rates;

  // Trova la zona di spedizione per il paese selezionato
  const findShippingZone = (countryKey: string) => {
    const countryName = exciseRates[countryKey as keyof typeof exciseRates]?.name || "";
    
    // Mappa paesi alle zone
    const countryToZone: Record<string, string> = {
      france: "ue_zona_1",
      spain: "ue_zona_1",
      netherlands: "ue_zona_1",
      belgium: "ue_zona_1",
      austria: "ue_zona_2",
      czech_republic: "ue_zona_2",
      slovakia: "ue_zona_2",
      latvia: "ue_zona_3",
      lithuania: "ue_zona_3",
      finland: "extra_ue_nord",
      sweden: "extra_ue_nord",
      denmark: "extra_ue_nord",
      norway: "svizzera_norvegia",
    };

    return countryToZone[countryKey] || "ue_zona_1";
  };

  // Calcola i costi
  const calculations = useMemo(() => {
    const isUSA = selectedCountry === "usa";
    const countryData = isUSA ? null : exciseRates[selectedCountry as keyof typeof exciseRates];
    
    let shippingCost = 0;
    let exciseRate = 0;
    let exciseTotal = 0;
    let countryName = "";

    // Gestione USA (caso speciale)
    if (isUSA) {
      countryName = "USA";
      const usaZone = shippingRates.usa_standard;
      const baseRate = usaZone.rates[bottles.toString() as keyof typeof usaZone.rates] as number | undefined;
      shippingCost = baseRate || 0;
      
      // Surcharge per Alaska/Hawaii
      if (usaStateType === "alaska-hawaii") {
        const surchargePer6Bottles = 65.0;
        const surchargeMultiplier = Math.ceil(bottles / 6);
        shippingCost += surchargeMultiplier * surchargePer6Bottles;
      }
      exciseRate = 0; // USA non ha accise nel calcolatore B2C
      exciseTotal = 0;
    } else {
      // Paesi UE con accise
      if (!countryData) return null;
      countryName = countryData.name;
      
      const zoneKey = findShippingZone(selectedCountry);
      const zoneData = shippingRates[zoneKey as keyof typeof shippingRates];
      
      // Prezzo spedizione base
      const shippingRate = zoneData?.rates[bottles.toString() as keyof typeof zoneData.rates] as number | undefined;
      shippingCost = shippingRate || 0;
      
      // Accise
      exciseRate = countryData.rate;
      exciseTotal = exciseRate * bottles;
    }

    // Costo imballo (escluso per USA standard che ha imballo incluso)
    let packagingCost = 0;
    if (!isUSA) {
      // Calcolo imballo: 1 cartone ogni 6 bottiglie
      const cartonsNeeded = Math.ceil(bottles / 6);
      const packsNeeded = Math.ceil(cartonsNeeded / 10);
      const applicableDiscount = pricingData.export_packaging.discounts
        .slice()
        .sort((a, b) => b.min_packs - a.min_packs)
        .find((d) => packsNeeded >= d.min_packs) || pricingData.export_packaging.discounts[0];
      packagingCost = packsNeeded * applicableDiscount.price_per_unit * 10;
    }

    // Toggle liquori: +15€ ogni 3 bottiglie
    const liquorSurcharge = isLiquor ? Math.ceil(bottles / 3) * 15 : 0;

    // IVA (22% su spedizione + imballo per paesi UE, escluso se già incluso)
    const isEU = !isUSA && !["norway", "switzerland"].includes(selectedCountry);
    const vatBase = shippingCost + packagingCost + liquorSurcharge;
    const vat = isEU ? vatBase * 0.22 : 0;

    // Totale
    const subtotal = shippingCost + packagingCost + exciseTotal + liquorSurcharge;
    const total = subtotal + vat;

    return {
      shippingCost,
      packagingCost,
      exciseTotal,
      exciseRate,
      liquorSurcharge,
      vat,
      vatBase,
      subtotal,
      total,
      isEU,
      countryName,
      isUSA,
    };
  }, [selectedCountry, bottles, isLiquor, usaStateType]);

  if (!calculations && selectedCountry !== "usa") return null;

  const availableCountries = Object.keys(exciseRates);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Selettore Paese */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Paese di destinazione
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              if (e.target.value !== "usa") {
                setUsaStateType("standard");
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {availableCountries.map((key) => {
              const country = exciseRates[key as keyof typeof exciseRates];
              return (
                <option key={key} value={key}>
                  {country.name}
                </option>
              );
            })}
            <option value="usa">USA</option>
          </select>
        </div>

        {/* Numero Bottiglie */}
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

        {/* Toggle Liquori */}
        <div className="md:col-span-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isLiquor}
              onChange={(e) => setIsLiquor(e.target.checked)}
              className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Spedizione Liquori (+€15 ogni 3 bottiglie)
            </span>
          </label>
        </div>

        {/* Selettore Stato USA */}
        {selectedCountry === "usa" && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo di stato USA
            </label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="usaState"
                  value="standard"
                  checked={usaStateType === "standard"}
                  onChange={(e) => setUsaStateType(e.target.value as "standard" | "alaska-hawaii")}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">Stati Standard</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="usaState"
                  value="alaska-hawaii"
                  checked={usaStateType === "alaska-hawaii"}
                  onChange={(e) => setUsaStateType(e.target.value as "standard" | "alaska-hawaii")}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">
                  Alaska / Hawaii / Puerto Rico (+€65 ogni 6 bottiglie)
                </span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Breakdown */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-3">
        <h4 className="text-lg font-bold text-gray-900 mb-4">Breakdown Costi</h4>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Prezzo Spedizione:</span>
            <span className="font-semibold text-gray-900">€{calculations.shippingCost.toFixed(2)}</span>
          </div>
          
          {calculations.packagingCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Costo Imballo:</span>
              <span className="font-semibold text-gray-900">€{calculations.packagingCost.toFixed(2)}</span>
            </div>
          )}
          
          {calculations.liquorSurcharge > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Surcharge Liquori:</span>
              <span className="font-semibold text-gray-900">€{calculations.liquorSurcharge.toFixed(2)}</span>
            </div>
          )}
          
          {!calculations.isUSA && calculations.exciseTotal > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                Accise {calculations.countryName} ({calculations.exciseRate.toFixed(3)}€/bottiglia):
              </span>
              <span className="font-semibold text-gray-900">€{calculations.exciseTotal.toFixed(2)}</span>
            </div>
          )}
          
          {calculations.vat > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">IVA (22%):</span>
              <span className="font-semibold text-gray-900">€{calculations.vat.toFixed(2)}</span>
            </div>
          )}
          
          <div className="border-t border-gray-300 pt-3 mt-3">
            <div className="flex justify-between">
              <span className="text-base font-bold text-gray-900">Totale:</span>
              <span className="text-xl font-black text-orange-600">€{calculations.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-500">
            {calculations.isUSA
              ? "Imballo incluso nel prezzo spedizione. Dazi esclusi."
              : calculations.isEU
              ? "IVA inclusa. Imballo calcolato separatamente."
              : "Dazi esclusi. Imballo calcolato separatamente."}
          </p>
        </div>
      </div>
    </div>
  );
}
