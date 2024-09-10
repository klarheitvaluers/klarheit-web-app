import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f95d2a",
        black: "#0A0A0A",
        white: "#fdfdfd",
        grey: {
          light: "#303030",
          base: "#383838"
        }
      }
    },
  },
  plugins: [],
};
export default config;
