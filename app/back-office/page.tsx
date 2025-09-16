export default function BackOfficePage() {
  return (
    <main style={{ background: '#000' }}>
      <iframe
        src="/back-office-standalone.html"
        style={{ width: '100%', height: '100vh', border: 0, display: 'block' }}
        title="SPST Back Office"
      />
    </main>
  );
}
