<script lang="ts">
	import {
		Card,
		CardContent,
		Container,
		Stack,
		Typography,
		Divider,
		Drawer,
		Button,
		CardHeader,
		CardTitle
	} from '$lib';

	let drawerStandardOpen = false;
	let drawerModalLeftOpen = false;
	let drawerModalRightOpen = false;
	let drawerModalBottomOpen = false;

	function toggleDrawer(target: string) {
		switch (target) {
			case 'standard':
				drawerStandardOpen = !drawerStandardOpen;
				break;
			case 'modal-left':
				drawerModalLeftOpen = !drawerModalLeftOpen;
				break;
			case 'modal-right':
				drawerModalRightOpen = !drawerModalRightOpen;
				break;
			case 'modal-bottom':
				drawerModalBottomOpen = !drawerModalBottomOpen;
				break;
			default:
				break;
		}
	}
</script>

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
			<Stack class="justify-center items-center w-full">
				<Button on:click={() => toggleDrawer('standard')}>Drawer</Button>
			</Stack>
			<Drawer open={drawerStandardOpen} variant="standard">
				<Stack class="p-4">
					<Typography style="title">Drawer</Typography>
				</Stack>
			</Drawer>
		</CardContent>
	</Card>
	<Card outlined>
		<CardHeader>
			<CardTitle>Modal</CardTitle>
		</CardHeader>
		<CardContent class="h-64 flex flex-row p-0">
			<Stack class="justify-center items-center w-full">
				<Button on:click={() => toggleDrawer('modal-left')}>Left</Button>
				<Button on:click={() => toggleDrawer('modal-right')}>Right</Button>
				<Button on:click={() => toggleDrawer('modal-bottom')}>Bottom</Button>
			</Stack>
			<Drawer
				open={drawerModalLeftOpen}
				direction="left"
				variant="modal"
				on:close={() => toggleDrawer('modal-left')}
			>
				<Stack class="p-4">
					<Typography style="title">Drawer</Typography>
				</Stack>
			</Drawer>
			<Drawer
				open={drawerModalRightOpen}
				direction="right"
				variant="modal"
				on:close={() => toggleDrawer('modal-right')}
			>
				<Stack class="p-4">
					<Typography style="title">Drawer</Typography>
				</Stack>
			</Drawer>
			<Drawer
				open={drawerModalBottomOpen}
				direction="bottom"
				variant="modal"
				on:close={() => toggleDrawer('modal-bottom')}
			>
				<Stack class="p-4">
					<Typography style="title">Drawer</Typography>
				</Stack>
			</Drawer>
		</CardContent>
	</Card>
</Stack>
