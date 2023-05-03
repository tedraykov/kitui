import { getContext } from 'svelte';
import { themeContextKey } from '$lib/utils/consts';
import type { ThemeOptions } from '$lib';

export default function getThemeContext() {
	const theme = getContext<Required<ThemeOptions>>(themeContextKey);

	if (!theme) {
		throw new Error("You haven't defined a theme context!");
	}

	return theme;
}
