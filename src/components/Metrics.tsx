import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { metrics } from "@/lib/content";

/**
 * Results. Four figures, set at display size in brushed metal, on a single
 * hairline-divided slab — the gap-px-over-a-tinted-background trick, so the
 * dividers are true 1px rules at any zoom rather than sub-pixel borders.
 */
export function Metrics() {
  return (
    <section id="results" className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      <div className="hairline absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Results"
          title="The difference a working system makes."
          copy="Outcomes clients consistently see once intake, qualification, and follow-up stop depending on someone remembering to do them."
        />

        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden bg-obsidian px-7 py-9 transition-colors duration-500 hover:bg-graphite"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(168,182,200,0.14), transparent 70%)"
                    }}
                  />

                  <Icon size={19} strokeWidth={1.6} className="relative text-steel" />

                  <p className="relative mt-8 flex items-baseline gap-1">
                    <span className="font-display text-[3.25rem] leading-none text-metal-steel">
                      {metric.value}
                    </span>
                    <span className="font-display text-2xl leading-none text-steel/60">
                      {metric.unit}
                    </span>
                  </p>

                  <p className="relative mt-5 text-[0.8125rem] font-medium leading-snug text-ivory">
                    {metric.label}
                  </p>
                  <p className="relative mt-2.5 text-[0.75rem] leading-[1.8] text-ash">
                    {metric.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
