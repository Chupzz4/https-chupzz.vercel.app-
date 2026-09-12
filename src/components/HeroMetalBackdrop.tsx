/**
 * The hero's metal backdrop: steep brushed-chrome beams over glossy black
 * facets, framed by thin warm edge lights.
 *
 * Rebuilt as geometry rather than shipped as the reference raster. A 2048px
 * square would crop badly across the hero's aspect ratios, cost a large
 * download on the critical path, and — the point of the exercise — could not
 * animate. Everything here is gradients on transform-only keyframes, so the
 * compositor runs it, it stays sharp at any density, and it adds no JavaScript.
 *
 * Layer order, back to front: facets, beams, edge lights, scrim.
 */

// Beams are placed by percentage of hero width so the composition holds its
// proportions from 360px to ultrawide instead of drifting apart.
const beams = [
  { left: "-14%", width: "7rem", kind: "metal", sheen: "0s" },
  { left: "-4%", width: "2.5rem", kind: "gloss", sheen: "0s" },
  { left: "1%", width: "1.1rem", kind: "chrome", sheen: "1.4s" },
  { left: "7%", width: "5rem", kind: "gloss", sheen: "0s", hideSm: true },
  { left: "72%", width: "1.1rem", kind: "chrome", sheen: "2.6s", hideSm: true },
  { left: "78%", width: "4rem", kind: "gloss", sheen: "0s", hideSm: true },
  { left: "86%", width: "6.5rem", kind: "metal", sheen: "3.4s" },
  { left: "97%", width: "3rem", kind: "gloss", sheen: "0s" }
] as const;

const surfaces = {
  // Cross-beam ramp. The bright bands sit off-centre and at uneven intervals —
  // evenly spaced stops read as a plastic gradient rather than turned metal.
  metal:
    "linear-gradient(90deg,#12181F 0%,#5E6773 14%,#B6C0CC 28%,#727C88 40%,#2B323A 56%,#9BA5B1 74%,#454D57 88%,#10151B 100%)",
  chrome:
    "linear-gradient(90deg,#222932 0%,#C8D2DD 26%,#E6EDF5 50%,#97A1AD 72%,#2B323A 100%)",
  gloss:
    "linear-gradient(90deg,#05080C 0%,#141B24 34%,#0A0F15 62%,#1A222C 82%,#05080C 100%)"
} as const;

export function HeroMetalBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Slow drift on the whole assembly. One transform on the group rather
          than per-beam keeps this to a single composited layer. */}
      <div className="absolute inset-0 animate-metal-drift">
        {beams.map((beam) => (
          <div
            key={beam.left}
            className={`absolute -top-1/2 h-[200%] rotate-[19deg] ${
              "hideSm" in beam && beam.hideSm ? "hidden md:block" : ""
            }`}
            style={{ left: beam.left, width: beam.width }}
          >
            <div
              className="relative h-full w-full overflow-hidden"
              style={{ backgroundImage: surfaces[beam.kind] }}
            >
              {/* Brushing runs along the beam's long axis, so vertical rules
                  inside the un-rotated element — the rotation carries them. */}
              {beam.kind === "metal" ? (
                <div
                  className="absolute inset-0 opacity-45"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg,rgba(255,255,255,0.09) 0 1px,transparent 1px 3px)"
                  }}
                />
              ) : null}

              {/* A soft highlight travelling the length of the beam: the glint
                  you get when light rakes across turned metal. */}
              {beam.kind !== "gloss" ? (
                <div
                  className="absolute inset-x-0 h-[26%] animate-beam-sheen"
                  style={{
                    animationDelay: beam.sheen,
                    background:
                      "linear-gradient(180deg,transparent,rgba(255,255,255,0.5),transparent)"
                  }}
                />
              ) : null}
            </div>
          </div>
        ))}

        <EdgeLight className="left-[0.6%] w-[2px]" rotate="19deg" delay="0s" />
        <EdgeLight className="left-[71.6%] hidden w-[2px] md:block" rotate="19deg" delay="2.2s" />

        {/* The two shallow rails that close the parallelogram in the reference.
            Rotated the opposite way and stretched past the viewport so their
            ends are never in frame. */}
        <EdgeRail className="top-[18%]" rotate="-5deg" delay="1.1s" />
        <EdgeRail className="top-[80%]" rotate="-5deg" delay="3.3s" />
      </div>

      {/* Three scrims, because the copy sits in a different place at each
          breakpoint. The radial opens the centre of the frame; the horizontal
          one clears the copy column on wide layouts; the vertical one covers
          phones, where the copy spans the full width and a side scrim would
          miss it entirely. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 66% 80% at 40% 52%, rgba(8,12,17,0.96) 0%, rgba(8,12,17,0.78) 44%, rgba(8,12,17,0.3) 76%, transparent 100%)"
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,12,17,0.94) 0%, rgba(8,12,17,0.86) 26%, rgba(8,12,17,0.5) 48%, rgba(8,12,17,0.12) 66%, transparent 82%)"
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,12,17,0.9) 0%, rgba(8,12,17,0.8) 40%, rgba(8,12,17,0.86) 100%)"
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />
    </div>
  );
}

/** A steep warm edge light with a bright node running down it. */
function EdgeLight({
  className,
  rotate,
  delay
}: {
  className: string;
  rotate: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute -top-1/2 h-[200%] overflow-hidden ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        background:
          "linear-gradient(180deg,transparent 0%,var(--hero-edge-soft) 18%,var(--hero-edge) 50%,var(--hero-edge-soft) 82%,transparent 100%)",
        boxShadow: "0 0 14px var(--hero-edge-glow)"
      }}
    >
      <div
        className="absolute inset-x-0 h-[14%] animate-edge-travel"
        style={{
          animationDelay: delay,
          background: "linear-gradient(180deg,transparent,var(--hero-edge-hot),transparent)"
        }}
      />
    </div>
  );
}

/** The shallow counterpart, spanning the frame horizontally. */
function EdgeRail({
  className,
  rotate,
  delay
}: {
  className: string;
  rotate: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute -left-1/4 h-[2px] w-[150%] overflow-hidden ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        background:
          "linear-gradient(90deg,transparent 0%,var(--hero-edge-soft) 22%,var(--hero-edge) 50%,var(--hero-edge-soft) 78%,transparent 100%)",
        boxShadow: "0 0 14px var(--hero-edge-glow)"
      }}
    >
      <div
        className="absolute inset-y-0 w-[12%] animate-rail-travel"
        style={{
          animationDelay: delay,
          background: "linear-gradient(90deg,transparent,var(--hero-edge-hot),transparent)"
        }}
      />
    </div>
  );
}
