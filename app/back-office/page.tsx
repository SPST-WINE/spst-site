// app/back-office/page.tsx
export const metadata = { title: 'Back Office — SPST' };

export default function BackOffice() {
  return (
    // Contenitore che gli script del BO usano per montare l’interfaccia
    <main id="back-office" className="min-h-screen" />
  );
}
