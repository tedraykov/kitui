<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import "../assets/prism-one-light.css";
	import '../app.css';
	import { createTheme } from '$lib/styles/createTheme';
	import Drawer from '$lib/components/Drawer.svelte';
	import setThemeContext from '$lib/styles/setThemeContext';
	import { mediaQueryMatch } from '$lib/stores/mediaQuery';
	import { sidebarOpen, toggleSidebar } from '../stores/uiStore';
	import SidebarList from '../components/SidebarList.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	import Navbar from '../components/Navbar.svelte';

	export let data;
	const theme = createTheme({});
	setThemeContext(theme);

	const smMinWidthStore = mediaQueryMatch('sm');

	let isMobile = false;
	let isMobileUnsubscribe = null;
	onMount(() => {
		isMobileUnsubscribe = smMinWidthStore.subscribe((smMinWidth: boolean) => {
			isMobile = !smMinWidth;
		});
	});

	onDestroy(() => {
		isMobileUnsubscribe && isMobileUnsubscribe();
	});
</script>

<div class="flex min-h-screen overflow-x-hidden">
	{#if isMobile}
		<Drawer variant="temporary" open={$sidebarOpen} on:close={toggleSidebar}>
			<SidebarList />
		</Drawer>
	{:else}
		<Drawer variant="persistent" class="min-w-[15rem] shadow">
			<SidebarList class="px-2" />
		</Drawer>
	{/if}

	<div class="flex flex-col flex-1">
		<Navbar />
		<main>
			<PageTransition url={data.url}>
				<slot />
			</PageTransition>
		</main>
	</div>
</div>
