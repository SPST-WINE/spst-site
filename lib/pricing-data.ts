export const pricingData = {
  shipping_rates: {
    italia: {
      destinations: ["Italia", "Sicilia", "Sardegna"],
      rates: { "3": 18.81, "6": 21.38, "12": 31.65, "18": 42.76, "24": 65.01 },
      notes: "IVA inclusa, imballo escluso."
    },
    ue_zona_1: {
      destinations: ["Germania", "Francia", "Belgio", "Grecia", "Lussemburgo", "Portogallo", "Olanda", "Spagna"],
      rates: { "3": 16.00, "6": 19.00, "12": 30.00, "18": 43.50, "24": 61.00, "30": 76.00, "36": 89.00, "42": 105.00, "48": 120.00, "54": 135.00, "60": 150.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    ue_zona_2: {
      destinations: ["Austria", "Croazia", "Polonia", "Repubblica Ceca", "Slovenia", "Ungheria"],
      rates: { "3": 19.00, "6": 21.00, "12": 34.00, "18": 45.00, "24": 64.50, "30": 80.00, "36": 89.00, "42": 108.00, "48": 125.00, "54": 142.00, "60": 160.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    ue_zona_3: {
      destinations: ["Bulgaria", "Estonia", "Lettonia", "Lituania", "Romania"],
      rates: { "3": 29.00, "6": 32.00, "12": 44.50, "18": 60.00, "24": 80.00, "30": 97.50, "36": 117.00, "42": 135.00, "48": 155.00, "54": 175.00, "60": 195.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    scandinavia: {
      destinations: ["Svezia", "Finlandia"],
      rates: { "3": 16.00, "6": 19.00, "12": 30.00, "18": 43.50, "24": 61.00, "30": 76.00, "36": 89.00, "42": 105.00, "48": 120.00, "54": 135.00, "60": 150.00 },
      notes: "IVA inclusa, imballo escluso."
    },
    uk: {
      destinations: ["Regno Unito"],
      rates: { "3": 23.00, "6": 31.50, "12": 36.50, "18": 81.00, "24": 104.00, "30": 130.00, "36": 155.00, "42": 180.00, "48": 205.00, "54": 230.00, "60": 255.00 },
      notes: "Dazi e imballo esclusi."
    },
    svizzera_norvegia: {
      destinations: ["Svizzera", "Norvegia"],
      rates: { "3": 28.00, "6": 37.00, "12": 48.50, "18": 72.00, "24": 110.00, "30": 140.00, "36": 170.00, "42": 200.00, "48": 230.00, "54": 260.00, "60": 290.00 },
      notes: "Dazi e imballo esclusi."
    },
    usa_standard: {
      destinations: ["USA (Stati Standard)"],
      rates: { "3": 63.00, "6": 83.00, "12": 133.00, "18": 218.00, "24": 268.00, "30": 346.00, "36": 402.00, "42": 470.00, "48": 535.00, "54": 600.00, "60": 670.00 },
      notes: "IMBALLO INCLUSO. Dazi esclusi.",
      surcharge_rules: {
        tier_5_euro: ["AR", "MO", "MT", "NE", "OK", "TX"],
        tier_65_euro: ["AK", "HI", "PR"]
      }
    },
    canada: {
      destinations: ["Canada (AB, QC, BC, ON)"],
      rates: { "3": 76.00, "6": 127.00, "12": 208.00, "18": 281.00, "24": 349.00, "30": 423.00, "36": 481.00, "42": 560.00, "48": 640.00, "54": 720.00, "60": 800.00 },
      notes: "Imballo escluso. Dazi esclusi."
    },
    asia_oceania: {
      destinations: ["Giappone", "Hong Kong", "Singapore", "Taiwan"],
      rates: { "3": 101.00, "6": 156.00, "12": 203.00, "18": 290.40, "24": 400.51, "30": 490.00, "36": 580.00, "42": 670.00, "48": 760.00, "54": 850.00, "60": 940.00 },
      notes: "Dazi e imballo esclusi."
    }
  },
  european_excise_map: {
    germany: { name: "Germania", excise_75cl: 0.00, vat: 0.19 },
    france: { name: "Francia", excise_75cl: 0.03, vat: 0.20 },
    belgium: { name: "Belgio", excise_75cl: 0.56, vat: 0.21 },
    greece: { name: "Grecia", excise_75cl: 0.00, vat: 0.24 },
    luxembourg: { name: "Lussemburgo", excise_75cl: 0.00, vat: 0.17 },
    portugal: { name: "Portogallo", excise_75cl: 0.00, vat: 0.23 },
    netherlands: { name: "Olanda", excise_75cl: 0.67, vat: 0.21 },
    spain: { name: "Spagna", excise_75cl: 0.00, vat: 0.21 },
    austria: { name: "Austria", excise_75cl: 0.00, vat: 0.20 },
    croatia: { name: "Croazia", excise_75cl: 0.00, vat: 0.25 },
    poland: { name: "Polonia", excise_75cl: 0.35, vat: 0.23 },
    czech_republic: { name: "Repubblica Ceca", excise_75cl: 0.00, vat: 0.21 },
    slovenia: { name: "Slovenia", excise_75cl: 0.00, vat: 0.22 },
    hungary: { name: "Ungheria", excise_75cl: 0.00, vat: 0.27 },
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
      { min_packs: 1, price_per_pack: 50.00 },
      { min_packs: 5, price_per_pack: 45.00 },
      { min_packs: 10, price_per_pack: 40.00 }
    ]
  }
} as const;
