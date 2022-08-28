<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import getThemeContext from "../styles/getThemeContext";
	import type { TableHeaderCellProps } from '../types/table';
	import { Typography } from './index.js';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.TableHeaderCell;

	let _class = "";
	export { _class as class };
	export let element: TableHeaderCellProps["element"] = defaultProps.element;

</script>

<svelte:element
	this={element}
	class={twMerge(
    "px-4 py-2 border-b whitespace-nowrap border-b-accent-300/50",
    styleOverrides.root,
    _class
  )}>
	<Typography variant='subtitle2'>
		<slot />
	</Typography>
</svelte:element>
