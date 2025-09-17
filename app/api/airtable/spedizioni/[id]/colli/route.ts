// app/api/airtable/spedizioni/[id]/colli/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { okJson, empty204, applyCors } from '../../../../../../_lib/cors';

const BASE = process.env.AIRTABLE_BASE_ID!;
const KEY  = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT!;
const TBL  = process.env.TB_COLLI || 'Colli';
// Nome del campo linkato alla spedizione (in Airtable è un "Link to another record")
const LINK = process.env.AIRTABLE_LINK_FIELD_COLLI || 'Spedizione';

export function OPTIONS(req: NextRequest) {
  return empty204(req);
}

export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  try {
    const recId = ctx.params.id;

    const url = new URL(`https://api.airtable.com/v0/${BASE}/${encodeURIComponent(TBL)}`);
    // Filtra i record di "Colli" linkati alla spedizione `recId`
    url.searchParams.set(
      'filterByFormula',
      `FIND('${recId}', ARRAYJOIN({${LINK}}, ','))`
    );
    url.searchParams.set('pageSize', '50');

    const r = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${KEY}` },
      // Airtable consente CORS; la policy verso il client la gestiamo noi
      cache: 'no-store',
    });

    const j = await r.json();
    if (!r.ok) {
      return applyCors(req, new NextResponse(JSON.stringify({ ok: false, error: j }), {
        status: r.status,
        headers: { 'Content-Type': 'application/json' },
      }));
    }

    // Ritorno compatto: solo i fields
    const items = Array.isArray(j.records) ? j.records.map((x: any) => x.fields) : [];
    return okJson(req, { ok: true, items });
  } catch (err: any) {
    return applyCors(req, new NextResponse(JSON.stringify({ ok: false, error: String(err?.message || err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    }));
  }
}
