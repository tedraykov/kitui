<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 200;
</script>

{#key url}
	<div
		in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
