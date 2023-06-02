<script lang='ts'>
	import { getContext } from 'svelte';
	import type { ComponentPropsMap, PlaygroundComponentNode } from '../../types';
	import type { Writable } from 'svelte/store';

	export let componentTree: PlaygroundComponentNode;
	const propsStore = getContext<Writable<ComponentPropsMap>>('playgroundProps');
    console.log($propsStore);
</script>

<div
	class={`flex justify-center py-10 bg-primary-100 border-b border-outline-variant`}>
	{#if componentTree?.Component}
		<svelte:component
			this={componentTree.Component}
			class='transition-all duration-300'
			{...$propsStore[componentTree.name]}
		>
			{#if componentTree.children}
				{#each componentTree.children as childComponent}
					<svelte:component
						this={childComponent.Component}
					>
					  {childComponent.content}
					</svelte:component>
				{/each}
			{/if}
			{#if componentTree.content}
				{componentTree.content}
			{/if}
		</svelte:component>
	{/if}
</div>
