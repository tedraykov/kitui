<script lang="ts">
	import "../assets/prism-one-light.css";
	import '../app.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import { createTheme } from '$lib/styles/createTheme';
	import Drawer from '$lib/components/Drawer.svelte';
	import setThemeContext from '$lib/styles/setThemeContext';
	import { sidebarOpen, toggleSidebar } from '../stores/uiStore';
	import SidebarList from '../components/SidebarList.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	import Navbar from '../components/Navbar.svelte';
	import type { Theme } from "$lib";

	export let data;
	const theme = createTheme({} as Theme);
	setThemeContext(theme);
</script>

<div class={`flex min-h-screen overflow-x-hidden`}>
		<Drawer class='md:hidden' variant="modal" open={$sidebarOpen} on:close={toggleSidebar}>
			<SidebarList />
		</Drawer>
		<Drawer variant="standard" class="min-w-[15rem] hidden md:block">
			<SidebarList class="px-2" />
		</Drawer>

	<div class="flex flex-col flex-1">
		<Navbar />
		<main>
			<PageTransition url={data.url.href}>
				<slot />
			</PageTransition>
		</main>
	</div>
</div>
