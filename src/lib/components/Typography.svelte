<script lang='ts'>
	import type { TypographyProps } from '../types';
	import getThemeContext from '../styles/getThemeContext';
	import { twMerge } from 'tailwind-merge';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Typography;
	let _class = '';
	export { _class as class };

	export let element: TypographyProps['element'] = defaultProps.element;
	export let size: TypographyProps['size'] = defaultProps.size;
	export let style: TypographyProps['style'] = defaultProps.style;

    const {root} = evaluateVariantClasses({element, size, style}, variants);
	function deriveTypographyElement() {
		if (!element) {
			switch (style) {
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
</script>

<svelte:element
	this={deriveTypographyElement()}
	class={twMerge(root, _class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
