<script lang="ts">
	import { Container, Divider, Stack, Typography } from '$lib';
	import Playground from '../../../components/playground/Playground.svelte';
	import getInputTree from '../../../docs/playground/input';

	const componentTree = getInputTree();
</script>

<Container class="py-4">
	<Stack gap={8}>
		<Stack element="header">
			<Typography class="text-primary" style="title">Components</Typography>
			<Typography style="display">Input</Typography>
			<Divider />
		</Stack>
		<Stack element="section" gap={4}>
			<Stack element="header">
				<Typography style="headline">Playground</Typography>
				<Typography size="large">
					Play around with the component props and see them dynamically apply. The playground serves
					as a API documentation of the component.
				</Typography>
			</Stack>
			<Playground {componentTree} />
		</Stack>
	</Stack>
</Container>
