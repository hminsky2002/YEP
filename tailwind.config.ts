import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F7F6F3",
        yellow: "#FFE974",
        "bright-yellow": "#FFF962",
        red: "#BD0059",
        orange: "#E55937",
        pink: "#F7F6F3",
        black: "#000000",
        "white-yellow": "#FFF9EB",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
