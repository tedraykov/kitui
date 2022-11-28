<script lang='ts'>
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { ChipProps } from '../types/chip';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Chip;

	let _class = '';
	export { _class as class };
	export let element: ChipProps['element'] = defaultProps.element;
	export let color: ChipProps['color'] = defaultProps.color;
	export let size: ChipProps['size'] = defaultProps.size;
</script>

<svelte:element
	this={element}
	class={twMerge(
		cn(
    	// Root
			"w-fit text-white rounded",
    	styleOverrides.root,
			{
				// Accent
				["bg-primary-200 text-primary-800"]: color === 'accent',
				// Primary
				["bg-primary-200 text-primary-800"]: color === 'primary',
				// Success
				["bg-green-200 text-green-800"]: color === 'success',
				// Warning
				["bg-yellow-200 text-yellow-800"]: color === 'warning',
				// Error
				["bg-red-200 text-red-800"]: color === 'error',
				// Small
				["text-xs py-0.5 px-1"]: size === "small",
				// Medium
				["text-sm py-1 px-1"]: size === "medium"
			}
    ),
    _class
  )}>
	<slot />
</svelte:element>
