export const dynamic = 'force-static';

export default function BackOfficePage() {
  return (
    <main id="view-spedizioni" suppressHydrationWarning>
      <div id="list" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script type="module" src="/bo-assets/esm/main.js?v=1"></script>
    </main>
  );
}
