export const pricingData = {
  shipping_rates: {
    italia: {
      destinations: ["Italia", "Sicilia", "Sardegna"],
      rates: { "3": 9.90, "6": 14.90, "12": 19.90, "18": 27.90, "24": 35.90, "30": 39.90 },
      notes: "IVA inclusa, imballo escluso."
    },
    ue_zona_1: {
      destinations: ["Germania", "Francia", "Belgio", "Grecia", "Lussemburgo", "Portogallo", "Olanda", "Spagna"],
      rates: { "3": 17.49, "6": 20.99, "12": 33.00, "18": 47.99, "24": 67.00, "30": 83.49, "36": 97.99, "42": 115.49, "48": 132.00, "54": 148.49, "60": 165.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    ue_zona_2: {
      destinations: ["Austria", "Croazia", "Polonia", "Repubblica Ceca", "Slovenia", "Ungheria"],
      rates: { "3": 20.99, "6": 23.00, "12": 37.49, "18": 49.49, "24": 70.99, "30": 88.00, "36": 97.99, "42": 118.99, "48": 137.49, "54": 156.00, "60": 176.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    ue_zona_3: {
      destinations: ["Bulgaria", "Estonia", "Lettonia", "Lituania", "Romania"],
      rates: { "3": 31.99, "6": 35.00, "12": 48.99, "18": 66.00, "24": 88.00, "30": 107.49, "36": 128.49, "42": 148.49, "48": 170.49, "54": 192.49, "60": 214.49 },
      notes: "IVA inclusa, imballo escluso."
    },
    scandinavia: {
      destinations: ["Svezia", "Finlandia"],
      rates: { "3": 17.49, "6": 20.99, "12": 33.00, "18": 47.99, "24": 67.00, "30": 83.49, "36": 97.99, "42": 115.49, "48": 132.00, "54": 148.49, "60": 165.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    uk: {
      destinations: ["Regno Unito"],
      rates: { "3": 25.49, "6": 34.49, "12": 40.00, "18": 89.00, "24": 114.49, "30": 143.00, "36": 170.49, "42": 198.00, "48": 225.49, "54": 253.00, "60": 280.49 },
      notes: "Dazi e imballo esclusi."
    },
    svizzera_norvegia: {
      destinations: ["Svizzera", "Norvegia"],
      rates: { "3": 30.99, "6": 40.49, "12": 53.49, "18": 79.00, "24": 121.00, "30": 154.00, "36": 187.00, "42": 220.00, "48": 253.00, "54": 286.00, "60": 319.00 },
      notes: "Dazi e imballo esclusi."
    },
    usa_standard: {
      destinations: ["USA (Stati Standard)"],
      rates: { "3": 69.49, "6": 91.49, "12": 146.49, "18": 239.99, "24": 294.99, "30": 380.49, "36": 442.00, "42": 517.00, "48": 588.49, "54": 660.00, "60": 737.00 },
      notes: "IMBALLO INCLUSO. Dazi esclusi.",
      surcharge_rules: {
        tier_5_euro: ["AR", "MO", "MT", "NE", "OK", "TX"],
        tier_65_euro: ["AK", "HI", "PR"]
      }
    },
    canada: {
      destinations: ["Canada (AB, QC, BC, ON)"],
      rates: { "3": 83.49, "6": 139.49, "12": 228.99, "18": 309.00, "24": 383.99, "30": 465.49, "36": 529.00, "42": 616.00, "48": 704.00, "54": 792.00, "60": 880.00 },
      notes: "Imballo escluso. Dazi esclusi."
    },
    asia_oceania: {
      destinations: ["Giappone", "Hong Kong", "Singapore", "Taiwan"],
      rates: { "3": 111.00, "6": 171.49, "12": 223.49, "18": 319.49, "24": 440.49, "30": 539.00, "36": 638.00, "42": 737.00, "48": 836.00, "54": 935.00, "60": 1034.00 },
      notes: "Dazi e imballo esclusi."
    }
  },
  european_excise_map: {
    germany: { name: "Germania", excise_75cl: 0.00, vat: 0.19 },
    france: { name: "Francia", excise_75cl: 0.03, vat: 0.20 },
    belgium: { name: "Belgio", excise_75cl: 0.56, vat: 0.21 },
    greece: { name: "Grecia", excise_75cl: 0.00, vat: 0.24 },
    luxembourg: { name: "Lussemburgo", excise_75cl: 0.00, vat: 0.17 },
    portugal: { name: "Portogallo", excise_75cl: 0.0309, vat: 0.23 },
    netherlands: { name: "Olanda", excise_75cl: 0.67, vat: 0.21 },
    spain: { name: "Spagna", excise_75cl: 0.00, vat: 0.21 },
    austria: { name: "Austria", excise_75cl: 0.00, vat: 0.20 },
    croatia: { name: "Croazia", excise_75cl: 0.00, vat: 0.25 },
    poland: { name: "Polonia", excise_75cl: 0.35, vat: 0.23 },
    czech_republic: { name: "Repubblica Ceca", excise_75cl: 0.00, vat: 0.21 },
    slovenia: { name: "Slovenia", excise_75cl: 0.00, vat: 0.22 },
    hungary: { name: "Ungheria", excise_75cl: 0.345, vat: 0.27 },
    bulgaria: { name: "Bulgaria", excise_75cl: 0.00, vat: 0.20 },
    estonia: { name: "Estonia", excise_75cl: 1.11, vat: 0.22 },
    latvia: { name: "Lettonia", excise_75cl: 0.83, vat: 0.21 },
    lithuania: { name: "Lituania", excise_75cl: 1.48, vat: 0.21 },
    romania: { name: "Romania", excise_75cl: 0.00, vat: 0.19 },
    sweden: { name: "Svezia", excise_75cl: 1.78, vat: 0.25 },
    finland: { name: "Finlandia", excise_75cl: 3.02, vat: 0.24 },
    denmark: { name: "Danimarca", excise_75cl: 0.88, vat: 0.25 },
    norway: { name: "Norvegia", excise_75cl: 4.50, vat: 0.25 },
    uk: { name: "Regno Unito", excise_75cl: 2.55, vat: 0.20 },
    italy: { name: "Italia", excise_75cl: 0.00, vat: 0.22 }
  },
  packaging_shop: {
    product: "Cartone Export 6btl",
    pack_unit: 10,
    prices: [
      { min_packs: 1, price_per_pack: 55.00 },
      { min_packs: 5, price_per_pack: 49.49 },
      { min_packs: 10, price_per_pack: 44.00 }
    ]
  }
} as const;
