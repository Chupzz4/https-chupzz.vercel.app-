"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  children: ReactNode;
};

/**
 * Fade-and-rise on first entry into the viewport.
 *
 * Previously a framer-motion `whileInView`, which was the single reason the
 * bundle still carried the library once every other motion.* call was replaced
 * by CSS. An IntersectionObserver and two classes do the same job: one observer
 * per element, disconnected the moment it fires, and the transition itself runs
 * on the compositor.
 *
 * The hidden state lives in CSS behind a `.js` class on <html> rather than in
 * inline style, so the page degrades to fully visible whenever this component
 * cannot run — scripting disabled, or the bundle failing to load. See the
 * inline script in layout.tsx.
 */
export function Reveal({ className, delay = 0, children, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Tells the inline failsafe in layout.tsx that React is alive, so it leaves
    // the `.js` class — and therefore the reveals — in place.
    document.documentElement.classList.add("hydrated");

    const node = ref.current;
    if (!node) return;

    // Anything already on screen at mount (the hero-adjacent sections) should
    // animate immediately rather than waiting for a scroll that may never come.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...props}
    >
      {children}
    </div>
  );
}
