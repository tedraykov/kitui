<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import getThemeContext from "../styles/getThemeContext";
	import type { TableHeaderCellProps } from '../types/table';
	import { Typography } from './index.js';
	import evaluateVariantClasses from "$lib/styles/evaluateVariantClasses";

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.TableHeaderCell;

	let _class = "";
	export { _class as class };
	export let element: TableHeaderCellProps["element"] = defaultProps.element;

    const { root } = evaluateVariantClasses({}, variants);
</script>

<svelte:element
	this={element}
	class={twMerge(
    root,
    _class
  )}>
	<Typography variant='label'>
		<slot />
	</Typography>
</svelte:element>
