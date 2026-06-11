"use client";

import { CalendarCheck, Menu, Send, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/58 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Tech VA portfolio home">
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
            href="mailto:hello@example.com"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-4 text-sm font-medium text-slate-200 transition hover:border-cyan/50 hover:text-white"
          >
            <Send size={16} />
            Message
          </a>
          <a
            href="https://calendly.com/capistranochristianpaul/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-electric px-4 text-sm font-semibold text-white shadow-blue-glow transition hover:bg-cyan hover:text-ink"
          >
            <CalendarCheck size={16} />
            Book Call
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/12 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-ink/92 transition-[grid-template-rows] duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/8"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
