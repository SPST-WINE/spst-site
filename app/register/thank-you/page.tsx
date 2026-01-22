'use client';

import { useLocale } from '../../../components/i18n/LocaleProvider';
import { SPST_PUBLIC_BG } from '../../../lib/spstTheme';

export default function ThankYou() {
  const { t, locale } = useLocale();
  
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servizi-e-contatti", label: t.nav.services },
    { href: "/portale-quotazioni", label: t.nav.quote },
  ];

  return (
    <main
      className="font-sans text-slate-100 min-h-screen flex flex-col"
      style={{ background: SPST_PUBLIC_BG }}
    >
      
      <section className="flex-1 flex items-center mx-auto max-w-[800px] px-5 w-full">
        <div className="rounded-2xl p-6 md:p-7 border border-white/15 bg-white/5 backdrop-blur-xl text-center w-full">
          <h1 className="text-2xl md:text-3xl font-black">
            {locale === 'it' ? 'Grazie! Richiesta inviata!' : 'Thank you! Request sent!'}
          </h1>
          <p className="text-white/80 mt-2">
            {locale === 'it' 
              ? "Imposteremo il tuo profilo e abiliteremo l'accesso. Benvenuto in SPST!"
              : "We'll set up your profile and enable access. Welcome to SPST!"}
          </p>
          <div className="mt-5 flex items-center justify-center">
            <a
              className="px-4 py-2 rounded-full font-bold text-[#0f1720] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-orange-500/20 hover:ring-2 ring-orange-300/50"
              style={{ background: '#f7931e' }}
              href="https://wa.me/393201441789"
              target="_blank"
            >
              {locale === 'it' ? 'Supporto WhatsApp' : 'WhatsApp Support'}
            </a>
          </div>
        </div>
      </section>
      
    </main>
  );
}
