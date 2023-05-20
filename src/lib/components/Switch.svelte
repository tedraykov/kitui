<script lang="ts">
	import evaluateVariantClasses from '$lib/styles/evaluateVariantClasses';
	import getThemeContext from '$lib/styles/getThemeContext';

	export let checked: boolean;
	let _class = "";
	export { _class as class };

	const theme = getThemeContext();
	const { variants } = theme.components.Switch;

    const {root, checkbox, thumb} = evaluateVariantClasses({}, variants);
</script>

<label class={root} {...$$restProps}>
	<input type="checkbox" bind:value={checked} on:click class={checkbox}>
	<span class={thumb}></span>
</label>
