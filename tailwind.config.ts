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
          pine: "#0A1F16",
          pineDeep: "#0D2B1E",
          pineAlt: "#10291F",
          pineSoft: "#0E241B",
          card: "#143A29",
          money: "#2E9E5B",
          moneyBright: "#43B581",
          moneyDeep: "#1E7A45",
          gold: "#D4A24E",
          cream: "#F5F1E8",
          sage: "#9DB8A6",
          line: "#1E3D2C",
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
