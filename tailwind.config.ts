import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Suas cores originais
        surface: "#1E1E1E",
        surfaceAlt: "#2A2A2A",
        primary: "#8A5C3E",
        primaryHover: "#A26D4A",
        textMain: "#EAEAEA",
        textSecondary: "#9A9A9A",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "sans-serif"], // Ou 'Space Grotesk' se preferir importar
      },
    },
  },
  plugins: [],
};

export default config;