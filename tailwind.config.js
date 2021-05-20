module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "75%": "75%",
      16: "4rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        masthead: "url('/src/resources/img/masthead.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
