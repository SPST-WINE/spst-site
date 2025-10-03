import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const MAIL_FROM = process.env.MAIL_FROM
    const MAIL_TO = process.env.MAIL_TO

    if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
      return NextResponse.json(
        { ok: false, error: 'Env vars non configurate' },
        { status: 500 }
      )
    }

    const resend = new Resend(RESEND_API_KEY)

    const html = `
      <h2>Nuova registrazione SPST</h2>
      <ul>
        <li><b>Email:</b> ${body.email}</li>
        <li><b>Paese:</b> ${body.country}</li>
        <li><b>Mittente:</b> ${body.sender}</li>
        <li><b>Città:</b> ${body.city}</li>
        <li><b>CAP:</b> ${body.cap}</li>
        <li><b>Indirizzo:</b> ${body.address}</li>
        <li><b>Telefono:</b> ${body.phone}</li>
        <li><b>Partita IVA:</b> ${body.vat}</li>
      </ul>
    `

    await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO.split(',').map((s) => s.trim()),
      subject: 'Nuova richiesta di registrazione',
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 400 })
  }
}
