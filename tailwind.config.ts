import type { Config } from "tailwindcss";
const formKitTailwind = require("@formkit/themes/tailwindcss");

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-slow-reverse": "spin 8s linear infinite reverse",
      },
      colors: {
        background: "#0c1322",
        text: "#eceef4",
        primary: "#446ada",
        "primary-bright": "#82a2ff",
      },
      screens: {
        xs: "400px",
        "footer-sm": { raw: "((min-width: 640px) and (min-height: 900px))" },
        "footer-md": { raw: "((min-width: 768px) and (min-height: 900px))" },
        "footer-lg": { raw: "((min-width: 1024px) and (min-height: 900px))" },
      },
    },
  },
  plugins: [formKitTailwind],
  content: ["formkit.config.ts"],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
