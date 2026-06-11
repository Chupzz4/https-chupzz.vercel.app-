import { CalendarCheck, Send } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl rounded-lg border border-cyan/20 bg-white/6 px-5 py-12 text-center shadow-glow backdrop-blur sm:px-10 sm:py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Next Step</p>
        <h2 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300">
          Build the website, funnel, CRM, and AI automation layer that turns your operations into a cleaner growth
          engine.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://calendly.com/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan px-6 text-sm font-bold text-ink shadow-[0_0_38px_rgba(34,211,238,.32)] transition hover:bg-white"
          >
            <CalendarCheck size={18} />
            Book a Call
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/14 bg-white/6 px-6 text-sm font-semibold text-white transition hover:border-cyan/50 hover:text-cyan"
          >
            <Send size={18} />
            Send Message
          </a>
        </div>
      </div>
      <footer className="relative mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
        <span>Premium Tech VA & AI Automation Specialist</span>
        <span>Websites - Funnels - CRM - n8n - GoHighLevel</span>
      </footer>
    </section>
  );
}
