<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { DividerProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Divider;

	let _class = '';
	export { _class as class };
	export let element: DividerProps['element'] = defaultProps.element;
	export let direction: DividerProps['direction'] = defaultProps.direction;

    $: ({ root } = evaluateVariantClasses({direction}, variants));
</script>

<svelte:element
	this={element}
	class={twMerge(
		root,
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
