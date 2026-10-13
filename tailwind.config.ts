import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f1e6",
        parchment: "#efe3cf",
        ink: "#102033",
        charcoal: "#26313a",
        brass: "#9a7a36",
        sage: "#758f73",
        blueprint: "#2f5f8f",
        duck: "#e5b94f",
        clay: "#b8654b",
        coral: "#d96f57",
        mint: "#9fc9aa",
        sky: "#7fb3cf",
        lilac: "#9b8ac9",
        berry: "#b85d82",
        teal: "#3f8f88"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 32, 51, 0.12)",
        color: "0 22px 65px rgba(47, 95, 143, 0.18)",
        line: "0 1px 0 rgba(16, 32, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
