<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '../../../lib/styles/createTheme';
	import getCardTree from '../../../docs/playground/card';
	import type { CardDefaultProps } from '../../../docs/playground/card';

	const defaultProps: CardDefaultProps = {
		Card: defaultTheme.components.Card.defaultProps,
		CardContent: defaultTheme.components.CardContent.defaultProps,
		CardTitle: defaultTheme.components.CardTitle.defaultProps,
		CardAction: defaultTheme.components.CardAction.defaultProps,
		CardHeader: defaultTheme.components.CardHeader.defaultProps
	};
	const componentTree = getCardTree(defaultProps);
</script>

<Container class='py-4'>
	<Typography variant='h3' class='pb-4'>Card</Typography>
	<Playground {componentTree} />
</Container>
