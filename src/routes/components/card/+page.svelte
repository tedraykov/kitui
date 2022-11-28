<script lang='ts'>
	import { Card, CardContent, CardHeader, CardTitle, Container, Typography } from '$lib/components';
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
	<Card>
		<CardHeader>
			<CardTitle>
				Card
			</CardTitle>
		</CardHeader>
		<CardContent>
			<Typography variant='headline'></Typography>
			<Playground {componentTree} />
		</CardContent>
	</Card>
</Container>
