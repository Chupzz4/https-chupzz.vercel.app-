"use client";

import dynamic from "next/dynamic";
import { ArrowRight, CalendarCheck, ChevronDown, Eye, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { heroStats, stackTags } from "@/lib/content";

const HeroNumberSystem = dynamic(() => import("@/components/HeroNumberSystem"), {
  ssr: false,
  loading: () => <CyberFallback />
});

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-radial-grid pt-16">
      <div className="absolute inset-0 z-0">
        <div className="hidden h-full md:block">
          <HeroNumberSystem />
        </div>
        <div className="h-full md:hidden">
          <CyberFallback />
        </div>
      </div>
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(2,6,23,.96)_0%,rgba(2,6,23,.78)_42%,rgba(2,6,23,.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-medium text-cyan shadow-glow">
            <ShieldCheck size={15} />
            Premium Tech VA & AI Automation Specialist
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-7xl">
            Helping Businesses Automate, Scale & Generate More Leads
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            I build websites, funnels, and AI automation systems that help businesses save time, capture more leads,
            and grow faster.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://calendly.com/capistranochristianpaul/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan px-6 text-sm font-bold text-ink shadow-[0_0_38px_rgba(34,211,238,.32)] transition hover:bg-white"
            >
              <CalendarCheck size={18} />
              Book a Free Consultation
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/14 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-electric/60 hover:bg-electric/12"
            >
              <Eye size={18} />
              View My Work
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/6 p-3 backdrop-blur-md">
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stackTags.map((tag) => (
              <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="hidden min-h-[520px] lg:block" aria-hidden="true" />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-5 left-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 place-items-center rounded-md border border-white/12 bg-white/8 text-slate-200 backdrop-blur transition hover:border-cyan/50 hover:text-cyan sm:grid"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}

function CyberFallback() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,.2),transparent_34%)]">
      <div className="matrix-rain" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(59,130,246,.16),transparent)]" />
    </div>
  );
}
