/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      pinkc: "#E83B72",
      pink2c: "#C72C5D",
      brownc: "#31212F",
      greyc: "#F5F5F5",
      purplec: "#FEB5F0",
      yellowc: "#FAC90A",
      greenc: "#4E9715",
      orangec: "#F18333",
      white: "#FFFFFF",
      light: "#FBF7FA",
      black: "#000000"
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
        "5xl": "3.2rem", // Five times the base font size
      },
      boxShadow: {
        left: "-8px 0 6px -6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  
};


