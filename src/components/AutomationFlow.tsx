import { Activity, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { flowStages, flowTelemetry } from "@/lib/content";
import { cn } from "@/lib/utils";

// Illustrative weekly throughput. Shape only — the caption under the panel says
// as much, so the visual can carry a dashboard's texture without reading as a
// claim about a specific client's numbers.
const throughput = [38, 52, 44, 68, 57, 82, 96];
const days = ["M", "T", "W", "T", "F", "S", "S"];

/**
 * The workflow console — the dashboard idea from the reference, adapted into a
 * section that sells the service rather than an admin screen you operate. The
 * flow rail carries the narrative; the telemetry column supplies the texture.
 */
export function AutomationFlow() {
  return (
    <section id="systems" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(168,182,200,0.13), transparent 68%)"
        }}
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Automation Flow"
          title="What happens between a submission and a booked call."
          copy="Every stage below runs without a person in the loop. The handoff to a human happens once, at the point where a human actually adds value."
        />

        <Reveal>
          <div className="luxe-panel overflow-hidden">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/7 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Activity size={14} className="text-steel" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[0.8125rem] font-medium text-ivory">Lead Operations Pipeline</p>
                  <p className="mt-0.5 text-[0.625rem] uppercase tracking-wider text-ash">
                    Trigger to close
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-ice/30 bg-ice/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-flow-pulse rounded-full bg-ice" />
                <span className="text-[0.5625rem] font-semibold uppercase tracking-wider text-ice">
                  Running
                </span>
              </span>
            </header>

            <div className="grid lg:grid-cols-12">
              <ol className="border-b border-white/7 px-6 py-8 sm:px-8 lg:col-span-7 lg:border-b-0 lg:border-r">
                {flowStages.map((stage, index) => {
                  const Icon = stage.icon;
                  const last = index === flowStages.length - 1;
                  return (
                    <li key={stage.key} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <span
                          className={cn(
                            "grid h-11 w-11 shrink-0 place-items-center rounded-full transition",
                            index === 0 || last
                              ? "bg-brushed-steel text-[#0A1018] shadow-steel-key"
                              : "border border-white/10 bg-graphite text-platinum shadow-hair"
                          )}
                        >
                          <Icon size={17} strokeWidth={1.7} />
                        </span>
                        {!last ? (
                          <span
                            aria-hidden="true"
                            className="my-2 w-px flex-1 animate-flow-pulse bg-gradient-to-b from-steel/45 via-white/10 to-white/5"
                            style={{ animationDelay: `${index * 0.4}s` }}
                          />
                        ) : null}
                      </div>

                      <div className={cn("min-w-0 flex-1 pt-1.5", !last && "pb-8")}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-steel">
                            {stage.stage}
                          </p>
                          <span className="font-mono text-[0.625rem] tabular-nums text-ash">
                            {stage.meta}
                          </span>
                        </div>
                        <p className="mt-2 text-[0.9375rem] font-medium text-ivory">{stage.title}</p>
                        <p className="mt-1.5 text-[0.8125rem] leading-[1.8] text-silver">
                          {stage.copy}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* The flow rail is the taller column. Making this one a flex
                  column and letting the telemetry grid grow into three equal
                  rows spreads the surplus height across the stats instead of
                  leaving it pooled under the chart. */}
              <div className="flex flex-col lg:col-span-5">
                <div className="grid flex-1 grid-cols-1 divide-y divide-white/7 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:grid-rows-3 lg:divide-x-0 lg:divide-y">
                  {flowTelemetry.map((item) => {
                    const positive = !item.delta.startsWith("-");
                    const Trend = positive ? ArrowUpRight : ArrowDownRight;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col justify-center px-6 py-6 sm:px-7"
                      >
                        <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/75">
                          {item.label}
                        </p>
                        <div className="mt-3 flex items-end justify-between gap-3">
                          <span className="font-display text-[1.75rem] leading-none text-metal-platinum">
                            {item.value}
                          </span>
                          <span
                            className={cn(
                              "flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.625rem] font-semibold tabular-nums",
                              // Both directions are wins here — response time
                              // falling is as good as volume rising — so both
                              // read steel rather than the usual red/green.
                              "border-steel/25 bg-steel/8 text-steel-light"
                            )}
                          >
                            <Trend size={10} strokeWidth={2.6} />
                            {item.delta}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-white/7 px-6 py-7 sm:px-7">
                  <div className="flex items-baseline justify-between">
                    <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/75">
                      Weekly Throughput
                    </p>
                    <p className="text-[0.625rem] text-ash">Last 7 days</p>
                  </div>

                  {/* Bars are direct children of the h-32 track so their
                      percentage heights resolve against a definite height; the
                      day labels sit in their own row below, because a label
                      inside each column makes that column auto-height and
                      collapses every bar to zero. */}
                  <div className="mt-6 flex h-32 items-end gap-2">
                    {throughput.map((value, index) => (
                      <div
                        key={days[index] + index}
                        className={cn(
                          "flex-1 rounded-t-[3px]",
                          index === throughput.length - 1
                            ? "bg-brushed-steel shadow-steel-key"
                            : "bg-gradient-to-t from-white/6 to-platinum/25"
                        )}
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2.5 flex gap-2">
                    {days.map((day, index) => (
                      <span
                        key={day + index}
                        className="flex-1 text-center text-[0.5625rem] uppercase text-ash"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-[0.6875rem] text-ash">
          Representative system view. Figures illustrate typical shape, not a specific engagement.
        </p>
      </div>
    </section>
  );
}
