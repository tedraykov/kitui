<script lang='ts'>
	import { Container, Divider, Typography, Stack } from '$lib/components';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '../../../lib/styles/createTheme';
	import getCardTree from '../../../docs/playground/card';

	const componentTree = getCardTree({
		Card: defaultTheme.components.Card.defaultProps,
		CardContent: defaultTheme.components.CardContent.defaultProps,
		CardTitle: defaultTheme.components.CardTitle.defaultProps,
		CardAction: defaultTheme.components.CardAction.defaultProps,
		CardHeader: defaultTheme.components.CardHeader.defaultProps
	});
</script>

<Container class='py-4'>
	<Stack gap={8}>
		<Stack element='header'>
			<Typography class='text-primary' variant='title'>Components</Typography>
			<Typography variant='display'>Card</Typography>
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
	</Stack>
</Container>
