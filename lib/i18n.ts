// lib/i18n.ts
// Simple i18n system for SPST site

export type Locale = 'it' | 'en';

export const defaultLocale: Locale = 'it';
export const locales: Locale[] = ['it', 'en'];

// Translations
export const translations = {
  it: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Servizi',
      whySpst: 'Perché SPST',
      quote: 'Richiedi una quotazione',
      usaShipping: 'Spedizioni USA',
      forBuyers: 'For Buyers',
      areaRiservata: 'Area Riservata',
    },
    // Hero
    hero: {
      kicker: 'Export vino all-in-one',
      title: 'Il tuo vino nel mondo,',
      titleHighlight: 'senza pensieri.',
      description: 'SPST gestisce documenti doganali e fiscali, organizza la spedizione (express o pallet) e costruisce flussi export stabili verso USA, Europa e altri mercati, con un unico partner operativo.',
      ctaPrimary: 'Richiedi una quotazione',
      ctaSecondary: 'Servizi e contatti',
      scroll: 'Scorri',
    },
    // Sections
    sections: {
      problems: {
        kicker: 'I problemi reali',
        title: 'Perché è complicato spedire vino',
      },
      howItWorks: {
        kicker: 'Come funziona',
        title: 'Dalla carta al tracking, in 3 step',
      },
      services: {
        kicker: 'Cosa facciamo',
        title: 'Operatività, non promesse',
      },
      whoWeWorkFor: {
        kicker: 'Per chi lavoriamo',
        title: 'Partner per cantine, distributori, importatori ed e-commerce',
      },
      whySpst: {
        kicker: 'Perché scegliere SPST',
        title: 'Unico partner, tariffe ottimizzate, assistenza reale',
      },
      forBuyers: {
        kicker: 'For Buyers',
        title: 'Importatori e buyer internazionali',
        description: 'SPST facilita l\'accesso al mercato italiano del vino per importatori e buyer internazionali. Offriamo supporto completo per sourcing, documentazione, logistica e compliance.',
      },
      partners: {
        kicker: '',
        title: 'I nostri partner',
      },
      cta: {
        title: 'Pronto a spedire il tuo vino nel mondo?',
        quote: 'Richiedi una quotazione',
        whatsapp: 'Supporto WhatsApp',
        usaShipping: 'Scopri Spedizioni USA',
      },
      contact: {
        kicker: 'Parliamo della tua cantina',
        title: 'Richiedi informazioni',
        subtitle: 'Compili in 30 secondi. Ti rispondiamo in giornata.',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      whySpst: 'Why SPST',
      quote: 'Request a quote',
      usaShipping: 'USA Shipping',
      forBuyers: 'For Buyers',
      areaRiservata: 'Dashboard',
    },
    // Hero
    hero: {
      kicker: 'Wine export all-in-one',
      title: 'Your wine worldwide,',
      titleHighlight: 'worry-free.',
      description: 'SPST handles customs and tax documents, organizes shipping (express or pallet) and builds stable export flows to USA, Europe and other markets, with a single operational partner.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'Services and contacts',
      scroll: 'Scroll',
    },
    // Sections
    sections: {
      problems: {
        kicker: 'Real problems',
        title: 'Why shipping wine is complicated',
      },
      howItWorks: {
        kicker: 'How it works',
        title: 'From paperwork to tracking, in 3 steps',
      },
      services: {
        kicker: 'What we do',
        title: 'Operations, not promises',
      },
      whoWeWorkFor: {
        kicker: 'Who we work for',
        title: 'Partners for wineries, distributors, importers and e-commerce',
      },
      whySpst: {
        kicker: 'Why choose SPST',
        title: 'Single partner, optimized rates, real support',
      },
      forBuyers: {
        kicker: 'For Buyers',
        title: 'Importers and international buyers',
        description: 'SPST facilitates access to the Italian wine market for importers and international buyers. We offer complete support for sourcing, documentation, logistics and compliance.',
      },
      partners: {
        kicker: '',
        title: 'Our partners',
      },
      cta: {
        title: 'Ready to ship your wine worldwide?',
        quote: 'Request a quote',
        whatsapp: 'WhatsApp Support',
        usaShipping: 'Discover USA Shipping',
      },
      contact: {
        kicker: 'Let\'s talk about your winery',
        title: 'Request information',
        subtitle: 'Fill in 30 seconds. We reply within the day.',
      },
    },
  },
} as const;

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale];
}

// Define a common structure type that works for both locales
export type Translations = {
  nav: {
    home: string;
    services: string;
    whySpst: string;
    quote: string;
    usaShipping: string;
    forBuyers: string;
    areaRiservata: string;
  };
  hero: {
    kicker: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  sections: {
    problems: {
      kicker: string;
      title: string;
    };
    howItWorks: {
      kicker: string;
      title: string;
    };
    services: {
      kicker: string;
      title: string;
    };
    whoWeWorkFor: {
      kicker: string;
      title: string;
    };
    whySpst: {
      kicker: string;
      title: string;
    };
    forBuyers: {
      kicker: string;
      title: string;
      description: string;
    };
    partners: {
      kicker: string;
      title: string;
    };
    cta: {
      title: string;
      quote: string;
      whatsapp: string;
      usaShipping: string;
    };
    contact: {
      kicker: string;
      title: string;
      subtitle: string;
    };
  };
};
