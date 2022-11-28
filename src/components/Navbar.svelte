<script lang="ts">
	import Stack from '$lib/components/Stack.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3 } from '@steeze-ui/heroicons';
	import { toggleSidebar } from '../stores/uiStore';
</script>

<Toolbar>
	<Container class="max-w-8xl">
		<Stack class="items-center" direction="row" gap={4}>
			<Button class="md:hidden p-1.5" variant="outlined" on:click={toggleSidebar}>
				<Icon src={Bars3} class="w-6 h-6 text-inherit" />
			</Button>
			<a href="/" class="w-12 h-12 p-2">
				<img src="/logo.png" alt="Logo" />
			</a>
			<Stack direction="row" gap="4" class="flex-1 justify-end">
				<Button element="a" href="https://github.com/alttreble/kitui" variant="text" size="small">
					<img src="/github.svg" alt="Github icon" />
				</Button>
			</Stack>
		</Stack>
	</Container>
</Toolbar>
