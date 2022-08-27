<script>
	import List from '$lib/components/List.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import ListSubheader from '$lib/components/ListSubheader.svelte';
	import { toggleSidebar } from '../stores/uiStore';
	import { page } from '$app/stores';

	let _class = '';
	const components = [
		{
			href: '/components/button',
			label: 'Button'
		},
		{
			href: '/components/card',
			label: 'Card'
		},
		{
			href: '/components/checkbox',
			label: 'Checkbox'
		},
		{
			href: '/components/chip',
			label: 'Chip'
		},
		{
			href: '/components/list',
			label: 'List'
		},
		{
			href: '/components/radio',
			label: 'Radio'
		},
		{
			href: '/components/tabs',
			label: 'Tabs'
		},
		{
			href: '/components/textfield',
			label: 'Text Field'
		},
		{
			href: '/components/typography',
			label: 'Typography'
		}
	];
	export { _class as class };
</script>

<List class={_class}>
	<ListSubheader class="font-">
		<Typography variant="caption">Components</Typography>
	</ListSubheader>
	{#each components as component}
		<ListItem
			href={component.href}
			active={$page.url.pathname === component.href}
			on:click={toggleSidebar}
		>
			{component.label}
		</ListItem>
	{/each}
</List>
