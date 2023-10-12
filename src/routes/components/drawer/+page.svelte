<script lang="ts">
	import { Card, CardContent, Container, Stack, Typography, Divider, Drawer, Button } from '$lib';

	let drawerOpen = false;

	const toggleDrawer = () => {
		drawerOpen = !drawerOpen;
	};

	$: console.log('drawerOpen', drawerOpen);
</script>

<Container class="py-4">
	<Stack gap={8}>
		<Stack element="header">
			<Typography class="text-primary" style="title">Components</Typography>
			<Typography style="display">Drawer</Typography>
			<Divider />
		</Stack>
		<Stack element="section" gap={4}>
			<Stack element="header">
				<Typography style="headline">Styles</Typography>
			</Stack>
			<Card outlined>
				<CardContent class="h-64 flex flex-row p-0">
					<Stack class='justify-center items-center w-full'>
						<Button on:click={toggleDrawer}>Drawer</Button>
					</Stack>
					<Drawer open={drawerOpen} variant="standard">
						<Stack class="p-4">
							<Typography style="title">Drawer</Typography>
						</Stack>
					</Drawer>
				</CardContent>
			</Card>
			<Card outlined>
				<CardContent class="h-64 flex flex-row p-0">
					<Stack class='justify-center items-center w-full'>
						<Button on:click={toggleDrawer}>Drawer</Button>
					</Stack>
					<Drawer open={drawerOpen} variant="modal">
						<Stack class="p-4">
							<Typography style="title">Drawer</Typography>
						</Stack>
					</Drawer>
				</CardContent>
			</Card>
		</Stack>
	</Stack>
</Container>
