import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { integrationLabels, integrationLogo, integrations } from "@/lib/content";

/**
 * The technology belt. A CSS marquee rather than the old stateful carousel,
 * which showed one logo at a time behind two arrows and 21 pagination dots —
 * a lot of interaction cost for what is fundamentally a credibility strip.
 *
 * The track holds the list twice and translates exactly -50%, so the second
 * copy lands where the first began and the loop has no seam. It pauses on
 * hover (see `.marquee-viewport` in globals.css) so logos stay readable.
 */
export function Integrations() {
  const belt = [...integrations, ...integrations];

  return (
    <section className="relative overflow-hidden border-y border-white/6 bg-carbon py-16 sm:py-20">
      <div className="mx-auto mb-10 max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Eyebrow>Integrated Stack</Eyebrow>
          <p className="max-w-md text-[0.8125rem] leading-[1.8] text-ash sm:text-right">
            The platforms these systems are built on, connected, and maintained across.
          </p>
        </div>
      </div>

      <div className="marquee-viewport edge-fade relative">
        <ul className="marquee-track flex w-max items-center gap-3">
          {belt.map((name, index) => (
            <li
              key={`${name}-${index}`}
              // The second copy exists only so the loop has no seam; hiding it
              // keeps screen readers from announcing all 21 tools twice.
              aria-hidden={index >= integrations.length ? true : undefined}
              className="group flex h-16 shrink-0 items-center gap-3 rounded-full border border-white/7 bg-white/[0.025] px-6 transition-colors duration-500 hover:border-steel/30 hover:bg-white/[0.05]"
            >
              {/* Rounded and clipped because the source PNGs are inconsistent:
                  roughly half are transparent, the rest carry a baked-in white
                  background that otherwise reads as a raw white rectangle
                  floating in the pill. Re-exporting those as transparent would
                  be the real fix. */}
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[6px]">
                <Image
                  src={integrationLogo(name)}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="32px"
                  // Partly desaturated so 21 brand palettes don't fight the
                  // black-and-steel system, but not the full grayscale these
                  // started at — several of these marks are low-contrast and
                  // went to unreadable grey smudges at 55% opacity.
                  className="object-contain opacity-80 grayscale-[0.4] transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </span>
              <span className="whitespace-nowrap text-[0.8125rem] font-medium tracking-[0.01em] text-platinum/75 transition-colors duration-500 group-hover:text-ivory">
                {integrationLabels[name] ?? name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
