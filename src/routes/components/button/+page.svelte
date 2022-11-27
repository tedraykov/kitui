<script lang='ts'>
	import { Button, Card, Container, Divider, Stack, Typography } from '$lib';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '$lib/styles/createTheme';
	import getButtonTree from '../../../docs/playground/button';

	const { defaultProps } = defaultTheme.components.Button

	const componentTree = getButtonTree(defaultProps);
</script>

<Container class='py-4'>
	<Stack element='header' class='pb-4'>
		<Typography variant='h3'>Buttons</Typography>
		<Typography variant='subtitle1'
		>They come in three variants — Contained, Outlined and Text
		</Typography
		>
	</Stack>
	<Stack gap={6}>
		<Stack element='section'>
			<Playground {componentTree}/>
		</Stack>
		<Stack element='section'>
			<Stack gap={0}>
				<Typography variant='h5'>Contained</Typography>
				<Typography class='text-accent-600'
				>The contained button comes in three different sizes and three default colors
				</Typography>
			</Stack>
			<Card outlined class='bg-accent-50/50'>
				<Stack class='w-full p-4'>
					<Typography variant='subtitle2'>Small</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='contained' size='small'>Primary</Button>
						<Button color='accent' variant='contained' size='small'>Accent</Button>
						<Button color='success' variant='contained' size='small'>Success</Button>
						<Button color='warning' variant='contained' size='small'>Warning</Button>
						<Button color='error' variant='contained' size='small'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='subtitle2'>Medium</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='contained'>Primary</Button>
						<Button color='accent' variant='contained'>Accent</Button>
						<Button color='success' variant='contained'>Success</Button>
						<Button color='warning' variant='contained'>Warning</Button>
						<Button color='error' variant='contained'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='subtitle2'>Large</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='contained' size='large'>Primary</Button>
						<Button color='accent' variant='contained' size='large'>Accent</Button>
						<Button color='success' variant='contained' size='large'>Success</Button>
						<Button color='warning' variant='contained' size='large'>Warning</Button>
						<Button color='error' variant='contained' size='large'>Error</Button>
					</Stack>
				</Stack>
			</Card>
		</Stack>
		<Stack>
			<Stack gap={0}>
				<Typography variant='h5'>Outlined</Typography>
				<Typography class='text-accent-600'
				>The outlined button comes in three different sizes and three default colors
				</Typography>
			</Stack>
			<Card outlined class='bg-accent-50/50'>
				<Stack class='w-full p-4'>
					<Typography variant='subtitle2'>Small</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='outlined' size='small'>Primary</Button>
						<Button color='accent' variant='outlined' size='small'>Accent</Button>
						<Button color='success' variant='outlined' size='small'>Success</Button>
						<Button color='warning' variant='outlined' size='small'>Warning</Button>
						<Button color='error' variant='outlined' size='small'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='subtitle2'>Medium</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='outlined'>Primary</Button>
						<Button color='accent' variant='outlined'>Accent</Button>
						<Button color='success' variant='outlined'>Success</Button>
						<Button color='warning' variant='outlined'>Warning</Button>
						<Button color='error' variant='outlined'>Error</Button>
					</Stack>
					<Divider />
					<Typography variant='subtitle2'>Large</Typography>
					<Stack direction='row'>
						<Button color='primary' variant='outlined' size='large'>Primary</Button>
						<Button color='accent' variant='outlined' size='large'>Accent</Button>
						<Button color='success' variant='outlined' size='large'>Success</Button>
						<Button color='warning' variant='outlined' size='large'>Warning</Button>
						<Button color='error' variant='outlined' size='large'>Error</Button>
					</Stack>
				</Stack>
			</Card>
		</Stack>
	</Stack>
</Container>
