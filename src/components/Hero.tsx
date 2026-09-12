import { ArrowUpRight, Play, ShieldCheck } from "lucide-react";
import { HeroMoonBackdrop } from "@/components/HeroMoonBackdrop";
import { MetalButton } from "@/components/ui/MetalButton";
import { heroStats } from "@/lib/content";
import { siteConfig } from "@/lib/site";

/**
 * Server component by design. Everything that moves here is CSS, so the hero
 * ships no JavaScript at all and the headline — the LCP element — paints with
 * the first byte of HTML rather than waiting on hydration.
 */
export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-obsidian pt-[4.5rem]">
      <HeroMoonBackdrop />

      {/* Single column, held to the left half. The moon is the hero visual
          now, and it wants the right side of the frame — the dashboard panel
          that used to sit there was competing with it for the same space, and
          its content already has a section of its own further down the page. */}
      <div className="relative mx-auto max-w-[86rem] px-5 pb-28 pt-20 sm:px-8 lg:px-10 lg:pb-40 lg:pt-32">
        <div className="rise-in max-w-2xl lg:max-w-[40rem]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-2.5 pr-4 backdrop-blur-sm">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-steel/15">
              <ShieldCheck size={11} className="text-steel-light" strokeWidth={2.2} />
            </span>
            <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-platinum">
              Premium Tech VA &amp; AI Automation
            </span>
          </div>

          {/* The breaks are the intended three-line composition on tablet and
              up. Below sm they are dropped so the headline can wrap on its own
              — forced at 390px they split it into five ragged lines. The
              explicit {" "} survives the hidden <br>, which JSX would otherwise
              leave as "systemsfor businesses". */}
          <h1 className="mt-8 text-balance font-display text-[2.75rem] font-normal leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[3.5rem] lg:text-[4rem]">
            Intelligent systems{" "}
            <br className="hidden sm:block" />
            for businesses that{" "}
            <br className="hidden sm:block" />
            <span className="text-metal-steel">refuse to stall.</span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-[0.9375rem] leading-[1.9] text-silver sm:text-base">
            I design and build the automation layer behind growing companies — websites, funnels, CRM
            architecture, and AI agents that capture demand, qualify it, and move it forward without
            anyone chasing it manually.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MetalButton
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Book a Strategy Call
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </MetalButton>
            <MetalButton href="#systems" variant="platinum" size="lg">
              <Play size={13} strokeWidth={2.4} className="text-steel-light" />
              See the System
            </MetalButton>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/[0.06]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-carbon/90 px-4 py-5 sm:px-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl leading-none text-metal-platinum sm:text-[1.75rem]">
                    {stat.value}
                  </span>
                  <span className="mt-2.5 block text-[0.6875rem] leading-[1.5] text-ash">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="hairline absolute inset-x-0 bottom-0" />
    </section>
  );
}
