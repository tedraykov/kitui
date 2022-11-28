<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { ComponentPropsMap } from '../../types';

	export let name: string;
	export let value: string;
	export let componentName: string;

	const propStore = getContext<Writable<ComponentPropsMap>>("playgroundProps");

	const updateProp = (event: {target: HTMLSelectElement}) => {
		console.log(`new value: ${event.target.value}`);
		propStore.update((props) => {
			props[componentName][name] = event.target.value
			return props;
		})
	}
</script>

<input {name} type='checkbox' bind:checked={value} on:change={updateProp}/>
