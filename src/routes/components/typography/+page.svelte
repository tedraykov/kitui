<script lang="ts">
	import { Card, CardContent, Divider, Stack, Typography } from '$lib';
	import { defaultTheme } from '$lib/styles/createTheme';
	import getTypographyTree from '../../../docs/playground/typography';
	import Playground from '../../../components/playground/Playground.svelte';

	const { defaultProps } = defaultTheme.components.Typography;
	const componentTree = getTypographyTree(defaultProps);
</script>

<Stack element="header">
	<Typography class="text-primary" style="title">Components</Typography>
	<Typography style="display">Typography</Typography>
	<Divider />
</Stack>
<Playground {componentTree} />
<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Styles</Typography>
		<Typography size="large"
			>Typography has five distinct type styles: Display, headline, title, body, and label.</Typography
		>
	</Stack>
	<Card outlined>
		<CardContent>
			<Stack gap={4}>
				<Typography style="display" size="large">Display Large</Typography>
				<Typography style="display" size="medium">Display Medium</Typography>
				<Typography style="display" size="small">Display Small</Typography>

				<Typography style="headline" size="large">Headline Large</Typography>
				<Typography style="headline" size="medium">Headline Medium</Typography>
				<Typography style="headline" size="small">Headline Small</Typography>

				<Typography style="title" size="large">Title Large</Typography>
				<Typography style="title" size="medium">Title Medium</Typography>
				<Typography style="title" size="small">Title Small</Typography>

				<Typography style="label" size="large">Label Large</Typography>
				<Typography style="label" size="medium">Label Medium</Typography>
				<Typography style="label" size="small">Label Small</Typography>

				<Typography style="body" size="large">Body Large</Typography>
				<Typography style="body" size="medium">Body Medium</Typography>
				<Typography style="body" size="small">Body Small</Typography>
			</Stack>
		</CardContent>
	</Card>
</Stack>
