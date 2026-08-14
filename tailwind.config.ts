import type { Config } from "tailwindcss";

// Tailwind's default opacity scale only steps by 5, so modifiers already used in
// the markup — bg-white/6, bg-ink/58, border-white/14 — silently compile to
// nothing. Widen it to every integer 0-100; JIT still only emits what's used.
const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, value) => [String(value), String(value / 100)])
);

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      opacity,
      colors: {
        navy: "#0F172A",
        electric: "#3B82F6",
        cyan: "#22D3EE",
        ink: "#020617"
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.22)",
        "blue-glow": "0 0 46px rgba(59, 130, 246, 0.28)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(59,130,246,.22), transparent 25%), linear-gradient(135deg, #020617 0%, #0F172A 48%, #0B1120 100%)"
      }
    }
  },
  plugins: []
};

export default config;
