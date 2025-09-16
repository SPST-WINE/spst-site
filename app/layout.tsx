// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPST — Export & Wine Logistics',
  description: "SPST gestisce documenti doganali e fiscali, spedizioni e Wine Connect."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  );
}
