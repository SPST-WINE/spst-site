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

import { useLocale } from "../../components/i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";

// Brand palette
const SPST_BLUE = "#0a1722"; // base blu scuro (sfondo)
const SPST_BLUE_SOFT = "#1c3e5e"; // accenti
const SPST_ORANGE = "#f7931e";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

export default function ServiziContatti() {
  const { t } = useLocale();

  // Nav coerente con la homepage (senza Wine Connect)
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/#vantaggi", label: t.nav.whySpst },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
  ];

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }}
    >
      {/* ===== HEADER RIUSABILE (identico alla homepage) ===== */}

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
              {t.services.kicker}
            </span>
            <h1 className="mt-2 text-[34px] sm:text-[40px] md:text-[54px] font-black leading-[1.03]">
              {t.services.title}
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                {t.services.titleHighlight}
              </span>
            </h1>
            <p className="mt-3 text-white/85 text-[15px] sm:text-base max-w-[60ch] mx-auto md:mx-0">
              {t.services.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://www.spst.it/portale-quotazioni"
                className="px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                {t.services.ctaQuote}
              </a>
              <a
                href="#contatti"
                className="px-6 py-3 rounded-lg border-2 border-white/30 bg-white/10 font-semibold text-sm backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 hover:scale-105"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                {t.services.ctaContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIZI ===== */}
      <section id="servizi" className="py-12">
        <SectionHeader
          kicker={t.services.servicesKicker}
          title={t.services.servicesTitle}
          tone="accent"
        />

        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card
            title={t.services.logistics}
            text={t.services.logisticsDesc}
            icon={<Ship className="h-5 w-5" />}
          />
          <Card
            title={t.services.customs}
            text={t.services.customsDesc}
            icon={<FileCheck2 className="h-5 w-5" />}
          />
          <Card
            title={t.services.warehouse}
            text={t.services.warehouseDesc}
            icon={<Warehouse className="h-5 w-5" />}
          />
          <Card
            title={t.services.markets}
            text={t.services.marketsDesc}
            icon={<Globe2 className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== COME LAVORIAMO ===== */}
      <section id="processo" className="py-12">
        <SectionHeader
          kicker={t.services.processKicker}
          title={t.services.processTitle}
          tone="solution"
        />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-4 md:grid-cols-3">
          <Card
            title={t.services.step1}
            text={t.services.step1Desc}
            icon={<FileCheck2 className="h-5 w-5" />}
          />
          <Card
            title={t.services.step2}
            text={t.services.step2Desc}
            icon={<Route className="h-5 w-5" />}
          />
          <Card
            title={t.services.step3}
            text={t.services.step3Desc}
            icon={<ShieldCheck className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== CONTATTI RAPIDI ===== */}
      <section id="contatti" className="py-12">
        <SectionHeader
          kicker={t.services.contactKicker}
          title={t.services.contactTitle}
          tone="plain"
        />

        <div className="mx-auto max-w-[1200px] px-5 grid gap-5 md:grid-cols-2 items-stretch">
          {/* colonna sinistra: card a piena altezza */}
          <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm h-full">
            <div className="flex flex-col justify-between h-full">
              <ContactCard
                title={t.services.email}
                text="info@spst.it"
                href="mailto:info@spst.it"
                icon={<Mail className="h-5 w-5" />}
              />
              <ContactCard
                title={t.services.whatsapp}
                text="+39 320 144 1789"
                href="https://wa.me/393201441789"
                icon={<MessageSquare className="h-5 w-5" />}
              />
              <ContactCard
                title={t.services.phone}
                text="+39 320 144 1789"
                href="tel:+393201441789"
                icon={<Phone className="h-5 w-5" />}
              />
              <ContactCard
                title={t.services.legalAddress}
                text="Piazzale Gambale 23, Avellino (AV) 83100 – Italia"
                icon={<MapPin className="h-5 w-5" />}
              />
              <ContactCard
                title={t.services.hours}
                text={t.services.hoursValue}
                icon={<Timer className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* colonna destra: form a piena altezza */}
          <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm h-full flex flex-col">
            <QuickForm />
            <div className="mt-3 text-center text-[12px] text-white/60">
              Compili in 30 secondi. Ti rispondiamo in giornata.
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-12">
        <SectionHeader kicker={t.services.faqKicker} title={t.services.faqTitle} tone="plain" />
        <div className="mx-auto max-w-[1200px] px-5 grid gap-3">
          <FaqItem q={t.services.faq1q} a={t.services.faq1a} />
          <FaqItem q={t.services.faq2q} a={t.services.faq2a} />
          <FaqItem q={t.services.faq3q} a={t.services.faq3a} />
          <FaqItem q={t.services.faq4q} a={t.services.faq4a} />
          <FaqItem q={t.services.faq5q} a={t.services.faq5a} />
        </div>
      </section>

      {/* ===== CTA FINALE ===== */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)]">
            <h3 className="text-xl font-bold text-white m-0">
              {t.services.ctaTitle}
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                className="px-6 py-3 rounded-lg font-bold text-[#0f1720] transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                style={{ background: SPST_ORANGE }}
                href="https://www.spst.it/portale-quotazioni"
              >
                {t.services.ctaQuote}
              </a>
              <a
                className="px-6 py-3 rounded-lg font-semibold border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 hover:scale-105"
                href="https://wa.me/393201441789"
              >
                {t.services.ctaContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
    </main>
  );
}


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
      className="rounded-2xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm"
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
    <div className="rounded-2xl p-4 border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center gap-3">
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
  const { t } = useLocale();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: collega EmailJS / Make / Airtable
    alert("Grazie! Ti contatteremo a breve.");
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Field label={t.services.formCompany}>
          <Building2 className="h-4 w-4 text-white/60" />
          <input
            required
            name="azienda"
            placeholder="Cantina / Azienda"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.services.formName}>
          <Building2 className="h-4 w-4 text-white/60" />
          <input
            required
            name="referente"
            placeholder="Nome e cognome"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.services.formEmail}>
          <Mail className="h-4 w-4 text-white/60" />
          <input
            required
            type="email"
            name="email"
            placeholder="nome@azienda.it"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.services.formPhone}>
          <Phone className="h-4 w-4 text-white/60" />
          <input
            inputMode="tel"
            name="telefono"
            placeholder="+39 ..."
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.services.formCountries}>
          <Globe2 className="h-4 w-4 text-white/60" />
          <input
            name="paesi"
            placeholder="es. USA, Germania, Danimarca"
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </Field>
        <Field label={t.services.formType}>
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
        <div className="text-[11px] text-white/60">{t.services.formNotes}</div>
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
        className="mt-1 h-12 rounded-lg font-bold text-base text-[#0f1720] w-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
        style={{ background: SPST_ORANGE }}
      >
        {t.services.formSubmit}
      </motion.button>
      <div className="text-[11px] text-white/50 text-center">{t.services.formProtected}</div>
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
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
        <span className="font-semibold">{q}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-2 text-white/80 text-sm leading-relaxed">{a}</p>
    </details>
  );
}
