import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF9",
        ink: "#0F172A",
        muted: "#475569",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
        },
        accent: "#7C3AED",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        // Fluid type via clamp
        "fluid-eyebrow": "clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)",
        "fluid-body": "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)",
        "fluid-lead": "clamp(1.125rem, 1rem + 0.6vw, 1.375rem)",
        "fluid-h3": "clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)",
        "fluid-h2": "clamp(1.875rem, 1.4rem + 2vw, 3rem)",
        "fluid-h1": "clamp(2.5rem, 1.6rem + 4.5vw, 5.5rem)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.10) 0%, rgba(79,70,229,0.06) 35%, rgba(250,250,249,0) 70%)",
        "accent-line":
          "linear-gradient(90deg, transparent, rgba(79,70,229,0.35), rgba(124,58,237,0.35), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
