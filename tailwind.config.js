/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-gradient":
          "linear-gradient(263.46deg, #237249 3.14%, #35C66B 87.2%)",
        "white-gradient":
          "linear-gradient(264.52deg, #FFFFFF 4.95%, #E5E5E5 64.19%, #FBFBFB 88.37%)",
      },
      boxShadow: {
        custom: "-14px 26px 65px 0px rgba(0, 0, 0, 0.39)",
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
