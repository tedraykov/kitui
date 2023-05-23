<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { OutlinedInputProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.OutlinedInput;

	let _class = '';
	export { _class as class };
	export let element: OutlinedInputProps['element'] = defaultProps.element;

	$: ({ root, input, startAdornment, endAdornment } = evaluateVariantClasses({}, variants));
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
