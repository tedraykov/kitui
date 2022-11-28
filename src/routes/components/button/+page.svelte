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
			<Typography class='text-primary' variant='title'>Components</Typography>
			<Typography variant='display'>Button</Typography>
			<Divider/>
		</Stack>
		<Stack element='section' gap={4}>
			<Stack element='header'>
				<Typography variant='headline'>Playground</Typography>
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
				<Typography variant='headline'>Styles</Typography>
				<Typography size='large'>
					Buttons come in four variants — Filled, Tonal, Outlined, and Text
				</Typography>
			</Stack>
			<Stack gap={2}>
				<Typography variant='title' size='large'>Contained</Typography>
				<Typography size='large'>
					The filled button comes in three different sizes and three default colors
				</Typography>
			</Stack>
			<Card outlined>
				<Stack class='w-full p-4'>
					<Typography variant='label'>Small</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='filled' size='small'>Primary</Button>
						<Button color='success' variant='filled' size='small'>Success</Button>
						<Button color='warning' variant='filled' size='small'>Warning</Button>
						<Button color='error' variant='filled' size='small'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='label'>Medium</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='filled'>Primary</Button>
						<Button color='success' variant='filled'>Success</Button>
						<Button color='warning' variant='filled'>Warning</Button>
						<Button color='error' variant='filled'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='label'>Large</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='filled' size='large'>Primary</Button>
						<Button color='success' variant='filled' size='large'>Success</Button>
						<Button color='warning' variant='filled' size='large'>Warning</Button>
						<Button color='error' variant='filled' size='large'>Error</Button>
					</Stack>
				</Stack>
			</Card>
		</Stack>
		<Stack>
			<Stack gap={2}>
				<Typography variant='title' size='large'>Outlined</Typography>
				<Typography size='large'>
					The outlined button comes in three different sizes and three default colors
				</Typography>
			</Stack>
			<Card outlined>
				<Stack class='w-full p-4'>
					<Typography variant='label'>Small</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='outlined' size='small'>Primary</Button>
						<Button color='success' variant='outlined' size='small'>Success</Button>
						<Button color='warning' variant='outlined' size='small'>Warning</Button>
						<Button color='error' variant='outlined' size='small'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='label'>Medium</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='outlined'>Primary</Button>
						<Button color='success' variant='outlined'>Success</Button>
						<Button color='warning' variant='outlined'>Warning</Button>
						<Button color='error' variant='outlined'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='label'>Large</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='outlined' size='large'>Primary</Button>
						<Button color='success' variant='outlined' size='large'>Success</Button>
						<Button color='warning' variant='outlined' size='large'>Warning</Button>
						<Button color='error' variant='outlined' size='large'>Error</Button>
					</Stack>
				</Stack>
			</Card>
		</Stack>
	</Stack>
</Container>
