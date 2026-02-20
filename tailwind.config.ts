import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1E1E1E",
        surfaceAlt: "#2A2A2A",
        primary: "#8A5C3E",
        primaryHover: "#A26D4A",
        textMain: "#EAEAEA",
        textSecondary: "#9A9A9A",
      },
    },
  },
};

export default config;