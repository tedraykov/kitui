<script lang="ts">
	import { Card, CardContent, Container, Stack, Typography, Divider } from '$lib';
	import { defaultTheme } from '$lib/styles/createTheme';
	import Playground from '../../../components/playground/Playground.svelte';
    import getDividerTree from '../../../docs/playground/divider';

    const componentTree = getDividerTree(defaultTheme.components.Divider.defaultProps);
</script>

<Container class="py-4">
	<Stack gap={8}>
		<Stack element="header">
			<Typography class="text-primary" style="title">Components</Typography>
			<Typography style="display">Divider</Typography>
			<Divider />
		</Stack>
		<Stack element='section' gap={4}>
			<Stack element='header'>
				<Typography style='headline'>Playground</Typography>
				<Typography size='large'>
					Play around with the component props and see them dynamically apply.
					The playground serves as a API documentation of the component.
				</Typography>
			</Stack>
			<Playground {componentTree} />
			<Divider/>
		</Stack>
		<Stack element="section" gap={4}>
			<Stack element="header">
				<Typography style="headline">Styles</Typography>
			</Stack>
			<Card outlined>
				<CardContent>
					<Stack>
						<Stack>
							<Typography style="label">Vertical</Typography>
							<Stack direction="row">
								<Card type="filled" class="h-20 w-20" />
								<Divider direction="vertical" />
								<Card type="filled" class="h-20 w-20" />
							</Stack>
						</Stack>
						<Stack>
							<Typography style="label">Horizontal</Typography>
							<Stack direction="col">
								<Card type="filled" class="h-20" />
								<Divider direction="horizontal" />
								<Card type="filled" class="h-20" />
							</Stack>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	</Stack>
</Container>
