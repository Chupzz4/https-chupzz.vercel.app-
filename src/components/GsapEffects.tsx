"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function GsapEffects() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(":root", {
        "--scan-y": "100%",
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".matrix-rain", {
        backgroundPositionY: "900px",
        duration: 18,
        repeat: -1,
        ease: "none"
      });
    });

    return () => context.revert();
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-[2] scanline opacity-35" aria-hidden="true" />;
}
