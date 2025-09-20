import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function cors(origin?: string | null) {
  const o = origin || '*';
  return {
    'Access-Control-Allow-Origin': o,
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: cors(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const headers = cors(req.headers.get('origin'));
  try {
    const BASE_ID  = process.env.AIRTABLE_BASE_ID;
    const API_KEY  = process.env.AIRTABLE_PAT;
    const TABLE    = process.env.TB_PREVENTIVI || 'Preventivi';
    if (!BASE_ID || !API_KEY) {
      return NextResponse.json({ ok:false, error:'Missing Airtable credentials' }, { status:500, headers });
    }

    const body = await req.json().catch(()=> ({}));
    // Body atteso – prendi solo i campi utili (aggiungi/rinomina se serve)
    const fields: Record<string, any> = {
      'Creato da'                     : body.email || '',
      'Sottotipo'                     : body.tipo  || '',     // B2B/B2C/Sample
      'Note'                          : body.note || '',
      'Corriere'                      : body.corriere || '',
      'Prezzo'                        : body.prezzo ?? null,  // numero
      'Mittente - Ragione Sociale'    : body.mittenteRagione || '',
      'Mittente - Paese'              : body.mittentePaese || '',
      'Mittente - Città'              : body.mittenteCitta || '',
      'Mittente - CAP'                : body.mittenteCap || '',
      'Mittente - Indirizzo'          : body.mittenteIndirizzo || '',
      'Destinatario - Ragione Sociale': body.destRagione || '',
      'Destinatario - Paese'          : body.destPaese || '',
      'Destinatario - Città'          : body.destCitta || '',
      'Destinatario - CAP'            : body.destCap || '',
      'Destinatario - Indirizzo'      : body.destIndirizzo || '',
      // Aggiungi qui eventuali altri campi custom
    };

    // Rimuovi chiavi vuote/null per non “sporcare” la tabella
    Object.keys(fields).forEach(k=>{
      const v = fields[k];
      if (v === '' || v == null) delete fields[k];
    });

    const url = `https://api.airtable.com/v0/${encodeURIComponent(BASE_ID)}/${encodeURIComponent(TABLE)}`;
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records: [ { fields } ] }),
      cache: 'no-store',
    });

    const j = await r.json();
    if (!r.ok) {
      return NextResponse.json({ ok:false, error:j }, { status:r.status, headers });
    }
    return NextResponse.json({ ok:true, record: j.records?.[0] }, { headers });
  } catch (err: any) {
    return NextResponse.json({ ok:false, error:String(err?.message || err) }, { status:500, headers });
  }
}
