<script lang='ts'>
	import Code from '../../Code.svelte';

	export let text: string | boolean | number | undefined = undefined;
</script>

{#if text}
	<Code inline code={JSON.stringify(text)}></Code>
{/if}
