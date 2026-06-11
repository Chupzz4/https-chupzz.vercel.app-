"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section id="results" className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 h-72 w-[78rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(59,130,246,.13),transparent_62%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Work With Me"
          title="A sharper backend for businesses that move fast."
          copy="The right technical support turns scattered tools into a dependable operating system."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: index * 0.045 }}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-electric/50 hover:bg-electric/8"
              >
                <Icon className="text-cyan" size={24} />
                <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{benefit.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
