// app/api/preventivi/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// CORS minimale
function buildCorsHeaders(origin?: string | null) {
  const o = origin || '*';
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  return new NextResponse(null, { status: 204, headers: buildCorsHeaders(origin) });
}

// Helpers per ricerca locale
function strIncludes(hay: any, needle: string): boolean {
  if (hay == null) return false;
  if (typeof hay === 'string') return hay.toLowerCase().includes(needle);
  if (typeof hay === 'number') return String(hay).includes(needle);
  if (Array.isArray(hay)) return hay.some((x) => strIncludes(x, needle));
  if (typeof hay === 'object') {
    // evita di esplodere su attachment/oggetti: prova a cercare su stringhe note
    const vals = Object.values(hay);
    return vals.some((v) => typeof v === 'string' && v.toLowerCase().includes(needle));
  }
  return false;
}

export async function GET(req: NextRequest) {
  const origin = req.headers.get('origin');
  const cors = buildCorsHeaders(origin);

  try {
    const { searchParams } = new URL(req.url);
    const search   = (searchParams.get('search') || '').trim().toLowerCase();
    const onlyOpen = searchParams.get('onlyOpen') === '1';
    const pageSize = Number(searchParams.get('pageSize') || '50') || 50;

    // === ENV (nomi esatti che mi hai dato) ===
    const BASE_ID = process.env.AIRTABLE_BASE_ID || '';
    const API_KEY = process.env.AIRTABLE_PAT || ''; // token
    const TABLE   = process.env.TB_PREVENTIVI || 'Preventivi';

    if (!BASE_ID || !API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing Airtable credentials' },
        { status: 500, headers: cors }
      );
    }

    // Ordinamento: proviamo più campi in fallback per evitare 422
    const SORT_CANDIDATES = [
      process.env.AIRTABLE_QUOTES_SORT_FIELD || 'ID', // se esiste ID autonumber
      'Creato il',
      'Created time',
      'Created',
    ];

    // funzione che tenta con un certo campo di sort, altrimenti fallback
    async function fetchWithSort(sortField?: string) {
      const params = new URLSearchParams();
      params.set('pageSize', String(pageSize));
      if (sortField) {
        params.set('sort[0][field]', sortField);
        params.set('sort[0][direction]', 'desc');
      }
      const url = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID)}/${encodeURIComponent(TABLE)}?${params.toString()}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      const json = await res.json().catch(() => ({}));
      return { res, json };
    }

    // prova ordinamenti alternativi; se tutti falliscono, tenta senza sort
    let records: any[] = [];
    let ok = false;
    for (const sf of SORT_CANDIDATES) {
      const { res, json } = await fetchWithSort(sf);
      if (res.ok) { records = json.records || []; ok = true; break; }
      if (res.status !== 422) {
        // errore diverso da formula/sort -> restituisco
        return NextResponse.json({ ok: false, error: json }, { status: res.status, headers: cors });
      }
    }
    if (!ok) {
      const { res, json } = await fetchWithSort(undefined);
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: json }, { status: res.status, headers: cors });
      }
      records = json.records || [];
    }

    // Filtro locale: onlyOpen (se esiste un campo "Stato"/"Status")
    if (onlyOpen) {
      records = records.filter((r) => {
        const f = r.fields || {};
        const raw = (f['Stato'] ?? f['Status'] ?? '').toString().toLowerCase();
        if (!raw) return true; // se non abbiamo il campo, non escludo
        if (raw === 'chiuso' || raw === 'closed') return false;
        // considero "aperti" tutto ciò che non è chiuso; se vuoi restrittivo:
        // return ['aperto','nuovo','open','new'].includes(raw);
        return true;
      });
    }

    // Filtro locale: search su TUTTI i campi del record
    if (search) {
      records = records.filter((r) => {
        const f = r.fields || {};
        return Object.values(f).some((v) => strIncludes(v, search));
      });
    }

    return NextResponse.json({ ok: true, records }, { headers: cors });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500, headers: cors }
    );
  }
}
