"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "../../lib/pricing-data";

// Mappa tutti i paesi alle loro zone
const countryToZoneMap: Record<string, { zoneKey: string; countryName: string }> = {
  // Italia
  "Italia": { zoneKey: "italia", countryName: "Italia" },
  "Sicilia": { zoneKey: "italia", countryName: "Sicilia" },
  "Sardegna": { zoneKey: "italia", countryName: "Sardegna" },
  
  // UE Zona 1
  "Germania": { zoneKey: "ue_zona_1", countryName: "Germania" },
  "Francia": { zoneKey: "ue_zona_1", countryName: "Francia" },
  "Belgio": { zoneKey: "ue_zona_1", countryName: "Belgio" },
  "Grecia": { zoneKey: "ue_zona_1", countryName: "Grecia" },
  "Lussemburgo": { zoneKey: "ue_zona_1", countryName: "Lussemburgo" },
  "Portogallo": { zoneKey: "ue_zona_1", countryName: "Portogallo" },
  "Olanda": { zoneKey: "ue_zona_1", countryName: "Olanda" },
  "Spagna": { zoneKey: "ue_zona_1", countryName: "Spagna" },
  
  // UE Zona 2
  "Austria": { zoneKey: "ue_zona_2", countryName: "Austria" },
  "Croazia": { zoneKey: "ue_zona_2", countryName: "Croazia" },
  "Polonia": { zoneKey: "ue_zona_2", countryName: "Polonia" },
  "Repubblica Ceca": { zoneKey: "ue_zona_2", countryName: "Repubblica Ceca" },
  "Slovenia": { zoneKey: "ue_zona_2", countryName: "Slovenia" },
  "Ungheria": { zoneKey: "ue_zona_2", countryName: "Ungheria" },
  
  // UE Zona 3
  "Bulgaria": { zoneKey: "ue_zona_3", countryName: "Bulgaria" },
  "Estonia": { zoneKey: "ue_zona_3", countryName: "Estonia" },
  "Lettonia": { zoneKey: "ue_zona_3", countryName: "Lettonia" },
  "Lituania": { zoneKey: "ue_zona_3", countryName: "Lituania" },
  "Romania": { zoneKey: "ue_zona_3", countryName: "Romania" },
  
  // Extra UE Nord
  "Svezia": { zoneKey: "extra_ue_nord", countryName: "Svezia" },
  "Finlandia": { zoneKey: "extra_ue_nord", countryName: "Finlandia" },
  
  // UK
  "Regno Unito": { zoneKey: "uk", countryName: "Regno Unito" },
  
  // Svizzera/Norvegia
  "Svizzera": { zoneKey: "svizzera_norvegia", countryName: "Svizzera" },
  "Norvegia": { zoneKey: "svizzera_norvegia", countryName: "Norvegia" },
  
  // USA
  "USA": { zoneKey: "usa_standard", countryName: "USA" },
  
  // Canada
  "Canada": { zoneKey: "canada", countryName: "Canada" },
  
  // Asia/Oceania
  "Giappone": { zoneKey: "asia_oceania_1", countryName: "Giappone" },
  "Hong Kong": { zoneKey: "asia_oceania_1", countryName: "Hong Kong" },
  "Singapore": { zoneKey: "asia_oceania_2", countryName: "Singapore" },
  "Taiwan": { zoneKey: "asia_oceania_2", countryName: "Taiwan" },
};

// Estrai tutti i paesi unici
const allCountries = Array.from(new Set(Object.keys(countryToZoneMap))).sort();

export function B2CCalculator() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Francia");
  const [bottles, setBottles] = useState<number>(6);
  const [isLiquor, setIsLiquor] = useState<boolean>(false);
  const [usaStateType, setUsaStateType] = useState<"standard" | "alaska-hawaii">("standard");

  const exciseRates = pricingData.b2c_excise_rates;
  const shippingRates = pricingData.shipping_rates;

  // Trova la zona e i dati per il paese selezionato
  const countryData = countryToZoneMap[selectedCountry];
  const zoneData = countryData ? shippingRates[countryData.zoneKey as keyof typeof shippingRates] : null;
  
  // Ottieni le quantità disponibili per la zona selezionata
  const availableBottles = useMemo(() => {
    if (!zoneData) return [6];
    return Object.keys(zoneData.rates)
      .map(Number)
      .sort((a, b) => a - b);
  }, [zoneData]);

  // Aggiorna bottles se non è disponibile per la zona selezionata
  React.useEffect(() => {
    if (zoneData && !availableBottles.includes(bottles)) {
      setBottles(availableBottles[0] || 6);
    }
  }, [selectedCountry, availableBottles, bottles, zoneData]);

  // Trova il tasso accise per il paese (se disponibile)
  const exciseData = useMemo(() => {
    const countryName = countryData?.countryName || "";
    // Mappa nomi paesi ai tassi accise
    const exciseMap: Record<string, { rate: number; name: string }> = {
      "Francia": exciseRates.france,
      "Austria": exciseRates.austria,
      "Spagna": exciseRates.spain,
      "Olanda": exciseRates.netherlands,
      "Norvegia": exciseRates.norway,
      "Belgio": exciseRates.belgium,
      "Finlandia": exciseRates.finland,
      "Danimarca": exciseRates.denmark,
      "Svezia": exciseRates.sweden,
      "Repubblica Ceca": exciseRates.czech_republic,
      "Slovacchia": exciseRates.slovakia,
      "Lettonia": exciseRates.latvia,
      "Lituania": exciseRates.lithuania,
    };
    return exciseMap[countryName] || null;
  }, [selectedCountry, exciseRates, countryData]);

  // Calcola i costi
  const calculations = useMemo(() => {
    if (!zoneData || !countryData) return null;

    const isUSA = countryData.zoneKey === "usa_standard";
    
    // Prezzo spedizione base
    const shippingRate = zoneData.rates[bottles.toString() as keyof typeof zoneData.rates] as number | undefined;
    let shippingCost = shippingRate || 0;

    // Surcharge per Alaska/Hawaii (solo USA)
    if (isUSA && usaStateType === "alaska-hawaii") {
      const surchargePer6Bottles = 65.0;
      const surchargeMultiplier = Math.ceil(bottles / 6);
      shippingCost += surchargeMultiplier * surchargePer6Bottles;
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

    // Accise
    const exciseRate = exciseData?.rate || 0;
    const exciseTotal = exciseRate * bottles;

    // Toggle liquori: +15€ ogni 3 bottiglie
    const liquorSurcharge = isLiquor ? Math.ceil(bottles / 3) * 15 : 0;

    // IVA (22% su spedizione + imballo per paesi UE, escluso se già incluso)
    const isEU = !isUSA && !["uk", "svizzera_norvegia", "canada", "asia_oceania_1", "asia_oceania_2"].includes(countryData.zoneKey);
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
      countryName: countryData.countryName,
      isUSA,
    };
  }, [selectedCountry, bottles, isLiquor, usaStateType, zoneData, countryData, exciseData]);

  if (!calculations || !zoneData) return null;

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
              if (e.target.value !== "USA") {
                setUsaStateType("standard");
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {allCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Numero Bottiglie - solo quantità disponibili */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Numero bottiglie
          </label>
          <select
            value={bottles}
            onChange={(e) => setBottles(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {availableBottles.map((bottleCount) => (
              <option key={bottleCount} value={bottleCount}>
                {bottleCount} bottiglie
              </option>
            ))}
          </select>
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
        {calculations.isUSA && (
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
          
          {calculations.exciseTotal > 0 && exciseData && (
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
