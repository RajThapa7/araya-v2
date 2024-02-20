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
          DEFAULT: "rgb(var(--color-primary)/<alpha-value>)",
          dark: "rgb(var(--color-primary-dark)/<alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent)/<alpha-value>)",
          dark: "rgb(var(--color-accent-dark)/<alpha-value>)",
        },
      },
      textColor: {
        header: "rgb(var(--text-color-header)/<alpha-value>)",
        body: "rgb(var(--text-color-body)/<alpha-value>)",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;
