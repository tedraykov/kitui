import { getContext } from 'svelte';
import { themeContextKey } from '$lib/utils/consts';
import type { Theme } from '$lib/types';

export default function getThemeContext(): Theme {
	const theme = getContext<Theme>(themeContextKey);

	if (!theme) {
		throw new Error("You haven't defined a theme context!");
	}

	return theme;
}
