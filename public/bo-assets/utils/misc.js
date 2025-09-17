// utils/misc.js
export function toKg(v) {
  let n = Number(String(v ?? '').replace(',', '.').replace(/[^0-9.]+/g,''));
  if (!isFinite(n)) n = 0;
  // 2 decimali sotto 10kg, 1 sopra
  const dec = n >= 10 ? 1 : 2;
  return `${n.toFixed(dec)} kg`;
}

export function trackingUrl(carrier, tn) {
  const c = String(carrier || '').trim().toLowerCase();
  const code = encodeURIComponent(String(tn || '').trim());

  if (!code) return '';
  if (c.includes('dhl'))   return `https://www.dhl.com/it-it/home/tracking.html?tracking-id=${code}`;
  if (c.includes('ups'))   return `https://www.ups.com/track?loc=it_IT&tracknum=${code}`;
  if (c.includes('fedex')) return `https://www.fedex.com/fedextrack/?trknbr=${code}`;
  if (c.includes('gls'))   return `https://www.gls-italy.com/it/servizi-online/ricerca-spedizioni/?match=${code}`;
  if (c.includes('tnt'))   return `https://www.tnt.com/express/it_it/site/shipping-tools/tracking.html?searchType=con&cons=${code}`;
  if (c.includes('brt') || c.includes('bartolini'))
                           return `https://vas.brt.it/vas/sped_numspe_par.htm?sped_num=${code}`;
  if (c.includes('dpd'))   return `https://www.dpd.com/tracking/${code}`;
  if (c.includes('sda'))   return `https://www.sda.it/wps/portal/Servizi_online/ricerca_spedizioni?locale=it&tracing=${code}`;

  // fallback generico
  return '';
}
