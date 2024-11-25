import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        surround: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px"
      },
      colors: {
        orange: "#f95d2a",
        black: "#0A0A0A",
        white: "#fdfdfd",
        grey: {
          light: "#303030",
          base: "#383838"
        }
      },
      fontFamily: {
        mona: "var(--font-mona)"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
