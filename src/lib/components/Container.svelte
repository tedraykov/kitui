<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext.js';
	import type { ContainerProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Container;

	let _class = '';
	export { _class as class };
	export let element: ContainerProps['element'] = defaultProps.element;

	$: ({ root } = evaluateVariantClasses({ element }, variants));
</script>

<svelte:element this={element} class={twMerge(root, _class)} {...$$restProps}>
	<slot />
</svelte:element>
