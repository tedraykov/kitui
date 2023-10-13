<script lang="ts">
	import { Card, CardContent, Container, Stack, Typography, Divider } from '$lib';
	import { defaultTheme } from '$lib/styles/createTheme';
	import Playground from '../../../components/playground/Playground.svelte';
	import getDividerTree from '../../../docs/playground/divider';

	const componentTree = getDividerTree(defaultTheme.components.Divider.defaultProps);
</script>

<Stack element="header">
	<Typography class="text-primary" style="title">Components</Typography>
	<Typography style="display">Divider</Typography>
	<Divider />
</Stack>
<Playground {componentTree} />
<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Styles</Typography>
	</Stack>
	<Card outlined>
		<CardContent>
			<Stack>
				<Stack>
					<Typography style="label">Vertical</Typography>
					<Stack direction="row">
						<Card type="filled" class="h-20 w-20" />
						<Divider direction="vertical" />
						<Card type="filled" class="h-20 w-20" />
					</Stack>
				</Stack>
				<Stack>
					<Typography style="label">Horizontal</Typography>
					<Stack direction="col">
						<Card type="filled" class="h-20" />
						<Divider direction="horizontal" />
						<Card type="filled" class="h-20" />
					</Stack>
				</Stack>
			</Stack>
		</CardContent>
	</Card>
</Stack>
