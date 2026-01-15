'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Mail, Phone, Building2, Globe2, Landmark } from 'lucide-react';

const SPST_BLUE = '#0a1722';
const SPST_BLUE_SOFT = '#1c3e5e';
const SPST_ORANGE = '#f7931e';
const LOGO_URL =
  'https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png';

export default function RegisterPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      const fd = new FormData(e.currentTarget);
      const data = {
        email: String(fd.get('email') || ''),
        country: String(fd.get('country') || ''),
        sender: String(fd.get('sender') || ''),
        city: String(fd.get('city') || ''),
        cap: String(fd.get('cap') || ''),
        address: String(fd.get('address') || ''),
        phone: String(fd.get('phone') || ''),
        vat: String(fd.get('vat') || ''),
      };

      const r = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!r.ok) {
        const t = await r.text();
        throw new Error(t || 'Errore invio');
      }
      window.location.href = '/register/thank-you';
    } catch (err: any) {
      setError(err?.message || 'Errore durante l’invio');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40 min-h-screen"
      style={{
        background:
          'radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)',
      }}
    >
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>
          <nav className="hidden md:flex items-center gap-3 text-[0.95rem] font-semibold">
            <a href="/" className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors">
              Home
            </a>
            <a
              href="https://dashboard.spst.it"
              className="inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              Area Riservata
            </a>
          </nav>
          <a
            href="https://wa.me/393201441789"
            className="md:hidden inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-3 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
          >
            Supporto
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute -bottom-24 right-1/2 translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)`,
          }}
        />

        <div className="mx-auto max-w-[1200px] px-5 grid md:grid-cols-[1.05fr_.95fr] gap-8 items-center pt-10 md:pt-16 pb-6">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs tracking-wider uppercase text-white/70">
              Onboarding SPST
            </span>
            <h1 className="mt-2 text-[34px] sm:text-[40px] md:text-[48px] font-black leading-[1.05]">
              Richiedi l’accesso al portale
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                e imposta i dati del mittente
              </span>
            </h1>
            <p className="mt-3 text-white/85 text-[15px] sm:text-base max-w-[60ch] mx-auto md:mx-0">
              Compila il form con gli stessi campi della sezione “Impostazioni”.
              Riceverai conferma via email: al termine della registrazione abiliteremo il tuo profilo.
            </p>
          </div>

          {/* Visual logo */}
          <div className="relative mx-auto w-72 sm:w-80 md:w-full aspect-square">
            <div
              className="absolute inset-0 rounded-full blur-[140px] opacity-50"
              style={{
                background: `radial-gradient(60% 60% at 50% 50%, ${SPST_BLUE_SOFT}88, transparent 70%)`,
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative w-40 md:w-48">
                <img
                  src={LOGO_URL}
                  alt="SPST"
                  className="w-full drop-shadow-[0_8px_30px_rgba(247,147,30,.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="py-8">
        <div className="mx-auto max-w-[980px] px-5">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl p-6 md:p-7 grid gap-4 border border-white/15 bg-white/5 backdrop-blur-xl"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Email" icon={<Mail className="h-4 w-4 text-white/60" />}>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="nome@azienda.it"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field label="Paese" icon={<Globe2 className="h-4 w-4 text-white/60" />}>
                <input
                  name="country"
                  required
                  placeholder="Italia"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field
                label="Mittente / Ragione sociale"
                icon={<Building2 className="h-4 w-4 text-white/60" />}
              >
                <input
                  name="sender"
                  required
                  placeholder="SPST SRL"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field label="Città" icon={<Building2 className="h-4 w-4 text-white/60" />}>
                <input
                  name="city"
                  required
                  placeholder="Avellino"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field label="CAP" icon={<Landmark className="h-4 w-4 text-white/60" />}>
                <input
                  name="cap"
                  required
                  inputMode="numeric"
                  placeholder="83100"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field label="Indirizzo" icon={<Building2 className="h-4 w-4 text-white/60" />}>
                <input
                  name="address"
                  required
                  placeholder="Piazzale Gambale 23"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field label="Telefono" icon={<Phone className="h-4 w-4 text-white/60" />}>
                <input
                  name="phone"
                  required
                  inputMode="tel"
                  placeholder="+39 320 1441789"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>

              <Field label="Partita IVA" icon={<Landmark className="h-4 w-4 text-white/60" />}>
                <input
                  name="vat"
                  required
                  placeholder="IT03218840647"
                  className="bg-transparent outline-none w-full placeholder:text-white/40"
                />
              </Field>
            </div>

            {error && (
              <div className="text-center">
                <span className="inline-block px-3 py-2 rounded-lg border border-white/15 bg-red-500/10 text-sm">
                  {error}
                </span>
              </div>
            )}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="mt-1 h-12 rounded-xl font-bold text-base text-[#0f1720] w-full md:w-auto px-6 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50 disabled:opacity-60"
              style={{ background: SPST_ORANGE }}
            >
              {loading ? 'Invio…' : 'Richiedi accesso'}
            </motion.button>

            <div className="text-[11px] text-white/60">
              Inviando il modulo acconsenti al trattamento dei dati secondo la Privacy Policy.
            </div>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10">
        <div className="mx-auto max-w-[1200px] px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a className="flex items-center gap-2 text-white font-extrabold" href="/">
            <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
          </a>
          <small className="text-white/80 leading-tight text-center sm:text-right">
            © SPST SRL · P.IVA IT03218840647 · Sede Legale: Piazzale Gambale 23, Avellino (AV) 83100
          </small>
        </div>
      </footer>
    </main>
  );
}

/* ---------- UI ---------- */
function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="group grid gap-1">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="flex items-center gap-2 rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
        {icon}
        {children}
      </div>
    </label>
  );
}
