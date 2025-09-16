// app/layout.tsx
import type { Metadata } from 'next';
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPST — Export & Wine Logistics",
  description: "Export vino all-in-one: documenti, spedizioni e crescita commerciale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  );
}
