// app/spst-paylink/page.tsx
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  CreditCard,
  Smartphone,
  Globe2,
  MapPin,
  Ship,
  FileCheck2,
  MessageCircle,
} from "lucide-react";
import { SPST_PUBLIC_BG } from "../../lib/spstTheme";
import { useLocale } from "../../components/i18n/LocaleProvider";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const SPST_BLUE_SOFT = "#1c3e5e";
const SPST_ORANGE = "#f7931e";


const CHECKOUT_URL = "https://dashboard.spst.it/usa-shipping-pay";

// ✅ WhatsApp con messaggio precompilato
const WA_PREFILL = encodeURIComponent(
  "Ciao, ho visitato Paylink USA e vorrei capire se è adatto alla mia cantina."
);
const WHATSAPP_URL = `https://wa.me/393201441789?text=${WA_PREFILL}`;

export default function SpstPaylinkPage() {
  const { t } = useLocale();
  
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/#vantaggi", label: t.nav.whySpst },
    { href: "/portale-quotazioni", label: t.nav.quote },
    { href: "/spst-paylink", label: t.nav.usaShipping },
  ];
  // ---- Meta Pixel custom events (engaged view + WA intent) ----
  useEffect(() => {
    let engagedFired = false;

    const t = setTimeout(() => {
      if (engagedFired) return;
      engagedFired = true;
      window.fbq?.("trackCustom", "ViewPaylinkLanding", {
        engaged: true,
        sec: 8,
      });
    }, 8000);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop || 0;
      const height = doc.scrollHeight - doc.clientHeight;
      if (height <= 0) return;

      const pct = scrolled / height;
      if (pct >= 0.5) {
        if (!engagedFired) {
          engagedFired = true;
          window.fbq?.("trackCustom", "ViewPaylinkLanding", {
            engaged: true,
            scroll: 50,
          });
        }
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const trackWhatsApp = () => {
    window.fbq?.("trackCustom", "ClickWhatsApp", { source: "paylink_landing" });
    window.fbq?.("track", "Lead");
  };

  const trackCheckout = () => {
    window.fbq?.("trackCustom", "ClickCheckoutPreview", {
      source: "paylink_landing",
    });
  };

  return (
    <main
      className="font-sans text-slate-100 selection:bg-orange-300/40"
      style={{ background: SPST_PUBLIC_BG }} // 👈 gradient centralizzato
    >
      {/* ===== HERO PAYLINK ===== */}
      <section className="relative overflow-hidden">
        {/* glow brand morbidi */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${SPST_ORANGE}55, transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute -bottom-24 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 70% 70%, ${SPST_BLUE_SOFT}66, transparent 60%)`,
          }}
        />

        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 pb-12 pt-10 md:grid-cols-[1.05fr_.95fr] md:pt-16">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SPST Paylink · Spedire in USA è diventato facile
            </span>
            <h1 className="mt-3 text-[30px] font-black leading-[1.08] sm:text-[36px] md:text-[50px]">
              Dalla tua cantina
              <span className="block">alla porta di casa</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, ${SPST_BLUE_SOFT})`,
                }}
              >
                dei tuoi clienti USA.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-[60ch] text-[15px] text-white/85 sm:text-base md:mx-0">
              SPST Paylink è il servizio B2C pensato per{" "}
              <strong>turisti americani in visita in Italia</strong>: il cliente
              paga dal proprio smartphone, inserisce l’indirizzo negli Stati
              Uniti e SPST gestisce{" "}
              <span className="font-semibold">documenti export, MRN</span>, ritiro
              in cantina e spedizione door-to-door. Un flusso dedicato ai clienti
              con indirizzo USA, integrato nell’operatività internazionale SPST.
            </p>

            {/* HERO CTAs: CHANGE REQUEST ✅ */}
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#contatti"
                className="rounded-full px-4 py-2 text-sm font-semibold shadow ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE, color: "#0f1720" }}
              >
                Attiva SPST Paylink
              </a>

              {/* WhatsApp moved here (replaces "checkout" CTA) */}
              <a
                href={WHATSAPP_URL}
                onClick={trackWhatsApp}
                className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:ring-2 ring-orange-300/30 active:translate-y-[1px]"
                style={{ borderColor: `${SPST_ORANGE}55` }}
              >
                Parla su WhatsApp con SPST
              </a>
            </div>
          </div>

          {/* HERO VISUAL: iPhone mockup con screenshot reale */}
          <HeroPaylinkMockup />
        </div>
      </section>

      {/* ===== COS'È ===== */}
      <section id="cos-e" className="py-10">
        <SectionHeader
          kicker={t.paylink.whatKicker}
          title={t.paylink.whatTitle}
          tone="accent"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          <Card
            title={t.paylink.what1}
            text={t.paylink.what1Desc}
            icon={<MapPin className="h-5 w-5" />}
          />
          <Card
            title={t.paylink.what2}
            text={t.paylink.what2Desc}
            icon={<Smartphone className="h-5 w-5" />}
          />
          <Card
            title={t.paylink.what3}
            text={t.paylink.what3Desc}
            icon={<FileCheck2 className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== COME FUNZIONA ===== */}
      <section id="funziona" className="py-12">
        <SectionHeader
          kicker={t.paylink.howKicker}
          title={t.paylink.howTitle}
          tone="solution"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          <Card
            title={t.paylink.how1}
            text={t.paylink.how1Desc}
            icon={<Plane className="h-5 w-5" />}
          />
          <Card
            title={t.paylink.how2}
            text={t.paylink.how2Desc}
            icon={<CreditCard className="h-5 w-5" />}
          />
          <Card
            title={t.paylink.how3}
            text={t.paylink.how3Desc}
            icon={<Ship className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== SOLO USA (modulo dedicato) ===== */}
      <section id="usa-only" className="py-12">
        <SectionHeader
          kicker={t.paylink.usaKicker}
          title={t.paylink.usaTitle}
          tone="problem"
        />
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-4 md:grid-cols-[1.4fr_.9fr]">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-lg font-extrabold">
                {t.paylink.usaWhy}
              </h3>
              <p className="mt-2 text-sm text-white/80">
                {t.paylink.usaWhyDesc}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• {t.paylink.usaBenefits1}</li>
                <li>• {t.paylink.usaBenefits2}</li>
                <li>• {t.paylink.usaBenefits3}</li>
              </ul>
              <p className="mt-4 text-sm text-orange-200/90">
                {t.paylink.usaNote}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-5"
            >
              <h4 className="text-sm font-semibold text-white/90">
                {t.paylink.usaWhat}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• {t.paylink.usaWhat1}</li>
                <li>• {t.paylink.usaWhat2}</li>
                <li>• {t.paylink.usaWhat3}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PER CHI HA SENSO ===== */}
      <section id="quando" className="py-12">
        <SectionHeader
          kicker={t.paylink.whenKicker}
          title={t.paylink.whenTitle}
          tone="plain"
        />
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 md:grid-cols-3">
          <Card
            title={t.paylink.when1}
            text={t.paylink.when1Desc}
            icon={<Globe2 className="h-5 w-5" />}
          />
          <Card
            title={t.paylink.when2}
            text={t.paylink.when2Desc}
            icon={<Plane className="h-5 w-5" />}
          />
          <Card
            title={t.paylink.when3}
            text={t.paylink.when3Desc}
            icon={<MessageCircle className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* ===== CTA & CONTATTI ===== */}
      <section id="contatti" className="py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-col gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)] md:flex-row md:items-center md:justify-between md:p-7">
            <div>
              <h3 className="m-0 text-xl font-bold text-white">
                {t.paylink.ctaTitle}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                {t.paylink.ctaDesc}
              </p>
            </div>

            {/* CTA buttons: CHANGE REQUEST ✅ */}
            <div className="flex w-full flex-col gap-3 md:w-auto">
              <a
                className="w-full rounded-full px-4 py-2 text-center text-sm font-bold text-[#0f1720] ring-orange-300/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 active:translate-y-[1px]"
                style={{ background: SPST_ORANGE }}
                href="mailto:info@spst.it?subject=Attivazione%20SPST%20Paylink%20turisti%20USA"
              >
                {t.paylink.ctaEmail}
              </a>

              {/* Checkout preview moved here (replaces WhatsApp in bottom CTA) */}
              <a
                className="w-full rounded-full border border-white/70 px-4 py-2 text-center text-sm font-bold text-white ring-white/30 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10 hover:ring-2 active:translate-y-[1px]"
                href={CHECKOUT_URL}
                onClick={trackCheckout}
                target="_blank"
                rel="noreferrer"
              >
                {t.paylink.ctaPreview}
              </a>
            </div>
          </div>

          <div className="mt-3 text-center text-[12px] text-white/60">
            {t.paylink.ctaNote}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------ COMPONENTS LOCALI ------------------------ */

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
    plain: `linear-gradient(90deg, #fff, #fff)`,
  };
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-5 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] uppercase tracking-wider text-white/60"
      >
        {kicker}
      </motion.div>
      <div className="relative inline-block">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-6 -inset-y-2 opacity-25 blur-xl md:blur-2xl"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.45) 0%, rgba(247,147,30,.28) 40%, transparent 65%), radial-gradient(90% 120% at 50% 50%, rgba(28,62,94,.18) 0%, transparent 60%)",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-1 text-[26px] font-black sm:text-[30px] md:text-[36px]"
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
        style={{
          backgroundImage: `linear-gradient(90deg, ${SPST_ORANGE}, transparent)`,
        }}
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
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      {icon && (
        <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
          {icon}
        </div>
      )}
      <h3 className="text-[1.1rem] font-extrabold text-white">{title}</h3>
      <p className="text-[0.98rem] text-white/80">{text}</p>
    </motion.div>
  );
}

/** Hero iPhone mockup con spazio per screenshot reale della pagina usa-shipping-pay */
function HeroPaylinkMockup() {
  return (
    <div className="relative mx-auto aspect-[9/16] w-64 sm:w-72 md:w-80">
      {/* glow dietro */}
      <div
        className="pointer-events-none absolute inset-[-15%] -z-10 rounded-[2.5rem] opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(60% 60% at 50% 20%, ${SPST_ORANGE}44, transparent 70%)`,
        }}
      />

      {/* telefono */}
      <div className="relative z-10 h-full w-full rounded-[2.5rem] border border-white/15 bg-[#050910] p-3 shadow-2xl shadow-black/50">
        {/* notch */}
        <div className="mx-auto mb-3 mt-1 h-1.5 w-20 rounded-full bg-white/15" />

        {/* schermo con screenshot reale */}
        <div className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden rounded-[1.9rem] bg-black/80">
          <img
            src="/paylink-usa-checkout.png"
            alt="Schermata di checkout SPST Paylink USA"
            className="h-full w-full translate-y-[24px] scale-[1.06] object-cover"
            style={{ objectPosition: "top" }}
          />
        </div>
      </div>
    </div>
  );
}
