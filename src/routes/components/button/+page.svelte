<script lang="ts">
	import { Button, Card, Container, Divider, Stack, Typography } from '$lib';
	import { defaultTheme } from '$lib/styles/createTheme';
	import Playground from '../../../components/playground/Playground.svelte';
	import getButtonTree from '../../../docs/playground/button';

	const { defaultProps } = defaultTheme.components.Button;

	const componentTree = getButtonTree(defaultProps);
</script>

<Stack element="header">
	<Typography class="text-primary" style="title">Components</Typography>
	<Typography style="display">Button</Typography>
	<Divider />
</Stack>
<Playground {componentTree} />
<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Styles</Typography>
		<Typography size="large">
			Buttons come in four styles — Filled, Tonal, Outlined, and Text
		</Typography>
	</Stack>
	<Stack gap={2}>
		<Typography style="title" size="large">Contained</Typography>
		<Typography size="large">
			The filled button comes in three different sizes and three default colors
		</Typography>
	</Stack>
	<Card outlined>
		<Stack class="w-full p-4">
			<Typography style="label">Small</Typography>
			<Stack direction="row">
				<Button color="primary" style="filled" size="small">Primary</Button>
				<Button color="success" style="filled" size="small">Success</Button>
				<Button color="warning" style="filled" size="small">Warning</Button>
				<Button color="error" style="filled" size="small">Error</Button>
			</Stack>
			<Divider />
			<Typography style="label">Medium</Typography>
			<Stack direction="row">
				<Button color="primary" style="filled">Primary</Button>
				<Button color="success" style="filled">Success</Button>
				<Button color="warning" style="filled">Warning</Button>
				<Button color="error" style="filled">Error</Button>
			</Stack>
			<Divider />
			<Typography style="label">Large</Typography>
			<Stack direction="row">
				<Button color="primary" style="filled" size="large">Primary</Button>
				<Button color="success" style="filled" size="large">Success</Button>
				<Button color="warning" style="filled" size="large">Warning</Button>
				<Button color="error" style="filled" size="large">Error</Button>
			</Stack>
		</Stack>
	</Card>
</Stack>
<Stack>
	<Stack gap={2}>
		<Typography style="title" size="large">Outlined</Typography>
		<Typography size="large">
			The outlined button comes in three different sizes and three default colors
		</Typography>
	</Stack>
	<Card outlined>
		<Stack class="w-full p-4">
			<Typography style="label">Small</Typography>
			<Stack direction="row">
				<Button color="primary" style="outlined" size="small">Primary</Button>
				<Button color="success" style="outlined" size="small">Success</Button>
				<Button color="warning" style="outlined" size="small">Warning</Button>
				<Button color="error" style="outlined" size="small">Error</Button>
			</Stack>
			<Divider />
			<Typography style="label">Medium</Typography>
			<Stack direction="row">
				<Button color="primary" style="outlined">Primary</Button>
				<Button color="success" style="outlined">Success</Button>
				<Button color="warning" style="outlined">Warning</Button>
				<Button color="error" style="outlined">Error</Button>
			</Stack>
			<Divider />
			<Typography style="label">Large</Typography>
			<Stack direction="row">
				<Button color="primary" style="outlined" size="large">Primary</Button>
				<Button color="success" style="outlined" size="large">Success</Button>
				<Button color="warning" style="outlined" size="large">Warning</Button>
				<Button color="error" style="outlined" size="large">Error</Button>
			</Stack>
		</Stack>
	</Card>
</Stack>
