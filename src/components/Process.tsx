"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="bg-[#07111f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Process"
          title="From scattered tools to a clean launch plan."
          copy="A focused four-step workflow keeps strategy, implementation, and handoff aligned."
        />

        <div className="relative grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-cyan/10 via-cyan/60 to-electric/10 lg:block" />
          {process.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              className="relative rounded-lg border border-white/10 bg-ink/80 p-6 backdrop-blur"
            >
              <div className="mb-7 inline-grid h-12 w-12 place-items-center rounded-lg border border-cyan/40 bg-cyan/12 text-sm font-bold text-cyan shadow-glow">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
