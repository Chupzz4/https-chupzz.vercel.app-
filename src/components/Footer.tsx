import { ArrowUp, Mail } from "lucide-react";
import { navItems } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const disciplines = [
  "GTM Engineering",
  "AI Automation",
  "Websites & Funnels",
  "CRM Architecture",
  "Lead Generation"
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/7 bg-carbon">
      <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-2xl leading-none text-ivory">{siteConfig.name}</p>
            <p className="mt-6 max-w-sm text-[0.8125rem] leading-[1.8] text-ash">
              Automation architecture, go-to-market engineering, and conversion assets for companies
              that would rather their systems did the remembering.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-8 inline-flex items-center gap-2.5 text-[0.8125rem] text-platinum transition hover:text-ivory"
            >
              <Mail size={14} className="text-steel" strokeWidth={2} />
              {siteConfig.email}
              <span className="h-px w-0 bg-steel transition-all duration-300 group-hover:w-5" />
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/70">
              Navigate
            </p>
            <ul className="mt-6 space-y-3.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.8125rem] text-ash transition hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-[0.8125rem] text-ash transition hover:text-ivory">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/70">
              Disciplines
            </p>
            <ul className="mt-6 space-y-3.5">
              {disciplines.map((item) => (
                <li key={item} className="text-[0.8125rem] text-ash">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-[0.6875rem] text-ash">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-platinum transition hover:text-ivory"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition duration-300 group-hover:border-steel/50">
              <ArrowUp size={13} strokeWidth={2.2} className="transition group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
