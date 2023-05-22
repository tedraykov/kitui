<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { ListItemProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.ListItem;

	let _class = '';
	export { _class as class };
	export let element: ListItemProps['element'] = defaultProps.element;
	export let active: ListItemProps['active'] = defaultProps.active;
	export let href: ListItemProps['href'] = defaultProps.href;

	$: ({root} = evaluateVariantClasses({ active, href }, variants));
</script>

<svelte:element this={element} class={twMerge(root, _class)} {...$$restProps}>
	{#if href}
		<a {href} class="flex-1 py-2 px-4">
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</svelte:element>
