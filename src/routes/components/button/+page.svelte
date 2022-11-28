<script lang='ts'>
	import { Button, Card, CardContent, CardHeader, CardTitle, Container, Divider, Stack, Typography } from '$lib';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '$lib/styles/createTheme';
	import getButtonTree from '../../../docs/playground/button';

	const { defaultProps } = defaultTheme.components.Button;

	const componentTree = getButtonTree(defaultProps);
</script>

<Container class='py-4'>
	<Card>
		<CardHeader>
			<CardTitle>Buttons</CardTitle>
			<Typography variant='label' size='large'
			>They come in three variants — Contained, Outlined and Text
			</Typography>
		</CardHeader>
		<CardContent class='px-8'>
			<Stack gap={8}>
				<Stack element='section'>
					<Playground {componentTree} />
				</Stack>
				<Stack element='section'>
					<Stack gap={2}>
						<Typography variant='title'>Contained</Typography>
						<Typography>
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
						<Typography variant='title'>Outlined</Typography>
						<Typography>
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

		</CardContent>
	</Card>
</Container>
