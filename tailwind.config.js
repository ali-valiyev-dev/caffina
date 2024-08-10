/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "espresso-gradient":
          "linear-gradient(263.46deg, #5a423a 3.14%, #c1a68d 87.2%)",
      },
      colors: {
        dark: "#121416",
        espresso: "#5A423A",
        cappuccino: "#C1A68D",
        latte: "#FFF2E5",
        "cappuccino-light": "#C1A68D70",
        "dark-gray": "#0b0c0d",
        "lighter-gray": "#bbb3b36e",
        "light-gray": "#bbb3b3",
      },
      fontFamily: {
        sans: [
          "Montserrat, sans-serif",
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
    plugins: [],
  },
};
