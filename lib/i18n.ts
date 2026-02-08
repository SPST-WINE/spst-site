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
      genericShipping: 'Spedizioni Generiche',
      forBuyers: 'For Buyers',
      areaRiservata: 'Area Riservata',
    },
    // Hero
    hero: {
      kicker: 'Export vino all-in-one',
      title: 'Il tuo vino nel mondo,',
      titleHighlight: 'in un click',
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
      testimonials: {
        title: 'Dicono di noi',
        testimonial1: {
          name: 'Marco R.',
          country: 'Italia',
          text: 'Servizio impeccabile per spedizioni pallet verso USA. Documentazione sempre corretta e supporto WhatsApp sempre disponibile. Prezzi competitivi per un servizio così professionale.',
        },
        testimonial2: {
          name: 'Sarah J.',
          country: 'USA',
          text: 'Ottima web app, facile da usare. Ho spedito vino verso gli Stati Uniti e tutto è arrivato perfetto. Il supporto è stato eccezionale durante tutto il processo.',
        },
        testimonial3: {
          name: 'Luca B.',
          country: 'Italia',
          text: 'Spedizioni multicollo verso UE sempre puntuali. La correttezza documentale è perfetta, mai un problema con le accise. Consigliatissimo per chi spedisce regolarmente.',
        },
        testimonial4: {
          name: 'Emma T.',
          country: 'UK',
          text: 'Ho usato SPST per spedizioni B2B verso diversi paesi europei. La web app è intuitiva e il supporto WhatsApp risponde sempre in tempi rapidissimi. Ottimo servizio.',
        },
        testimonial5: {
          name: 'Giovanni V.',
          country: 'Italia',
          text: 'Prezzi super competitivi per spedizioni express verso Asia. Ho spedito pacchi e tutto è arrivato perfetto. Il servizio documentale è impeccabile e preciso.',
        },
        testimonial6: {
          name: 'Sophie M.',
          country: 'USA',
          text: 'Ottimo supporto per spedizioni pallet verso USA. La documentazione è sempre corretta e il tracking è chiaro. Web app molto ben fatta e facile da utilizzare.',
        },
        testimonial7: {
          name: 'Andrea C.',
          country: 'Italia',
          text: 'Spedizioni per fiere in Europa sempre perfette. Multicollo gestito benissimo e supporto WhatsApp sempre disponibile. Servizio top per chi lavora nel settore.',
        },
        testimonial8: {
          name: 'Michael B.',
          country: 'USA',
          text: 'Ho spedito vino verso gli Stati Uniti e il servizio è stato eccellente. Documentazione precisa, prezzi competitivi e supporto sempre presente. Consigliato senza riserve.',
        },
        testimonial9: {
          name: 'Chen L.',
          country: 'Cina',
          text: 'Spedizioni verso Asia sempre puntuali. La documentazione è perfetta e il supporto risponde sempre rapidamente. Servizio professionale e affidabile.',
        },
        testimonial10: {
          name: 'Paolo F.',
          country: 'Italia',
          text: 'Ho spedito vino verso diversi paesi asiatici e tutto è andato benissimo. Documentazione corretta, prezzi competitivi e tracking sempre aggiornato.',
        },
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
    // Legal page
    legal: {
      kicker: 'Documentazione legale',
      title: 'Termini, condizioni e',
      titleHighlight: 'privacy',
      description: 'Qui trovi i Termini di utilizzo e l\'informativa Privacy relativi al sito e ai servizi SPST (inclusi portale, richieste di quotazione e Paylink USA). Ultimo aggiornamento:',
      termsBtn: 'Vai ai Termini',
      privacyBtn: 'Vai alla Privacy',
      termsTitle: 'Termini d\'uso',
      termsDesc: 'Regole di utilizzo del sito, del portale e dei flussi di richiesta/checkout.',
      privacyTitle: 'Privacy',
      privacyDesc: 'Come trattiamo i dati: finalità, basi giuridiche, conservazione e diritti.',
      cookieTitle: 'Cookie',
      cookieDesc: 'Informazioni essenziali su cookie tecnici e, se presenti, strumenti di analytics.',
      tocTitle: 'Indice',
      note: 'Nota: questo testo è un template "pronto-pubblicazione" ma non sostituisce una consulenza legale. Se vuoi lo rendiamo 100% aderente alla tua ragione sociale/partita IVA e ai tuoi flussi (Stripe, vettori, importatori).',
    },
    // Portale Quotazioni
    quote: {
      kicker: 'Preventivi veloci',
      title: 'Portale quotazioni',
      titleHighlight: 'calcola la tua spedizione in pochi passaggi',
      description: 'Non sei ancora cliente? Inserisci origine e destino, dati del collo e i servizi che ti servono. Ti ricontattiamo con la migliore soluzione.',
      coverage: 'Copertura EU/UK/USA',
      coverageDesc: 'Spedizioni express e pallet, con soluzioni anche a temperatura controllata.',
      docs: 'Documenti & accise',
      docsDesc: 'Possiamo gestire pratiche accise, COLA, Prior Notice e assistenza doganale.',
      express: 'Express opzionale',
      expressDesc: 'Spunta "Spedizione express" per priorità e transit time più rapidi.',
      insurance: 'Assicurazione',
      insuranceDesc: 'Facoltativa, consigliata per spedizioni di valore o campionature urgenti.',
      helpTitle: 'Serve assistenza per il preventivo?',
      helpContact: 'Servizi e contatti',
      helpWhatsapp: 'Supporto WhatsApp',
      countryFrom: 'Paese partenza',
      capFrom: 'CAP partenza',
      countryTo: 'Paese destinazione',
      capTo: 'CAP destinazione',
      content: 'Contenuto della merce',
      length: 'Lunghezza (cm)',
      width: 'Larghezza (cm)',
      height: 'Altezza (cm)',
      weight: 'Peso (kg)',
      volumetric: 'Peso volumetrico stimato (cm/4000):',
      preferences: 'Preferenze',
      expressCheck: 'Spedizione express',
      acciseCheck: 'Pratica accise',
      customsCheck: 'Assistenza doganale',
      colaCheck: 'COLA / Prior Notice (USA)',
      tempCheck: 'Temperatura controllata',
      insuranceCheck: 'Assicurazione',
      submit: 'Richiedi preventivo',
      submitting: 'Invio in corso...',
      protected: 'Invio protetto. Nessuno spam.',
      company: 'Azienda (opzionale)',
      email: 'Email',
      phone: 'Telefono (opzionale)',
      address: 'Indirizzo (opzionale)',
    },
    // Servizi e Contatti
    services: {
      kicker: 'Export vino all-in-one',
      title: 'Servizi e contatti',
      titleHighlight: 'tutto quello che ti serve per spedire in sicurezza',
      description: 'Documenti doganali e fiscali, spedizioni express o pallet, deposito e rappresentanza, più supporto operativo per strutturare i tuoi flussi export. Un unico partner logistico dall\'Italia ai tuoi clienti nel mondo.',
      ctaQuote: 'Richiedi una quotazione',
      ctaContact: 'Scrivici',
      servicesKicker: 'Cosa facciamo',
      servicesTitle: 'Operatività completa, dall\'export alla consegna',
      logistics: 'Logistica & Spedizioni',
      logisticsDesc: 'Express, campionature e pallet in Europa, UK, USA e altri mercati. Trasporto via corriere, camion, nave e aereo.',
      customs: 'Dogana & Fisco',
      customsDesc: 'Accisa assolta/sospesa, COLA, Prior Notice, e-DAS. Documenti generati, verificati e archiviati in modo strutturato.',
      warehouse: 'Deposito & Rappresentanza',
      warehouseDesc: 'Vendi ai tuoi buyer anche se non hanno un codice accisa tramite la rappresentanza fiscale SPST.',
      markets: 'Sviluppo mercati esteri',
      marketsDesc: 'Supporto operativo su listini, Incoterm, strategie di spedizione e organizzazione dei flussi export verso nuovi mercati.',
      processKicker: 'Come funziona',
      processTitle: 'Dalla carta al tracking, in 3 step',
      step1: '1) Documenti a norma',
      step1Desc: 'Accise, COLA, Prior Notice, e-DAS e tutta la parte burocratica per partire in regola nei diversi Paesi.',
      step2: '2) Spedizione ottimizzata',
      step2Desc: 'Selezioniamo corrieri, vettori e tratte migliori (express, camion, aereo o nave) con tracking e assistenza dedicata.',
      step3: '3) Flussi export stabili',
      step3Desc: 'Analizziamo volumi, frequenze e mercati per strutturare spedizioni ricorrenti e ridurre costi e complessità nel tempo.',
      contactKicker: 'Parliamo della tua cantina',
      contactTitle: 'Servizi e contatti',
      email: 'Email',
      whatsapp: 'WhatsApp',
      phone: 'Telefono',
      legalAddress: 'Sede legale',
      hours: 'Orari',
      hoursValue: 'Lun–Ven · 9:00–13:00 / 15:00–18:00 (CET)',
      faqKicker: 'Domande frequenti',
      faqTitle: 'FAQ',
      faq1q: 'Spedite solo vino?',
      faq1a: 'Sì, siamo specializzati nel vino (B2B e campionature). Possiamo gestire anche prodotti correlati come olio o altri alcolici, previo controllo di conformità e requisiti doganali.',
      faq2q: 'Come gestite accise ed e-DAS?',
      faq2a: 'Produciamo e archiviamo la documentazione necessaria (accisa assolta/sospesa, e-DAS, COLA, Prior Notice) e verifichiamo HS code e requisiti del Paese di destinazione, coordinandoci con cantina e destinatario.',
      faq3q: 'Posso inviare campionature?',
      faq3a: 'Sì. Utilizziamo corrieri espressi con tempi rapidi e tracciamento, e quando necessario possiamo prevedere soluzioni a temperatura controllata o imballaggi rinforzati.',
      faq4q: 'Offrite supporto sul piano export?',
      faq4a: 'Possiamo affiancarvi nella scelta degli Incoterm, nella definizione delle modalità di spedizione (express, groupage pallet, aereo, mare) e nell\'organizzazione dei flussi ricorrenti verso i mercati esteri che vi interessano.',
      faq5q: 'Che Paesi e modalità di trasporto coprite?',
      faq5a: 'Gestiamo spedizioni di vino in tutta l\'Unione Europea, UK (solo vino, no cibo/medicine), USA e diversi mercati extra-UE. Possiamo operare tramite corrieri espressi, camion (groupage o pallet interi), spedizioni via nave e via aereo, valutando caso per caso la soluzione più adatta.',
      ctaTitle: 'Pronto a spedire il tuo vino nel mondo?',
      formCompany: 'Azienda',
      formName: 'Nome referente',
      formEmail: 'Email',
      formPhone: 'Telefono',
      formCountries: 'Paesi di interesse',
      formType: 'Tipologia spedizioni',
      formNotes: 'Note',
      formSubmit: 'Invia richiesta',
      formProtected: 'Invio protetto. Nessuno spam.',
    },
    // Paylink
    paylink: {
      kicker: 'SPST Paylink · Spedire in USA è diventato facile',
      title: 'Dalla tua cantina',
      titleLine2: 'alla porta di casa',
      titleHighlight: 'dei tuoi clienti USA.',
      description: 'SPST Paylink è il servizio B2C pensato per turisti americani in visita in Italia: il cliente paga dal proprio smartphone, inserisce l\'indirizzo negli Stati Uniti e SPST gestisce documenti export, MRN, ritiro in cantina e spedizione door-to-door. Un flusso dedicato ai clienti con indirizzo USA, integrato nell\'operatività internazionale SPST.',
      ctaActivate: 'Attiva SPST Paylink',
      ctaWhatsapp: 'Parla su WhatsApp con SPST',
      whatKicker: 'Cos\'è SPST Paylink',
      whatTitle: 'Un link di pagamento che sblocca le spedizioni USA dalla cantina',
      what1: 'Per la cantina',
      what1Desc: 'Dopo il tasting non devi più improvvisare spedizioni: hai un Paylink SPST collegato alla tua cantina, con regole chiare di spedizione verso gli USA.',
      what2: 'Per il turista americano',
      what2Desc: 'Scansiona un QR o apre il link, inserisce indirizzo USA e paga con carta. Tutto dal proprio telefono, in pochi minuti, senza moduli cartacei.',
      what3: 'Per l\'operatività',
      what3Desc: 'SPST riceve i dati completi, genera MRN e documenti, organizza il ritiro in cantina e spedisce door-to-door negli Stati Uniti, con tracking e supporto.',
      howKicker: 'Come funziona',
      howTitle: 'Dal tasting al tracking USA, in 3 step',
      how1: '1) In cantina: QR o link',
      how1Desc: 'Al momento della vendita mostri al turista americano un QR code o gli invii il Paylink via email/WhatsApp. Ogni link è collegato alla tua cantina.',
      how2: '2) Checkout USA dal telefono',
      how2Desc: 'Il cliente compila l\'indirizzo di consegna negli Stati Uniti, inserisce telefono ed email, accetta le condizioni e paga con carta in ambiente sicuro.',
      how3: '3) MRN, ritiro e spedizione',
      how3Desc: 'SPST genera MRN e documenti export, programma il ritiro direttamente in cantina e gestisce la spedizione door-to-door verso gli USA.',
      usaKicker: 'Focus operativo',
      usaTitle: 'SPST Paylink è il modulo dedicato ai clienti con indirizzo negli Stati Uniti',
      usaWhy: 'Perché un flusso separato per gli USA?',
      usaWhyDesc: 'SPST lavora su più mercati, ma il turismo americano ha dinamiche specifiche: clienti in vacanza, ordini misti, necessità di spedizione rapida e chiara verso casa negli Stati Uniti.',
      usaBenefits1: 'Normative e processi export dedicati agli USA.',
      usaBenefits2: 'Listini e tratte ottimizzate per spedizioni B2C vino verso America.',
      usaBenefits3: 'Un flusso separato che ti permette di gestire i clienti USA senza complicare il resto dell\'export.',
      usaNote: 'Il modulo Paylink si attiva solo quando il cliente indica un indirizzo di consegna negli Stati Uniti. Per Europa e altri mercati SPST utilizza canali, listini e processi dedicati.',
      usaWhat: 'Cosa significa per la tua cantina',
      usaWhat1: 'Continui a gestire Europa e altri Paesi con le soluzioni SPST più adatte a quei mercati.',
      usaWhat2: 'Quando il cliente è americano e vuole recapitare il vino a casa negli USA, usi Paylink e hai un flusso già pronto.',
      usaWhat3: 'Meno confusione per il team: sai sempre quali spedizioni sono turismo USA e quali rientrano nell\'export "classico".',
      whenKicker: 'Per chi ha senso',
      whenTitle: 'Quando SPST Paylink è davvero utile',
      when1: 'Cantine con tanti turisti USA',
      when1Desc: 'Se una parte importante dei tuoi visitatori arriva dagli Stati Uniti e compra vino in quantità, Paylink ti permette di non perdere queste vendite.',
      when2: 'Agriturismi e wine resort',
      when2Desc: 'Strutture che fanno degustazioni con americani e vogliono offrire un servizio premium: \'Non ti preoccupare della valigia, ti spediamo tutto a casa\'.',
      when3: 'Eventi e fiere con pubblico americano',
      when3Desc: 'Spedizioni dirette USA a partire dallo stand, senza allestire un sistema complesso: QR code + Paylink e SPST gestisce il resto.',
      ctaTitle: 'Vuoi attivare SPST Paylink per i tuoi clienti USA?',
      ctaDesc: 'Raccontaci quanti turisti americani passano in cantina, quanti cartoni vendi mediamente e da quali regioni arrivano. Ti aiutiamo a capire se ha senso attivare il servizio e come strutturare prezzi e processi.',
      ctaEmail: 'Scrivi a info@spst.it',
      ctaPreview: 'Guarda la schermata di checkout',
      ctaNote: 'Nessun vincolo minimo iniziale: partiamo dai primi casi reali e cresciamo insieme.',
    },
    // Register
    register: {
      kicker: 'Onboarding SPST',
      title: 'Richiedi l\'accesso al portale',
      titleHighlight: 'e imposta i dati del mittente',
      description: 'Compila il form con gli stessi campi della sezione "Impostazioni". Riceverai conferma via email: al termine della registrazione abiliteremo il tuo profilo.',
      email: 'Email',
      country: 'Paese',
      sender: 'Mittente / Ragione sociale',
      city: 'Città',
      cap: 'CAP',
      address: 'Indirizzo',
      phone: 'Telefono',
      vat: 'Partita IVA',
      submit: 'Richiedi accesso',
      submitting: 'Invio…',
      privacy: 'Inviando il modulo acconsenti al trattamento dei dati secondo la Privacy Policy.',
    },
    // Blog
    blog: {
      kicker: 'Blog SPST • Logistica & compliance vino',
      title: 'Guide operative per spedire vino',
      titleHighlight: 'senza errori',
      description: 'Articoli pratici (non ideologici) su accise, documenti e flussi reali: Europa B2B/B2C, campionature, Extra-UE/Asia, USA e Paylink. Se vuoi un supporto rapido, scrivici su WhatsApp.',
      searchPlaceholder: 'Cerca: USA, dogane, accise, buyer senza codice, pallet…',
      whatsappSupport: 'Supporto WhatsApp',
      allTags: 'Tutti',
      featured: 'In evidenza',
      results: 'Risultati:',
      requestQuote: 'Richiedi una quotazione',
      featuredArticle: 'Articolo in evidenza',
      readNow: 'Leggi ora',
      read: 'Leggi',
      article: 'Articolo',
      noResults: 'Nessun risultato. Prova a cercare "USA", "dogane", "accise", "pallet".',
      ctaTitle: 'Hai un caso specifico (Paese, volumi, buyer, accise)?',
      ctaDesc: 'Ti diciamo subito il modello corretto e cosa serve davvero.',
    },
    // Footer
    footer: {
      termsAndConditions: 'Termini e Condizioni',
    },
    // Spedizioni Generiche
    genericShipping: {
      formTitle: 'Richiedi informazioni',
      formDescription: 'Compila il form per ricevere una consulenza personalizzata sulle tue esigenze di spedizione.',
      name: 'Nome',
      company: 'Azienda',
      email: 'Email',
      phone: 'Telefono',
      category: 'Categoria merceologica spedita',
      categoryPlaceholder: 'es. Elettronica, Abbigliamento, Alimentari...',
      monthlyShipments: 'Numero spedizioni mensili',
      monthlyShipmentsPlaceholder: 'es. 10-50, 50-100, 100+',
      markets: 'Principali mercati',
      marketsPlaceholder: 'Seleziona i mercati di interesse',
      specialNeeds: 'Particolari esigenze',
      specialNeedsPlaceholder: 'Descrivi eventuali esigenze specifiche...',
      submit: 'Invia richiesta',
      submitting: 'Invio in corso...',
      protected: 'Invio protetto. Nessuno spam.',
      success: 'Richiesta inviata! Ti contatteremo a breve.',
      error: 'Errore durante l\'invio. Riprova.',
      marketsOptions: {
        europe: 'Europa',
        usa: 'USA',
        asia: 'Asia',
        uk: 'Regno Unito',
        other: 'Altri mercati',
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
      genericShipping: 'Generic Shipping',
      forBuyers: 'For Buyers',
      areaRiservata: 'Dashboard',
    },
    // Hero
    hero: {
      kicker: 'Wine export all-in-one',
      title: 'Your wine worldwide,',
      titleHighlight: 'in one click',
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
      testimonials: {
        title: 'What they say about us',
        testimonial1: {
          name: 'Marco R.',
          country: 'Italy',
          text: 'Impeccable service for pallet shipments to USA. Documentation always correct and WhatsApp support always available. Competitive prices for such a professional service.',
        },
        testimonial2: {
          name: 'Sarah J.',
          country: 'USA',
          text: 'Excellent web app, easy to use. I shipped wine to the United States and everything arrived perfect. The support was exceptional throughout the process.',
        },
        testimonial3: {
          name: 'Luca B.',
          country: 'Italy',
          text: 'Multi-piece shipments to EU always on time. Documentary accuracy is perfect, never a problem with excise duties. Highly recommended for regular shippers.',
        },
        testimonial4: {
          name: 'Emma T.',
          country: 'UK',
          text: 'I used SPST for B2B shipments to various European countries. The web app is intuitive and WhatsApp support always responds very quickly. Great service.',
        },
        testimonial5: {
          name: 'Giovanni V.',
          country: 'Italy',
          text: 'Super competitive prices for express shipments to Asia. I shipped packages and everything arrived perfect. The documentary service is impeccable and precise.',
        },
        testimonial6: {
          name: 'Sophie M.',
          country: 'USA',
          text: 'Great support for pallet shipments to USA. Documentation is always correct and tracking is clear. Very well made web app and easy to use.',
        },
        testimonial7: {
          name: 'Andrea C.',
          country: 'Italy',
          text: 'Shipments for fairs in Europe always perfect. Multi-piece handled very well and WhatsApp support always available. Top service for those working in the sector.',
        },
        testimonial8: {
          name: 'Michael B.',
          country: 'USA',
          text: 'I shipped wine to the United States and the service was excellent. Precise documentation, competitive prices and always present support. Recommended without reservations.',
        },
        testimonial9: {
          name: 'Chen L.',
          country: 'China',
          text: 'Shipments to Asia always on time. Documentation is perfect and support always responds quickly. Professional and reliable service.',
        },
        testimonial10: {
          name: 'Paolo F.',
          country: 'Italy',
          text: 'I shipped wine to various Asian countries and everything went very well. Correct documentation, competitive prices and always updated tracking.',
        },
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
    // Legal page
    legal: {
      kicker: 'Legal documentation',
      title: 'Terms, conditions and',
      titleHighlight: 'privacy',
      description: 'Here you will find the Terms of Use and Privacy Policy for the SPST website and services (including portal, quote requests and USA Paylink). Last updated:',
      termsBtn: 'View Terms',
      privacyBtn: 'View Privacy',
      termsTitle: 'Terms of use',
      termsDesc: 'Rules for using the website, portal and request/checkout flows.',
      privacyTitle: 'Privacy',
      privacyDesc: 'How we handle data: purposes, legal bases, retention and rights.',
      cookieTitle: 'Cookies',
      cookieDesc: 'Essential information about technical cookies and, if present, analytics tools.',
      tocTitle: 'Index',
      note: 'Note: this text is a "ready-to-publish" template but does not replace legal advice. If you want, we can make it 100% compliant with your company name/VAT number and your flows (Stripe, carriers, importers).',
    },
    // Portale Quotazioni
    quote: {
      kicker: 'Quick quotes',
      title: 'Quote portal',
      titleHighlight: 'calculate your shipment in a few steps',
      description: 'Not a customer yet? Enter origin and destination, package details and the services you need. We will contact you with the best solution.',
      coverage: 'EU/UK/USA Coverage',
      coverageDesc: 'Express and pallet shipments, with temperature-controlled solutions available.',
      docs: 'Documents & excise',
      docsDesc: 'We can handle excise practices, COLA, Prior Notice and customs assistance.',
      express: 'Optional express',
      expressDesc: 'Check "Express shipment" for priority and faster transit times.',
      insurance: 'Insurance',
      insuranceDesc: 'Optional, recommended for valuable shipments or urgent samples.',
      helpTitle: 'Need help with the quote?',
      helpContact: 'Services and contacts',
      helpWhatsapp: 'WhatsApp Support',
      countryFrom: 'Country of origin',
      capFrom: 'ZIP/CAP of origin',
      countryTo: 'Destination country',
      capTo: 'Destination ZIP/CAP',
      content: 'Content of goods',
      length: 'Length (cm)',
      width: 'Width (cm)',
      height: 'Height (cm)',
      weight: 'Weight (kg)',
      volumetric: 'Estimated volumetric weight (cm/4000):',
      preferences: 'Preferences',
      expressCheck: 'Express shipment',
      acciseCheck: 'Excise practice',
      customsCheck: 'Customs assistance',
      colaCheck: 'COLA / Prior Notice (USA)',
      tempCheck: 'Temperature controlled',
      insuranceCheck: 'Insurance',
      submit: 'Request quote',
      submitting: 'Sending...',
      protected: 'Secure submission. No spam.',
      company: 'Company (optional)',
      email: 'Email',
      phone: 'Phone (optional)',
      address: 'Address (optional)',
    },
    // Servizi e Contatti
    services: {
      kicker: 'Wine export all-in-one',
      title: 'Services and contacts',
      titleHighlight: 'everything you need to ship safely',
      description: 'Customs and tax documents, express or pallet shipments, warehouse and representation, plus operational support to structure your export flows. A single logistics partner from Italy to your customers worldwide.',
      ctaQuote: 'Request a quote',
      ctaContact: 'Contact us',
      servicesKicker: 'What we do',
      servicesTitle: 'Complete operations, from export to delivery',
      logistics: 'Logistics & Shipping',
      logisticsDesc: 'Express, samples and pallets in Europe, UK, USA and other markets. Transport via courier, truck, ship and air.',
      customs: 'Customs & Tax',
      customsDesc: 'Excise paid/suspended, COLA, Prior Notice, e-DAS. Documents generated, verified and archived in a structured way.',
      warehouse: 'Warehouse & Representation',
      warehouseDesc: 'Sell to your buyers even if they don\'t have an excise code through SPST fiscal representation.',
      markets: 'Foreign market development',
      marketsDesc: 'Operational support on price lists, Incoterms, shipping strategies and organization of export flows to new markets.',
      processKicker: 'How it works',
      processTitle: 'From paperwork to tracking, in 3 steps',
      step1: '1) Compliant documents',
      step1Desc: 'Excise, COLA, Prior Notice, e-DAS and all the bureaucratic part to start in compliance in different countries.',
      step2: '2) Optimized shipping',
      step2Desc: 'We select the best couriers, carriers and routes (express, truck, air or sea) with tracking and dedicated assistance.',
      step3: '3) Stable export flows',
      step3Desc: 'We analyze volumes, frequencies and markets to structure recurring shipments and reduce costs and complexity over time.',
      contactKicker: 'Let\'s talk about your winery',
      contactTitle: 'Services and contacts',
      email: 'Email',
      whatsapp: 'WhatsApp',
      phone: 'Phone',
      legalAddress: 'Legal address',
      hours: 'Hours',
      hoursValue: 'Mon–Fri · 9:00–13:00 / 15:00–18:00 (CET)',
      faqKicker: 'Frequently asked questions',
      faqTitle: 'FAQ',
      faq1q: 'Do you only ship wine?',
      faq1a: 'Yes, we specialize in wine (B2B and samples). We can also handle related products such as oil or other alcoholic beverages, subject to compliance checks and customs requirements.',
      faq2q: 'How do you handle excise and e-DAS?',
      faq2a: 'We produce and archive the necessary documentation (excise paid/suspended, e-DAS, COLA, Prior Notice) and verify HS codes and destination country requirements, coordinating with the winery and recipient.',
      faq3q: 'Can I send samples?',
      faq3a: 'Yes. We use express couriers with fast times and tracking, and when necessary we can provide temperature-controlled solutions or reinforced packaging.',
      faq4q: 'Do you offer export planning support?',
      faq4a: 'We can assist you in choosing Incoterms, defining shipping methods (express, groupage pallet, air, sea) and organizing recurring flows to the foreign markets that interest you.',
      faq5q: 'What countries and transport methods do you cover?',
      faq5a: 'We handle wine shipments throughout the European Union, UK (wine only, no food/medicines), USA and various non-EU markets. We can operate via express couriers, trucks (groupage or full pallets), shipments by sea and by air, evaluating case by case the most suitable solution.',
      ctaTitle: 'Ready to ship your wine worldwide?',
      formCompany: 'Company',
      formName: 'Contact name',
      formEmail: 'Email',
      formPhone: 'Phone',
      formCountries: 'Countries of interest',
      formType: 'Shipment type',
      formNotes: 'Notes',
      formSubmit: 'Send request',
      formProtected: 'Secure submission. No spam.',
    },
    // Paylink
    paylink: {
      kicker: 'SPST Paylink · Shipping to USA made easy',
      title: 'From your winery',
      titleLine2: 'to the doorstep',
      titleHighlight: 'of your USA customers.',
      description: 'SPST Paylink is the B2C service designed for American tourists visiting Italy: the customer pays from their smartphone, enters the address in the United States and SPST handles export documents, MRN, pickup at the winery and door-to-door shipping. A flow dedicated to customers with a USA address, integrated into SPST international operations.',
      ctaActivate: 'Activate SPST Paylink',
      ctaWhatsapp: 'Talk to SPST on WhatsApp',
      whatKicker: 'What is SPST Paylink',
      whatTitle: 'A payment link that unlocks USA shipments from the winery',
      what1: 'For the winery',
      what1Desc: 'After the tasting you no longer have to improvise shipments: you have a SPST Paylink connected to your winery, with clear shipping rules to the USA.',
      what2: 'For the American tourist',
      what2Desc: 'Scans a QR or opens the link, enters USA address and pays with card. Everything from their phone, in minutes, without paper forms.',
      what3: 'For operations',
      what3Desc: 'SPST receives complete data, generates MRN and documents, organizes pickup at the winery and ships door-to-door to the United States, with tracking and support.',
      howKicker: 'How it works',
      howTitle: 'From tasting to USA tracking, in 3 steps',
      how1: '1) At the winery: QR or link',
      how1Desc: 'At the time of sale you show the American tourist a QR code or send them the Paylink via email/WhatsApp. Each link is connected to your winery.',
      how2: '2) USA checkout from phone',
      how2Desc: 'The customer fills in the delivery address in the United States, enters phone and email, accepts the conditions and pays with card in a secure environment.',
      how3: '3) MRN, pickup and shipping',
      how3Desc: 'SPST generates MRN and export documents, schedules pickup directly at the winery and handles door-to-door shipping to the USA.',
      usaKicker: 'Operational focus',
      usaTitle: 'SPST Paylink is the module dedicated to customers with an address in the United States',
      usaWhy: 'Why a separate flow for the USA?',
      usaWhyDesc: 'SPST works on multiple markets, but American tourism has specific dynamics: customers on vacation, mixed orders, need for fast and clear shipping to home in the United States.',
      usaBenefits1: 'Regulations and export processes dedicated to the USA.',
      usaBenefits2: 'Price lists and routes optimized for B2C wine shipments to America.',
      usaBenefits3: 'A separate flow that allows you to manage USA customers without complicating the rest of export.',
      usaNote: 'The Paylink module activates only when the customer indicates a delivery address in the United States. For Europe and other markets SPST uses dedicated channels, price lists and processes.',
      usaWhat: 'What it means for your winery',
      usaWhat1: 'You continue to manage Europe and other countries with SPST solutions most suitable for those markets.',
      usaWhat2: 'When the customer is American and wants to deliver wine home in the USA, you use Paylink and have a ready flow.',
      usaWhat3: 'Less confusion for the team: you always know which shipments are USA tourism and which fall into "classic" export.',
      whenKicker: 'Who it makes sense for',
      whenTitle: 'When SPST Paylink is really useful',
      when1: 'Wineries with many USA tourists',
      when1Desc: 'If a significant portion of your visitors come from the United States and buy wine in quantity, Paylink allows you not to lose these sales.',
      when2: 'Agritourism and wine resorts',
      when2Desc: 'Facilities that do tastings with Americans and want to offer a premium service: \'Don\'t worry about the suitcase, we\'ll ship everything home\'.',
      when3: 'Events and fairs with American audience',
      when3Desc: 'Direct USA shipments from the stand, without setting up a complex system: QR code + Paylink and SPST handles the rest.',
      ctaTitle: 'Want to activate SPST Paylink for your USA customers?',
      ctaDesc: 'Tell us how many American tourists visit your winery, how many boxes you sell on average and from which regions they come. We help you understand if it makes sense to activate the service and how to structure prices and processes.',
      ctaEmail: 'Write to info@spst.it',
      ctaPreview: 'View checkout screen',
      ctaNote: 'No minimum initial commitment: we start with the first real cases and grow together.',
    },
    // Register
    register: {
      kicker: 'SPST Onboarding',
      title: 'Request portal access',
      titleHighlight: 'and set sender data',
      description: 'Fill out the form with the same fields as the "Settings" section. You will receive confirmation by email: at the end of registration we will enable your profile.',
      email: 'Email',
      country: 'Country',
      sender: 'Sender / Company name',
      city: 'City',
      cap: 'ZIP/CAP',
      address: 'Address',
      phone: 'Phone',
      vat: 'VAT number',
      submit: 'Request access',
      submitting: 'Sending…',
      privacy: 'By submitting the form you consent to the processing of data according to the Privacy Policy.',
    },
    // Blog
    blog: {
      kicker: 'SPST Blog • Wine logistics & compliance',
      title: 'Operational guides to ship wine',
      titleHighlight: 'without errors',
      description: 'Practical (not ideological) articles on excise, documents and real flows: Europe B2B/B2C, samples, Extra-EU/Asia, USA and Paylink. If you want quick support, write to us on WhatsApp.',
      searchPlaceholder: 'Search: USA, customs, excise, buyer without code, pallet…',
      whatsappSupport: 'WhatsApp Support',
      allTags: 'All',
      featured: 'Featured',
      results: 'Results:',
      requestQuote: 'Request a quote',
      featuredArticle: 'Featured article',
      readNow: 'Read now',
      read: 'Read',
      article: 'Article',
      noResults: 'No results. Try searching for "USA", "customs", "excise", "pallet".',
      ctaTitle: 'Have a specific case (Country, volumes, buyer, excise)?',
      ctaDesc: 'We\'ll tell you right away the correct model and what you really need.',
    },
    // Footer
    footer: {
      termsAndConditions: 'Terms and Conditions',
    },
    // Generic Shipping
    genericShipping: {
      formTitle: 'Request information',
      formDescription: 'Fill out the form to receive personalized consultation on your shipping needs.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      category: 'Product category shipped',
      categoryPlaceholder: 'e.g. Electronics, Clothing, Food...',
      monthlyShipments: 'Number of monthly shipments',
      monthlyShipmentsPlaceholder: 'e.g. 10-50, 50-100, 100+',
      markets: 'Main markets',
      marketsPlaceholder: 'Select markets of interest',
      specialNeeds: 'Special requirements',
      specialNeedsPlaceholder: 'Describe any specific requirements...',
      submit: 'Send request',
      submitting: 'Sending...',
      protected: 'Secure submission. No spam.',
      success: 'Request sent! We will contact you shortly.',
      error: 'Error sending request. Please try again.',
      marketsOptions: {
        europe: 'Europe',
        usa: 'USA',
        asia: 'Asia',
        uk: 'United Kingdom',
        other: 'Other markets',
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
    genericShipping: string;
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
    testimonials: {
      title: string;
      testimonial1: {
        name: string;
        country: string;
        text: string;
      };
      testimonial2: {
        name: string;
        country: string;
        text: string;
      };
      testimonial3: {
        name: string;
        country: string;
        text: string;
      };
      testimonial4: {
        name: string;
        country: string;
        text: string;
      };
      testimonial5: {
        name: string;
        country: string;
        text: string;
      };
      testimonial6: {
        name: string;
        country: string;
        text: string;
      };
      testimonial7: {
        name: string;
        country: string;
        text: string;
      };
      testimonial8: {
        name: string;
        country: string;
        text: string;
      };
      testimonial9: {
        name: string;
        country: string;
        text: string;
      };
      testimonial10: {
        name: string;
        country: string;
        text: string;
      };
    };
  };
  legal: {
    kicker: string;
    title: string;
    titleHighlight: string;
    description: string;
    termsBtn: string;
    privacyBtn: string;
    termsTitle: string;
    termsDesc: string;
    privacyTitle: string;
    privacyDesc: string;
    cookieTitle: string;
    cookieDesc: string;
    tocTitle: string;
    note: string;
  };
  quote: {
    [key: string]: string;
  };
  services: {
    [key: string]: string;
  };
  paylink: {
    [key: string]: string;
  };
  register: {
    [key: string]: string;
  };
  blog: {
    [key: string]: string;
  };
  footer: {
    termsAndConditions: string;
  };
  genericShipping: {
    formTitle: string;
    formDescription: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    category: string;
    categoryPlaceholder: string;
    monthlyShipments: string;
    monthlyShipmentsPlaceholder: string;
    markets: string;
    marketsPlaceholder: string;
    specialNeeds: string;
    specialNeedsPlaceholder: string;
    submit: string;
    submitting: string;
    protected: string;
    success: string;
    error: string;
    marketsOptions: {
      europe: string;
      usa: string;
      asia: string;
      uk: string;
      other: string;
    };
  };
};
