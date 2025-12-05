'use client';

import Link from "next/link";
import React from "react";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6800cc3b5f399f3e2b7f2ffa/68079e968300482f70a36a4a_output-onlinepngtools%20(1).png";

type NavItem = {
  href: string;
  label: string;
  variant?: "default" | "primary";
};

type Props = {
  navItems?: NavItem[];
};

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#servizi", label: "Servizi" },
  { href: "/#vantaggi", label: "Perché SPST" },
  { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
  { href: "/spst-paylink", label: "Paylink USA" },
  { href: "https://spst-operations.vercel.app/login", label: "Area Riservata", variant: "primary" },
];

export function SpstHeader({ navItems }: Props) {
  const items = navItems ?? DEFAULT_NAV_ITEMS;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05070f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="SPST"
            className="h-7 w-auto drop-shadow-[0_4px_16px_rgba(247,147,30,.35)]"
          />
          <span className="text-sm font-semibold tracking-wide text-white/90">
            SPST
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
          {items.map((item) =>
            item.variant === "primary" ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full bg-[#f7931e] px-4 py-2 font-semibold text-[#0f1720] shadow transition-all duration-150 hover:-translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/60"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
