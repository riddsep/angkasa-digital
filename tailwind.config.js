/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-small": "url('/hero-small.svg')",
        "hero-large": "url('/hero-large.svg')",
      },
      fontSize: {
        clamp: [
          "clamp(1.2rem, 0.651rem + 3.72vw, 4rem)",
          {
            lineHeight: "1.1",
          },
        ],
        "clamp-2": [
          "clamp(1rem, 0.6604651162790698rem + 1.4883720930232558vw, 2rem)",
          {
            lineHeight: "1.3",
          },
        ],
        "clamp-3": [
          "clamp(1.2rem, 0.6604651162790698rem + 1.4883720930232558vw, 2rem)",
          {
            lineHeight: "1.1",
          },
        ],
      },
      fontFamily: {
        source: ['"Source Serif 400"', "serif"],
        "source-300": ['"Source Serif 300"', "serif"],
        "source-500": ['"Source Serif 500"', "serif"],
        "source-600": ['"Source Serif 600"', "serif"],
        "source-700": ['"Source Serif 700"', "serif"],
      },
    },
  },
  plugins: [],
};
