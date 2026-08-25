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
        brand: {
          50: "#f1f8f4",
          100: "#dcefe3",
          200: "#bce0cb",
          300: "#91caab",
          400: "#61ac86",
          500: "#3d8e66",
          600: "#2d7251",
          700: "#255b42",
          800: "#1f4936",
          900: "#1a3d2e",
          950: "#0c2118",
        },
        agri: {
          deep: "#143a29",
          forest: "#1a4d36",
          leaf: "#2e7d32",
          emerald: "#1e6b45",
          olive: "#556b2f",
          surface: "#f8faf7",
          panel: "#f2f6f1",
          border: "#e1e8e2",
          dark: "#141c17",
          charcoal: "#232e27",
          muted: "#5a6e62",
          amber: "#c97a1e",
          harvest: "#e58e26",
          earth: "#795548",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
