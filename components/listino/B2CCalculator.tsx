"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "../../lib/pricing-data";
import { USAShippingRulesCard } from "./USAShippingRulesCard";

// Mappa tutti i paesi alle loro zone e chiavi excise
const countryToZoneMap: Record<string, { zoneKey: string; countryName: string; exciseKey?: string }> = {
  // Italia
  "Italia": { zoneKey: "italia", countryName: "Italia", exciseKey: "italy" },
  "Sicilia": { zoneKey: "italia", countryName: "Sicilia", exciseKey: "italy" },
  "Sardegna": { zoneKey: "italia", countryName: "Sardegna", exciseKey: "italy" },
  
  // UE Zona 1
  "Germania": { zoneKey: "ue_zona_1", countryName: "Germania", exciseKey: "germany" },
  "Francia": { zoneKey: "ue_zona_1", countryName: "Francia", exciseKey: "france" },
  "Belgio": { zoneKey: "ue_zona_1", countryName: "Belgio", exciseKey: "belgium" },
  "Grecia": { zoneKey: "ue_zona_1", countryName: "Grecia", exciseKey: "greece" },
  "Lussemburgo": { zoneKey: "ue_zona_1", countryName: "Lussemburgo", exciseKey: "luxembourg" },
  "Portogallo": { zoneKey: "ue_zona_1", countryName: "Portogallo", exciseKey: "portugal" },
  "Olanda": { zoneKey: "ue_zona_1", countryName: "Olanda", exciseKey: "netherlands" },
  "Spagna": { zoneKey: "ue_zona_1", countryName: "Spagna", exciseKey: "spain" },
  
  // UE Zona 2
  "Austria": { zoneKey: "ue_zona_2", countryName: "Austria", exciseKey: "austria" },
  "Croazia": { zoneKey: "ue_zona_2", countryName: "Croazia", exciseKey: "croatia" },
  "Polonia": { zoneKey: "ue_zona_2", countryName: "Polonia", exciseKey: "poland" },
  "Repubblica Ceca": { zoneKey: "ue_zona_2", countryName: "Repubblica Ceca", exciseKey: "czech_republic" },
  "Slovenia": { zoneKey: "ue_zona_2", countryName: "Slovenia", exciseKey: "slovenia" },
  "Ungheria": { zoneKey: "ue_zona_2", countryName: "Ungheria", exciseKey: "hungary" },
  
  // UE Zona 3
  "Bulgaria": { zoneKey: "ue_zona_3", countryName: "Bulgaria", exciseKey: "bulgaria" },
  "Estonia": { zoneKey: "ue_zona_3", countryName: "Estonia", exciseKey: "estonia" },
  "Lettonia": { zoneKey: "ue_zona_3", countryName: "Lettonia", exciseKey: "latvia" },
  "Lituania": { zoneKey: "ue_zona_3", countryName: "Lituania", exciseKey: "lithuania" },
  "Romania": { zoneKey: "ue_zona_3", countryName: "Romania", exciseKey: "romania" },
  
  // Scandinavia
  "Svezia": { zoneKey: "scandinavia", countryName: "Svezia", exciseKey: "sweden" },
  "Finlandia": { zoneKey: "scandinavia", countryName: "Finlandia", exciseKey: "finland" },
  
  // UK
  "Regno Unito": { zoneKey: "uk", countryName: "Regno Unito", exciseKey: "uk" },
  
  // Svizzera/Norvegia
  "Svizzera": { zoneKey: "svizzera_norvegia", countryName: "Svizzera" },
  "Norvegia": { zoneKey: "svizzera_norvegia", countryName: "Norvegia", exciseKey: "norway" },
  
  // USA
  "USA": { zoneKey: "usa_standard", countryName: "USA" },
  
  // Canada
  "Canada": { zoneKey: "canada", countryName: "Canada" },
  
  // Asia/Oceania
  "Giappone": { zoneKey: "asia_oceania", countryName: "Giappone" },
  "Hong Kong": { zoneKey: "asia_oceania", countryName: "Hong Kong" },
  "Singapore": { zoneKey: "asia_oceania", countryName: "Singapore" },
  "Taiwan": { zoneKey: "asia_oceania", countryName: "Taiwan" },
};

// Estrai tutti i paesi unici
const allCountries = Array.from(new Set(Object.keys(countryToZoneMap))).sort();

// Mappa costi gestione fiscale per paese (in euro per bottiglia)
const fiscalManagementCosts: Record<string, number> = {
  "Belgio": 0.50,
  "Spagna": 0.50,
  "Francia": 0.50,
  "Germania": 0.50,
  "Olanda": 0.50,
  "Austria": 0.50,
  "Repubblica Ceca": 0.70,
  "Danimarca": 0.70,
  "Svezia": 0.70,
  "Lituania": 0.70,
  "Lettonia": 0.70,
};

export function B2CCalculator() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Francia");
  const [bottles, setBottles] = useState<number>(6);
  const [isLiquor, setIsLiquor] = useState<boolean>(false);
  const [usaStateType, setUsaStateType] = useState<"standard" | "tier_5" | "tier_65">("standard");
  const [includePackaging, setIncludePackaging] = useState<boolean>(true);

  const exciseMap = pricingData.european_excise_map;
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

  // Trova i dati accise e IVA per il paese
  const exciseData = useMemo(() => {
    if (!countryData?.exciseKey) return null;
    return exciseMap[countryData.exciseKey as keyof typeof exciseMap] || null;
  }, [selectedCountry, exciseMap, countryData]);

  // Calcola i costi
  const calculations = useMemo(() => {
    if (!zoneData || !countryData) return null;

    const isUSA = countryData.zoneKey === "usa_standard";
    
    // Prezzo spedizione base
    const shippingRate = zoneData.rates[bottles.toString() as keyof typeof zoneData.rates] as number | undefined;
    let shippingCost = shippingRate || 0;

    // Surcharge per USA
    if (isUSA && 'surcharge_rules' in zoneData && zoneData.surcharge_rules) {
      if (usaStateType === "tier_5") {
        // +5€ ogni 6 bottiglie per AR, MO, MT, NE, OK, TX
        const surchargePer6Bottles = 5.0;
        const surchargeMultiplier = Math.ceil(bottles / 6);
        shippingCost += surchargeMultiplier * surchargePer6Bottles;
      } else if (usaStateType === "tier_65") {
        // +65€ ogni 6 bottiglie per AK, HI, PR
        const surchargePer6Bottles = 65.0;
        const surchargeMultiplier = Math.ceil(bottles / 6);
        shippingCost += surchargeMultiplier * surchargePer6Bottles;
      }
    }

    // Costo imballo (escluso per USA standard che ha imballo incluso)
    // 1 cartone = 6 bottiglie = 5€ (non bundle, solo nello Store Cartoni)
    let packagingCost = 0;
    if (!isUSA && includePackaging) {
      const cartonsNeeded = Math.ceil(bottles / 6); // 1 cartone ogni 6 bottiglie
      packagingCost = cartonsNeeded * 5; // 5€ per cartone
    }

    // Verifica se l'IVA è già inclusa nel prezzo base (guardando le note)
    const vatIncludedInShipping = zoneData.notes?.includes("IVA inclusa") || false;

    // Accise (per 75cl)
    const exciseRate = exciseData?.excise_75cl || 0;
    const exciseTotal = exciseRate * bottles;

    // Toggle liquori: +15€ ogni 3 bottiglie
    const liquorSurcharge = isLiquor ? Math.ceil(bottles / 3) * 15 : 0;

    // Gestione fiscale (per bottiglia)
    const fiscalManagementPerBottle = fiscalManagementCosts[countryData.countryName] || 0;
    const fiscalManagementTotal = fiscalManagementPerBottle * bottles;

    // IVA: per Europa sempre IVA italiana (0.22), per extra-UE IVA 0
    // Europa = zoneKey diverso da uk, svizzera_norvegia, usa_standard, canada, asia_oceania
    const isEU = countryData.zoneKey !== "uk" && 
                 countryData.zoneKey !== "svizzera_norvegia" && 
                 countryData.zoneKey !== "usa_standard" && 
                 countryData.zoneKey !== "canada" && 
                 countryData.zoneKey !== "asia_oceania";
    
    // Se l'IVA è già inclusa nel prezzo spedizione, non ricalcolarla
    // Calcoliamo l'IVA solo su: imballo, liquori, gestione fiscale (se aggiunti)
    // Per il totale finale, se l'IVA è inclusa nel shipping, il totale è già comprensivo
    const vatRate = isEU ? 0.22 : 0; // Sempre IVA italiana (22%) per Europa, 0 per extra-UE
    
    // Base IVA: solo su componenti aggiuntivi (imballo, liquori, gestione fiscale)
    // Il prezzo spedizione ha già IVA inclusa se vatIncludedInShipping è true
    const vatBase = packagingCost + liquorSurcharge + fiscalManagementTotal;
    const vat = (isEU && !vatIncludedInShipping) ? vatBase * vatRate : 0;
    
    // Se l'IVA è inclusa nel shipping, dobbiamo estrarre l'IVA dal prezzo per calcolare il totale corretto
    // shippingCost include già IVA, quindi il totale sarà: shippingCost + altri costi + IVA su altri costi
    // Se l'IVA non è inclusa, calcoliamo tutto normalmente
    let shippingCostNet = shippingCost;
    let shippingVat = 0;
    if (vatIncludedInShipping && isEU) {
      // Estrai IVA dal prezzo spedizione (prezzo / 1.22 * 0.22)
      shippingCostNet = shippingCost / (1 + vatRate);
      shippingVat = shippingCost - shippingCostNet;
    }

    // Totale: se IVA inclusa nel shipping, il totale è shippingCost + altri costi + IVA su altri costi
    // Se IVA non inclusa, totale = subtotal + vat
    const subtotal = shippingCostNet + packagingCost + exciseTotal + liquorSurcharge + fiscalManagementTotal;
    const totalVat = vatIncludedInShipping ? shippingVat + vat : vat;
    const total = subtotal + totalVat;

    return {
      shippingCost,
      packagingCost,
      exciseTotal,
      exciseRate,
      liquorSurcharge,
      fiscalManagementTotal,
      fiscalManagementPerBottle,
      vat,
      vatRate,
      vatBase,
      vatIncludedInShipping,
      shippingVat,
      shippingCostNet,
      subtotal,
      total,
      totalVat,
      isEU,
      countryName: countryData.countryName,
      isUSA,
    };
  }, [selectedCountry, bottles, isLiquor, usaStateType, includePackaging, zoneData, countryData, exciseData]);

  if (!calculations || !zoneData) return null;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="subtitle-muted text-gray-600">
          Calcolatore spedizione + accisa + imballo
        </p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
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
                setIsLiquor(false); // Reset liquori se non è USA
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {availableBottles.map((bottleCount) => (
              <option key={bottleCount} value={bottleCount}>
                {bottleCount} bottiglie
              </option>
            ))}
          </select>
        </div>

        {/* Toggle Imballo - Solo per paesi non USA */}
        {selectedCountry !== "USA" && (
          <div className="md:col-span-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includePackaging}
                onChange={(e) => setIncludePackaging(e.target.checked)}
                className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Includi Imballo (€5 per cartone, 1 cartone = 6 bottiglie)
              </span>
            </label>
          </div>
        )}

        {/* Toggle Liquori - Solo per USA */}
        {selectedCountry === "USA" && (
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
        )}

        {/* Selettore Stato USA */}
        {calculations.isUSA && 'surcharge_rules' in zoneData && zoneData.surcharge_rules && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo di stato USA
            </label>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="usaState"
                  value="standard"
                  checked={usaStateType === "standard"}
                  onChange={(e) => setUsaStateType(e.target.value as "standard" | "tier_5" | "tier_65")}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">Stati Standard</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="usaState"
                  value="tier_5"
                  checked={usaStateType === "tier_5"}
                  onChange={(e) => setUsaStateType(e.target.value as "standard" | "tier_5" | "tier_65")}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">
                  AR, MO, MT, NE, OK, TX (+€5 ogni 6 bottiglie)
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="usaState"
                  value="tier_65"
                  checked={usaStateType === "tier_65"}
                  onChange={(e) => setUsaStateType(e.target.value as "standard" | "tier_5" | "tier_65")}
                  className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">
                  AK, HI, PR (+€65 ogni 6 bottiglie)
                </span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Breakdown */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3">
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Breakdown Costi</h4>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              Prezzo Spedizione{calculations.vatIncludedInShipping && calculations.isEU ? " (IVA inclusa)" : ""}:
            </span>
            <span className="font-semibold text-gray-900">€{calculations.shippingCost.toFixed(2)}</span>
          </div>
          
          {calculations.packagingCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Costo Imballo:</span>
              <span className="font-semibold text-gray-900">€{calculations.packagingCost.toFixed(2)}</span>
            </div>
          )}
          
          {!includePackaging && !calculations.isUSA && (
            <div className="flex justify-between text-sm text-gray-500 italic">
              <span>Imballo escluso</span>
              <span>€0.00</span>
            </div>
          )}
          
          {calculations.liquorSurcharge > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Surcharge Liquori:</span>
              <span className="font-semibold text-gray-900">€{calculations.liquorSurcharge.toFixed(2)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              Accise {calculations.countryName} {exciseData ? `(${exciseData.excise_75cl.toFixed(2)}€/bottiglia)` : '(0.00€/bottiglia)'}:
            </span>
            <span className="font-semibold text-gray-900">€{calculations.exciseTotal.toFixed(2)}</span>
          </div>
          
          {calculations.fiscalManagementTotal > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                Gestione Fiscale ({calculations.fiscalManagementPerBottle.toFixed(2)}€/bottiglia):
              </span>
              <span className="font-semibold text-gray-900">€{calculations.fiscalManagementTotal.toFixed(2)}</span>
            </div>
          )}
          
          {calculations.isEU && calculations.totalVat > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                IVA (Italia, {(calculations.vatRate * 100).toFixed(0)}%)
                {calculations.vatIncludedInShipping ? " (inclusa in spedizione + su altri costi)" : ""}:
              </span>
              <span className="font-semibold text-gray-900">€{calculations.totalVat.toFixed(2)}</span>
            </div>
          )}
          
          {calculations.isEU && calculations.totalVat === 0 && calculations.vatIncludedInShipping && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">IVA (Italia, {(calculations.vatRate * 100).toFixed(0)}%):</span>
              <span className="font-semibold text-gray-900">Inclusa nel prezzo</span>
            </div>
          )}
          
          {!calculations.isEU && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">IVA:</span>
              <span className="font-semibold text-gray-900">€0.00</span>
            </div>
          )}
          
          <div className="border-t border-gray-300 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-bold text-gray-900">
                Totale{calculations.isEU ? " (IVA inclusa)" : ""}:
              </span>
              <span className="text-lg sm:text-xl font-black text-orange-600">€{calculations.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-500">
            {calculations.isUSA
              ? "Imballo incluso nel prezzo spedizione. Dazi esclusi."
              : calculations.isEU
              ? `IVA (${(calculations.vatRate * 100).toFixed(0)}%) inclusa. Imballo calcolato separatamente.`
              : "Dazi esclusi. Imballo calcolato separatamente."}
          </p>
        </div>
      </div>

      {/* Card Regole USA */}
      {calculations.isUSA && (
        <div className="mt-8">
          <USAShippingRulesCard />
        </div>
      )}
      </div>
    </div>
  );
}
