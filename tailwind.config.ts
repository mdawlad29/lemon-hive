import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        xxl: "2560px",
      },
      backgroundColor: {
        primary: "#111D5E",
        secondary: "#FFC93E",
        "secondary-50": "#617187",
        accent: "#2563EB",
        "accent-50": "#CDCDCD",
        neutral: "#F9FAFB",
      },
      textColor: {
        primary: "#111D5E",
        secondary: "#FFC93E",
        "secondary-50": "#617187",
        accent: "#2563EB",
        "accent-50": "#667085",
        neutral: "#F9FAFB",
      },
      borderColor: {
        primary: "#111D5E",
        secondary: "#FFC93E",
        "secondary-50": "#617187",
        accent: "#2563EB",
        "accent-50": "#CDCDCD",
        neutral: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
export default config;
