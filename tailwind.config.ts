import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7E57C2", // Brighter purple
          dark: "#5E35B1", // Darker purple
        },
        gold: {
          DEFAULT: "#FFC107", // Vibrant gold
          dark: "#FFA000", // Darker gold
        },
      },
    },
  },
  plugins: [],
};
export default config;
