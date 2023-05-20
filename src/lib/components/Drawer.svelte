<script lang='ts'>
	import getThemeContext from '../styles/getThemeContext';
	import type { DrawerProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	const theme = getThemeContext();

	const { defaultProps, variants } = theme.components.Drawer;

	let _class = '';
	export { _class as class };

	export let element: DrawerProps['element'] = defaultProps.element;
	export let variant: DrawerProps['variant'] = defaultProps.variant;
	export let open: DrawerProps['open'] = defaultProps.open;

    const {root, scrim} = evaluateVariantClasses({element, variant, open}, variants);
</script>


<svelte:element
	class={twMerge(root, _class)}
	this={element}
	{...$$restProps}
>
	<slot />
</svelte:element>

{#if variant === 'modal' && open}
	<span
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		class={scrim}></span>
{/if}
