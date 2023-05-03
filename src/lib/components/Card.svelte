<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Card;

	let _class = '';
	export { _class as class };
	export let element: CardProps['element'] = defaultProps.element;
	export let outlined: CardProps['outlined'] = defaultProps.outlined;
</script>

<svelte:element
	this={element}
	class={twMerge(
		evaluateVariantClasses({outlined}, variants),
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
