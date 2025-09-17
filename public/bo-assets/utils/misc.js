// public/bo-assets/utils/misc.js

/* ---------- numeri & formattazione ---------- */
export function toNum(v) {
  if (v == null || v === '') return NaN;
  const n = Number(String(v).replace(',', '.').replace(/[^0-9.\-]+/g, ''));
  return Number.isFinite(n) ? n : NaN;
}

export function toKg(v) {
  const n = Number(v) || 0;
  // mostra senza decimali se intero, altrimenti max 2
  const it = n % 1 === 0
    ? n.toLocaleString('it-IT', { maximumFractionDigits: 0 })
    : n.toLocaleString('it-IT', { maximumFractionDigits: 2 });
  return `${it} kg`;
}

/* ---------- date utils ---------- */
export function dateTs(input) {
  if (!input) return 0;
  const s = String(input).trim();

  // ISO o quasi
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    const t = Date.parse(s);
    return Number.isFinite(t) ? t : 0;
  }

  // dd/mm/yyyy (anche con orari)
  const m = s.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (m) {
    const dd = Number(m[1]), mm = Number(m[2]) - 1, yyyy = Number(m[3]);
    const HH = Number(m[4] || 0), II = Number(m[5] || 0), SS = Number(m[6] || 0);
    const d = new Date(yyyy, mm, dd, HH, II, SS);
    return d.getTime();
  }

  const t = Date.parse(s);
  return Number.isFinite(t) ? t : 0;
}

/* ---------- string helpers ---------- */
export function normKey(s) {
  return String(s || '')
    .normalize('NFKD')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/* ---------- carrier helpers ---------- */
export function normalizeCarrier(input) {
  const s = normKey(input)
    .replace(/\./g, '')
    .replace(/courier|corriere|express|exp|spa|srl|limited|ltd/g, '')
    .trim();

  // mapping più comuni
  if (!s) return '';
  if (/^dhl/.test(s)) return 'DHL';
  if (/^ups/.test(s)) return 'UPS';
  if (/^fe?d?e?x?/.test(s)) return 'FedEx'; // fedex/fdx/fe-ex
  if (/^gls/.test(s)) return 'GLS';
  if (/^brt|bartolini/.test(s)) return 'BRT';
  if (/^tnt/.test(s)) return 'TNT';
  if (/^sda/.test(s)) return 'SDA';
  if (/^dpd/.test(s)) return 'DPD';
  if (/^(poste|poste italiane|crono)/.test(s)) return 'Poste';
  if (/^chronopost/.test(s)) return 'Chronopost';
  if (/^colissimo/.test(s)) return 'Colissimo';
  if (/^royal ?mail/.test(s)) return 'Royal Mail';
  if (/^evri|hermes/.test(s)) return 'Evri';
  return input ? String(input).trim() : '';
}

export function trackingUrl(carrier, tn) {
  const c = normalizeCarrier(carrier);
  const code = encodeURIComponent(String(tn || '').trim());
  if (!c || !code) return '#';

  switch (c) {
    case 'DHL':        return `https://www.dhl.com/it-it/home/tracking.html?tracking-id=${code}`;
    case 'UPS':        return `https://www.ups.com/track?loc=it_IT&tracknum=${code}`;
    case 'FedEx':      return `https://www.fedex.com/fedextrack/?tracknumbers=${code}`;
    case 'GLS':        return `https://gls-group.eu/IT/it/servizi-online/ricerca-spedizioni?match=${code}`;
    case 'BRT':        return `https://vas.brt.it/vas/sped_det_show.html?param1=${code}`;
    case 'TNT':        return `https://www.tnt.com/express/it_it/site/home/applicazioni/tracking.html?searchType=CON&cons=${code}`;
    case 'SDA':        return `https://www.sda.it/wps/portal/Servizi_online/ricorspedizioni?locale=it&isCargo=false&v=${code}`;
    case 'DPD':        return `https://tracking.dpd.de/parcelstatus?locale=it_IT&query=${code}`;
    case 'Poste':      return `https://www.poste.it/cerca/index.html#/risultati-spedizioni/${code}`;
    case 'Chronopost': return `https://www.chronopost.fr/tracking-no-cms/sky?language=it&consignmentNumber=${code}`;
    case 'Colissimo':  return `https://www.laposte.fr/outils/track-a-parcel?code=${code}`;
    case 'Royal Mail': return `https://www.royalmail.com/track-your-item?trackNumber=${code}`;
    case 'Evri':       return `https://www.evri.com/track/parcel/${code}`;
    default:           return '#';
  }
}
