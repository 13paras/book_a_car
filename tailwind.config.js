import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackishBlue: "#33334c",
        mainBackground: "#edf0f6",
        cream: "#f2f5fc",
      },
      fontFamily: {
        poppins: `'Poppins', sans-serif`,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
