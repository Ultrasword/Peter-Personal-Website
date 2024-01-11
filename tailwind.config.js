/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001822",
        secondary: "#BEF3FF",
        tertiary: "#102430",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 10px 40px -15px #A0E7FF",
        "card-image": "0px 10px 30px -12px #A0E7FF",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-gradient": "linear-gradient(to top, #000000, #001F29)",
        "about-gradient": "linear-gradient(to bottom, #000000, #001F29)",
        "experience-gradient": "linear-gradient(to bottom, #A87F5D, black, #081128)",
      },
      dropShadow: {
        "space-glow": "0px 0px 20px 200px #FFC44F",
        "card": "0px 10px 40px -15px #A0E7FF",
      }
    },
  },
  plugins: [],
};