<script lang="ts">
	import Typography from './Typography.svelte';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardTitleProps } from '../types';
	import { twMerge } from 'tailwind-merge';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.CardTitle;

	let _class = '';
	export { _class as class };
	export let element: CardTitleProps['element'] = defaultProps.element;

    const {root} = evaluateVariantClasses({}, variants);
</script>

<Typography
	{element}
	variant="headline"
	class={twMerge(
        root,
		_class
	)}
	{...$$restProps}
>
	<slot />
</Typography>
