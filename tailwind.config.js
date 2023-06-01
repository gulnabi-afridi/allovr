/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "work-sans": ["Work Sans", "sans serif"],
      "space-grotesk": ["Space Grotesk", "sans serif"],
    },
    extend: {
      colors: {
        white: "#FFF",
        red: "#ED1E79",
        yellow: "#FBB03B",
        dark: "#1A1A1A",
        blue:'#0093FE',
        "light-black": "#111112",
        "full-dark": "#070707",
        "gray-light": "#D1D5DD",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};
