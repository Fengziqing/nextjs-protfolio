import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navGreen: "#cbd690",
        navBrown: "#665048",
        navYellow: "#f2ca48",
        navBoxShadow: "#d6ae7e",
        navFontGray: "#4c484f",
        linkPink: "#dfc0c2",
        linkHover: "#ebcda7",
      }
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      'row-col-8': 'repeat(8, 100px)',
      'col-13': 'repeat(13, 100px)',
    }
  },
  plugins: [require("daisyui")],
};
export default config;
