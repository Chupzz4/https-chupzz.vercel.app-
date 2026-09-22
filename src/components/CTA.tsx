"use client";

import { ArrowUpRight, CalendarCheck, Check, Clock, Mail, Video } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetalButton } from "@/components/ui/MetalButton";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

const CALENDLY_URL = `${siteConfig.calendly}?hide_event_type_details=1&hide_gdpr_block=1`;

const callIncludes = [
  "A walkthrough of your current stack and where it leaks",
  "The two or three automations worth building first",
  "A scoped build plan and honest timeline, yours to keep"
];

/**
 * Booking, as a popup rather than an inline embed.
 *
 * The inline widget renders a 700px white panel in the middle of a black page:
 * Calendly's `background_color` / `text_color` params are honoured only on its
 * paid tiers, so on the free plan there is no way to theme it. The popup keeps
 * one-click booking on the page and confines the white surface to a modal,
 * where a light sheet reads as intentional.
 */
export function CTA() {
  const section = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  // Calendly's script and stylesheet are ~2.6 MB combined and this sits at the
  // bottom of a long page, so nothing loads until the visitor is within a
  // couple of screens of it.
  useEffect(() => {
    const node = section.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(style);

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setReady(true);
        document.body.appendChild(script);
      },
      { rootMargin: "800px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Until the widget is up — and for anyone with the script blocked — the
  // button stays an ordinary link to Calendly, so booking never depends on it.
  const openPopup = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ready || !window.Calendly) return;
    event.preventDefault();
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }, [ready]);

  return (
    <section
      id="contact"
      ref={section}
      className="relative overflow-hidden bg-obsidian py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[34rem] w-[64rem] -translate-x-1/2 opacity-80 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(168,182,200,0.18), transparent 66%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-hair-grid bg-grid opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, #000, transparent 76%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, #000, transparent 76%)"
        }}
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow align="center">Start Here</Eyebrow>
          <h2 className="mt-7 font-display text-[2.5rem] font-normal leading-[1.08] tracking-[-0.02em] text-ivory sm:text-[3.5rem] lg:text-[4rem]">
            Let&rsquo;s build the system
            <br />
            <span className="text-metal-steel">your business runs on.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-[0.9375rem] leading-[1.9] text-silver">
            One call to map the offer, the stack, and the highest-value automation to build first.
            No pitch deck, no obligation. You leave with the plan either way.
          </p>
        </div>

        <div className="luxe-panel luxe-panel-steel mx-auto mt-16 max-w-4xl overflow-hidden">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-white/7 p-8 md:border-b-0 md:border-r sm:p-10">
              <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/75">
                What the call covers
              </p>
              <ul className="mt-7 space-y-5">
                {callIncludes.map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-steel/30 bg-steel/10">
                      <Check size={11} strokeWidth={2.8} className="text-steel-light" />
                    </span>
                    <span className="text-[0.875rem] leading-[1.75] text-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <span className="flex items-center gap-2 text-[0.75rem] text-platinum">
                  <Clock size={13} className="text-steel" strokeWidth={2} />
                  30 minutes
                </span>
                <span className="flex items-center gap-2 text-[0.75rem] text-platinum">
                  <Video size={13} className="text-steel" strokeWidth={2} />
                  Video call
                </span>
              </div>

              <MetalButton
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openPopup}
                size="lg"
                className="w-full"
              >
                <CalendarCheck size={15} strokeWidth={2.2} />
                Choose a Time
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </MetalButton>

              <MetalButton
                href={`mailto:${siteConfig.email}`}
                variant="platinum"
                size="lg"
                className="w-full"
              >
                <Mail size={15} strokeWidth={2.2} className="text-steel-light" />
                Send an Email
              </MetalButton>

              <p className="text-center text-[0.6875rem] leading-relaxed text-ash">
                Prefer to write first? Replies usually land the same day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
