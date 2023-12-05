import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "white",
          dark: "#f3f4f6",
        },
        accent: {
          DEFAULT: "#43a047",
          dark: "#368039",
        },
      },
      textColor: {
        header: "#374151",
        body: "#4b5563",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;
