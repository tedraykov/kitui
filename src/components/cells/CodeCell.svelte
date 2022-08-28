<script lang='ts'>
	import Code from '../Code.svelte';

	export let text: string | undefined = undefined;
</script>

{#if text}
	<Code inline code={text}></Code>
{/if}
