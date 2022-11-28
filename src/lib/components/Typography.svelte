<script lang='ts'>
	import type { TypographyProps, TypographyStylesOverrides } from '../types';
	import getThemeContext from '../styles/getThemeContext';
	import { twMerge } from 'tailwind-merge';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Typography;
	let _class = '';
	export { _class as class };

	export let element: TypographyProps['element'] = defaultProps.element;
	export let size: TypographyProps['size'] = defaultProps.size;
	export let variant: TypographyProps['style'] = defaultProps.style;

	function deriveTypographyElement() {
		if (!element) {
			switch (variant) {
				case 'display':
					return 'h1';
				case 'headline':
					return 'h2';
				case 'title':
					return 'h3';
				case 'label':
					return 'span';
				case 'body':
					return 'p';
				default:
					return 'span';
			}
		}
		return element;
	}

	function getThemeStyles() {
		if (variant === 'display') {
			if (size === 'large') return `${styleOverrides.display} text-7xl font-bold ${styleOverrides.displayLarge}`;
			if (size === 'medium') return `${styleOverrides.display} text-6xl font-bold ${styleOverrides.displayMedium}`;
			if (size === 'small') return `${styleOverrides.display} text-5xl font-bold ${styleOverrides.displaySmall}`;
		}
		if (variant === 'headline') {
			if (size === 'large') return `${styleOverrides.headline} text-4xl font-bold ${styleOverrides.headlineLarge}`;
			if (size === `medium`) return `${styleOverrides.headline} text-3xl font-bold ${styleOverrides.headlineMedium}`;
			if (size === `small`) return `${styleOverrides.headline} text-2xl font-bold ${styleOverrides.headlineSmall}`;
		}
		if (variant === 'title') {
			if (size === 'large') return `${styleOverrides.title} text-xl font-bold ${styleOverrides.titleLarge}`;
			if (size === 'medium') return `${styleOverrides.title} text-lg font-bold ${styleOverrides.titleMedium}`;
			if (size === 'small') return `${styleOverrides.title} text-base font-bold ${styleOverrides.titleSmall}`;
		}
		if (variant === 'label') {
			if (size === 'large') return `${styleOverrides.label} text-base font-medium ${styleOverrides.labelLarge}`;
			if (size === 'medium') return `${styleOverrides.label} text-sm font-medium ${styleOverrides.labelMedium}`;
			if (size === 'small') return `${styleOverrides.label} text-xs font-medium ${styleOverrides.labelSmall}`;
		}
		if (variant === 'body') {
			if (size === 'large') return `${styleOverrides.body} text-lg ${styleOverrides.bodyLarge}`;
			if (size === 'medium') return `${styleOverrides.body} text-base ${styleOverrides.bodyMedium}`;
			if (size === 'small') return `${styleOverrides.body} text-sm ${styleOverrides.bodySmall}`;
		}
	}

	function getTypographyStyle(
		style: TypographyProps['style'],
		size: TypographyProps['size'],
		styleOverrides: TypographyStylesOverrides,
		_class?: string
	) {
		return twMerge(getThemeStyles(), _class);
	}
</script>

<svelte:element
	this={deriveTypographyElement()}
	class={getTypographyStyle(variant, size, styleOverrides, _class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
