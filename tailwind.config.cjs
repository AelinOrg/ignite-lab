/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    colors: {
      "gray-100": "#7C7C8A",
      "gray-200": "##C4C4CC",
      "gray-400": "#7C7C8A",
      "gray-800": "#202024",
      "gray-900": "#121214",

      "cyan-500": "#81D8F7",
      "cyan-600": "#92D7EF",
    },

    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
