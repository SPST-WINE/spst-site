// app/api/preventivi/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { buildCorsHeaders } from '@/lib/cors';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function escRegex(s: string) {
  return String(s).toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/"/g, '\\"');
}

function buildSearchFormula(term: string) {
  if (!term) return '';
  const t = escRegex(term);

  // Campi su cui fare match (mettiamo ampia compatibilità coi nomi)
  const FIELDS = [
    'ID',
    'Creato da',
    'Mittente - Ragione Sociale',
    'Mittente - Città',
    'Mittente - CAP',
    'Destinatario - Ragione Sociale',
    'Destinatario - Paese',
    'Destinatario - Città',
    'Destinatario - CAP',
    'Sottotipo',
    'Tipo Spedizione',
    'Paese',
    'Città',
  ];

  const parts = FIELDS.map(
    (f) => `REGEX_MATCH(LOWER({${f}}&""), "${t}")`
  );

  // match numerico su {ID} se il termine è un numero
  if (/^\d+$/.test(term)) {
    parts.push(`{ID} = ${parseInt(term, 10)}`);
  }

  return `OR(${parts.join(',')})`;
}

function okJson(req: NextRequest, body: any, init?: ResponseInit) {
  const origin = req.headers.get('origin') ?? undefined;
  return new NextResponse(JSON.stringify(body), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...buildCorsHeaders(origin),
      ...(init?.headers || {}),
    },
  });
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin') ?? undefined;
  return new NextResponse(null, { status: 204, headers: buildCorsHeaders(origin) });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = (searchParams.get('search') || '').trim();
  const pageSize = Math.max(1, Math.min(100, parseInt(searchParams.get('pageSize') || '50', 10)));

  const apiKey = process.env.AIRTABLE_API_KEY!;
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const tableName = process.env.AIRTABLE_PREVENTIVI_TABLE || 'Preventivi';

  if (!apiKey || !baseId) {
    return okJson(req, { ok: false, error: 'Airtable misconfigured' }, { status: 500 });
  }

  try {
    const base = new Airtable({ apiKey }).base(baseId);

    const filterByFormula = buildSearchFormula(search);

    const records = await base(tableName)
      .select({
        pageSize,
        // ordina dal più recente al meno recente (campo {ID} Autonumber)
        sort: [{ field: 'ID', direction: 'desc' }],
        ...(filterByFormula ? { filterByFormula } : {}),
      })
      .firstPage();

    const out = records.map((r) => ({ id: r.id, fields: r.fields }));

    return okJson(req, { ok: true, records: out });
  } catch (err: any) {
    return okJson(
      req,
      { ok: false, error: String(err?.message || err) },
      { status: 422 }
    );
  }
}
