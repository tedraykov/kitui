<script lang='ts'>
	import { twMerge } from 'tailwind-merge';
	import type { ButtonProps } from '$lib';
	import getThemeContext from '../styles/getThemeContext';
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';

	const theme = getThemeContext();
	const { defaultProps, variants } = theme.components.Button;

	// Forward classes
	let _class = '';
	export { _class as class };
	export let element: ButtonProps['element'] = defaultProps.element;
	export let type: ButtonProps['type'] = defaultProps.type;
	export let color: ButtonProps['color'] = defaultProps.color;
	export let size: ButtonProps['size'] = defaultProps.size;

    $: ({root} = evaluateVariantClasses({element, type, color, size}, variants));
</script>

<svelte:element
	this={element}
	class={twMerge(
		root,
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
