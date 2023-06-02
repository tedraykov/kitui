<script lang="ts">
	import { Input, Stack } from '$lib';
	import FormControl from '$lib/components/FormControl.svelte';
	import FormHelperText from '$lib/components/FormHelperText.svelte';
	import FormLabel from '$lib/components/FormLabel.svelte';
</script>

<Stack>
	<FormControl>
		<FormLabel>Label</FormLabel>
		<Input type="outlined" />
		<FormHelperText>Supporting text</FormHelperText>
	</FormControl>
	<FormControl>
		<FormLabel>Label</FormLabel>
		<Input type="filled" />
		<FormHelperText>Supporting text</FormHelperText>
	</FormControl>
</Stack>
