<script lang='ts'>
	import { Button, Card, Container, Divider, Stack, Typography } from '$lib';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '$lib/styles/createTheme';
	import getButtonTree from '../../../docs/playground/button';

	const { defaultProps } = defaultTheme.components.Button;

	const componentTree = getButtonTree(defaultProps);
</script>

<Container class='py-4'>
	<Stack gap={8}>
		<Stack element='header'>
			<Typography class='text-primary' style='title'>Components</Typography>
			<Typography style='display'>Button</Typography>
			<Divider/>
		</Stack>
		<Stack element='section' gap={4}>
			<Stack element='header'>
				<Typography style='headline'>Playground</Typography>
				<Typography size='large'>
					Play around with the component props and see them dynamically apply.
					The playground serves as a API documentation of the component.
				</Typography>
			</Stack>
			<Playground {componentTree} />
			<Divider/>
		</Stack>
		<Stack element='section' gap={4}>
			<Stack element='header'>
				<Typography style='headline'>Styles</Typography>
				<Typography size='large'>
					Buttons come in four styles — Filled, Tonal, Outlined, and Text
				</Typography>
			</Stack>
			<Stack gap={2}>
				<Typography style='title' size='large'>Contained</Typography>
				<Typography size='large'>
					The filled button comes in three different sizes and three default colors
				</Typography>
			</Stack>
			<Card outlined>
				<Stack class='w-full p-4'>
					<Typography style='label'>Small</Typography>
					<Stack direction='row'>
						<Button color='primary' style='filled' size='small'>Primary</Button>
						<Button color='success' style='filled' size='small'>Success</Button>
						<Button color='warning' style='filled' size='small'>Warning</Button>
						<Button color='error' style='filled' size='small'>Error</Button>
					</Stack>
					<Divider />
					<Typography style='label'>Medium</Typography>
					<Stack direction='row'>
						<Button color='primary' style='filled'>Primary</Button>
						<Button color='success' style='filled'>Success</Button>
						<Button color='warning' style='filled'>Warning</Button>
						<Button color='error' style='filled'>Error</Button>
					</Stack>
					<Divider />
					<Typography style='label'>Large</Typography>
					<Stack direction='row'>
						<Button color='primary' style='filled' size='large'>Primary</Button>
						<Button color='success' style='filled' size='large'>Success</Button>
						<Button color='warning' style='filled' size='large'>Warning</Button>
						<Button color='error' style='filled' size='large'>Error</Button>
					</Stack>
				</Stack>
			</Card>
		</Stack>
		<Stack>
			<Stack gap={2}>
				<Typography style='title' size='large'>Outlined</Typography>
				<Typography size='large'>
					The outlined button comes in three different sizes and three default colors
				</Typography>
			</Stack>
			<Card outlined>
				<Stack class='w-full p-4'>
					<Typography style='label'>Small</Typography>
					<Stack direction='row'>
						<Button color='primary' style='outlined' size='small'>Primary</Button>
						<Button color='success' style='outlined' size='small'>Success</Button>
						<Button color='warning' style='outlined' size='small'>Warning</Button>
						<Button color='error' style='outlined' size='small'>Error</Button>
					</Stack>
					<Divider />
					<Typography style='label'>Medium</Typography>
					<Stack direction='row'>
						<Button color='primary' style='outlined'>Primary</Button>
						<Button color='success' style='outlined'>Success</Button>
						<Button color='warning' style='outlined'>Warning</Button>
						<Button color='error' style='outlined'>Error</Button>
					</Stack>
					<Divider />
					<Typography style='label'>Large</Typography>
					<Stack direction='row'>
						<Button color='primary' style='outlined' size='large'>Primary</Button>
						<Button color='success' style='outlined' size='large'>Success</Button>
						<Button color='warning' style='outlined' size='large'>Warning</Button>
						<Button color='error' style='outlined' size='large'>Error</Button>
					</Stack>
				</Stack>
			</Card>
		</Stack>
	</Stack>
</Container>
