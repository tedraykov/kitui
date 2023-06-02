<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';
	import type { FormLabelProps } from '$lib/types';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.FormLabel;

	let _class = '';
	export { _class as class };
	export let element: FormLabelProps['element'] = defaultProps.element;

	$: ({ root } = evaluateVariantClasses({}, variants));
</script>

<svelte:element this={element} class={twMerge(root, _class)}>
	<slot />
</svelte:element>
