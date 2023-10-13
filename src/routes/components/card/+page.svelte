<script lang="ts">
	import {
		Divider,
		Typography,
		Stack,
		Card,
		CardContent,
		CardTitle
	} from '$lib/components';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '$lib/styles/createTheme';
	import getCardTree from '../../../docs/playground/card';

	const componentTree = getCardTree({
		Card: defaultTheme.components.Card?.defaultProps,
		CardContent: defaultTheme.components.CardContent?.defaultProps,
		CardTitle: defaultTheme.components.CardTitle?.defaultProps,
		CardAction: defaultTheme.components.CardAction?.defaultProps,
		CardHeader: defaultTheme.components.CardHeader?.defaultProps
	});
</script>

<Stack element="header">
	<Typography class="text-primary" style="title">Components</Typography>
	<Typography style="display">Card</Typography>
	<Divider />
</Stack>
<Playground {componentTree} />
<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Styles</Typography>
	</Stack>
	<Stack direction="row">
		<Card>
			<CardTitle>Lorem Title</CardTitle>
			<CardContent>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error inventore quibusdam
					tenetur veniam! Assumenda dolore esse ipsa iste itaque laborum nam nihil nulla quae quia
					sapiente, tenetur voluptatum. Esse!
				</div>
			</CardContent>
		</Card>
		<Card type="filled">
			<CardTitle>Lorem Title</CardTitle>
			<CardContent>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error inventore quibusdam
					tenetur veniam! Assumenda dolore esse ipsa iste itaque laborum nam nihil nulla quae quia
					sapiente, tenetur voluptatum. Esse!
				</div>
			</CardContent>
		</Card>
		<Card type="elevated">
			<CardTitle>Lorem Title</CardTitle>
			<CardContent>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error inventore quibusdam
					tenetur veniam! Assumenda dolore esse ipsa iste itaque laborum nam nihil nulla quae quia
					sapiente, tenetur voluptatum. Esse!
				</div>
			</CardContent>
		</Card>
	</Stack>
</Stack>
