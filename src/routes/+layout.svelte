<script lang="ts">
	import "../assets/prism-one-light.css";
	import '../app.css';
	import { createTheme } from '$lib/styles/createTheme';
	import Drawer from '$lib/components/Drawer.svelte';
	import setThemeContext from '$lib/styles/setThemeContext';
	import { sidebarOpen, toggleSidebar } from '../stores/uiStore';
	import SidebarList from '../components/SidebarList.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	import Navbar from '../components/Navbar.svelte';

	export let data;
	const theme = createTheme({});
	setThemeContext(theme);

</script>

<div class={`flex min-h-screen overflow-x-hidden bg-neutral-95`}>
		<Drawer class='md:hidden' variant="temporary" open={$sidebarOpen} on:close={toggleSidebar}>
			<SidebarList />
		</Drawer>
		<Drawer variant="persistent" class="min-w-[15rem] shadow hidden md:block">
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
