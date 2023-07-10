/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      pink: "#E83B72",
      pink2: "#C72C5D",
      brown: "#31212F",
      grey: "#F5F5F5",
      purple: "#FEB5F0",
      yellow: "#FAC90A",
      green: "#4E9715",
      orange: "#F18333",
      white: "#FFFFFF"
    },
    fontFamily: {
      google: ["Tajawal", "sans-serif"],

    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xs: "0.75rem", // Extra small font size
        sm: "0.875rem", // Small font size
        base: "1rem", // Base font size (default)
        lg: "1.125rem", // Large font size
        xl: "1.25rem", // Extra large font size
        "2xl": "1.5rem", // Twice the base font size
        "3xl": "1.8rem", // Three times the base font size
        "4xl": "2.2rem", // Four times the base font size
      },
      boxShadow: {
        left: "-8px 0 6px -6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
};


