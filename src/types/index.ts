import type { SvelteComponentTyped } from 'svelte';

export type ComponentProp = {
	name: string;
	description?: string;
	default?: string;
	control?: any;
};
