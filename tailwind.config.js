/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      "DM-serif": "DM Serif Display",
      poppins: "Poppins",
    },
    extend: {
      colors: {
        "my-green": "#35736e",
        "my-yellow": "#FFD748",
        "my-grays": "#dce5e4",
        "my-some": "#EFF2F1",
      },
    },
    screens: {
      xs: "425px",
      lg: "1024px",
      lg: "1280px",
      lg: "1440px",
      md: "640px",
      xs: "375px",
      xs: "320px",
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
