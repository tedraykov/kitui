<script lang='ts'>
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { ListProps } from '../types';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.List;

	let _class = '';
	export { _class as class };
	export let element: ListProps['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge(`py-2`, _class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
