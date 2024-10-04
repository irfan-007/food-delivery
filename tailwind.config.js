/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          "0%": { backgroundColor: "#3b82f6" }, // blue-600
          "50%": { backgroundColor: "#10b981" }, // green-500
          "75%": { backgroundColor: "#000" },
          "100%": { backgroundColor: "#3b82f6" },
        },
      },
      animation: {
        colorChange: "colorChange 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
