module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "85%": "85%",
      16: "4rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        masthead: "url('/src/resources/img/masthead.jpg')",
        _404: "url('/src/resources/img/404.jpg')",
        infinity: "url('/src/resources/img/infinity-loader.svg')",
      }),
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
