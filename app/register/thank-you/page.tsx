export default function ThankYou() {
  return (
    <main
      className="font-sans text-slate-100 min-h-screen flex items-center"
      style={{
        background:
          'radial-gradient(140% 140% at 50% -10%, #1c3e5e 0%, #0a1722 60%, #000 140%)',
      }}
    >
      <section className="mx-auto max-w-[800px] px-5 w-full">
        <div className="rounded-2xl p-6 md:p-7 border border-white/15 bg-white/5 backdrop-blur-xl text-center">
          <h1 className="text-2xl md:text-3xl font-black">Grazie! Richiesta inviata!</h1>
          <p className="text-white/80 mt-2">
            Imposteremo il tuo profilo e abiliteremo l’accesso. Benvenuto in SPST!
          </p>
          <div className="mt-5 flex items-center justify-center">
            <a
              className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
              style={{ background: '#f7931e' }}
              href="https://wa.me/393201441789"
              target="_blank"
            >
              Supporto WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
