export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-15deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        swing: "swing 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
