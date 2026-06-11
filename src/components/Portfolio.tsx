"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useState } from "react";

const accentMap = {
  cyan: "from-cyan/30 to-cyan/5 text-cyan",
  blue: "from-electric/30 to-electric/5 text-blue-300",
  emerald: "from-emerald-400/24 to-emerald-400/5 text-emerald-300",
  violet: "from-violet-400/24 to-violet-400/5 text-violet-300"
};

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="work" className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Portfolio</p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Sample Portfolio Projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Replace these with live projects, screenshots, metrics, and client results as your portfolio grows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {portfolio.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.62, delay: index * 0.06 }}
              className={cn(
                "group min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-white/6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-glow cursor-pointer",
                index < 2 ? "lg:col-span-2" : "lg:col-span-1"
              )}
              onClick={() => item.image && setSelectedIndex(index)}
            >
              <div 
                className={cn("relative h-40 overflow-hidden rounded-t-lg bg-gradient-to-br", accentMap[item.accent as keyof typeof accentMap])}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={false}
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-5 rounded-lg border border-white/15 bg-ink/55 p-4 shadow-blue-glow">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan" />
                      <span className="h-2 w-2 rounded-full bg-electric" />
                      <span className="h-2 w-2 rounded-full bg-white/45" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-3/4 rounded bg-white/20" />
                      <div className="h-3 w-1/2 rounded bg-white/12" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-md bg-cyan/20" />
                        <div className="h-12 rounded-md bg-electric/20" />
                        <div className="h-12 rounded-md bg-white/10" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{item.type}</span>
                  <ArrowUpRight size={17} className="text-slate-400 transition group-hover:text-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                <div className="mt-5 inline-flex rounded-md border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-semibold text-white">
                  {item.metric}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedIndex !== null && portfolio[selectedIndex]?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-h-[90vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={portfolio[selectedIndex].image}
              alt="Expanded portfolio image"
              width={1200}
              height={800}
              priority
              className="h-auto w-full rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-cyan transition"
              aria-label="Close image"
            >
              <X size={32} />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
