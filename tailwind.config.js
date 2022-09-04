/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-font-inter"),
    // ...
  ],
};
