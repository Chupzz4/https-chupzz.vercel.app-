"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/capistranochristianpaul/30min?hide_event_type_details=1&hide_gdpr_block=1";

export function CTA() {
  const section = useRef<HTMLElement>(null);
  const [embed, setEmbed] = useState(false);

  // The inline scheduler pulls ~2.6 MB of Calendly + Stripe script, CSS and
  // iframe - two thirds of the page's transfer - and it used to start the
  // moment React hydrated, for a widget at the bottom of a 7000px page.
  // Mount it only once the visitor is within a couple of screens of it.
  useEffect(() => {
    const node = section.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setEmbed(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!embed) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [embed]);

  return (
    <section
      id="cta"
      ref={section}
      className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Schedule Your Call</p>
          <h2 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300">
            Build the website, funnel, CRM, and AI automation layer that turns your operations into a cleaner growth
            engine.
          </p>
        </div>

        <div className="rounded-lg border border-cyan/20 bg-white/6 shadow-glow backdrop-blur overflow-hidden">
          {embed ? (
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "700px" }}
            />
          ) : (
            <div
              className="grid place-items-center text-center"
              style={{ minWidth: "320px", height: "700px" }}
            >
              <div>
                <p className="text-sm text-slate-300">Loading the scheduler…</p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-11 items-center rounded-md border border-cyan/40 bg-cyan/10 px-5 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-ink"
                >
                  Open Calendly in a new tab
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="relative mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
        <span>Premium Tech VA & AI Automation Specialist</span>
        <span>Websites - Funnels - CRM - n8n - GoHighLevel</span>
      </footer>
    </section>
  );
}
