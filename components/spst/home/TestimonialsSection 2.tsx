"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLocale } from "../../i18n/LocaleProvider";

type Testimonial = {
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marco R.",
    country: "Italia",
    flag: "🇮🇹",
    rating: 5,
    text: "Servizio impeccabile per spedizioni pallet verso USA. Documentazione sempre corretta e supporto WhatsApp sempre disponibile. Prezzi competitivi per un servizio così professionale.",
  },
  {
    name: "Sarah J.",
    country: "USA",
    flag: "🇺🇸",
    rating: 5,
    text: "Ottima web app, facile da usare. Ho spedito vino verso gli Stati Uniti e tutto è arrivato perfetto. Il supporto è stato eccezionale durante tutto il processo.",
  },
  {
    name: "Luca B.",
    country: "Italia",
    flag: "🇮🇹",
    rating: 5,
    text: "Spedizioni multicollo verso UE sempre puntuali. La correttezza documentale è perfetta, mai un problema con le accise. Consigliatissimo per chi spedisce regolarmente.",
  },
  {
    name: "Emma T.",
    country: "UK",
    flag: "🇬🇧",
    rating: 5,
    text: "Ho usato SPST per spedizioni B2B verso diversi paesi europei. La web app è intuitiva e il supporto WhatsApp risponde sempre in tempi rapidissimi. Ottimo servizio.",
  },
  {
    name: "Giovanni V.",
    country: "Italia",
    flag: "🇮🇹",
    rating: 5,
    text: "Prezzi super competitivi per spedizioni express verso Asia. Ho spedito pacchi e tutto è arrivato perfetto. Il servizio documentale è impeccabile e preciso.",
  },
  {
    name: "Sophie M.",
    country: "USA",
    flag: "🇺🇸",
    rating: 5,
    text: "Ottimo supporto per spedizioni pallet verso USA. La documentazione è sempre corretta e il tracking è chiaro. Web app molto ben fatta e facile da utilizzare.",
  },
  {
    name: "Andrea C.",
    country: "Italia",
    flag: "🇮🇹",
    rating: 5,
    text: "Spedizioni per fiere in Europa sempre perfette. Multicollo gestito benissimo e supporto WhatsApp sempre disponibile. Servizio top per chi lavora nel settore.",
  },
  {
    name: "Michael B.",
    country: "USA",
    flag: "🇺🇸",
    rating: 5,
    text: "Ho spedito vino verso gli Stati Uniti e il servizio è stato eccellente. Documentazione precisa, prezzi competitivi e supporto sempre presente. Consigliato senza riserve.",
  },
  {
    name: "Chen L.",
    country: "Cina",
    flag: "🇨🇳",
    rating: 5,
    text: "Spedizioni verso Asia sempre puntuali. La documentazione è perfetta e il supporto risponde sempre rapidamente. Servizio professionale e affidabile.",
  },
  {
    name: "Paolo F.",
    country: "Italia",
    flag: "🇮🇹",
    rating: 5,
    text: "Ho spedito vino verso diversi paesi asiatici e tutto è andato benissimo. Documentazione corretta, prezzi competitivi e tracking sempre aggiornato.",
  },
];

export function TestimonialsSection() {
  const { locale, t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView) % TESTIMONIALS.length);
    }, 5000); // Cambia ogni 5 secondi

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = Array.from({ length: itemsPerView }, (_, i) => {
    const index = (currentIndex + i) % TESTIMONIALS.length;
    return TESTIMONIALS[index];
  });

  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl text-white">
            {locale === "it" ? "Dicono di noi" : "What they say about us"}
          </h2>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#f7931e] to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl shadow-black/20"
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-white/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#f7931e] text-[#f7931e]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-white/90 text-sm leading-relaxed mb-4 relative z-10 line-clamp-3">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="text-2xl">{testimonial.flag}</div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-white/60">{testimonial.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
