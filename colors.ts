import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#f82506'), [
	{
		name: "custom-1",
		value: argbFromHex("#ff0000"),
		blend: true,
	},
]);

console.log(JSON.stringify(theme));