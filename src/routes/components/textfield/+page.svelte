<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Search } from '@steeze-ui/heroicons';
	import Typography from '$lib/components/Typography.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Container from '$lib/components/Container.svelte';
	import FilledInput from '$lib/components/FilledInput.svelte';
	import OutlinedInput from '$lib/components/OutlinedInput.svelte';
</script>

<Container class="py-4">
	<Stack element="header" class="pb-4">
		<Typography variant="h3">Text Field</Typography>
		<Typography variant="subtitle1"
			>They come in three variants — Filled, Outlined and Base</Typography
		>
	</Stack>
	<Stack>
		<Stack>
			<Typography variant="h5">Filled Input</Typography>
			<FilledInput on:click={() => console.log("clicked")}/>
			<FilledInput>
				<Icon src={Search} slot="startAdornment" />
			</FilledInput>
		</Stack>
		<Stack>
			<Typography variant="h5">Outlined Input</Typography>
			<OutlinedInput>
				<Icon src={Search} slot="startAdornment" />
			</OutlinedInput>
		</Stack>
	</Stack>
</Container>
