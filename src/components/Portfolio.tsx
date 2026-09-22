"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";

type Opened = { card: number; slide: number };

export function Portfolio() {
  const [opened, setOpened] = useState<Opened | null>(null);
  // Whatever had focus when the preview opened gets it back on close, so a
  // keyboard user lands on the card they came from, not the top of the page.
  const trigger = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const open = useCallback((card: number, slide: number) => {
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpened({ card, slide });
  }, []);
  const close = useCallback(() => setOpened(null), []);

  const active = opened ? caseStudies[opened.card] : null;
  const activeSrc = active?.images[opened?.slide ?? 0] ?? null;

  // The lightbox could originally only be dismissed by clicking the backdrop or
  // the close glyph: Escape did nothing and the page kept scrolling behind it.
  useEffect(() => {
    if (!opened) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
      // The close button is the dialog's only control, so Tab stays on it
      // instead of walking into the page hidden behind the backdrop.
      if (event.key === "Tab") {
        event.preventDefault();
        closeButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [opened, close]);

  useEffect(() => {
    if (opened) return;
    trigger.current?.focus({ preventScroll: true });
    trigger.current = null;
  }, [opened]);

  return (
    <section id="work" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between sm:mb-20">
          {/* `cn` concatenates without resolving conflicts, so plain mb-0 and
              max-w-2xl lost to SectionHeader's own mb-14 sm:mb-20 max-w-3xl and
              pushed the note beside the title 56-80px out of line. */}
          <SectionHeader
            eyebrow="Selected Work"
            align="left"
            className="!mb-0 !max-w-2xl"
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
              <CaseStudyCard
                item={item}
                feature={index < 2}
                onOpen={(slide) => open(index, slide)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {active && activeSrc ? (
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
              src={activeSrc}
              alt={`${active.title}, full preview`}
              width={1600}
              height={1000}
              priority
              className="h-auto max-h-[84vh] w-full rounded-xl object-contain"
            />
          </div>
          <button
            ref={closeButton}
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

type CaseStudyCardProps = {
  item: (typeof caseStudies)[number];
  feature: boolean;
  onOpen: (slide: number) => void;
};

function CaseStudyCard({ item, feature, onOpen }: CaseStudyCardProps) {
  const [slide, setSlide] = useState(0);
  const count = item.images.length;
  const isSlider = count > 1;
  const opens = item.lightbox !== false;

  const step = (delta: number) => setSlide((current) => (current + delta + count) % count);

  return (
    <article
      className={cn(
        "luxe-panel group relative flex h-full flex-col overflow-hidden",
        "transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
      )}
    >
      {/* The preview opens from one button stretched over the whole card. It
          used to be the card itself (role="button") with the slider controls
          inside it, and a button's children are presentational, so screen
          readers could not reach the arrows or dots. The controls now sit above
          this button (z-10) as siblings. A card kept out of the lightbox has no
          button at all, so it neither looks nor announces itself as openable. */}
      {opens ? (
        <button
          type="button"
          onClick={() => onOpen(slide)}
          aria-label={`${item.title}, open preview`}
          className="absolute inset-0 z-[5] cursor-pointer rounded-[inherit] focus-visible:[outline-offset:-3px]"
        />
      ) : null}

      <div className={cn("relative overflow-hidden", feature ? "h-56" : "h-44")}>
        {/* One track translated by whole slides. Single-image cards run the same
            path with a track of one, so there is no second rendering branch. */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate3d(-${slide * 100}%, 0, 0)` }}
        >
          {item.images.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={isSlider ? `${item.title}, build ${i + 1} of ${count}` : item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        {/* Two passes: a wash that desaturates the screenshot into the palette,
            and a bottom fade so the card body reads as one continuous surface
            with the image above it. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-obsidian/45 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-onyx to-transparent"
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-obsidian/70 px-3 py-1.5 text-[0.5625rem] font-semibold uppercase tracking-wider text-platinum backdrop-blur-sm">
          {item.type}
        </span>

        {isSlider ? (
          <>
            <SliderButton side="left" label="Previous build" onClick={() => step(-1)} />
            <SliderButton side="right" label="Next build" onClick={() => step(1)} />

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center">
              {item.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Show build ${i + 1} of ${count}`}
                  aria-current={i === slide ? "true" : undefined}
                  onClick={() => setSlide(i)}
                  // A small dot is far below the 24px minimum touch target, so the
                  // button stays a full 24px square and only its inner span is small.
                  className="grid h-6 w-6 place-items-center"
                >
                  <span
                    className={cn(
                      "block h-1.5 rounded-full transition-all duration-300",
                      i === slide ? "w-5 bg-ivory" : "w-1.5 bg-ivory/40 hover:bg-ivory/70"
                    )}
                  />
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={cn(
              "font-display font-normal tracking-[-0.01em] text-ivory",
              feature ? "text-2xl" : "text-xl"
            )}
          >
            {item.title}
          </h3>
          {opens ? (
            <ArrowUpRight
              size={17}
              className="mt-1 shrink-0 text-ash transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-steel"
            />
          ) : null}
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
  );
}

function SliderButton({
  side,
  label,
  onClick
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full",
        "border border-white/15 bg-obsidian/70 text-ivory backdrop-blur-sm",
        "transition duration-300 hover:border-steel/50 hover:bg-obsidian/90",
        // Hidden until the card is hovered, but only where hovering exists.
        // Gating on width (sm:) hid them on tablets, which are wide enough to
        // pass the breakpoint yet have no hover to reveal them.
        "opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 focus-visible:opacity-100",
        side === "left" ? "left-3" : "right-3"
      )}
    >
      {side === "left" ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
    </button>
  );
}
