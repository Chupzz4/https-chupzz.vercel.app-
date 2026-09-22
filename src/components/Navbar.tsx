"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MetalButton } from "@/components/ui/MetalButton";
import { navItems } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Over the hero the bar is fully transparent so the visual runs edge to edge;
  // past it the glass and hairline come in. Passive listener, and the state only
  // flips at the threshold, so this costs one boolean compare per scroll event.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A fixed header over a scrollable page traps the pointer behind the panel on
  // phones; locking the body while the menu is open avoids scrolling the page
  // underneath it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The toggle disappears at lg, so a menu left open while the layout crosses
  // into the desktop bar (a tablet rotating to landscape) kept the body
  // scroll-locked with nothing on screen to close it. Escape closes it too.
  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    onChange();
    desktop.addEventListener("change", onChange);
    document.addEventListener("keydown", onKey);
    return () => {
      desktop.removeEventListener("change", onChange);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "drop-in fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "luxe-glass border-b border-white/8" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[86rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="group" aria-label="Christian Capistrano, back to top">
          <span className="font-display text-lg leading-none tracking-[0.02em] text-ivory transition-colors duration-300 group-hover:text-steel-light sm:text-xl">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.8125rem] font-medium tracking-[0.02em] text-platinum transition hover:text-ivory"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-steel transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <MetalButton href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
            Book a Call
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </MetalButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-ivory transition hover:border-steel/50 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-white/8 transition-[grid-template-rows] duration-[400ms] lg:hidden",
          // grid-rows-[0fr] collapses the panel visually but leaves its links in
          // the tab order and readable by screen readers. invisible + aria-hidden
          // takes them out of both until the menu is actually open.
          open ? "grid-rows-[1fr] bg-carbon/95 backdrop-blur-xl" : "invisible grid-rows-[0fr]"
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0">
          <div className="space-y-1 px-5 py-6 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
                className="flex items-center justify-between rounded-lg px-3 py-4 text-sm text-platinum transition hover:bg-white/5 hover:text-ivory"
              >
                {item.label}
                <ArrowUpRight size={15} className="text-ash" />
              </a>
            ))}
            <MetalButton
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              tabIndex={open ? undefined : -1}
              className="mt-4 w-full"
            >
              Book a Call
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </MetalButton>
          </div>
        </div>
      </div>
    </header>
  );
}

