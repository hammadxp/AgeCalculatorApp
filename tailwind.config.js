/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      colors: {
        "is-primary": "hsl(259, 100%, 65%)",
        "is-light-red": "hsl(0, 100%, 67%)",
        "is-white": "hsl(0, 0%, 100%)",
        "is-off-white": "hsl(0, 0%, 94%)",
        "is-light-grey": "hsl(0, 0%, 86%)",
        "is-smokey-grey": "hsl(0, 1%, 44%)",
        "is-off-black": "hsl(0, 0%, 8%)",
        "is-link": "hsl(228, 45%, 44%)",
      },
    },
    screens: {
      "608px": { max: "608px" },
    },
  },
  plugins: [],
};
