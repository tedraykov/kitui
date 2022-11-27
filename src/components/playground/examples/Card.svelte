<script lang='ts'>
	import type { CardProps } from '$lib';
	import { Card, CardContent, CardTitle } from '$lib';

	export let title = '';
	export let content = '';
	export let cardProps: CardProps = {};
</script>

<Card
	{...cardProps}
>
	<CardTitle>
		{title}
	</CardTitle>
	<CardContent>
		{content}
	</CardContent>
</Card>
