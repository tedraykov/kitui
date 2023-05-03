<script lang="ts">
	import getThemeContext from '../styles/getThemeContext';
	import type { CardTitleProps } from '../types';
	import { twMerge } from 'tailwind-merge';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.CardHeader;

	let _class = '';
	export { _class as class };
	export let element: CardTitleProps['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge(
		evaluateVariantClasses({}, variants),
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
