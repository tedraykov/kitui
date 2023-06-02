<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import getThemeContext from "../styles/getThemeContext";
	import type { TableProps } from '../types/table';
	import evaluateVariantClasses from "$lib/styles/evaluateVariantClasses";

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Table;

	let _class = "";
	export { _class as class };
	export let element: TableProps["element"] = defaultProps.element;

    const { root } = evaluateVariantClasses({}, variants);

</script>

<svelte:element
	this={element}
	class={twMerge(
    root,
    _class
  )}>
	<slot />
</svelte:element>


<style>
	:global(table tbody tr:last-of-type td) {
			@apply border-b-0;
	}
</style>
