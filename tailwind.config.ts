import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0EB",
        "cream-dark": "#EDE6DD",
        black: "#1A1A1A",
        red: {
          DEFAULT: "#8B2500",
          light: "#A63D1A",
        },
        charcoal: "#2C2C2C",
        "warm-gray": {
          DEFAULT: "#6B6560",
          light: "#9B9590",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
