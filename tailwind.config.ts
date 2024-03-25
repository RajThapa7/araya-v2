import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
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
      keyframes: {
        "grow-wiggle": {
          "0%": { transform: "rotate(0.0deg) scale(1.1) translateY(0%)" },
          "10%": { transform: "rotate(-20deg) scale(1.2) translateY(-20%)" },
          "30%": { transform: "rotate(-30deg) scale(1.4) translateY(-30%)" },
          "50%": {
            transform: "rotate(-40.0deg) scale(1.6) translateY(-30%) ",
            color: "red",
          },
          "70%": { transform: "rotate(-20.0deg) scale(1.6) translateY(-30%) " },
          "90%": { transform: "rotate(-40.0deg) scale(1.4) translateY(-10%) " },
          "100%": {
            transform: "rotate(0.0deg) translateY(0%)",
          },
        },
        "shrink-wiggle": {
          "0%": { transform: "rotate(0.0deg) scale(1) translateY(0%)" },
          "10%": { transform: "rotate(20deg) scale(1.1) translateY(-20%)" },
          "30%": { transform: "rotate(30deg) scale(1.2) translateY(-30%)" },
          "50%": {
            transform: "rotate(40.0deg) scale(1.2) translateY(-30%) ",
          },
          "70%": { transform: "rotate(20.0deg) scale(1.1) translateY(-30%) " },
          "90%": { transform: "rotate(40.0deg) scale(1.1) translateY(-10%) " },
          "100%": {
            transform: "rotate(0.0deg) scale(1) translateY(0%)",
          },
        },
        "move-return": {
          "0%": { transform: "translateX(0%) translateY(0%)" },
          "30%": { transform: "translateX(20%) translateY(0%)" },
          "50%": { transform: "translateX(40%) translateY(-0%)" },
          "60%": { transform: "translateX(30%) translateY(-5%)" },
          "70%": { transform: "translateX(20%) translateY(-10%)" },
          "80%": { transform: "translateX(10%) translateY(-5%)" },
          "100%": { transform: "translateX(0%) translateY(0%)" },
        },
      },
      animation: {
        "grow-wiggle": "grow-wiggle 0.7s ease-in",
        "shrink-wiggle": "shrink-wiggle 0.7s ease-in",
        "move-return": "move-return 0.7s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
});

export default config;
