/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primarySoftBlue: 'hsl(215, 51%, 70%)',
      primaryCyan: 'hsl(178, 100%, 50%)',
      mainBg: 'hsl(217, 54%, 11%)',
      cardBg: 'hsl(216, 50%, 16%)',
      linehBlue: 'hsl(215, 32%, 27%)',
      White: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
}

