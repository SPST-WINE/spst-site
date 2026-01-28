"use client";

import React from "react";
import { USAShippingRulesCard } from "./USAShippingRulesCard";

export function USARulesTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="subtitle-muted text-gray-600">
          Consulta le regole e i supplementi per le spedizioni verso gli Stati Uniti.
        </p>
      </div>
      <USAShippingRulesCard />
    </div>
  );
}
