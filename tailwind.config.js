/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "how-it-works": "url('/images/howitworks.png')",
      },
      textColor: {
        "text-gradient-start": "#E7499F", // Bright pink (for text gradients)
        "text-gradient-end": "#7D3EAF",   // Deep purple (for text gradients)
      },
    },
  },
  plugins: [],
};

