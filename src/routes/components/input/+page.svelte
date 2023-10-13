<script lang="ts">
	import { Divider, Stack, Typography } from '$lib';
	import Playground from '../../../components/playground/Playground.svelte';
	import getInputTree from '../../../docs/playground/input';

	const componentTree = getInputTree();
</script>

<Stack element="header">
	<Typography class="text-primary" style="title">Components</Typography>
	<Typography style="display">Input</Typography>
	<Divider />
</Stack>
<Playground {componentTree} />
