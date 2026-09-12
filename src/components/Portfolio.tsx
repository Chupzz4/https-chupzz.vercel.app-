"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = useCallback(() => setSelected(null), []);

  // The previous lightbox could only be dismissed by clicking the backdrop or
  // the close glyph: Escape did nothing and the page kept scrolling behind it.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  const active = selected !== null ? caseStudies[selected] : null;

  return (
    <section id="work" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between sm:mb-20">
          <SectionHeader
            eyebrow="Selected Work"
            align="left"
            className="mb-0 max-w-2xl"
            title={
              <>
                Systems built, shipped,
                <br className="hidden sm:block" /> and handed over.
              </>
            }
          />
          <p className="max-w-sm text-[0.8125rem] leading-[1.8] text-ash md:pb-2">
            A sample of recent builds across local service, B2B, and operations-heavy businesses.
          </p>
        </div>

        {/* 6 columns so five cards tile flush: a 3+3 feature row over 2+2+2. */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {caseStudies.map((item, index) => (
            <Reveal
              key={item.title}
              delay={Math.min(index * 0.06, 0.24)}
              className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <article
                role="button"
                tabIndex={0}
                aria-label={`${item.title} — open preview`}
                onClick={() => setSelected(index)}
                onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(index);
                  }
                }}
                className={cn(
                  "luxe-panel group relative flex h-full cursor-pointer flex-col overflow-hidden",
                  "transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                )}
              >
                <div className={cn("relative overflow-hidden", index < 2 ? "h-56" : "h-44")}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Two passes: a wash that desaturates the screenshot into the
                      palette, and a bottom fade so the card body reads as one
                      continuous surface with the image above it. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-obsidian/45 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-onyx to-transparent"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-obsidian/70 px-3 py-1.5 text-[0.5625rem] font-semibold uppercase tracking-wider text-platinum backdrop-blur-sm">
                    {item.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className={cn(
                        "font-display font-normal tracking-[-0.01em] text-ivory",
                        index < 2 ? "text-2xl" : "text-xl"
                      )}
                    >
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      size={17}
                      className="mt-1 shrink-0 text-ash transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-steel"
                    />
                  </div>

                  <p className="mt-3 text-[0.8125rem] leading-[1.8] text-silver">{item.copy}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                    <span className="rounded-full bg-brushed-steel px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-wider text-[#0A1018]">
                      {item.metric}
                    </span>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 px-3 py-1.5 text-[0.625rem] font-medium text-ash"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} preview`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/92 p-5 backdrop-blur-md sm:p-10"
          onClick={close}
        >
          <div
            className="luxe-panel relative max-h-[88vh] w-full max-w-5xl overflow-hidden p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={`${active.title} — full preview`}
              width={1600}
              height={1000}
              priority
              className="h-auto max-h-[84vh] w-full rounded-xl object-contain"
            />
          </div>
          <button
            type="button"
            onClick={close}
            autoFocus
            aria-label="Close preview"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/5 text-platinum transition hover:border-steel/50 hover:text-ivory sm:right-8 sm:top-8"
          >
            <X size={19} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
