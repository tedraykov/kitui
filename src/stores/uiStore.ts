import { writable } from 'svelte/store';

export const sidebarOpen = writable(false);

export function toggleSidebar() {
	sidebarOpen.update((open) => !open);
}
