// utils/weights.js
export function totalPesoKg(rec) {
  const rows = (rec && Array.isArray(rec.colli)) ? rec.colli : [];
  const tot = rows.reduce((s, c) => s + (Number(String(c?.kg ?? '0').replace(',', '.')) || 0), 0);
  return tot;
}
