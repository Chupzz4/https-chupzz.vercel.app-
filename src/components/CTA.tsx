"use client";

import { useEffect } from "react";

export function CTA() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="cta" className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8">
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
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/capistranochristianpaul/30min?hide_event_type_details=1&hide_gdpr_block=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>

      <footer className="relative mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
        <span>Premium Tech VA & AI Automation Specialist</span>
        <span>Websites - Funnels - CRM - n8n - GoHighLevel</span>
      </footer>
    </section>
  );
}
