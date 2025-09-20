// public/bo-assets/rules/docs.js
// ⬇️ SOSTITUISCI INTERAMENTE QUESTO FILE

// Paesi UE per derivare l'area (UE/ExtraUE)
const EU_COUNTRIES = new Set([
  "Italia","Francia","Germania","Spagna","Portogallo","Belgio","Olanda","Paesi Bassi","Austria",
  "Svezia","Finlandia","Danimarca","Repubblica Ceca","Slovacchia","Polonia","Ungheria","Irlanda",
  "Lituania","Lettonia","Estonia","Grecia","Romania","Bulgaria","Slovenia","Croazia","Lussemburgo",
  "Malta","Cipro"
]);
const isEU = c => EU_COUNTRIES.has(c);
const areaOf = c => isEU(c) ? 'UE' : 'ExtraUE';

/**
 * REGOLE DOCUMENTALI
 * Nomi documenti (stabili): Lettera_di_Vettura, Fattura_Commerciale, Fattura_Proforma,
 * Dichiarazione_Esportazione, Packing_List, FDA_Prior_Notice, e-DAS, CIQ, Certificato_di_Origine, Certificato_Sanitario
 *
 * NB: applichiamo precedenza alle regole con country rispetto a quelle per area (UE/ExtraUE).
 * Se esiste almeno una regola che matcha il country, NON applichiamo le regole per area.
 */
const RULES = [
  // —— ITALIA: solo LDV per tutti i tipi
  { when: {country:'Italia', tipo:'B2B'},           require: ['Lettera_di_Vettura'] },
  { when: {country:'Italia', tipo:'B2C'},           require: ['Lettera_di_Vettura'] },
  { when: {country:'Italia', tipo:'Campionatura'},  require: ['Lettera_di_Vettura'] },
  // alias inglese
  { when: {country:'Italy', tipo:'B2B'},            require: ['Lettera_di_Vettura'] },
  { when: {country:'Italy', tipo:'B2C'},            require: ['Lettera_di_Vettura'] },
  { when: {country:'Italy', tipo:'Campionatura'},   require: ['Lettera_di_Vettura'] },

  // —— EUROPA (UE)
  { when: {area:'UE', tipo:'B2C'},          require: ['Lettera_di_Vettura'] },
  { when: {area:'UE', tipo:'B2B'},          require: ['Lettera_di_Vettura','Fattura_Commerciale'] },
  { when: {area:'UE', tipo:'Campionatura'}, require: ['Lettera_di_Vettura','Fattura_Proforma'] },

  // —— USA (con note comuni)
  { when: {country:'USA', tipo:'B2C'},         require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'], note: 'USA: COLA + Importatore registrato. Prior Notice evitabile per B2C/Campionatura.' },
  { when: {country:'USA', tipo:'B2B'},         require: ['Lettera_di_Vettura','Fattura_Commerciale','FDA_Prior_Notice','Dichiarazione_Esportazione'], note: 'USA: COLA + Importatore registrato. Prior Notice richiesto per B2B.' },
  { when: {country:'USA', tipo:'Campionatura'},require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'], note: 'USA: COLA + Importatore registrato. Prior Notice evitabile per B2C/Campionatura.' },
  // alias
  { when: {country:'Stati Uniti', tipo:'B2C'},         require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'], note: 'USA: COLA + Importatore registrato. Prior Notice evitabile per B2C/Campionatura.' },
  { when: {country:'Stati Uniti', tipo:'B2B'},         require: ['Lettera_di_Vettura','Fattura_Commerciale','FDA_Prior_Notice','Dichiarazione_Esportazione'], note: 'USA: COLA + Importatore registrato. Prior Notice richiesto per B2B.' },
  { when: {country:'Stati Uniti', tipo:'Campionatura'},require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'], note: 'USA: COLA + Importatore registrato. Prior Notice evitabile per B2C/Campionatura.' },

  // —— CANADA (note comuni)
  { when: {country:'Canada', tipo:'B2C'},         require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'], note: 'Canada: CCI + Importatore registrato (monopolio). Documenti perfetti.' },
  { when: {country:'Canada', tipo:'B2B'},         require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'], note: 'Canada: CCI + Importatore registrato (monopolio). Documenti perfetti.' },
  { when: {country:'Canada', tipo:'Campionatura'},require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'], note: 'Canada: CCI + Importatore registrato (monopolio). Documenti perfetti.' },

  // —— UK
  { when: {country:'UK', tipo:'B2C'},            require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'UK', tipo:'B2B'},            require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'UK', tipo:'Campionatura'},   require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  // alias
  { when: {country:'Regno Unito', tipo:'B2C'},          require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Regno Unito', tipo:'B2B'},          require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Regno Unito', tipo:'Campionatura'}, require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },

  // —— SVIZZERA
  { when: {country:'Svizzera', tipo:'B2C'},            require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Svizzera', tipo:'B2B'},            require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Svizzera', tipo:'Campionatura'},   require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  // alias
  { when: {country:'Switzerland', tipo:'B2C'},         require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Switzerland', tipo:'B2B'},         require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Switzerland', tipo:'Campionatura'},require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },

  // —— ASIA (escl. Cina): Hong Kong, Singapore, Taiwan, Corea del Sud
  //    Regole uguali per questi paesi
  // Hong Kong
  { when: {country:'Hong Kong', tipo:'B2C'},          require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Hong Kong', tipo:'B2B'},          require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Hong Kong', tipo:'Campionatura'}, require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  // Singapore
  { when: {country:'Singapore', tipo:'B2C'},          require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Singapore', tipo:'B2B'},          require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Singapore', tipo:'Campionatura'}, require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  // Taiwan
  { when: {country:'Taiwan', tipo:'B2C'},             require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Taiwan', tipo:'B2B'},             require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Taiwan', tipo:'Campionatura'},    require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  // Corea del Sud
  { when: {country:'Corea del Sud', tipo:'B2C'},          require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Corea del Sud', tipo:'B2B'},          require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'Corea del Sud', tipo:'Campionatura'}, require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'South Korea', tipo:'B2C'},            require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'South Korea', tipo:'B2B'},            require: ['Lettera_di_Vettura','Fattura_Commerciale','Dichiarazione_Esportazione'] },
  { when: {country:'South Korea', tipo:'Campionatura'},   require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },

  // —— CINA (note B2B)
  { when: {country:'Cina', tipo:'B2C'},             require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'Cina', tipo:'B2B'},             require: ['Lettera_di_Vettura','Fattura_Commerciale','CIQ','Certificato_di_Origine','Certificato_Sanitario','Dichiarazione_Esportazione'], note: 'Cina B2B: CIQ + Certificato di origine + Analisi sanitarie obbligatori.' },
  { when: {country:'Cina', tipo:'Campionatura'},    require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  // alias
  { when: {country:'China', tipo:'B2C'},            require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },
  { when: {country:'China', tipo:'B2B'},            require: ['Lettera_di_Vettura','Fattura_Commerciale','CIQ','Certificato_di_Origine','Certificato_Sanitario','Dichiarazione_Esportazione'], note: 'Cina B2B: CIQ + Certificato di origine + Analisi sanitarie obbligatori.' },
  { when: {country:'China', tipo:'Campionatura'},   require: ['Lettera_di_Vettura','Fattura_Proforma','Dichiarazione_Esportazione'] },

  // —— Default: sempre LDV
  { when: {}, require: ['Lettera_di_Vettura'] }
];

/**
 * Matching con precedenza: se esiste almeno una regola country-match,
 * applichiamo SOLO quelle e ignoriamo regole per area.
 */
export function matchRules(rec){
  const country = rec.dest_paese || rec.paese || '';
  const tipo = rec.tipo_spedizione || '';
  const area = areaOf(country);

  const required = new Set(['Lettera_di_Vettura']);
  const notes = [];

  const countryRules = RULES.filter(r => r.when.country && r.when.country === country && (!r.when.tipo || r.when.tipo === tipo));
  if (countryRules.length){
    countryRules.forEach(r => {
      (r.require||[]).forEach(d => required.add(d));
      if (r.note) notes.push(r.note);
    });
  } else {
    // Nessuna regola country → applica regole per area + regole senza country
    RULES.forEach(r => {
      const okCountry = !r.when.country;
      const okTipo    = !r.when.tipo || r.when.tipo === tipo;
      const okArea    = !r.when.area || r.when.area === area;
      if (okCountry && okTipo && okArea){
        (r.require||[]).forEach(d => required.add(d));
        if (r.note) notes.push(r.note);
      }
    });
  }

  return { country, tipo, area, required: Array.from(required), notes };
}

export function computeRequiredDocs(rec){
  const {required, notes, country, tipo} = matchRules(rec);
  const have = Object.entries(rec.docs||{})
    .filter(([_,v]) => Boolean(v))
    .map(([k]) => k);
  const missing = required.filter(d => !have.includes(d));
  return { required, missing, notes, country, tipo };
}
