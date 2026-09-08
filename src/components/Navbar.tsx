"use client";

import { CalendarCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-drop fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/58 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Christian Capistrano, back to top">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan/40 bg-cyan/10 shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_18px_rgba(34,211,238,.85)]" />
          </span>
          <span className="text-sm font-semibold tracking-normal text-white">
            Christian Capistrano
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://calendly.com/capistranochristianpaul/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white shadow-blue-glow transition hover:bg-cyan hover:text-ink"
          >
            <CalendarCheck size={16} />
            Book Call
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/12 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-ink/92 transition-[grid-template-rows] duration-300 md:hidden",
          // grid-rows-[0fr] collapses the panel visually but leaves its links in
          // the tab order and readable by screen readers. invisible + aria-hidden
          // takes them out until the menu is actually open.
          open ? "grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0">
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
                className="block rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/8"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
