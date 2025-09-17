// app/back-office/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPST Back Office',
};

export default function BackOfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
