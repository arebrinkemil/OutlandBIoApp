/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        "outland-red-500": "#F40000",
        "outland-red-600": "#CC0000",
        "outland-red-800": "#A70000",
        "outland-red-900": "#840000",
        "outland-black": "#0D0000",
        "outland-gray": "#BBBBBB",
      },
    },
  },
  plugins: [],
};
