<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardContentProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.CardContent;

	let _class = '';
	export { _class as class };
	export let element: CardContentProps['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge(
		evaluateVariantClasses({}, variants), _class
		)}
	{...$$restProps}
>
	<slot />
</svelte:element>
