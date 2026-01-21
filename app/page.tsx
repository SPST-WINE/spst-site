"use client";

import React from "react";
import { LocaleProvider } from "../components/i18n/LocaleProvider";
import { SPST_PUBLIC_BG } from "../lib/spstTheme";
import { HeroSection } from "../components/spst/home/HeroSection";
import { ForWineriesSection } from "../components/spst/home/ForWineriesSection";
import { ForBuyersSection } from "../components/spst/home/ForBuyersSection";
import { ProblemsHowItWorksSection } from "../components/spst/home/ProblemsHowItWorksSection";
import { PartnersSection } from "../components/spst/home/PartnersSection";
import { CTASection } from "../components/spst/home/CTASection";
import { ContactSection } from "../components/spst/home/ContactSection";

function HomeContent() {
  return (
    <main className="font-sans text-slate-100 selection:bg-orange-300/40">
      <HeroSection />
      <ForWineriesSection />
      <ForBuyersSection />
      <ProblemsHowItWorksSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}

export default function Home() {
  return (
    <LocaleProvider>
      <HomeContent />
    </LocaleProvider>
  );
}
