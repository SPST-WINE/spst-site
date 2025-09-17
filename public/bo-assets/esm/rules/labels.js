// rules/labels.js — versione “safe” (puoi raffinare dopo)
export function labelInfoFor(rec) {
  const must = [];
  const extra = [];

  // esempi molto semplici (estendibili)
  if (String(rec?.tipo_spedizione || '').toLowerCase().includes('campion'))
    extra.push('Campionatura: valori solo doganali');

  if (rec?.dest_import_ok === false)
    extra.push('Verificare abilitazione import destinatario');

  const title = 'Verifica etichette';
  return { title, must, extra };
}
