"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative bg-[#07111f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Premium systems for lead generation, conversion, and operations."
          copy="Every build is designed to make your business easier to run and easier to buy from."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/6 p-6 backdrop-blur-md transition hover:border-cyan/50 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
