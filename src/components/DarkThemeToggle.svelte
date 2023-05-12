<script lang="ts">
	import { onMount } from 'svelte';
	import Switch from '$lib/components/Switch.svelte';

	let checked;

	function switchTheme(e) {
		if (e.target.checked) {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add("dark")
			checked = true;
		} else {
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove("dark");
			checked = false;
		}
	}

	onMount(() => {
		checked = document.documentElement.classList.contains("dark");
	});

</script>

<svelte:head>
	<script id="check-dark-light">(()=>{
		const e=localStorage.getItem("theme") || "",a=window.matchMedia("(prefers-color-scheme: dark)").matches;(!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark")
	})();
	</script>
</svelte:head>

<Switch {checked} on:click={switchTheme}/>
