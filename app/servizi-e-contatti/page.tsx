"use client";
import { motion } from "framer-motion";
import {
  Ship,
  Route,
  FileCheck2,
  Warehouse,
  Globe2,
  ShieldCheck,
  Mail,
  Phone,
  MessageSquare,
  Building2,
  MapPin,
  Timer,
  ChevronDown,
} from "lucide-react";

// Brand palette
const SPST_BLUE = "#0a1722"; // base blu scuro (sfondo)
const SPST_BLUE_SOFT = "#1c3e5e"; // accenti
const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export default function ServiziContatti() {
  // Dev sanity-checks (mini "tests" in-page)
  if (typeof window !== "undefined") {
    try {
      console.assert(Array.isArray(FAQS), "FAQS deve essere un array");
      FAQS.forEach((f, i) => {
        console.assert(typeof f.q === "string" && f.q.length > 0, `FAQ[${i}].q mancante`);
        console.assert(typeof f.a === "string" && f.a.length > 0, `FAQ[${i}].a mancante`);
      });
      const acciseFaq = FAQS.find((f) => /accise|e‑DAS/i.test(f.q + f.a));
      console.assert(
        acciseFaq && /e‑DAS/.test(acciseFaq.a),
        "La FAQ su accise/e‑DAS deve contenere 'e‑DAS' ed essere una stringa chiusa"
      );
    } catch (e) {
      console.error("Dev checks FAQS falliti:", e);
    }
  }

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{
        background:
          "radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)",
      }}
    >
      {/* ===== STICKY HEADER (identico alla homepage) ===== */}
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
            href="#contatti"
            className="md:hidden inline-flex items-center rounded-full bg-[var(--spst-orange,#f7931e)] text-black px-3 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
          >
            Contatti
          </a>
        </div>
      </header>

      {/* ===== HERO (senza logo grande) ===== */}
      <section className="relative overflow-hidden">
        {/* soft brand glows */}
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

        <div className="mx-auto max-w-[1200px] px-5 pt-10 md:pt-16 pb-12">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs tracking-wider uppercase text-white/70">
              Export vino all‑in‑one
            </span>
            <h1 className="mt-2 text-[34px] sm:text-[40px] md:text-[54px] font-black leading-[1.03]">
              Servizi e contatti
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                tutto quello che ti serve per spedire e vendere
              </span>
            </h1>
            <p className="mt-3 text-white/85 text-[15px] sm:text-base max-w-[60ch] mx-auto md:mx-0">
              Documenti doganali e fiscali, spedizioni express o pallet, deposito e
              rappresentanza, più supporto commerciale con <strong>Wine Connect</strong>.
              Un unico partner dall’Italia ai tuoi buyer.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://www.spst.it/portale-quotazioni"
                className="px-4 py-2 rounded-full font-semibold text-sm shadow transition-all duration-200 hover:shadow-orange-500/20 hover:-translate-y-[1px] active:translate-y-[1px] hover:ring-2 ring-orange-300/50"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                Richiedi una quotazione
              </a>
              <a
                href="#contatti"
                className="px-4 py-2 rounded-full border font-semibold text-sm transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                Scrivici
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIZI ===== */}
      <section id="servizi" className="py-12">
        <SectionHeader
          kicker="Cosa facciamo"
          title="Operatività completa, dall’export alla consegna"
          tone="accent"
        />

        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card
            title="Logistica & Spedizioni"
            text="Express, campionature e pallet in Europa e USA. Consolidamenti e soluzioni temperature‑safe."
            icon={<Ship className="h-5 w-5" />}
          />
          <Card
            title="Dogana & Fisco"
            text="Accisa assolta/sospesa, COLA, Prior Notice, e‑DAS. Documenti generati e archiviati in modo smart."
            icon={<FileCheck2 className="h-5 w-5" />}
          />
          <Card
            title="Deposito & Rappresentanza"
            text="Stoccaggio e rappresentanza fiscale per semplificare la vendita nei diversi Paesi."
            icon={<Warehouse className="h-5 w-5" />}
          />
          <Card
            title="Wine Connect"
            text="Matchmaking cantine‑buyer, onboarding, KPI e supporto commerciale per entrare in nuovi mercati."
            icon={<Globe2 className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== COME LAVORIAMO ===== */}
      <section id="processo" className="py-12">
        <SectionHeader
          kicker="Come funziona"
          title="Dalla carta al tracking, in 3 step"
          tone="solution"
        />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 md:grid-cols-3">
          <Card
            title="1) Documenti a norma"
            text="Accise, COLA, Prior Notice, e‑DAS e tutta la parte burocratica per partire in regola."
            icon={<FileCheck2 className="h-5 w-5" />}
          />
          <Card
            title="2) Spedizione ottimizzata"
            text="Selezioniamo corrieri e tratte migliori (express o pallet) con tracking e assistenza dedicata."
            icon={<Route className="h-5 w-5" />}
          />
          <Card
            title="3) Crescita commerciale"
            text="Con Wine Connect colleghiamo cantine e buyer esteri. Campionature e ordini rapidi e sicuri."
            icon={<ShieldCheck className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== CONTATTI RAPIDI ===== */}
      <section id="contatti" className="py-12">
        <SectionHeader
          kicker="Parliamo della tua cantina"
          title="Servizi e contatti"
          tone="plain"
        />

        <div className="mx-auto max-w-[1200px] px-5 grid gap-5 md:grid-cols-2 items-stretch">
          {/* colonna sinistra: card a piena altezza */}
          <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.04] h-full">
            <div className="flex flex-col justify-between h-full">
              <ContactCard
                title="Email"
                text="info@spst.it"
                href="mailto:info@spst.it"
                icon={<Mail className="h-5 w-5" />}
              />
              <ContactCard
                title="WhatsApp"
                text="+39 320 144 1789"
                href="https://wa.me/393201441789"
                icon={<MessageSquare className="h-5 w-5" />}
              />
              <ContactCard
                title="Telefono"
                text="+39 320 144 1789"
                href="tel:+393201441789"
                icon={<Phone className="h-5 w-5" />}
              />
              <ContactCard
                title="Sede legale"
                text="Piazzale Gambale 23, Avellino (AV) 83100 – Italia"
                icon={<MapPin className="h-5 w-5" />}
              />
              <ContactCard
                title="Orari"
                text="Lun–Ven · 9:00–13:00 / 15:00–18:00 (CET)"
                icon={<Timer className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* colonna destra: form a piena altezza */}
          <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.04] h-full flex flex-col">
            <QuickForm />
            <div className="mt-3 text-center text-[12px] text-white/60">
              Compili in 30 secondi. Ti rispondiamo in giornata.
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-12">
        <SectionHeader kicker="Domande frequenti" title="FAQ" tone="plain" />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-3">
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* ===== CTA FINALE ===== */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)]">
            <h3 className="text-xl font-bold text-white m-0">
              Pronto a spedire il tuo vino nel mondo?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
                style={{ background: SPST_ORANGE }}
                href="https://www.spst.it/portale-quotazioni"
              >
                Richiedi una quotazione
              </a>
              <a
                className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30"
                href="https://wa.me/393201441789"
              >
                Supporto WhatsApp
              </a>
              <a
                className="px-4 py-2 rounded-full font-bold border border-white/70 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-white/10 hover:ring-2 ring-white/30"
                href="#contatti"
              >
                Contatti
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
            © SPST SRL · P.IVA IT03218840647 · Sede Legale: Piazzale Gambale 23,
            Avellino (AV) 83100
          </small>
        </div>
      </footer>
    </main>
  );
}

/* ------------------------ DATA ------------------------ */
const FAQS = [
  {
    q: "Spedite solo vino?",
    a: "Sì, siamo specializzati nel vino (B2B e campionature). Possiamo gestire anche prodotti correlati (es. olio) previo check di conformità.",
  },
  {
    q: "Come gestite accise ed e‑DAS?",
    a: "Produciamo e archiviamo la documentazione necessaria (accisa assolta/sospesa, e‑DAS, COLA, Prior Notice) e verifichiamo HS code e requisiti per Paese di destinazione.",
  },
  {
    q: "Posso inviare campionature?",
    a: "Sì. Usiamo corrieri espressi con tempi rapidi e tracciamento. Offriamo anche soluzioni a temperatura controllata quando necessario.",
  },
  {
    q: "Fornite supporto commerciale?",
    a: "Con Wine Connect creiamo il match tra cantine e buyer, standardizziamo le campionature e misuriamo KPI per accelerare i primi ordini.",
  },
  {
    q: "Che Paesi coprite?",
    a: "EU, UK (solo vino, no cibo/medicine), USA e alcuni mercati extra‑UE in espansione. Verifichiamo fattibilità caso per caso.",
  },
];

/* ------------------------ COMPONENTS ------------------------ */
function SectionHeader({
  kicker,
  title,
  tone = "plain",
}: {
  kicker: string;
  title: React.ReactNode;
  tone?: "problem" | "solution" | "accent" | "plain";
}) {
  const gradients: Record<string, string> = {
    problem: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    solution: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    accent: `linear-gradient(90deg, ${SPST_ORANGE}, #fff)`,
    plain: "linear-gradient(90deg, #fff, #fff)",
  };
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-5 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] tracking-wider uppercase text-white/60"
      >
        {kicker}
      </motion.div>
      <div className="relative inline-block">
        {/* highlight glow */}
        <div
          aria-hidden
          className="absolute -inset-x-6 -inset-y-2 blur-xl md:blur-2xl opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.45) 0%, rgba(247,147,30,.28) 40%, transparent 65%), radial-gradient(90% 120% at 50% 50%, rgba(28,62,94,.18) 0%, transparent 60%)",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-[26px] sm:text-[30px] md:text-[38px] font-black mt-1"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: gradients[tone] }}
          >
            {title}
          </span>
        </motion.h2>
      </div>
      <div
        className="mt-2 h-[3px] w-24 rounded-full"
        style={{ backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)` }}
      />
    </div>
  );
}

function Card({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]"
    >
      {icon && (
        <div className="w-10 h-10 rounded-xl grid place-items-center text-white/90 bg-white/5 border border-white/10 mb-2">
          {icon}
        </div>
      )}
      <h3 className="text-white font-extrabold text-[1.1rem]">{title}</h3>
      <p className="text-white/80 text-[0.98rem]">{text}</p>
    </motion.div>
  );
}

function ContactCard({
  title,
  text,
  href,
  icon,
}: {
  title: string;
  text: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  const content = (
    <div className="rounded-2xl p-4 border border-white/10 bg-white/[0.03] flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl grid place-items-center text-white/90 bg-white/5 border border-white/10">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-[16px]">{title}</div>
        <div className="text-white/80 text-[14px]">{text}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:bg-white/[0.03] rounded-2xl">
      {content}
    </a>
  ) : (
    content
  );
}

function QuickForm() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: collega EmailJS / Make / Airtable
    alert("Grazie! Ti contatteremo a breve.");
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Field label="Azienda">
          <Building2 className="h-4 w-4 text-white/60" />
          <input
            required
            name="azienda"
            placeholder="Cantina / Azienda"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Nome referente">
          <Building2 className="h-4 w-4 text-white/60" />
          <input
            required
            name="referente"
            placeholder="Nome e cognome"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Email">
          <Mail className="h-4 w-4 text-white/60" />
          <input
            required
            type="email"
            name="email"
            placeholder="nome@azienda.it"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Telefono">
          <Phone className="h-4 w-4 text-white/60" />
          <input
            inputMode="tel"
            name="telefono"
            placeholder="+39 ..."
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Paesi di interesse">
          <Globe2 className="h-4 w-4 text-white/60" />
          <input
            name="paesi"
            placeholder="es. USA, Germania, Danimarca"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label="Tipologia spedizioni">
          <Ship className="h-4 w-4 text-white/60" />
          <select name="tipologia" className="bg-transparent outline-none w-full text-white">
            <option className="text-black" value="">
              Seleziona
            </option>
            <option className="text-black" value="campionature">
              Campionature
            </option>
            <option className="text-black" value="b2b-pallet">
              B2B / Pallet
            </option>
            <option className="text-black" value="b2c">
              B2C (UE)
            </option>
          </select>
        </Field>
      </div>
      <label className="group grid gap-1">
        <div className="text-[11px] text-white/60">Note</div>
        <div className="rounded-xl px-3 py-3 bg-black/30 border border-white/10 ring-0 focus-within:ring-1 focus-within:ring-white/30">
          <textarea
            name="note"
            rows={4}
            placeholder="Raccontaci esigenze, volumi, mercati di interesse..."
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </div>
      </label>
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="mt-1 h-12 rounded-xl font-semibold text-base text-[#0f1720] w-full transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
        style={{ background: SPST_ORANGE }}
      >
        Invia richiesta
      </motion.button>
      <div className="text-[11px] text-white/50 text-center">Invio protetto. Nessuno spam.</div>
    </form>
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

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
        <span className="font-semibold">{q}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-2 text-white/80 text-sm leading-relaxed">{a}</p>
    </details>
  );
}
