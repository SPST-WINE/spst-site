export default function BackOfficePage() {
  return (
    <>
      <h1 style={{ fontWeight: 700 }}>Back Office — Spedizioni</h1>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <input id="search" placeholder="Cerca spedizioni…" />
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <input id="only-open" type="checkbox" /> Solo da evadere
        </label>

        {/* pulsanti utili nel rendering */}
        <button id="toggle-expand" style={{ marginLeft: 12 }}>Espandi record</button>
        <button id="toggle-check" style={{ marginLeft: 6 }}>Verifica etichette</button>
      </div>

      {/* dove vengono renderizzate le card */}
      <div id="list" />

      {/* JS del back office */}
      <script type="module" src="/bo-assets/esm/main.js" defer></script>
    </>
  );
}
