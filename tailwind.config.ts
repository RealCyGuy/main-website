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
    },
  },
  plugins: [formKitTailwind],
  content: ["formkit.config.ts"],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
