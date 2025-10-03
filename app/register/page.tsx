'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = new FormData(e.currentTarget)
    const data = {
      email: String(form.get('email') || ''),
      country: String(form.get('country') || ''),
      sender: String(form.get('sender') || ''),
      city: String(form.get('city') || ''),
      cap: String(form.get('cap') || ''),
      address: String(form.get('address') || ''),
      phone: String(form.get('phone') || ''),
      vat: String(form.get('vat') || ''),
    }

    try {
      setLoading(true)
      const r = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!r.ok) throw new Error(await r.text())
      window.location.href = '/register/thank-you'
    } catch (err: any) {
      setError(err?.message || 'Errore durante l’invio')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Richiedi l’accesso a SPST</h1>
      <p className="mb-8 text-slate-600">
        Compila i dati come nella sezione “Impostazioni”. Ti contatteremo per la call di presentazione e attiveremo il tuo profilo.
      </p>

      <form onSubmit={onSubmit} className="space-y-5 bg-white shadow rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Paese</label>
            <input type="text" name="country" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mittente / Ragione sociale</label>
            <input type="text" name="sender" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Città</label>
            <input type="text" name="city" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">CAP</label>
            <input type="text" name="cap" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Indirizzo</label>
            <input type="text" name="address" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Telefono</label>
            <input type="tel" name="phone" required className="input" />
          </div>
          <div>
            <label className="block text-sm font-medium">Partita IVA</label>
            <input type="text" name="vat" required className="input" />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn w-full md:w-auto"
        >
          {loading ? 'Invio...' : 'Richiedi accesso'}
        </button>
      </form>
    </main>
  )
}
