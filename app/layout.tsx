// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Titolo di default (home e tutte le pagine che NON lo sovrascrivono)
  title: 'SPST - Export & Wine Logistics',
  icons: {
    // Usa il logo già presente in /public/bo-assets/img/spst-logo.png
    icon: [
      { url: '/bo-assets/img/spst-logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/bo-assets/img/spst-logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/bo-assets/img/spst-logo.png', type: 'image/png', sizes: 'any' },
    ],
    apple: [{ url: '/bo-assets/img/spst-logo.png' }],
    shortcut: ['/bo-assets/img/spst-logo.png'],
  },
  themeColor: '#0b1220',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
