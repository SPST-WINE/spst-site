"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2 } from "lucide-react";

const SPST_ORANGE = "#f7931e";

export function SpstLeadForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [toast, setToast] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      if (!fd.get("_ts")) fd.append("_ts", String(Date.now()));
      if (!fd.get("_gotcha")) fd.append("_gotcha", "");

      const res = await fetch("/api/lead", { method: "POST", body: fd });
      const json = await res.json();
      if (json.ok) {
        setToast("Richiesta inviata! Ti rispondiamo in giornata.");
        form.reset();
      } else {
        setToast("Errore invio: " + (json.error || "riprovare"));
      }
    } catch (err: any) {
      setToast("Errore invio: " + (err?.message || "riprovare"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
        noValidate
      >
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <input type="hidden" name="_ts" value={String(Date.now())} />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Field label="Azienda">
            <Building2 className="h-4 w-4 text-white/60" />
            <input
              name="azienda"
              required
              placeholder="Cantina / Azienda"
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
          </Field>
          <Field label="Nome referente">
            <Building2 className="h-4 w-4 text-white/60" />
            <input
              name="referente"
              required
              placeholder="Nome e cognome"
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
          </Field>
          <Field label="Email">
            <Mail className="h-4 w-4 text-white/60" />
            <input
              name="email"
              required
              type="email"
              placeholder="nome@azienda.it"
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
          </Field>
          <Field label="Telefono">
            <Phone className="h-4 w-4 text-white/60" />
            <input
              name="telefono"
              inputMode="tel"
              placeholder="+39 ..."
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
          </Field>
          <Field label="Produzione annua (bottiglie)">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 20h12M9 20V8h6v12M10 4h4" />
            </svg>
            <input
              name="produzione_annua"
              type="number"
              min={0}
              step={100}
              placeholder="es. 50.000"
              className="w-full bg-transparent outline-none placeholder:text-white/40"
            />
          </Field>
          <div className="grid gap-1">
            <div className="text-[11px] text-white/60">
              Spedisci già all&apos;estero?
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-3 ring-0 focus-within:ring-1 focus-within:ring-white/30">
              <select
                name="spedisce_gia"
                className="w-full bg-transparent outline-none"
              >
                <option className="text-black" value="">
                  Seleziona
                </option>
                <option className="text-black" value="si">
                  Sì
                </option>
                <option className="text-black" value="no">
                  No
                </option>
                <option className="text-black" value="saltuariamente">
                  Saltuariamente
                </option>
              </select>
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          disabled={submitting}
          className="mt-1 h-12 w-full rounded-xl text-base font-semibold text-[#0f1720] ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 disabled:opacity-60 active:translate-y-[1px]"
          style={{ background: SPST_ORANGE }}
        >
          {submitting ? "Invio in corso..." : "Richiedi informazioni"}
        </motion.button>
        <div className="text-center text-[11px] text-white/50">
          Invio protetto. Nessuno spam.
        </div>
      </form>

      {toast && (
        <div className="mt-3 text-center">
          <span className="inline-block rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm">
            {toast}
          </span>
        </div>
      )}
    </>
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
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-3 ring-0 focus-within:ring-1 focus-within:ring-white/30">
        {children}
      </div>
    </label>
  );
}
