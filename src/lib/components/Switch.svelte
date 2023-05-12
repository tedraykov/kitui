<script lang="ts">
	import getThemeContext from "../styles/getThemeContext";
	import { twMerge } from 'tailwind-merge';

	const theme = getThemeContext();
	const { styleOverrides } = theme.components.Switch;

	// let _class = "";
	// export { _class as class };
	export let checked;
</script>

<label class={twMerge(styleOverrides.root)} {...$$restProps}>
	<input type="checkbox" bind:value={checked} on:click class={twMerge(styleOverrides.checkbox)}>
	<span class={styleOverrides.thumb}></span>
</label>