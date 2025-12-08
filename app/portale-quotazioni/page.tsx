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

import { SpstHeader } from "@/components/spst/SpstHeader";

// Brand palette coerente
const SPST_BLUE = "#0a1722";
const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

// Helper volumetrico (non esportare named export in una page.tsx)
function volumetricKg4000(l: number, w: number, h: number): number {
  if (!isFinite(l) || !isFinite(w) || !isFinite(h)) return 0;
  return Math.round(((l * w * h) / 4000) * 100) / 100;
}

/* ------------------------ TOAST ------------------------ */
type ToastVariant = "success" | "error" | "info";
function useToast() {
  const [toast, setToast] =
    useState<{ message: string; variant: ToastVariant } | null>(null);
  function show(message: string, variant: ToastVariant = "success") {
    setToast({ message, variant });
    window.clearTimeout((show as any)._t);
    (show as any)._t = window.setTimeout(() => setToast(null), 3000);
  }
  return { toast, show };
}
function Toast({
  toast,
}: {
  toast: { message: string; variant: ToastVariant } | null;
}) {
  if (!toast) return null;
  const ring =
    toast.variant === "success"
      ? "ring-1 ring-emerald-400/50"
      : toast.variant === "error"
      ? "ring-1 ring-red-400/50"
      : "ring-1 ring-white/30";
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur ${ring} shadow-[0_8px_30px_rgba(0,0,0,.25)]`}
    >
      <span className="text-sm">{toast.message}</span>
    </div>
  );
}

export default function PortaleQuotazioni() {
  const { toast, show } = useToast();

  // nav uguale alla home (senza Wine Connect)
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#servizi", label: "Servizi" },
    { href: "/#vantaggi", label: "Perché SPST" },
    { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
    { href: "/spst-paylink", label: "Paylink USA" },
  ];

  // collego il bridge dei toast (evento custom -> hook)
  useEffect(() => {
    const handler = (e: any) => {
      const { msg, v } = e.detail || {};
      if (msg) {
        show(msg, v || "success");
      }
    };
    window.addEventListener("spst:toast", handler);
    return () => window.removeEventListener("spst:toast", handler);
  }, [show]);

  // Smoke test veloce per prevenire regressioni
  useEffect(() => {
    const ex = volumetricKg4000(40, 30, 35); // 40*30*35/4000 = 10.5
    console.assert(ex === 10.5, `volumetricKg4000 atteso 10.5, ottenuto ${ex}`);
  }, []);

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        background:
          "radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)",
      }}
    >
      {/* ===== HEADER RIUSABILE (come home) ===== */}
      <SpstHeader navItems={navItems} />

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
              Non sei ancora cliente? Inserisci origine e destino, dati del collo e i
              servizi che ti servono. Ti ricontattiamo con la migliore soluzione.
            </p>
          </div>
        </div>
      </section>

      {/* ===== INFO + FORM ===== */}
      <section id="quote" className="py-10">
        <div className="mx-auto max-w-[1200px] px-5 grid gap-5 md:grid-cols-2 items-stretch">
          {/* Colonna sinistra: contatto + info */}
          <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.04] h-full">
            <div className="grid gap-4 h-full">
              <ContactFields />
              <hr className="border-white/10" />
              <InfoRow icon={<Globe2 className="h-5 w-5" />} title="Copertura EU/UK/USA">
                Spedizioni express e pallet, con soluzioni anche a temperatura
                controllata.
              </InfoRow>
              <InfoRow icon={<FileCheck2 className="h-5 w-5" />} title="Documenti & accise">
                Possiamo gestire pratiche accise, COLA, Prior Notice e assistenza
                doganale.
              </InfoRow>
              <InfoRow icon={<Rocket className="h-5 w-5" />} title="Express opzionale">
                Spunta &quot;Spedizione express&quot; per priorità e transit time più
                rapidi.
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

      {/* ===== CTA ===== */}
      <section className="py-10">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)]">
            <h3 className="text-xl font-bold text-white m-0">
              Serve assistenza per il preventivo?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
                style={{ background: SPST_ORANGE }}
                href="/servizi-e-contatti"
              >
                Servizi e contatti
              </a>
              <a
                className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30"
                href="https://wa.me/393201441789"
              >
                Supporto WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8">
        <div className="mx-auto max-w-[1200px] px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a className="flex items-center gap-2 text-white font-extrabold" href="/">
            <img src={LOGO_URL} alt="SPST" className="h-7 w-auto" />
          </a>
          <small className="text-white/80 leading-tight text-center sm:text-right">
            © SPST SRL · P.IVA IT03218840647 · Sede Legale: Piazzale Gambale 23, Avellino
            (AV) 83100
          </small>
        </div>
      </footer>

      {/* Toast */}
      <Toast toast={toast} />
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
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // blocca navigazione
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Honeypot + timestamp
      if (!fd.get("_ts")) fd.append("_ts", String(Date.now()));
      if (!fd.get("_gotcha")) fd.append("_gotcha", "");

      const res = await fetch("/api/quote", { method: "POST", body: fd });
      const json = await res.json();

      if (json.ok) {
        const ev = new CustomEvent("spst:toast", {
          detail: {
            msg: "Richiesta inviata! Ti contatteremo a breve.",
            v: "success",
          },
        });
        window.dispatchEvent(ev);
        form.reset();
      } else {
        const ev = new CustomEvent("spst:toast", {
          detail: {
            msg: `Errore invio: ${json.error || "riprovare"}`,
            v: "error",
          },
        });
        window.dispatchEvent(ev);
      }
    } catch (err: any) {
      const ev = new CustomEvent("spst:toast", {
        detail: {
          msg: `Errore invio: ${err?.message || "riprovare"}`,
          v: "error",
        },
      });
      window.dispatchEvent(ev);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id="quoteForm" onSubmit={onSubmit} className="grid gap-4" noValidate>
      {/* Honeypot + ts */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />
      <input type="hidden" name="_ts" value={String(Date.now())} />

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
          <Check
            name="express"
            label="Spedizione express"
            icon={<Rocket className="h-4 w-4" />}
          />
          <Check
            name="accise"
            label="Pratica accise"
            icon={<FileCheck2 className="h-4 w-4" />}
          />
          <Check
            name="dogana"
            label="Assistenza doganale"
            icon={<ShieldCheck className="h-4 w-4" />}
          />
          <Check
            name="cola"
            label="COLA / Prior Notice (USA)"
            icon={<FileCheck2 className="h-4 w-4" />}
          />
          <Check
            name="temp"
            label="Temperatura controllata"
            icon={<Thermometer className="h-4 w-4" />}
          />
          <Check
            name="assicurazione"
            label="Assicurazione"
            icon={<ShieldCheck className="h-4 w-4" />}
          />
        </div>
      </fieldset>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        disabled={submitting}
        className="mt-1 h-12 rounded-xl font-semibold text-base text-[#0f1720] w-full transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50 disabled:opacity-60 disabled:hover:translate-y-0"
        style={{ background: SPST_ORANGE }}
      >
        {submitting ? "Invio in corso..." : "Richiedi preventivo"}
      </motion.button>
      <div className="text-[11px] text-white/50 text-center">
        Invio protetto. Nessuno spam.
      </div>
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
      Peso volumetrico stimato (cm/4000):{" "}
      <span className="font-semibold text-white">{vol} kg</span>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group grid gap-1">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="flex items-center gap-2 rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
        {children}
      </div>
    </label>
  );
}

function Check({
  name,
  label,
  icon,
}: {
  name: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-3 rounded-xl px-3 py-3 bg-black/30 border border-white/10 cursor-pointer select-none">
      <input type="checkbox" name={name} className="peer sr-only" />
      <span
        className="relative grid place-items-center w-5 h-5 rounded-full border border-white/30 bg-white/5
                   after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full after:bg-orange-400
                   after:opacity-0 peer-checked:after:opacity-100 after:transition-opacity"
      />
      {icon && <span className="opacity-80">{icon}</span>}
      <span className="text-sm">{label}</span>
    </label>
  );
}
