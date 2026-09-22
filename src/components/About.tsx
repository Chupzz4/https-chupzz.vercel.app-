import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { operatorCredentials } from "@/lib/content";

/**
 * The operator band. A personal-brand site still has to answer "who is actually
 * building this", so the portrait keeps a place on the page — just moved out of
 * the hero, where the brief calls for an abstract technology visual instead.
 */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
      <div className="mx-auto grid max-w-[86rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal className="relative">
          {/* christian-portrait.webp is Christian.webp cropped to its opaque
              bounds (728x1297 of the original 1414x2000). The source carried two
              thirds of its pixels as transparent padding, which left roughly 173
              real pixels spanning a 672px paint — hence the soft render. */}
          <div className="relative mx-auto max-w-[22rem] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, rgba(168,182,200,0.22), transparent 66%)"
              }}
            />
            <div className="luxe-panel luxe-panel-steel relative overflow-hidden rounded-2xl p-2">
              <div className="relative aspect-[728/1297] overflow-hidden rounded-xl bg-graphite">
                <Image
                  src="/images/christian-portrait.webp"
                  alt="Christian Capistrano, technical VA and AI automation specialist"
                  fill
                  quality={88}
                  sizes="(min-width: 1024px) 352px, (min-width: 640px) 352px, 80vw"
                  // The source frame is a night street scene lit teal and red.
                  // Left alone it is the only saturated thing on the page and it
                  // fights the palette, so it is pulled most of the way to
                  // monochrome and warmed back up by the overlay below.
                  className="object-cover saturate-[0.45] contrast-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-steel/18 mix-blend-soft-light"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent"
                />
              </div>
            </div>

            <div className="luxe-panel absolute -bottom-6 -right-4 w-[12.5rem] p-4 sm:-right-8">
              <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/75">
                Operator
              </p>
              <p className="mt-2 font-display text-lg leading-tight text-ivory">
                Christian Capistrano
              </p>
              <p className="mt-1 text-[0.6875rem] text-ash">GTM &amp; Automation Engineer</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>The Operator</Eyebrow>
          <h2 className="mt-6 font-display text-[2rem] font-normal leading-[1.14] tracking-[-0.015em] text-ivory sm:text-[2.75rem] lg:text-[3rem]">
            Technical execution for companies ready to stop running on manual effort.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-[0.9375rem] leading-[1.9] text-silver">
            I work with founders, agencies, and service businesses to connect the systems that actually
            drive revenue: websites, funnels, AI automation, CRM pipelines, Clay-powered GTM engineering,
            lead generation workflows, booking, and follow-up operations.
          </p>
          <p className="mt-4 max-w-xl text-pretty text-[0.9375rem] leading-[1.9] text-silver">
            The objective never changes: a clean digital engine that captures demand, keeps every lead
            moving, and returns your team&rsquo;s attention to the work that compounds.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.06] sm:grid-cols-2">
            {operatorCredentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group bg-carbon px-6 py-6 transition-colors duration-500 hover:bg-graphite"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                    className="text-steel transition-transform duration-500 group-hover:-translate-y-0.5"
                  />
                  <p className="mt-5 text-[0.875rem] font-medium text-ivory">{item.label}</p>
                  <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ash">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
