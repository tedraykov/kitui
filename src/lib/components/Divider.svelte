<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { DividerProps } from '../types';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Divider;

	let _class = '';
	export { _class as class };
	export let element: DividerProps['element'] = defaultProps.element;
	export let direction: DividerProps['direction'] = defaultProps.direction;
</script>

<svelte:element
	this={element}
	class={twMerge(
		'',
		styleOverrides.root,
		cn({
			['w-full my-2 border-b border-outline-variant']: direction === 'horizontal',
			['h-full mx-2 border-r border-outline-variant']: direction === 'vertical'
		}),
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
