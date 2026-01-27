export const pricingData = {
  shipping_rates: {
    italia: {
      destinations: ["Italia", "Sicilia", "Sardegna"],
      rates: { "3": 18.81, "6": 21.38, "12": 31.65, "18": 42.76, "24": 65.01 },
      notes: "IVA inclusa, Imballo escluso"
    },
    ue_zona_1: {
      destinations: ["Germania", "Francia", "Belgio", "Grecia", "Lussemburgo", "Portogallo", "Olanda", "Spagna"],
      rates: { "3": 16.00, "6": 19.00, "12": 30.00, "18": 43.50, "24": 61.00, "30": 76.00, "36": 89.00 },
      notes: "IVA inclusa, Imballo escluso"
    },
    ue_zona_2: {
      destinations: ["Austria", "Croazia", "Polonia", "Repubblica Ceca", "Slovenia", "Ungheria"],
      rates: { "3": 19.00, "6": 21.00, "12": 34.00, "18": 45.00, "24": 64.50, "30": 80.00, "36": 89.00 },
      notes: "IVA inclusa, Imballo escluso"
    },
    ue_zona_3: {
      destinations: ["Bulgaria", "Estonia", "Lettonia", "Lituania", "Romania"],
      rates: { "3": 29.00, "6": 32.00, "12": 44.50, "18": 60.00, "24": 80.00, "30": 97.50, "36": 117.00 },
      notes: "IVA inclusa, Imballo escluso"
    },
    extra_ue_nord: {
      destinations: ["Svezia", "Finlandia"],
      rates: { "3": 16.00, "6": 19.00, "12": 30.00, "18": 43.50, "24": 61.00, "30": 76.00, "36": 89.00 },
      notes: "IVA inclusa, Imballo escluso"
    },
    uk: {
      destinations: ["Regno Unito"],
      rates: { "3": 23.00, "6": 31.50, "12": 36.50, "18": 81.00, "24": 104.00 },
      notes: "Dazi esclusi, Imballo escluso"
    },
    svizzera_norvegia: {
      destinations: ["Svizzera", "Norvegia"],
      rates: { "3": 28.00, "6": 37.00, "12": 48.50, "18": 72.00, "24": 110.00 },
      notes: "Dazi esclusi, Imballo escluso"
    },
    usa_standard: {
      destinations: ["USA (Stati Standard)"],
      rates: { "3": 63.00, "6": 83.00, "12": 133.00, "18": 218.00, "24": 268.00, "30": 346.00, "36": 402.00 },
      notes: "Imballo incluso, Dazi esclusi. +5€/6btl per TX, MO, AR, NE, OK, MT",
      surcharge_states: { "AK": 65.0, "HI": 65.0, "PR": 65.0 }
    },
    canada: {
      destinations: ["Canada (AB, QC, BC, ON)"],
      rates: { "3": 76.00, "6": 127.00, "12": 208.00, "18": 281.00, "24": 349.00, "30": 423.00, "36": 481.00 },
      notes: "Imballo escluso, Dazi esclusi"
    },
    asia_oceania_1: {
      destinations: ["Giappone", "Hong Kong"],
      rates: { "3": 100.00, "6": 133.10, "12": 203.00, "18": 290.40, "24": 400.51 },
      notes: "Dazi esclusi, Imballo escluso"
    },
    asia_oceania_2: {
      destinations: ["Singapore", "Taiwan"],
      rates: { "3": 101.00, "6": 156.00, "12": 203.00, "18": 290.40, "24": 400.51 },
      notes: "Dazi esclusi, Imballo escluso"
    }
  },
  export_packaging: {
    price_per_pack_10: 50.00,
    bottles_per_carton: 6,
    discounts: [
      { min_packs: 1, price_per_unit: 5.00 },
      { min_packs: 5, price_per_unit: 4.50 },
      { min_packs: 10, price_per_unit: 4.00 }
    ]
  },
  b2c_excise_rates: {
    france: { rate: 0.031, name: "Francia" },
    austria: { rate: 0.00, name: "Austria" },
    spain: { rate: 0.00, name: "Spagna" },
    netherlands: { rate: 0.72, name: "Olanda" },
    norway: { rate: 4.80, name: "Norvegia" },
    belgium: { rate: 0.58, name: "Belgio" },
    finland: { rate: 3.10, name: "Finlandia" },
    denmark: { rate: 0.88, name: "Danimarca" },
    sweden: { rate: 1.85, name: "Svezia" },
    czech_republic: { rate: 0.00, name: "Repubblica Ceca" },
    slovakia: { rate: 0.00, name: "Slovacchia" },
    latvia: { rate: 0.82, name: "Lettonia" },
    lithuania: { rate: 1.55, name: "Lituania" }
  }
} as const;
