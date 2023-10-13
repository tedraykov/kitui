<script lang="ts">
	import { Card, CardContent, Chip, Container, Stack, Typography, Divider } from '$lib';
	import getChipTree from '../../../docs/playground/chip';
	import { defaultTheme } from '$lib/styles/createTheme';
	import Playground from '../../../components/playground/Playground.svelte';

	const componentTree = getChipTree(defaultTheme.components.Chip.defaultProps);
</script>

<Stack element="header">
	<Typography class="text-primary" style="title">Components</Typography>
	<Typography style="display">Chip</Typography>
	<Divider />
</Stack>
<Playground {componentTree} />
<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Styles</Typography>
		<Typography size="large">
			Chips comes in the base colors and three sizes - Small, Medium, and Large
		</Typography>
	</Stack>
	<Card outlined>
		<CardContent>
			<Stack>
				<Stack>
					<Typography style="label">Outlined</Typography>
					<Stack direction="row">
						<Chip color="primary">Primary</Chip>
						<Chip color="success">Success</Chip>
						<Chip color="warning">Warning</Chip>
						<Chip color="error">Error</Chip>
					</Stack>
				</Stack>
				<Divider />
				<Stack direction="row">
					<Chip color="primary" type="filled">Primary</Chip>
					<Chip color="success" type="filled">Success</Chip>
					<Chip color="warning" type="filled">Warning</Chip>
					<Chip color="error" type="filled">Error</Chip>
				</Stack>
			</Stack>
		</CardContent>
	</Card>
</Stack>
