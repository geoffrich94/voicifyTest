import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      grey: "#808080",
      "purple--light": "#F4EFFA",
      "purple--dark": "#6F2DC1",
    },
  },
  plugins: [],
};
export default config;
