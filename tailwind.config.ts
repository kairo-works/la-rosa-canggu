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
        larosa: {
          sand: "#FBF6EF",
          sandAlt: "#F6E8D8",
          line: "#E5D3C0",
          ink: "#2B211C",
          muted: "#6D5A4E",
          ember: "#DE6B1F",
          emberDeep: "#A84A12",
          emberDark: "#7E3608",
          amber: "#E3A83B",
          teal: "#123B3C",
          dusk: "#122E30",
          duskDeep: "#0E2426",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-karla)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        smallcaps: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
