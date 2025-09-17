// app/back-office/layout.tsx
import type { Metadata } from 'next';
import './bo.css'; // ⬅️ importa gli stili del Back Office

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
