'use client';

export default function BackOfficePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#000' }}>
      <iframe
        src="/back-office/back-office-standalone.html?v=7"
        title="SPST — Back Office"
        style={{ width: '100%', minHeight: '100vh', border: 0, display: 'block' }}
        loading="eager"
      />
    </main>
  );
}
