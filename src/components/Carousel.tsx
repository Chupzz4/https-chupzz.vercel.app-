"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tools = [
  "Apollo.png",
  "Calendly.png",
  "Claude.png",
  "Clay.png",
  "ClickUp.png",
  "GoHighLevel.png",
  "Github.png",
  "Lovable.png",
  "N8N.png",
  "Otter AI.png",
  "Relume.png",
  "Ring Central.png",
  "Salesforce.png",
  "Spline.png",
  "Supabase.png",
  "Webflow.png",
  "Zapier.png",
  "VS code.png",
  "Chat GPT.png",
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % tools.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % tools.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const getVisibleIndices = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      visible.push((currentIndex + i + tools.length) % tools.length);
    }
    return visible;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            Integrations & Tools
          </p>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            A collection of powerful tools and integrations I use to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-48 overflow-hidden rounded-xl">
            <div className="flex items-center justify-center h-full">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute flex items-center justify-center"
                >
                  <div className="relative w-40 h-40 rounded-xl overflow-hidden">
                    <Image
                      src={`/images/${encodeURIComponent(tools[currentIndex])}`}
                      alt={tools[currentIndex]}
                      fill
                      className="object-contain rounded-none"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Side Preview Images */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
               <div className="relative w-24 h-24 overflow-hidden">
                 <Image
                   src={`/images/${encodeURIComponent(tools[visibleIndices[1]])}`}
                   alt="previous"
                   fill
                   className="object-contain rounded-none"
                 />
               </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
               <div className="relative w-24 h-24 overflow-hidden">
                 <Image
                   src={`/images/${encodeURIComponent(tools[visibleIndices[3]])}`}
                   alt="next"
                   fill
                   className="object-contain rounded-none"
                 />
               </div>
              </div>
            </div>

          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-cyan/20 border border-cyan/40 text-cyan hover:bg-cyan/30 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-cyan/20 border border-cyan/40 text-cyan hover:bg-cyan/30 transition"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {tools.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 8000);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-cyan w-8"
                    : "bg-white/20 w-2 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Tool Name Display */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-cyan">
              {tools[currentIndex].replace(".png", "")}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {currentIndex + 1} / {tools.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
