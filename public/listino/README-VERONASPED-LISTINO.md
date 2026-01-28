# VeronaSped – Listino Spedizioni (Export da spst.it/listino)

Questo pacchetto contiene i dati e la documentazione di supporto relativi alla pagina del listino VeronaSped pubblicata su `https://www.spst.it/listino`.

## Contenuto del pacchetto

Nella cartella `public/listino/` trovi:

- `listino-pricing.json`: dati strutturati del listino (tariffe, accise, IVA, imballi).
- `README-VERONASPED-LISTINO.md`: questo file di documentazione.

Questi file possono essere copiati e utilizzati internamente da VeronaSped (es. integrazione in portali B2B/B2C, ERP, CRM, fogli di calcolo, ecc.).

---

## Stack tecnico

La pagina `https://www.spst.it/listino` è sviluppata con lo stack seguente:

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript + React 18
- **UI / Stile**:
  - Tailwind CSS per layout e componenti responsive
  - `lucide-react` per le icone
- **Deploy**: Vercel (build automatica da branch `main`)

Non è necessario conoscere Next.js per utilizzare il file JSON: il listino è pensato per essere consumato anche da altri sistemi.

---

## Struttura del file `listino-pricing.json`

### 1. `shipping_rates`

Contiene le **tariffe di trasporto per zona** in funzione del numero di bottiglie.

Esempio semplificato:

```json
"shipping_rates": {
  "italia": {
    "destinations": ["Italia", "Sicilia", "Sardegna"],
    "rates": { "3": 18.81, "6": 21.38, "12": 31.65, "18": 42.76, "24": 65.01 },
    "notes": "IVA inclusa, imballo escluso."
  },
  "ue_zona_1": {
    "destinations": ["Germania", "Francia", "Belgio", "Grecia", "Lussemburgo", "Portogallo", "Olanda", "Spagna"],
    "rates": { "3": 16.0, "6": 19.0, "12": 30.0, "18": 43.5, "24": 61.0, "30": 76.0, "36": 89.0, "42": 105.0, "48": 120.0, "54": 135.0, "60": 150.0 },
    "notes": "IVA inclusa, imballo escluso."
  }
}
```

- **Chiave zona** (es. `italia`, `ue_zona_1`, `usa_standard`)
- **`destinations`**: elenco dei paesi coperti da quella zona.
- **`rates`**: mappa `numero_bottiglie → prezzo_spedizione_€`.
- **`notes`**: note operative (IVA inclusa/esclusa, imballo incluso/escluso, ecc.).
- Per `usa_standard` è presente anche `surcharge_rules` con le regole per i supplementi per singolo stato USA.

### 2. `european_excise_map`

Mappa dei **paesi europei** con accise e IVA applicabile per il B2C.

```json
"european_excise_map": {
  "france": { "name": "Francia", "excise_75cl": 0.03, "vat": 0.20 },
  "norway": { "name": "Norvegia", "excise_75cl": 4.50, "vat": 0.25 }
}
```

- **`excise_75cl`**: accisa per **1 bottiglia da 0,75L**, espressa in euro.
- **`vat`**: aliquota IVA del paese (es. 0.25 = 25%).

Questi valori sono utilizzati nel **Calcolatore B2C** per calcolare:

- Accise totali = `excise_75cl × numero_bottiglie`
- IVA = `aliquota_vat × (spedizione + imballo + eventuale sovrapprezzo liquori)`

### 3. `packaging_shop`

Informazioni sullo **store cartoni export**:

```json
"packaging_shop": {
  "product": "Cartone Export 6btl",
  "pack_unit": 10,
  "prices": [
    { "min_packs": 1, "price_per_pack": 50.0 },
    { "min_packs": 5, "price_per_pack": 45.0 },
    { "min_packs": 10, "price_per_pack": 40.0 }
  ]
}
```

- **`product`**: nome commerciale del cartone.
- **`pack_unit`**: numero di cartoni per pacco (qui 10).
- **`prices`**: fasce di prezzo in base al numero minimo di pacchi.

Nota operativa: nel listino operativo, **1 cartone contiene 6 bottiglie** e il costo unitario di riferimento è **5€ per cartone** (prima degli sconti quantità).

---

## Corrispondenza con la pagina `https://www.spst.it/listino`

La pagina del listino espone quattro aree principali:

1. **Listino Standard**
   - Tabella delle tariffe base per zona e numero di bottiglie.
   - Dati derivati direttamente da `shipping_rates`.

2. **Listino Standard con Imballo Incluso**
   - Mostra il listino standard con una maggiorazione di **5€ ogni 6 bottiglie** (1 cartone).
   - L'imballo viene calcolato così: `cartoni = ceil(bottiglie / 6)` e `costo_imballo = cartoni × 5€`.

3. **Store Cartoni**
   - Area per ordinare solo imballi (cartoni export).
   - Utilizza `packaging_shop` per calcolare i prezzi per pacco e gli sconti quantità.

4. **Calcolatore B2C**
   - Permette di selezionare un paese UE/extra-UE e un numero di bottiglie.
   - Calcola in tempo reale:
     - Prezzo spedizione (da `shipping_rates`)
     - Costo imballo (5€/cartone da 6 bottiglie, escluso USA dove l'imballo è già incluso)
     - Accise totali (da `european_excise_map`)
     - IVA secondo l'aliquota del paese (`vat`)
     - Supplemento liquori (+15€ ogni 3 bottiglie, se attivato)
   - Per gli USA gestisce anche i **supplementi per stato** (Tier 1 e Tier 2) secondo `surcharge_rules`.

5. **Regole USA**
   - Scheda dedicata che sintetizza le regole operative per le spedizioni USA:
     - Stati proibiti
     - Stato con modulo obbligatorio (Alabama)
     - Supplementi Tier 1 (+5€/6 btl) e Tier 2 (+65€/6 btl)
     - Note generali (dazi, imballo, liquori, magnum)

---

## Come usare il JSON in sistemi VeronaSped

Alcuni esempi di utilizzo pratico:

- **Portale preventivi B2B/B2C**
  - Leggere `shipping_rates` per proporre automaticamente il costo di spedizione in base a destinazione e numero bottiglie.
  - Applicare le stesse regole di rounding (bottiglie → cartoni) per calcolare l'imballo.

- **CRM / ERP**
  - Salvare uno snapshot del listino per data (versionare il file JSON).
  - Usare `european_excise_map` per stimare il margine netto dopo accise e IVA.

- **Foglio Excel / Google Sheets**
  - Importare `listino-pricing.json` (o convertirlo in CSV) per lavorare con tabelle pivot.
  - Simulare scenari di prezzo per diverse quantità / paesi.

Suggerimento: mantenere sempre una copia del JSON così com'è e, se servono adattamenti interni, lavorare su una copia versionata (`listino-pricing-veronasped-vYYYYMMDD.json`).

---

## Aggiornamento del listino

Quando SPST aggiorna il listino su `https://www.spst.it/listino`:

1. Viene aggiornato il file sorgente TypeScript `lib/pricing-data.ts` nel repository SPST.
2. Viene generato e sincronizzato il corrispondente `listino-pricing.json` in `public/listino/`.
3. Dopo il deploy su Vercel, sia la pagina che il file JSON riflettono i nuovi valori.

Per VeronaSped, il flusso consigliato è:

- Monitorare le comunicazioni di SPST per sapere quando un nuovo listino è online.
- Scaricare nuovamente `listino-pricing.json` da `https://www.spst.it/listino-download`.
- Aggiornare i sistemi interni importando la nuova versione del file.

---

## Contatti

Per chiarimenti tecnici sull'integrazione del listino o richieste di export aggiuntivi (CSV, formati custom, API), contattare il team SPST attraverso i canali ufficiali indicati su `https://www.spst.it`.

