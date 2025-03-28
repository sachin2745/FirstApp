/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121063",
        secondary:"#222222",
        brown: "#C99667",
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
