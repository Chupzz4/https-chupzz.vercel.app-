import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
