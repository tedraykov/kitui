<script lang="ts">
	import getThemeContext from '../styles/getThemeContext';
	import type { DrawerProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { createEventDispatcher } from 'svelte';

	const theme = getThemeContext();

	const { defaultProps, variants } = theme.components.Drawer;

	let _class = '';
	export { _class as class };

	export let element: DrawerProps['element'] = defaultProps.element;
	export let variant: DrawerProps['variant'] = defaultProps.variant;
	export let open: DrawerProps['open'] = defaultProps.open;
    export let direction: DrawerProps['direction'] = defaultProps.direction;

	const dispatcher = createEventDispatcher();

	const dispatchClose = (e: MouseEvent) => {
		dispatcher('close', e);
	}

	$: ({ root, scrim } = evaluateVariantClasses({ element, variant, open, direction }, variants));
</script>

<svelte:element
	this={element}
	class={twMerge(root, _class)}
	{...$$restProps}
	aria-modal="true"
	aria-hidden={open}
>
	<slot />
</svelte:element>

{#if variant === 'modal' && open}
	<div
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		class={scrim}
        aria-hidden="true"
		on:click={dispatchClose}
	></div>
{/if}
