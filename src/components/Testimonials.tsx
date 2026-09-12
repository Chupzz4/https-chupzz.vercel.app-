import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/lib/content";

/**
 * Three quotes, shown at once.
 *
 * This replaced an auto-advancing carousel that rotated every 5.2s: it hid two
 * thirds of the proof behind a timer, moved text while people were reading it,
 * and needed an interval, two arrow controls and AnimatePresence to do so. Set
 * side by side the same content is fully scannable and ships no JavaScript.
 */
export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      <div className="hairline absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Client Feedback"
          title="Systems that feel organised, premium, and easy to operate."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="luxe-panel group flex h-full flex-col p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-steel/35 transition-colors duration-500 group-hover:text-steel/60"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-4 flex-1 text-pretty font-display text-[1.25rem] font-normal leading-[1.6] tracking-[-0.005em] text-ivory">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-white/7 pt-6">
                  <span
                    aria-hidden="true"
                    className="h-9 w-px shrink-0 bg-gradient-to-b from-steel to-transparent"
                  />
                  <span>
                    <span className="block text-[0.8125rem] font-medium text-ivory">{item.name}</span>
                    <span className="mt-1 block text-[0.6875rem] uppercase tracking-wider text-ash">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
