module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {},
  plugins: [
    require("./src/lib/plugin.cjs")
  ]
};
