<script lang="ts">
	import { Select, SelectOption } from '$lib';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { ComponentPropsMap } from '../../types';
	export let name: string;
	export let options: string[] = [];
	export let value: string;
	export let componentName: string;

	const propStore = getContext<Writable<ComponentPropsMap>>('playgroundProps');

	const updateProp = (event: { target: HTMLSelectElement }) => {
		propStore.update((props) => {
			props[componentName][name] = event.target.value;
			return props;
		});
	};
</script>

<Select {name} bind:value on:change={updateProp}>
	{#each options as option}
		<SelectOption value={option}>{option}</SelectOption>
	{/each}
</Select>
