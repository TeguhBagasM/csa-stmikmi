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
        "shadow-animate": {
          "0%": { boxShadow: "0 0 8px 4px rgba(59, 130, 246, 0.7)" }, // Initial shadow
          "25%": { boxShadow: "0 0 8px 4px rgba(236, 72, 153, 0.7)" }, // Intermediate shadow
          "50%": { boxShadow: "0 0 8px 4px rgba(168, 85, 247, 0.7)" }, // Middle shadow
          "75%": { boxShadow: "0 0 8px 4px rgba(236, 72, 153, 0.7)" }, // Intermediate shadow
          "100%": { boxShadow: "0 0 8px 4px rgba(59, 130, 246, 0.7)" }, // Final shadow
        },
        "border-animate": {
          "0%": { borderColor: "#3b82f6" },
          "25%": { borderColor: "#10b981" },
          "50%": { borderColor: "#f59e0b" },
          "75%": { borderColor: "#ef4444" },
          "100%": { borderColor: "#3b82f6" },
        },
      },
      animation: {
        "shadow-animate": "shadow-animate 4s linear infinite",
        "border-animate": "border-animate 1s linear infinite",
      },
    },
  },
  plugins: [],
};
