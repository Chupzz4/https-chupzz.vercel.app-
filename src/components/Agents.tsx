import { Bot } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { agents } from "@/lib/content";

/**
 * The agent roster, presented as one console panel with hairline-divided rows
 * rather than six floating cards — it reads as a system inventory, which is the
 * point, and keeps a second full-bleed grid of cards off the page.
 */
export function Agents() {
  return (
    <section id="agents" className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      <div className="hairline absolute inset-x-0 top-0" />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 opacity-60 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(168,182,200,0.1), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="AI Agents"
          title="The workforce behind the workflow."
          copy="Purpose-built agents that handle the judgement-light work end to end, and know precisely when to put a person back in the loop."
        />

        <Reveal>
          <div className="luxe-panel overflow-hidden">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/7 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Bot size={14} className="text-steel" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[0.8125rem] font-medium text-ivory">Deployed Agents</p>
                  <p className="mt-0.5 text-[0.625rem] uppercase tracking-wider text-ash">
                    Configured per engagement
                  </p>
                </div>
              </div>
              <p className="font-display text-2xl leading-none text-metal-steel">
                {agents.length}
                <span className="ml-2 font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-ash">
                  Active
                </span>
              </p>
            </header>

            <ul className="grid gap-px bg-white/[0.06] sm:grid-cols-2">
              {agents.map((agent) => {
                const Icon = agent.icon;
                return (
                  <li
                    key={agent.name}
                    className="brushed-fill group relative overflow-hidden px-6 py-7 transition-colors duration-500 hover:brightness-125 sm:px-8"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-px bg-steel opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-steel shadow-hair transition duration-500 group-hover:border-steel/35">
                        <Icon size={18} strokeWidth={1.7} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                          <p className="text-[0.9375rem] font-medium text-ivory">{agent.name}</p>
                          <span className="flex items-center gap-1.5 text-[0.625rem] font-medium text-platinum/80">
                            <span className="h-1.5 w-1.5 animate-flow-pulse rounded-full bg-ice" />
                            {agent.status}
                          </span>
                        </div>
                        <p className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-steel/80">
                          {agent.role}
                        </p>
                        <p className="mt-3 text-[0.8125rem] leading-[1.8] text-silver">{agent.copy}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
