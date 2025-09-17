// Edge-ready CORS helper
const ALLOWED = new Set([
  'https://www.spst.it',
  'https://spst.it',
  'http://localhost:3000',
]);

export function corsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allow = ALLOWED.has(origin) ? origin : 'https://www.spst.it';
  return {
    'Access-Control-Allow-Origin': allow,
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400',
  };
}

export function withCors(req: Request, init: ResponseInit = {}, body?: BodyInit | null) {
  const headers = new Headers(init.headers || {});
  const extra = corsHeaders(req);
  Object.entries(extra).forEach(([k, v]) => headers.set(k, v));
  return new Response(body ?? null, { ...init, headers });
}
