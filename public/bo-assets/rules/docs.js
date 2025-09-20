// public/bo-assets/rules/docs.js
// ⬇️ SOSTITUISCI INTERAMENTE QUESTO FILE

// ———————————————————————————————————————————————————————————
// Utils: UE set + normalizzazione paese (sinonimi/casing)
// ———————————————————————————————————————————————————————————
const EU_COUNTRIES = new Set([
  "Italia","Francia","Germania","Spagna","Portogallo","Belgio",
  "Olanda","Paesi Bassi","Austria","Svezia","Finlandia","Danimarca",
  "Repubblica Ceca","Slovacchia","Polonia","Ungheria","Irlanda",
  "Lituania","Lettonia","Estonia","Grecia","Romania","Bulgaria",
  "Slovenia","Croazia","Lussemburgo","Malta","Cipro"
]);

const isEU = (c) => EU_COUNTRIES.has(c);
const areaOf = (c) => (isEU(c) ? "UE" : "ExtraUE");

// Canonicalizzatore paesi (gestisce upper/lower e sinonimi)
function normalizeCountry(input) {
  const s = String(input || "").trim();
  const U = s.toUpperCase();

  const map = new Map([
    // Italia
    ["ITALIA", "Italia"], ["ITALY", "Italia"],
    // UK
    ["REGNO UNITO", "UK"], ["UNITED KINGDOM", "UK"], ["UK", "UK"], ["U.K.", "UK"],
    ["GRAN BRETAGNA", "UK"], ["GREAT BRITAIN", "UK"], ["INGHILTERRA", "UK"],
    ["ENGLAND", "UK"], ["GB", "UK"],
    // USA
    ["USA", "USA"], ["U.S.A.", "USA"], ["STATI UNITI", "USA"],
    ["UNITED STATES", "USA"], ["US", "USA"],
    // Svizzera
    ["SVIZZERA", "Svizzera"], ["SWITZERLAND", "Svizzera"], ["CH", "Svizzera"],
    // Canada
    ["CANADA", "Canada"],
    // Asia (no Cina)
    ["HONG KONG", "Hong Kong"],
    ["SINGAPORE", "Singapore"],
    ["TAIWAN", "Taiwan"],
    ["COREA DEL SUD", "Corea del Sud"], ["SOUTH KOREA", "Corea del Sud"],
    ["KOREA, REPUBLIC OF", "Corea del Sud"],
    // Cina
    ["CINA", "Cina"], ["CHINA", "Cina"], ["PRC", "Cina"], ["P.R.C.", "Cina"],
    // Paesi Bassi (per UE)
    ["NETHERLANDS", "Paesi Bassi"], ["PAESI BASSI", "Paesi Bassi"], ["OLANDA", "Paesi Bassi"]
  ]);

  return map.get(U) || s; // fallback: stringa originale (title-case non necessario qui)
}

// ———————————————————————————————————————————————————————————
// Regole documentali
// Nomi documenti: Lettera_di_Vettura, Fattura_Commerciale, Fattura_Proforma,
// Dichiarazione_Esportazione, FDA_Prior_Notice, e-DAS, CIQ, Certificato_di_Origine, Certificato_Sanitario
// ———————————————————————————————————————————————————————————
const RULES = [
  // ITALIA (sempre e solo LDV)
  { when: { country: "Italia", tipo: "B2B" },          require: ["Lettera_di_Vettura"] },
  { when: { country: "Italia", tipo: "B2C" },          require: ["Lettera_di_Vettura"] },
  { when: { country: "Italia", tipo: "Campionatura" }, require: ["Lettera_di_Vettura"] },

  // EUROPA (UE)
  { when: { area: "UE", tipo: "B2C" },          require: ["Lettera_di_Vettura"] },
  { when: { area: "UE", tipo: "B2B" },          require: ["Lettera_di_Vettura","Fattura_Commerciale"] },
  { when: { area: "UE", tipo: "Campionatura" }, require: ["Lettera_di_Vettura","Fattura_Proforma"] },

  // UK
  { when: { country: "UK", tipo: "B2C" },            require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },
  { when: { country: "UK", tipo: "B2B" },            require: ["Lettera_di_Vettura","Fattura_Commerciale","Dichiarazione_Esportazione"] },
  { when: { country: "UK", tipo: "Campionatura" },   require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },

  // USA (+ note)
  { when: { country: "USA", tipo: "B2C" },          require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"], note: "USA: COLA + importatore registrato. Prior Notice evitabile per B2C/Campionatura." },
  { when: { country: "USA", tipo: "B2B" },          require: ["Lettera_di_Vettura","Fattura_Commerciale","FDA_Prior_Notice","Dichiarazione_Esportazione"], note: "USA: COLA + importatore registrato. Prior Notice richiesto per B2B." },
  { when: { country: "USA", tipo: "Campionatura" }, require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"], note: "USA: COLA + importatore registrato. Prior Notice evitabile per B2C/Campionatura." },

  // CANADA (+ note)
  { when: { country: "Canada", tipo: "B2C" },          require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"], note: "Canada: CCI + importatore registrato (monopolio). Documenti perfetti." },
  { when: { country: "Canada", tipo: "B2B" },          require: ["Lettera_di_Vettura","Fattura_Commerciale","Dichiarazione_Esportazione"], note: "Canada: CCI + importatore registrato (monopolio). Documenti perfetti." },
  { when: { country: "Canada", tipo: "Campionatura" }, require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"], note: "Canada: CCI + importatore registrato (monopolio). Documenti perfetti." },

  // SVIZZERA
  { when: { country: "Svizzera", tipo: "B2C" },            require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },
  { when: { country: "Svizzera", tipo: "B2B" },            require: ["Lettera_di_Vettura","Fattura_Commerciale","Dichiarazione_Esportazione"] },
  { when: { country: "Svizzera", tipo: "Campionatura" },   require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },

  // ASIA (esclusa Cina): Hong Kong, Singapore, Taiwan, Corea del Sud
  ...["Hong Kong","Singapore","Taiwan","Corea del Sud"].flatMap(c => ([
    { when: { country: c, tipo: "B2C" },          require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },
    { when: { country: c, tipo: "B2B" },          require: ["Lettera_di_Vettura","Fattura_Commerciale","Dichiarazione_Esportazione"] },
    { when: { country: c, tipo: "Campionatura" }, require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },
  ])),

  // CINA
  { when: { country: "Cina", tipo: "B2C" },            require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },
  { when: { country: "Cina", tipo: "B2B" },            require: ["Lettera_di_Vettura","Fattura_Commerciale","CIQ","Certificato_di_Origine","Certificato_Sanitario","Dichiarazione_Esportazione"], note: "Cina B2B: CIQ + Certificato di origine + Analisi sanitarie obbligatori." },
  { when: { country: "Cina", tipo: "Campionatura" },   require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },

  // FALLBACK GENERICI ExtraUE (in caso di country non mappato)
  { when: { area: "ExtraUE", tipo: "B2B" },          require: ["Lettera_di_Vettura","Fattura_Commerciale","Dichiarazione_Esportazione"] },
  { when: { area: "ExtraUE", tipo: "Campionatura" }, require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },
  { when: { area: "ExtraUE", tipo: "B2C" },          require: ["Lettera_di_Vettura","Fattura_Proforma","Dichiarazione_Esportazione"] },

  // Default assoluto: LDV
  { when: {}, require: ["Lettera_di_Vettura"] }
];

// ———————————————————————————————————————————————————————————
// Matching con normalizzazione paese + precedenza country-specific
// ———————————————————————————————————————————————————————————
export function matchRules(rec) {
  const rawCountry = rec.dest_paese || rec.paese || "";
  const country = normalizeCountry(rawCountry);
  const tipo = rec.tipo_spedizione || "";
  const area = areaOf(country);

  const required = new Set(["Lettera_di_Vettura"]);
  const notes = [];

  // 1) Regole specifiche per country (normalizzate)
  const countryRules = RULES.filter(r => {
    if (!r.when.country) return false;
    return normalizeCountry(r.when.country) === country &&
           (!r.when.tipo || r.when.tipo === tipo);
  });

  if (countryRules.length) {
    for (const r of countryRules) {
      (r.require || []).forEach(d => required.add(d));
      if (r.note) notes.push(r.note);
    }
  } else {
    // 2) Nessuna regola country -> usa regole per area / generiche
    for (const r of RULES) {
      const okCountry = !r.when.country;
      const okTipo    = !r.when.tipo || r.when.tipo === tipo;
      const okArea    = !r.when.area || r.when.area === area;
      if (okCountry && okTipo && okArea) {
        (r.require || []).forEach(d => required.add(d));
        if (r.note) notes.push(r.note);
      }
    }
  }

  return { country, tipo, area, required: Array.from(required), notes };
}

export function computeRequiredDocs(rec) {
  const { required, notes, country, tipo } = matchRules(rec);
  const have = Object.entries(rec.docs || {})
    .filter(([_, v]) => Boolean(v))
    .map(([k]) => k);
  const missing = required.filter(d => !have.includes(d));
  return { required, missing, notes, country, tipo };
}
