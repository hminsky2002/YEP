import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        folio: ["var(--font-folio)", "sans-serif"],
        fg: ["var(--franklin-gothic)", "sans-serif"],
        "fg-atf": ["var(--franklin-gothic-atf)", "sans-serif"],
      },
      colors: {
        white: "#F7F6F3",
        yellow: "#FFE974",
        "bright-yellow": "#FFF962",
        red: "#BD0059",
        orange: "#E55937",
        pink: "#F7F6F3",
        black: "#000000",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
