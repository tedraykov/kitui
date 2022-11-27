<script lang='ts'>
	import type { ButtonProps } from '$lib';
	import { Button } from '$lib';

	export let content = '';
	export let buttonProps: ButtonProps;
</script>

<Button
	{...buttonProps}
>
	{content}
</Button>
