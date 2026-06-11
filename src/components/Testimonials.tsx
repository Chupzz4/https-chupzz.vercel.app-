"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-[#07111f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Testimonials</p>
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Systems that feel organized, premium, and easy to operate.
        </h2>

        <div className="relative mx-auto mt-10 overflow-hidden rounded-lg border border-white/10 bg-white/6 p-6 text-left shadow-glow backdrop-blur sm:p-10">
          <Quote className="mb-8 text-cyan" size={34} />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-pretty text-xl leading-9 text-white sm:text-2xl">&quot;{active.quote}&quot;</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="font-semibold text-white">{active.name}</div>
                <div className="mt-1 text-sm text-slate-400">{active.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
              className="grid h-9 w-9 place-items-center rounded-md border border-white/12 text-white transition hover:border-cyan/50 hover:text-cyan"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
              className="grid h-9 w-9 place-items-center rounded-md border border-white/12 text-white transition hover:border-cyan/50 hover:text-cyan"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
