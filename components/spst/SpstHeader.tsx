"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export type SpstNavItem = {
  href: string;
  label: string;
};

type SpstHeaderProps = {
  navItems?: SpstNavItem[];
  showWineConnect?: boolean;
};

const DEFAULT_NAV_ITEMS: SpstNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/servizi-e-contatti", label: "Servizi" },
  { href: "/portale-quotazioni", label: "Richiedi una quotazione" },
  { href: "/spst-paylink", label: "Paylink USA" },
];

export function SpstHeader({
  navItems = DEFAULT_NAV_ITEMS,
  showWineConnect = false,
}: SpstHeaderProps) {
  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
        {/* LEFT: logo + title */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src="/spst-logo.png"
              alt="SPST logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              SPST · Export & Wine Logistics
            </span>
            <span className="text-[11px] text-white/60">
              Vino nel mondo, senza pensieri.
            </span>
          </div>
        </Link>

        {/* RIGHT: nav */}
        <nav className="hidden items-center gap-4 text-[13px] text-white/80 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {showWineConnect && (
            <a
              href="https://www.wearewineconnect.com"
              className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/10"
            >
              Wine Connect
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
