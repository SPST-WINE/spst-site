"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CounterStat({
  from,
  to,
  suffix = "",
  label,
  delay = 0,
  autoStart = false,
}: {
  from: number;
  to: number;
  suffix?: string;
  label: string;
  delay?: number;
  autoStart?: boolean;
}) {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const startAnimation = () => {
      setHasAnimated(true);
      
      // Animazione ultra-fluida con easing elegante
      const duration = 2000; // 2 secondi per animazione elegante
      const startTime = Date.now();
      const startValue = from;
      const endValue = to;
      const diff = endValue - startValue;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out-expo per animazione molto fluida ed elegante)
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.round(startValue + diff * easeOutExpo);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue); // Assicura che finisca esattamente al valore target
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);
    };

    if (autoStart) {
      // Se autoStart è true, parte automaticamente al caricamento
      startAnimation();
    } else {
      // Altrimenti usa Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [from, to, delay, hasAnimated, autoStart]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        className="text-2xl font-black text-white md:text-3xl lg:text-4xl"
        animate={
          hasAnimated && count === to
            ? {
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 0.4,
          times: [0, 0.5, 1],
        }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="mt-2 text-xs font-semibold text-white/70 md:text-sm">
        {label}
      </div>
    </motion.div>
  );
}
