"use client";

import React from "react";
import Image from "next/image";

export function VeronaSpedHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center">
          <div className="relative h-12 w-auto">
            <Image
              src="/veronasped-logo.png"
              alt="VeronaSped Logo"
              width={200}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
