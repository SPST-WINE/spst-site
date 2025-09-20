"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  MapPin,
  PackageSearch,
  Ruler,
  Scale,
  Rocket,
  ShieldCheck,
  FileCheck2,
  Thermometer,
  Mail,
  Building2,
  Phone,
} from "lucide-react";

// Brand palette coerente
const SPST_BLUE = "#0a1722";
const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

// Helper puro + "test" rapidi
function volumetricKg4000(l: number, w: number, h: number): number {
  if (!isFinite(l) || !isFinite(w) || !isFinite(h)) return 0;
  return Math.round(((l * w * h) / 4000) * 100) / 100;
}

export default function PortaleQuotazioni() {
  // Smoke tests lato client per evitare regressioni
  useEffect(() => {
    try {
      const ex = volumetricKg4000(40, 30, 35); // 40x30x35 / 4000 = 10.5
      console.assert(ex === 10.5, `volumetricKg4000 test fallito: atteso 10.5, ottenuto ${ex}`);
    } catch (e) {
      console.error("Test volumetrico fallito", e);
    }
  }, []);

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        background:
          "radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)",
      }}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 text-white font-extrabold">
            <img src={LOGO_URL} alt="SPST" className="h-8 w-auto" />
            <span className="hidden sm:inline">SPST</span>
          </a>
          <nav className="hidden md:flex items-center gap-3 text-[0.95rem] font-semibold">
            {[
              ["/#funziona", "Come funziona"],
              ["/#servizi", "Servizi"],
              ["/#chi", "Clienti"],
              ["/#vantaggi", "Perché SPST"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="/servizi-e-contatti"
              className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              Contatti
            </a>
            <a
              href="https://www.spst.it/wine-connect-cantina"
              className="px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              Wine Connect
            </a>
            <a
              href="https://app.spst.it/login"
              className="inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-4 py-2 font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
            >
              Area Riservata
            </a>
          </nav>
          <a
            href="#quote"
            className="md:hidden inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-3 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
          >
            Richiedi
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-5 pt-10 md:pt-16 pb-8">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs tracking-wider uppercase text-white/70">
              Preventivi veloci
            </span>
           <h1 className="mt-2 text-[34px] sm:text-[40px] md:text-[54px] font-black leading-[1.15] pb-2">

              Portale quotazioni
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                calcola la tua spedizione in pochi passaggi
              </span>
            </h1>
            <p className="mt-3 text-white/85 text-[15px] sm:text-base max-w-[60ch] mx-auto md:mx-0">
              Non sei ancora cliente? Inserisci origine e destino, dati del collo e i servizi che ti servono. Ti ricontattiamo con la migliore soluzione.
            </p>
          </div>
        </div>
      </section>

      {/* INFO + FORM */}
      <section id="quote" className="py-10">
        <div className="mx-auto max-w-[1200px] px-5 grid gap-5 md:grid-cols-2 items-stretch">
          {/* Colonna sinistra: contatto + info */}
          <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.04] h-full">
            <div className="grid gap-4 h-full">
              <ContactFields />
              <hr className="border-white/10" />
              <InfoRow icon={<Globe2 className="h-5 w-5" />} title="Copertura EU/UK/USA">
                Spedizioni express e pallet, con soluzioni anche a temperatura controllata.
              </InfoRow>
              <InfoRow icon={<FileCheck2 className="h-5 w-5" />} title="Documenti & accise">
                Possiamo gestire pratiche accise, e‑DAS, COLA, Prior Notice e assistenza doganale.
              </InfoRow>
              <InfoRow icon={<Rocket className="h-5 w-5" />} title="Express opzionale">
                Spunta "Spedizione express" per priorità e transit time più rapidi.
              </InfoRow>
              <InfoRow icon={<ShieldCheck className="h-5 w-5" />} title="Assicurazione">
                Facoltativa, consigliata per spedizioni di valore o campionature urgenti.
              </InfoRow>
            </div>
          </div>

          {/* Colonna destra: dettagli spedizione */}
          <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.04] h-full">
            <QuoteDetailsForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8">
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

/* ------------------------ COMPONENTS ------------------------ */
function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/[0.03] flex gap-3 items-start">
      <div className="w-10 h-10 rounded-xl grid place-items-center text-white/90 bg-white/5 border border-white/10 shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-[16px]">{title}</div>
        <div className="text-white/70 text-[13px] leading-snug">{children}</div>
      </div>
    </div>
  );
}

function ContactFields() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Field label="Azienda (opzionale)">
        <Building2 className="h-4 w-4 text-white/60" />
        <input
          form="quoteForm"
          name="azienda"
          placeholder="Cantina / Azienda"
          className="bg-transparent outline-none w-full placeholder:text-white/40"
        />
      </Field>
      <Field label="Email">
        <Mail className="h-4 w-4 text-white/60" />
        <input
          form="quoteForm"
          required
          type="email"
          name="email"
          placeholder="nome@azienda.it"
          className="bg-transparent outline-none w-full placeholder:text-white/40"
        />
      </Field>
      <Field label="Telefono (opzionale)">
        <Phone className="h-4 w-4 text-white/60" />
        <input
          form="quoteForm"
          name="telefono"
          inputMode="tel"
          placeholder="+39 ..."
          className="bg-transparent outline-none w-full placeholder:text-white/40"
        />
      </Field>
      <Field label="Indirizzo (opzionale)">
        <MapPin className="h-4 w-4 text-white/60" />
        <input
          form="quoteForm"
          name="indirizzo"
          placeholder="Via e numero civico"
          className="bg-transparent outline-none w-full placeholder:text-white/40"
        />
      </Field>
    </div>
  );
}

function QuoteDetailsForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: integrare con EmailJS/Make/Airtable
    alert("Richiesta inviata! Ti contatteremo a breve con la quotazione.");
  };

  return (
    <form id="quoteForm" onSubmit={onSubmit} className="grid gap-4">
      {/* Origine/Destinazione */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Field label="Paese partenza">
          <Globe2 className="h-4 w-4 text-white/60" />
          <input
            required
            name="paese_partenza"
            placeholder="es. Italia"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="CAP partenza">
          <MapPin className="h-4 w-4 text-white/60" />
          <input
            required
            name="cap_partenza"
            placeholder="es. 20100"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Paese destinazione">
          <Globe2 className="h-4 w-4 text-white/60" />
          <input
            required
            name="paese_destinazione"
            placeholder="es. USA"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="CAP destinazione">
          <MapPin className="h-4 w-4 text-white/60" />
          <input
            required
            name="cap_destinazione"
            placeholder="ZIP / CAP"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
      </div>

      {/* Merce */}
      <Field label="Contenuto della merce">
        <PackageSearch className="h-4 w-4 text-white/60" />
        <input
          required
          name="contenuto"
          placeholder="es. 12 bottiglie di vino rosso"
          className="bg-transparent outline-none w-full placeholder:text-white/40"
        />
      </Field>

      {/* Dimensioni e peso */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Field label="Lunghezza (cm)">
          <Ruler className="h-4 w-4 text-white/60" />
          <input
            required
            name="lunghezza"
            type="number"
            min={0}
            step={0.1}
            placeholder="es. 40"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Larghezza (cm)">
          <Ruler className="h-4 w-4 text-white/60" />
          <input
            required
            name="larghezza"
            type="number"
            min={0}
            step={0.1}
            placeholder="es. 30"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Altezza (cm)">
          <Ruler className="h-4 w-4 text-white/60" />
          <input
            required
            name="altezza"
            type="number"
            min={0}
            step={0.1}
            placeholder="es. 35"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Peso (kg)">
          <Scale className="h-4 w-4 text-white/60" />
          <input
            required
            name="peso"
            type="number"
            min={0}
            step={0.1}
            placeholder="es. 12"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
      </div>

      <VolumetricHelper />

      {/* Preferenze di servizio */}
      <fieldset className="rounded-2xl p-4 border border-white/10 bg-white/[0.03]">
        <legend className="text-[12px] px-2 text-white/60">Preferenze</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Check name="express" label="Spedizione express" icon={<Rocket className="h-4 w-4" />} />
          <Check name="accise" label="Pratica accise" icon={<FileCheck2 className="h-4 w-4" />} />
          <Check name="dogana" label="Assistenza doganale" icon={<ShieldCheck className="h-4 w-4" />} />} />
          <Check name="cola" label="COLA / Prior Notice (USA)" icon={<FileCheck2 className="h-4 w-4" />} />
          <Check name="temp" label="Temperatura controllata" icon={<Thermometer className="h-4 w-4" />} />
          <Check name="assicurazione" label="Assicurazione" icon={<ShieldCheck className="h-4 w-4" />} />
        </div>
      </fieldset>

      <motion.button
        whileTap={{ scale: 0.98 }}
        className="mt-1 h-12 rounded-xl font-semibold text-base text-[#0f1720] w-full transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
        style={{ background: SPST_ORANGE }}
      >
        Richiedi preventivo
      </motion.button>
      <div className="text-[11px] text-white/50 text-center">Invio protetto. Nessuno spam.</div>
    </form>
  );
}

function VolumetricHelper() {
  const [vol, setVol] = useState(0);

  useEffect(() => {
    const form = document.getElementById("quoteForm") as HTMLFormElement | null;
    if (!form) return;
    const handler = () => {
      const fd = new FormData(form);
      const L = parseFloat(String(fd.get("lunghezza") || ""));
      const W = parseFloat(String(fd.get("larghezza") || ""));
      const H = parseFloat(String(fd.get("altezza") || ""));
      setVol(volumetricKg4000(L, W, H));
    };
    form.addEventListener("input", handler);
    handler();
    return () => form.removeEventListener("input", handler);
  }, []);

  return (
    <div className="rounded-xl p-3 border border-white/10 bg-white/[0.03] text-xs text-white/70">
      Peso volumetrico stimato (cm/4000): <span className="font-semibold text-white">{vol} kg</span>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="group grid gap-1">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="flex items-center gap-2 rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
        {children}
      </div>
    </label>
  );
}

function Check({ name, label, icon }: { name: string; label: string; icon?: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 rounded-xl px-3 py-3 bg-black/30 border border-white/10">
      <input type="checkbox" name={name} className="sr-only peer" />
      <span className="relative grid place-items-center w-5 h-5 rounded-full border border-white/30 bg-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-orange-400 opacity-0 peer-checked:opacity-100 transition-opacity" />
      </span>
      {icon && <span className="opacity-80">{icon}</span>}
      <span className="text-sm">{label}</span>
    </label>
  );
}
