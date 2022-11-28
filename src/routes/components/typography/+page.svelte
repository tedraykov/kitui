<script lang="ts">
	import {Typography, Card, CardHeader, CardContent, CardTitle, Container, Stack} from '$lib/components';
	import getTypographyTree from '../../../docs/playground/typography';
	import Playground from '../../../components/playground/Playground.svelte';
	import { defaultTheme } from '../../../lib/styles/createTheme';

	const { defaultProps } = defaultTheme.components.Typography
	const componentTree = getTypographyTree(defaultProps)
</script>

<Container class="py-4">
	<Card>
		<CardHeader>
			<CardTitle>Typography</CardTitle>
		</CardHeader>
		<CardContent>
			<Stack gap={8}>
				<Playground {componentTree}/>
				<Stack>
					<Typography variant='title'>Typography styles</Typography>
					<Card outlined>
						<CardContent class='bg-surface'>
							<Stack gap={4}>
								<Typography variant="display" size="large">Display Large</Typography>
								<Typography variant="display" size="medium">Display Medium</Typography>
								<Typography variant="display" size="small">Display Small</Typography>

								<Typography variant="headline" size="large">Headline Large</Typography>
								<Typography variant="headline" size="medium">Headline Medium</Typography>
								<Typography variant="headline" size="small">Headline Small</Typography>

								<Typography variant="title" size="large">Title Large</Typography>
								<Typography variant="title" size="medium">Title Medium</Typography>
								<Typography variant="title" size="small">Title Small</Typography>

								<Typography variant="label" size="large">Label Large</Typography>
								<Typography variant="label" size="medium">Label Medium</Typography>
								<Typography variant="label" size="small">Label Small</Typography>

								<Typography variant="body" size="large">Body Large</Typography>
								<Typography variant="body" size="medium">Body Medium</Typography>
								<Typography variant="body" size="small">Body Small</Typography>
							</Stack>
						</CardContent>
					</Card>
				</Stack>
			</Stack>
		</CardContent>
	</Card>
</Container>
