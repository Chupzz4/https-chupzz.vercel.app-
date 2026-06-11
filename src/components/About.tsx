import { Cpu, Layers3, Route } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { techSignals } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">About</p>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Technical execution for businesses ready to automate the busywork.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-300">
            I help founders, agencies, contractors, and service businesses connect the systems that drive growth:
            websites, funnels, AI automation, CRM pipelines, lead generation workflows, appointment booking, and
            follow-up operations.
          </p>
          <p className="mt-4 text-pretty text-base leading-8 text-slate-300">
            The goal is simple: build a clean digital engine that captures demand, keeps every lead moving, and gives
            your team more time to focus on revenue-generating work.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/6 p-5 shadow-glow backdrop-blur">
            <Cpu className="mb-5 text-cyan" size={28} />
            <h3 className="text-lg font-semibold text-white">Automation Architecture</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Lead capture, enrichment, CRM updates, notifications, appointment logic, and AI support flows.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/6 p-5 backdrop-blur">
            <Layers3 className="mb-5 text-electric" size={28} />
            <h3 className="text-lg font-semibold text-white">Conversion Assets</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Premium websites and funnels that make the offer clear, credible, and easy to act on.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/6 p-5 backdrop-blur sm:col-span-2">
            <Route className="mb-5 text-cyan" size={28} />
            <h3 className="text-lg font-semibold text-white">Connected Operating Systems</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {techSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-md border border-white/10 bg-ink/50 p-3">
                    <Icon size={17} className="text-cyan" />
                    <span className="text-sm text-slate-300">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
