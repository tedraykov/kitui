<script lang="ts">
	import { Card, CardContent, Divider, Stack, Switch, Typography } from '$lib/components';

</script>

<Stack element="header">
    <Typography class="text-primary" style="title">Components</Typography>
    <Typography style="display">Switch</Typography>
    <Divider />
</Stack>
<!-- <Playground {componentTree} /> -->
<Stack element="section" gap={4}>
	<Stack element="header">
		<Typography style="headline">Styles</Typography>
	</Stack>
	<Card outlined>
		<CardContent>
        <Switch></Switch>
		</CardContent>
	</Card>
</Stack>
