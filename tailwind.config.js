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
        circuit: "url('/src/resources/img/circuit-board.svg')",
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
