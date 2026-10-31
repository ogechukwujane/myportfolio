import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        background2: "#e2e2e2",
        primary: "#2f575e",
        // primary: "#065a9e",
        dark: "#111",
        light: "#666",
      },

      fontFamily: {
        poppins: "var(--font-poppins)",
        sourcesSans: "var(--font-sourceSans)",
        lobster: "var(--font-lobster)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
