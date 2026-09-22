import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Seven modular cards on a 6-column grid: the featured service takes its own
 * row and the rest tile two apiece, so all three rows fill flush instead of
 * leaving the orphan gap a 3-column grid produces with an odd card count.
 *
 * Hover is CSS only — the old version wrapped each card in a motion.article
 * purely to translate it 8px, which shipped framer-motion for an effect
 * `transition-transform` already does on the compositor.
 */
export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-hair-grid bg-grid-sm opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000, transparent 75%)"
        }}
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Capabilities"
          title="Systems for acquisition, conversion, and everything after the sale."
          copy="Each engagement is scoped as a system, not a deliverable. Built to be handed over, documented, and operated by your team."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={Math.min(index * 0.05, 0.25)}
                className={service.featured ? "md:col-span-2 lg:col-span-6" : "lg:col-span-2"}
              >
                <article
                  className={cn(
                    "luxe-panel group relative h-full overflow-hidden p-7 transition duration-500",
                    "hover:-translate-y-1.5 hover:shadow-lift sm:p-8",
                    service.featured && "luxe-panel-steel"
                  )}
                >
                  {/* Bronze wash that lifts in on hover. Sits under the content
                      and never animates layout, so it composites cheaply. */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      service.featured && "opacity-100"
                    )}
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 55% at 12% 0%, rgba(168,182,200,0.13), transparent 62%)"
                    }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-xl transition duration-500",
                        service.featured
                          ? "bg-brushed-steel text-[#0A1018] shadow-steel-key"
                          : "border border-white/10 bg-white/[0.04] text-steel shadow-hair group-hover:border-steel/35"
                      )}
                    >
                      <Icon size={21} strokeWidth={1.6} />
                    </span>

                    {/* No arrow on the other cards: they are not links, and an
                        up-right arrow promised a destination that was not there. */}
                    {service.toolLogo ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-steel/25 bg-steel/8 py-1 pl-1 pr-3.5">
                        <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-ivory">
                          <Image
                            src={service.toolLogo.src}
                            alt={`${service.toolLogo.name} logo`}
                            fill
                            sizes="24px"
                            className="object-contain p-0.5"
                          />
                        </span>
                        <span className="text-[0.5625rem] font-semibold uppercase tracking-wider text-steel-light">
                          Built on {service.toolLogo.name}
                        </span>
                      </span>
                    ) : null}
                  </div>

                  <h3
                    className={cn(
                      "relative mt-7 font-display font-normal tracking-[-0.01em] text-ivory",
                      service.featured ? "text-[1.75rem] leading-tight" : "text-xl"
                    )}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={cn(
                      "relative mt-3.5 text-[0.8125rem] leading-[1.85] text-silver",
                      service.featured && "max-w-2xl text-[0.875rem]"
                    )}
                  >
                    {service.copy}
                  </p>

                  <ul
                    className={cn(
                      "relative mt-6 flex flex-wrap gap-2",
                      service.featured && "mt-7"
                    )}
                  >
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.6875rem] font-medium text-platinum/80"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
