module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/kitui/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require("kitui/plugin")
  ]
};
