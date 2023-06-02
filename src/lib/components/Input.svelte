<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { InputProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Input;

	let _class = '';
	export { _class as class };
	export let element: InputProps['element'] = defaultProps.element;
    export let type: InputProps['type'] = defaultProps.type;

	$: ({ root, input, startAdornment, endAdornment } = evaluateVariantClasses({ type }, variants));
    $: console.log(type);
</script>

<svelte:element this={element} class={twMerge(root, _class)} {...$$restProps}>
	{#if $$slots.startAdornment}
		<span class={startAdornment}>
			<slot name="startAdornment" />
		</span>
	{/if}
	<input type="text" class={input} />
	{#if $$slots.endAdornment}
		<span class={endAdornment}>
			<slot name="endAdornment" />
		</span>
	{/if}
</svelte:element>
