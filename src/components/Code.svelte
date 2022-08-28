<script>
	import Prism from "prismjs";

	export let code = "";
	export let inline = false;

	$: html = Prism.highlight(code, Prism.languages.js, "js")
</script>

{#if inline}
	<code class='language-js w-fit text-sm'>{@html html}</code>
	{:else}
	<pre class='language-js'><code>{@html html}</code></pre>
{/if}

