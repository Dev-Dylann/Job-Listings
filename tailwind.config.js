/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans"],
      },
      colors: {
        desatDarkCyan: "hsl(180, 29%, 50%)",
        lightCyanBg: "hsl(180, 52%, 96%)",
        lightCyanFilter: "hsl(180, 31%, 95%)",
        darkCyan: "hsl(180, 8%, 52%)",
        darkerCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
