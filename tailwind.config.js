/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    fontFamily: {
      mono: [...defaultTheme.fontFamily.mono],
      sans: [...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
