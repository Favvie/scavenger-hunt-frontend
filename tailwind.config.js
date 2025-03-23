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
        "how-footer": "url('/images/howfooter.png')",
      },
    },
  },
  plugins: [],
};

