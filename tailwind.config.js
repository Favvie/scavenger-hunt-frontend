/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        spaceGrotesk: ["var(--font-space-grotesk)"],
      },
      colors: {
        blue: "#3B82F680"
      },
    },
  },
  plugins: [],
};
