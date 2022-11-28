<script lang='ts'>
	import { Card, CardContent, Container, Divider, Stack, Typography } from '$lib/components';
	import getTypographyTree from '../../../docs/playground/typography';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '../../../lib/styles/createTheme';

	const { defaultProps } = defaultTheme.components.Typography;
	const componentTree = getTypographyTree(defaultProps);
</script>

<Container class='py-4'>
	<Stack gap={8}>
		<Stack element='header'>
			<Typography class='text-primary' variant='title'>Components</Typography>
			<Typography variant='display'>Typography</Typography>
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
		</Stack>
		<Stack element='section' gap={4}>
			<Stack element='header'>
				<Typography variant='headline'>Styles</Typography>
				<Typography size='large'>Typography has five distinct type styles: Display, headline, title, body, and label.</Typography>
			</Stack>
			<Card outlined>
				<CardContent>
					<Stack gap={4}>
						<Typography variant='display' size='large'>Display Large</Typography>
						<Typography variant='display' size='medium'>Display Medium</Typography>
						<Typography variant='display' size='small'>Display Small</Typography>

						<Typography variant='headline' size='large'>Headline Large</Typography>
						<Typography variant='headline' size='medium'>Headline Medium</Typography>
						<Typography variant='headline' size='small'>Headline Small</Typography>

						<Typography variant='title' size='large'>Title Large</Typography>
						<Typography variant='title' size='medium'>Title Medium</Typography>
						<Typography variant='title' size='small'>Title Small</Typography>

						<Typography variant='label' size='large'>Label Large</Typography>
						<Typography variant='label' size='medium'>Label Medium</Typography>
						<Typography variant='label' size='small'>Label Small</Typography>

						<Typography variant='body' size='large'>Body Large</Typography>
						<Typography variant='body' size='medium'>Body Medium</Typography>
						<Typography variant='body' size='small'>Body Small</Typography>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	</Stack>
</Container>
