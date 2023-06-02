<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { TableCellProps } from '../types/table';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.TableCell;

	let _class = '';
	export { _class as class };
	export let element: TableCellProps['element'] = defaultProps.element;

	const { root } = evaluateVariantClasses({}, variants);
</script>

<svelte:element this={element} class={twMerge(root, _class)}>
		<slot />
</svelte:element>
