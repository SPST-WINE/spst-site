// app/back-office/layout.tsx
// Carica i CSS del Back Office in modo certo (senza affidarsi a injection runtime)
import './bo.css';

export default function BackOfficeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
