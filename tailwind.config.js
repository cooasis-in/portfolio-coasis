/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-right": "moveRight 20s linear infinite",
        "move-left": "moveLeft 20s linear infinite",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(-100%)" }, // Start off-screen on the left
          "100%": { transform: "translateX(100%)" }, // End off-screen on the right
        },
        moveLeft: {
          "0%": { transform: "translateX(100%)" }, // Start off-screen on the right
          "100%": { transform: "translateX(-100%)" }, // End off-screen on the left
        },
      },
    },
  },
  plugins: [],
};
