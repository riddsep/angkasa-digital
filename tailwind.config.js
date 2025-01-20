/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-large": "url('/hero-desktop.png')",
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
        poppins: ["Poppins", "sans-serif"],
        "poppins-300": ["Poppins-300", "sans-serif"],
        "poppins-500": ["Poppins-500", "sans-serif"],
        "poppins-600": ["Poppins-600", "sans-serif"],
        "poppins-700": ["Poppins-700", "sans-serif"],
      },
    },
  },
  plugins: [],
};
