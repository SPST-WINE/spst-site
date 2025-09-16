// app/layout.tsx
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
      {/* Se vuoi un fallback nero anche senza CSS, aggiungi: style={{ backgroundColor: '#000' }} */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
