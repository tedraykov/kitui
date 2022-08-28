<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import getThemeContext from "../styles/getThemeContext";
	import type { TableCellProps } from '../types/table';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.TableCell;

	let _class = "";
	export { _class as class };
	export let element: TableCellProps["element"] = defaultProps.element;

</script>

<svelte:element
	this={element}
	class={twMerge(
    "text-sm text-accent-700 px-4 py-2 border-b border-b-accent-300/50",
    styleOverrides.root,
    _class
  )}>
	<slot />
</svelte:element>
