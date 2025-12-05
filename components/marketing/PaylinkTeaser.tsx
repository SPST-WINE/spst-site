// components/marketing/PaylinkTeaser.tsx
import Link from "next/link";

const accent = "#F7921E";

export default function PaylinkTeaser() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050910] px-5 py-7 sm:px-7 sm:py-8">
      {/* glow */}
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#F7921E33] blur-3xl" />

      <div className="relative grid gap-6 md:grid-cols-[1.4fr,0.9fr] md:items-center">
        {/* testo */}
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Nuovo · SPST Paylink
          </p>

          <h2 className="text-lg font-semibold sm:text-xl">
            Spedizioni B2C per enoturisti,
            <br className="hidden sm:block" /> in un solo link.
          </h2>

          <p className="text-sm text-white/70">
            Il cliente assaggia in cantina, sceglie le bottiglie e paga da
            smartphone. SPST gestisce MRN, ritiro in cantina e consegna
            door-to-door in Europa e extra-UE.
          </p>

          <ul className="mt-3 grid gap-2 text-xs text-white/75 sm:grid-cols-2">
            <li>• Link/QR dedicato alla tua cantina o al tuo evento.</li>
            <li>• Dati spedizione completi e pagamento online sicuro.</li>
            <li>• MRN e documenti export gestiti da SPST.</li>
            <li>• Ritiro in cantina e tracking per il cliente finale.</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/spst-paylink"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-[#0A1722]"
              style={{ backgroundColor: accent }}
            >
              Scopri SPST Paylink
            </Link>
            <a
              href="https://wa.me/393201441789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
            >
              Parla con SPST
            </a>
          </div>
        </div>

        {/* mini mockup (riassunto) */}
        <div className="mx-auto flex max-w-xs justify-center md:justify-end">
          <div className="relative w-48 rounded-[1.7rem] border border-white/15 bg-[#0A1722] p-3 shadow-xl shadow-black/50">
            <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-white/10" />
            <div className="space-y-2 text-[10px] text-white/75">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.18em] text-white/55">
                  SPST PAYLINK
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px]">
                  Enoturismo
                </span>
              </div>
              <div className="rounded-xl bg-white/5 p-2">
                <p className="text-[10px] text-white/60">Spedizione da</p>
                <p className="text-[11px] font-semibold">
                  Cantina di Montalcino
                </p>
                <p className="mt-1 text-[9px] text-white/55">
                  18 bottiglie · Paris, France
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-2">
                <p className="text-[9px] text-white/55">Totale</p>
                <p className="text-[12px] font-semibold text-white">
                  189,00 €
                </p>
              </div>
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full px-2 py-1.5 text-[10px] font-medium text-[#0A1722]"
                style={{ backgroundColor: accent }}
              >
                Paga e spedisci
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
