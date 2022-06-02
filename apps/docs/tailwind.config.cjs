module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/kitui/**/*.{html,js,svelte,ts}"
  ],
  theme: {},
  plugins: [
    require("kitui/plugin")
  ]
};
