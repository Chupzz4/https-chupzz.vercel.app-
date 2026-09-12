import { BrainCircuit, CircleCheckBig, Inbox, Radar, TrendingUp } from "lucide-react";

const nodes = [
  { icon: Inbox, stage: "Trigger", label: "New submission" },
  { icon: Radar, stage: "Enrich", label: "Context appended" },
  { icon: BrainCircuit, stage: "Reason", label: "Scored by agent" },
  { icon: CircleCheckBig, stage: "Complete", label: "Routed to owner" }
];

// Seven points, normalised to the 0-100 viewBox. Illustrative shape, not data —
// it reads as an upward trend without pretending to chart a specific number.
const trend = [4, 26, 18, 44, 38, 62, 92];

/**
 * The hero's abstract technology visual: a dashboard flow panel floating over a
 * brushed metal bloom, with a performance card breaking the panel's edge.
 *
 * Deliberately zero JavaScript. The previous hero mounted a three.js fragment
 * shader here (~150 KB plus seven fbm passes per pixel), which is why it needed
 * a WebGL capability probe and an idle-callback deferral just to stay off the
 * critical path. Gradients and SVG get the same richness for nothing.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <MetalBloom />

      <div className="luxe-panel relative animate-float-slow p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <p className="text-[0.625rem] font-semibold uppercase tracking-label text-platinum/80">
            Automation Flow
          </p>
          <span className="flex items-center gap-2 rounded-full border border-ice/30 bg-ice/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 animate-flow-pulse rounded-full bg-ice" />
            <span className="text-[0.5625rem] font-semibold uppercase tracking-wider text-ice">
              Live
            </span>
          </span>
        </div>

        <div className="mt-5 h-px bg-gradient-to-r from-steel/40 via-white/8 to-transparent" />

        <ol className="mt-6 space-y-1">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const last = index === nodes.length - 1;
            return (
              <li key={node.stage} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={
                      index === 0
                        ? "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brushed-steel text-[#0A1018] shadow-steel-key"
                        : "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-graphite text-platinum shadow-hair"
                    }
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  {!last ? (
                    <span
                      aria-hidden="true"
                      className="my-1.5 w-px flex-1 animate-flow-pulse bg-gradient-to-b from-steel/50 to-white/8"
                      style={{ animationDelay: `${index * 0.45}s` }}
                    />
                  ) : null}
                </div>
                <div className={last ? "pb-0 pt-1" : "pb-5 pt-1"}>
                  <p className="text-[0.8125rem] font-medium text-ivory">{node.stage}</p>
                  <p className="mt-0.5 text-[0.75rem] text-ash">{node.label}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Breaks the panel's bottom-right corner so the composition reads as
          layered hardware rather than one flat card. Hidden below sm, where
          there is no room for it to overlap anything cleanly. */}
      <div className="luxe-panel luxe-panel-steel absolute -bottom-10 -right-4 hidden w-[15.5rem] p-5 sm:block lg:-right-10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.5625rem] font-semibold uppercase tracking-label text-platinum/75">
              Pipeline Velocity
            </p>
            <p className="mt-2 font-display text-3xl leading-none text-metal-steel">78%</p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.5625rem] font-semibold text-platinum">
            <TrendingUp size={10} strokeWidth={2.5} />
            +18%
          </span>
        </div>

        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="mt-4 h-12 w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-spark-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8A96A7" />
              <stop offset="55%" stopColor="#D5DEEA" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="hero-spark-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C6D1DE" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#C6D1DE" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            fill="url(#hero-spark-fill)"
            points={`0,40 ${trend
              .map((value, index) => `${(index / (trend.length - 1)) * 100},${38 - (value / 100) * 34}`)
              .join(" ")} 100,40`}
          />
          <polyline
            fill="none"
            stroke="url(#hero-spark-stroke)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            points={trend
              .map((value, index) => `${(index / (trend.length - 1)) * 100},${38 - (value / 100) * 34}`)
              .join(" ")}
          />
        </svg>

        <div className="mt-1 flex justify-between text-[0.5rem] uppercase tracking-wider text-ash">
          <span>Mon</span>
          <span>Thu</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

/**
 * The metal bloom behind the panel. A conic gradient supplies the swept
 * highlight of brushed metal; heavy blur and low opacity keep it as lighting
 * rather than as a graphic. Sits behind everything and takes no pointer events.
 */
function MetalBloom() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -inset-x-16 -top-24 bottom-0">
        <div
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "conic-gradient(from 210deg at 50% 50%, rgba(168,182,200,0.42), rgba(244,247,251,0.2) 22%, rgba(120,126,138,0.24) 44%, rgba(8,12,17,0) 62%, rgba(168,182,200,0.3) 88%, rgba(168,182,200,0.42))"
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(8,12,17,0.85) 32%, rgba(8,12,17,0.4) 58%, transparent 74%)"
          }}
        />
      </div>
    </div>
  );
}
