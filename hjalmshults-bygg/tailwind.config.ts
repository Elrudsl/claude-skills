import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#171614",
          50: "#f5f4f2",
          100: "#e7e5e1",
          200: "#c9c5bd",
          300: "#a39d92",
          400: "#726b60",
          500: "#4a453d",
          600: "#332f29",
          700: "#25221d",
          800: "#1c1a16",
          900: "#171614",
          950: "#0d0c0b",
        },
        offwhite: {
          DEFAULT: "#F7F4EF",
          soft: "#F1EDE5",
        },
        sand: {
          DEFAULT: "#B08D57",
          light: "#CBA96E",
          dark: "#8C6E3F",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Fraunces", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        wide: "0.14em",
        widest: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,22,20,0.04), 0 12px 32px -12px rgba(23,22,20,0.14)",
        "card-hover":
          "0 1px 2px rgba(23,22,20,0.06), 0 24px 48px -16px rgba(23,22,20,0.22)",
        elevated: "0 30px 80px -30px rgba(23,22,20,0.35)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
