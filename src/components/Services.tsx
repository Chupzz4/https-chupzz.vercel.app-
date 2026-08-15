"use client";

import Image from "next/image";
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
                className={`group relative overflow-hidden rounded-lg border bg-white/6 p-6 backdrop-blur-md transition hover:border-cyan/50 hover:shadow-glow ${
                  service.featured
                    ? "border-cyan/40 shadow-glow md:col-span-2 lg:col-span-3"
                    : "border-white/10"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent transition ${
                    service.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
                    <Icon size={24} />
                  </div>
                  {service.toolLogo ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 py-1 pl-1 pr-3">
                      <span className="relative h-7 w-7 overflow-hidden rounded-full bg-white/90">
                        <Image
                          src={service.toolLogo.src}
                          alt={`${service.toolLogo.name} logo`}
                          fill
                          sizes="28px"
                          className="object-contain p-0.5"
                        />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                        Built on {service.toolLogo.name}
                      </span>
                    </span>
                  ) : null}
                </div>
                <h3 className={`text-xl font-semibold text-white ${service.featured ? "mt-6" : "mt-7"}`}>
                  {service.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-7 text-slate-300 ${
                    service.featured ? "max-w-3xl" : ""
                  }`}
                >
                  {service.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
