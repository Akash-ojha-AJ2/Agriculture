import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shimanzu: {
          dark: "#0a1f18",
          forest: "#11382b",
          green: "#1b4d3e",
          lightgreen: "#2a705b",
          pale: "#eef6f2",
          red: "#c8102e",
          darkred: "#9e0b22",
          accent: "#b48a3c",
          bg: "#fafbf9",
          card: "#ffffff",
          muted: "#5a6a64",
          border: "#e2e8e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
