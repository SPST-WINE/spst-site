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

// Mappa delle bandiere per paese
const FLAG_MAP: Record<string, string> = {
  'Italia': '🇮🇹',
  'Italy': '🇮🇹',
  'USA': '🇺🇸',
  'UK': '🇬🇧',
  'Cina': '🇨🇳',
  'China': '🇨🇳',
};

export function TestimonialsSection() {
  const { locale, t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  // Costruisce le recensioni dalle traduzioni
  const TESTIMONIALS: Testimonial[] = [
    {
      name: t.sections.testimonials.testimonial1.name,
      country: t.sections.testimonials.testimonial1.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial1.country] || '🇮🇹',
      rating: 5,
      text: t.sections.testimonials.testimonial1.text,
    },
    {
      name: t.sections.testimonials.testimonial2.name,
      country: t.sections.testimonials.testimonial2.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial2.country] || '🇺🇸',
      rating: 5,
      text: t.sections.testimonials.testimonial2.text,
    },
    {
      name: t.sections.testimonials.testimonial3.name,
      country: t.sections.testimonials.testimonial3.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial3.country] || '🇮🇹',
      rating: 5,
      text: t.sections.testimonials.testimonial3.text,
    },
    {
      name: t.sections.testimonials.testimonial4.name,
      country: t.sections.testimonials.testimonial4.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial4.country] || '🇬🇧',
      rating: 5,
      text: t.sections.testimonials.testimonial4.text,
    },
    {
      name: t.sections.testimonials.testimonial5.name,
      country: t.sections.testimonials.testimonial5.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial5.country] || '🇮🇹',
      rating: 5,
      text: t.sections.testimonials.testimonial5.text,
    },
    {
      name: t.sections.testimonials.testimonial6.name,
      country: t.sections.testimonials.testimonial6.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial6.country] || '🇺🇸',
      rating: 5,
      text: t.sections.testimonials.testimonial6.text,
    },
    {
      name: t.sections.testimonials.testimonial7.name,
      country: t.sections.testimonials.testimonial7.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial7.country] || '🇮🇹',
      rating: 5,
      text: t.sections.testimonials.testimonial7.text,
    },
    {
      name: t.sections.testimonials.testimonial8.name,
      country: t.sections.testimonials.testimonial8.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial8.country] || '🇺🇸',
      rating: 5,
      text: t.sections.testimonials.testimonial8.text,
    },
    {
      name: t.sections.testimonials.testimonial9.name,
      country: t.sections.testimonials.testimonial9.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial9.country] || '🇨🇳',
      rating: 5,
      text: t.sections.testimonials.testimonial9.text,
    },
    {
      name: t.sections.testimonials.testimonial10.name,
      country: t.sections.testimonials.testimonial10.country,
      flag: FLAG_MAP[t.sections.testimonials.testimonial10.country] || '🇮🇹',
      rating: 5,
      text: t.sections.testimonials.testimonial10.text,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView) % TESTIMONIALS.length);
    }, 5000); // Cambia ogni 5 secondi

    return () => clearInterval(interval);
  }, [TESTIMONIALS.length]);

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
            {t.sections.testimonials.title}
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
