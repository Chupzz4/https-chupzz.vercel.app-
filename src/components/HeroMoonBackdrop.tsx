import Image from "next/image";

/**
 * The hero's moon backdrop.
 *
 * The photograph carries the scene; everything layered over it is light. The
 * crescent breathes, a specular travels the floor reflection, and the whole
 * frame drifts — all opacity and transform, so the compositor runs them and the
 * hero still ships no JavaScript.
 *
 * The moon sits near the centre of the source frame, which is where the copy
 * wants to be. `MOON_FRAMING` pushes it right and up so the left third stays
 * clean for the headline; the blooms live inside the same transformed wrapper
 * so they track the moon instead of drifting off it.
 */
export function HeroMoonBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 translate-y-[7%] md:translate-x-[15%] md:translate-y-0">
        <div className="absolute inset-0 animate-moon-drift">
          <Image
            src="/images/moon.webp"
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* The shine. A wide bloom over the crescent's lit mass, breathing
              slowly, and a tighter one on the terminator where the rim is
              brightest — offset in phase so the two never peak together and
              the light reads as living rather than as a pulsing lamp. */}
          <div
            className="absolute left-[30%] top-[18%] h-[68%] w-[52%] animate-moon-glow rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(226,236,248,0.26) 0%, rgba(200,214,232,0.12) 38%, transparent 70%)"
            }}
          />
          <div
            className="absolute left-[36%] top-[40%] h-[34%] w-[26%] animate-moon-rim rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,252,244,0.32) 0%, rgba(236,226,206,0.14) 42%, transparent 72%)"
            }}
          />

          {/* Where the crescent meets the floor: the hottest point in the frame,
              and the one the reflection hangs off. */}
          <div
            className="absolute left-[38%] top-[68%] h-[16%] w-[34%] animate-moon-rim rounded-full blur-2xl"
            style={{
              animationDelay: "1.8s",
              background:
                "radial-gradient(ellipse, rgba(255,244,226,0.4) 0%, rgba(255,238,210,0.16) 40%, transparent 72%)"
            }}
          />

          {/* A specular travelling the length of the reflection — the polished
              floor catching the light as the scene drifts. */}
          <div className="absolute inset-x-0 bottom-0 h-[26%] overflow-hidden">
            <div
              className="absolute inset-y-0 w-[34%] animate-moon-shimmer"
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(226,236,248,0.16),transparent)"
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrims. The copy sits in a different place per breakpoint, so the side
          scrim clears the copy column on wide layouts and the vertical one
          covers phones, where the copy spans the full width. */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,12,17,0.95) 0%, rgba(8,12,17,0.88) 24%, rgba(8,12,17,0.55) 44%, rgba(8,12,17,0.15) 62%, transparent 78%)"
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,12,17,0.95) 0%, rgba(8,12,17,0.9) 28%, rgba(8,12,17,0.58) 62%, rgba(8,12,17,0.82) 100%)"
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />
    </div>
  );
}
