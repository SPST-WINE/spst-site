"use client";

import React from "react";
import { SpstLeadForm } from "../SpstLeadForm";
import { useLocale } from "../../i18n/LocaleProvider";

function SectionHeader({
  kicker,
  title,
  tone = "plain",
}: {
  kicker: string;
  title: string;
  tone?: "problem" | "solution" | "accent" | "plain";
}) {
  const SPST_ORANGE = "#f7931e";
  const gradients: Record<string, string> = {
    problem: `linear-gradient(135deg, ${SPST_ORANGE}, #fff)`,
    solution: `linear-gradient(135deg, ${SPST_ORANGE}, #fff)`,
    accent: `linear-gradient(135deg, ${SPST_ORANGE}, #fff)`,
    plain: `linear-gradient(135deg, #fff, #fff)`,
  };

  return (
    <div className="text-center md:text-left">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
        {kicker}
      </div>
      <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: gradients[tone] }}
        >
          {title}
        </span>
      </h2>
    </div>
  );
}

export function ContactSection() {
  const { t } = useLocale();

  return (
    <section id="contatti" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHeader
          kicker={t.sections.contact.kicker}
          title={t.sections.contact.title}
          tone="accent"
        />
        <div className="mt-12">
          <SpstLeadForm />
          <p className="mt-4 text-center text-sm text-white/60">
            {t.sections.contact.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
