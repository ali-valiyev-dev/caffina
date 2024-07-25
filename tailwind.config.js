/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-gradient":
          "linear-gradient(263.46deg, #237249 3.14%, #35C66B 87.2%)",
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
