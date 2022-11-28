<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardProps } from '../types';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Card;

	let _class = '';
	export { _class as class };
	export let element: CardProps['element'] = defaultProps.element;
	export let outlined: CardProps['outlined'] = defaultProps.outlined;
</script>

<svelte:element
	this={element}
	class={twMerge(
		'rounded-xl overflow-hidden box-border bg-surface',
		styleOverrides.root,
		cn({
			[twMerge('shadow-none border border-outline-variant', styleOverrides.outline)]: outlined
		}),
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
