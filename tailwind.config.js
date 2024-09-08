module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1234px",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#7F56D9",
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        "border-animate": {
          "0%": { borderColor: "#3b82f6" },
          "25%": { borderColor: "#10b981" },
          "50%": { borderColor: "#f59e0b" },
          "75%": { borderColor: "#ef4444" },
          "100%": { borderColor: "#3b82f6" },
        },
      },
      animation: {
        "border-animate": "border-animate 1s linear infinite",
      },
    },
  },
  plugins: [],
};
