// app/back-office/page.tsx
export const metadata = {
  title: 'SPST • Back Office',
  description: 'Gestione spedizioni e preventivi',
};

export default function BackOffice() {
  return (
    <div style={{height: '100dvh', width: '100vw', background: '#000'}}>
      <iframe
        src="https://spst-logistics.vercel.app/back-office-standalone.html?v=4"
        style={{border: '0', width: '100%', height: '100%', display: 'block'}}
        allow="clipboard-write *; clipboard-read *"
      />
    </div>
  );
}
