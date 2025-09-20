// === PREVENTIVI =============================================================
export async function fetchQuotes({ search = '', pageSize = 50 } = {}) {
  const url = new URL('/api/preventivi', location.origin);
  if (search) url.searchParams.set('search', search);
  url.searchParams.set('pageSize', String(pageSize));

  const res = await fetch(url, { credentials: 'include' });
  if (!res.ok) throw new Error(`Proxy ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json?.records || [];
}
