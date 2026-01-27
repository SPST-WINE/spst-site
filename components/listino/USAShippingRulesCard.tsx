"use client";

import React from "react";
import { AlertTriangle, XCircle, FileText, DollarSign, Info } from "lucide-react";

export function USAShippingRulesCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
        <h3 className="text-xl font-black text-white flex items-center gap-2">
          <Info className="h-5 w-5" />
          Regole Spedizioni USA
        </h3>
      </div>

      <div className="p-6 space-y-6">
        {/* Stati Proibiti */}
        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-900 mb-2">1. Stati Proibiti</h4>
              <p className="text-sm text-red-800 mb-2">
                Non è possibile spedire nei seguenti stati. Il sistema deve restituire un errore o disabilitare la selezione:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["MISSISSIPPI (MS)", "UTAH (UT)", "VERMONT (VT)", "SOUTH DAKOTA (SD)"].map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full border border-red-300"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modulo Obbligatorio */}
        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-yellow-900 mb-2">2. Stato con Modulo Obbligatorio</h4>
              <p className="text-sm text-yellow-800 mb-2">
                <strong>ALABAMA (AL):</strong> La spedizione è permessa ma richiede un modulo specifico (Shipping Form) da parte del cliente.
              </p>
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full border border-yellow-300 mt-2">
                ALABAMA (AL)
              </span>
            </div>
          </div>
        </div>

        {/* Supplementi Standard */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">3. Supplementi Standard (Tier 1 - €5)</h4>
              <p className="text-sm text-blue-800 mb-2">
                Aggiungere € 5,00 extra ogni 6 bottiglie (o frazione di 6) per:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["ARKANSAS (AR)", "MISSOURI (MO)", "MONTANA (MT)", "NEBRASKA (NE)", "OKLAHOMA (OK)", "TEXAS (TX)"].map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full border border-blue-300"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supplementi Remoti */}
        <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-purple-900 mb-2">4. Supplementi Remoti (Tier 2 - €65)</h4>
              <p className="text-sm text-purple-800 mb-2">
                Aggiungere € 65,00 extra ogni 6 bottiglie (o frazione di 6) per:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["ALASKA (AK)", "HAWAII (HI)", "PORTORICO (PR)"].map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full border border-purple-300"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note Generali */}
        <div className="border-l-4 border-gray-400 bg-gray-50 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 mb-3">5. Note Generali USA</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Imballaggio:</strong> Il costo del listino USA include già l'imballo specifico.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Dazi:</strong> I dazi doganali sono sempre esclusi dal prezzo di listino indicato.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Liquori:</strong> Supplemento di € 15,00 ogni 3 bottiglie (formato 75ml).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Magnum:</strong> 1 bottiglia Magnum (1.5L) occupa lo spazio e il costo di 3 bottiglie standard da 75ml.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
