import type { Config } from "tailwindcss";

// Tailwind's default opacity scale only steps by 5, so modifiers already used in
// the markup — bg-white/6, border-white/8 — silently compile to nothing. Widen it
// to every integer 0-100; JIT still only emits what's actually used. The whole
// palette below leans on single-digit opacities for hairlines, so this matters.
const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, value) => [String(value), String(value / 100)])
);

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      opacity,
      colors: {
        // Surfaces, darkest to lightest, all held at hue ~210 so the ramp reads
        // as one material rather than four unrelated darks. `onyx` is the brand
        // navy exactly as specified — and it is the card surface, which is the
        // largest lit area on the page, so the colour actually gets seen. The
        // ground below it is the same navy taken down, keeping the depth that a
        // single flat background would lose.
        obsidian: "#080C11",
        carbon: "#0C1219",
        onyx: "#101820",
        graphite: "#18232E",

        // Type. Neutral-cool rather than the warm ivory this started with —
        // against chrome a warm white reads as a second, competing hue.
        ivory: "#F2F5FA",
        platinum: "#C7CDD8",
        silver: "#929BA9",
        // Lifted twice over the life of this palette: the navy surfaces give the
        // dimmest text token less to work against than the original near-blacks
        // did. This value is set by the worst pairing in the system — ash on
        // `graphite`, the card hover state — and clears AA on all four surfaces.
        ash: "#848B99",

        // The accent, sampled from the CZ monogram: brushed chrome. Because it
        // shares its hue family with the body greys, it earns prominence through
        // luminance and reflectivity rather than colour — which is why the metal
        // gradients below do most of the work.
        steel: {
          DEFAULT: "#A8B6C8",
          light: "#DCE6F3",
          pale: "#F4F7FB",
          deep: "#596373"
        },

        // The monogram's cold edge light. The one genuinely chromatic note in
        // the system, and deliberately rationed: live indicators, focus rings,
        // and the occasional active state. Nothing else.
        ice: "#7EA9DC"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"]
      },
      letterSpacing: {
        // The dashboard micro-label look: uppercase, tiny, generously tracked.
        label: "0.32em",
        wider: "0.18em"
      },
      boxShadow: {
        // Depth comes from one large, very soft, very dark shadow plus a 1px
        // inset highlight along the top edge — the way real lit surfaces read.
        luxe: "0 40px 90px -36px rgba(0,0,0,0.92)",
        card: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 30px 60px -34px rgba(0,0,0,0.9)",
        lift: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 44px 80px -38px rgba(0,0,0,0.95)",
        steel: "0 0 0 1px rgba(168,182,200,0.22), 0 24px 50px -26px rgba(168,182,200,0.35)",
        "steel-key":
          "inset 0 1px 0 0 rgba(255,255,255,0.42), 0 14px 34px -14px rgba(168,182,200,0.45)",
        hair: "inset 0 1px 0 0 rgba(255,255,255,0.06)"
      },
      backgroundImage: {
        // Brushed metal = an asymmetric multi-stop ramp. Evenly spaced stops
        // read as a plastic gradient; the uneven bright bands are what sell it.
        // The darkest stop is held at #7B8797 so the dark label on the primary
        // button clears 5:1 even where the ramp bottoms out.
        "brushed-steel":
          "linear-gradient(135deg,#7B8797 0%,#D5DEEA 18%,#8A96A7 32%,#F6FAFF 52%,#A7B3C4 66%,#818D9D 82%,#C6D1DE 100%)",
        // A single low-contrast rule grid. Kept at ~3% so it reads as texture
        // on a dark card rather than as a visible graph-paper background.
        "hair-grid":
          "linear-gradient(rgba(255,255,255,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.028) 1px,transparent 1px)"
      },
      backgroundSize: {
        grid: "64px 64px",
        "grid-sm": "32px 32px"
      },
      keyframes: {
        "flow-pulse": {
          "0%,100%": { opacity: "0.25" },
          "50%": { opacity: "1" }
        },
        // The moon's shine. Opacity and transform only. The two bloom cycles
        // run at different periods so they drift in and out of phase instead
        // of pulsing in lockstep, which is what would make it read mechanical.
        "moon-glow": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        },
        "moon-rim": {
          "0%,100%": { opacity: "0.62" },
          "50%": { opacity: "1" }
        },
        "moon-shimmer": {
          "0%": { transform: "translate3d(-120%,0,0)" },
          "100%": { transform: "translate3d(420%,0,0)" }
        },
        "moon-drift": {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-0.8%,-0.6%,0) scale(1.03)" }
        }
      },
      animation: {
        "flow-pulse": "flow-pulse 2.6s ease-in-out infinite",
        "moon-glow": "moon-glow 9s ease-in-out infinite",
        "moon-rim": "moon-rim 6.5s ease-in-out infinite",
        "moon-shimmer": "moon-shimmer 14s cubic-bezier(0.45,0,0.55,1) infinite",
        "moon-drift": "moon-drift 34s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
