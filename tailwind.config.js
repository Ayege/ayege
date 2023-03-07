/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#212121",
        'vermillion': "#F44336",
        "picton-blue": "#03A9F4",
        "yellow-green": "#8BC34A",
        'amber': "#FFC107",
      },
      fontFamily:{
        'sans': ['ui-sans-serif', 'system-ui']
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
