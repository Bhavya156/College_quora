

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "white-landing": `url(${"/src/User/Images/happyKids.jpg"})`,
      }),
      backgroundImage: (theme) => ({
        "black-landing": `url(${"/src/User/Images/humanstruggle.jpg"})`,
      }),
    },
  plugins: [],
  }
}