<script lang="ts">
	import { Card, CardContent, Chip, Container, Stack, Typography, Divider} from '$lib';
	import getChipTree from '../../../docs/playground/chip';
	import { defaultTheme } from '../../../lib/styles/createTheme';
	import Playground from '../../../components/playground/Playground.svelte';

	const componentTree = getChipTree(defaultTheme.components.Chip.defaultProps);
</script>

<Container class='py-4'>
	<Stack gap={8}>
		<Stack element='header'>
			<Typography class='text-primary' style='title'>Components</Typography>
			<Typography style='display'>Chip</Typography>
			<Divider/>
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
		<Stack element='section' gap={4}>
			<Stack element='header'>
				<Typography style='headline'>Styles</Typography>
				<Typography size='large'>
					Chips comes in the base colors and three sizes - Small, Medium, and Large
				</Typography>
			</Stack>
			<Card outlined>
				<CardContent>
					<Stack>
						<Stack>
							<Typography style='label'>Outlined</Typography>
							<Stack direction='row'>
								<Chip color='primary'>Primary</Chip>
								<Chip color='success'>Success</Chip>
								<Chip color='warning'>Warning</Chip>
								<Chip color='error'>Error</Chip>
							</Stack>
						</Stack>
						<Divider/>
						<Stack direction='row'>
							<Chip color='primary' type='filled'>Primary</Chip>
							<Chip color='success' type='filled'>Success</Chip>
							<Chip color='warning' type='filled'>Warning</Chip>
							<Chip color='error' type='filled'>Error</Chip>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	</Stack>
</Container>
