<script lang='ts'>
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { ChipProps } from '../types';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';
	import { Typography } from '$lib/components';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Chip;

	let _class = '';
	export { _class as class };
	export let element: ChipProps['element'] = defaultProps.element;
	export let color: ChipProps['color'] = defaultProps.color;
	export let type: ChipProps['type'] = defaultProps.type;
</script>

<svelte:element
	this={element}
	class={twMerge(evaluateVariantClasses({color, type}, variants), _class)}>
	<span class='px-1'>
		<slot name='leadingIcon' />
	</span>
	<Typography variant='label' size='large'>
		<slot />
	</Typography>
	<span class='px-1'>
		<slot name='trailingIcon' />
	</span>
</svelte:element>
