import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { process } from "@/lib/content";

/**
 * Strategy to execution in four steps. The connecting rule sits behind the
 * numerals at exactly their vertical centre and is hidden below lg, where the
 * cards stack and a horizontal line would run through nothing.
 */
export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Process"
          title="From scattered tools to a documented system."
          copy="Four stages, fixed scope at each one, and a handoff your team can actually operate without me."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[2.125rem] hidden h-px bg-gradient-to-r from-transparent via-steel/40 to-transparent lg:block"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.08}>
                <article className="group h-full">
                  <div className="flex items-center gap-4">
                    <span className="grid h-[4.25rem] w-[4.25rem] shrink-0 place-items-center rounded-full border border-white/8 bg-obsidian shadow-card transition duration-500 group-hover:border-steel/35">
                      <span className="font-display text-2xl leading-none text-metal-steel">
                        {item.step}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-gradient-to-r from-steel/30 to-transparent lg:hidden"
                    />
                  </div>

                  <div className="luxe-panel mt-6 h-[calc(100%-5.75rem)] p-6 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-lift sm:p-7">
                    <h3 className="font-display text-xl font-normal tracking-[-0.01em] text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.8125rem] leading-[1.8] text-silver">{item.copy}</p>
                    <div className="mt-6 border-t border-white/7 pt-4">
                      <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-ash">
                        Deliverable
                      </p>
                      <p className="mt-2 text-[0.8125rem] font-medium text-steel-light">
                        {item.deliverable}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
