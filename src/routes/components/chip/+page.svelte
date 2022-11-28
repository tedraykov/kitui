<script lang="ts">
	import { Card, Chip, Container, Stack, Typography, Divider} from '$lib';
</script>

<Container class='py-4'>
	<Stack element='header' class='pb-4'>
		<Typography variant='h3'>Chips</Typography>
		<Typography variant='subtitle1'
		>Chips comes in the base colors and two sizes - Small and Medium
		</Typography
		>
	</Stack>
	<Card outlined class="bg-primary-50/50 p-4">
		<Stack>
			<Stack>
				<Typography variant='subtitle2'>Small</Typography>
				<Stack direction='row'>
					<Chip color='accent' size='small'>Accent</Chip>
					<Chip color='primary' size='small'>Primary</Chip>
					<Chip color='success' size='small'>Success</Chip>
					<Chip color='warning' size='small'>Warning</Chip>
					<Chip color='error' size='small'>Error</Chip>
				</Stack>
			</Stack>
			<Divider/>
			<Stack>
				<Typography variant='subtitle2'>Normal</Typography>
				<Stack direction='row'>
					<Chip color='accent'>Accent</Chip>
					<Chip color='primary'>Primary</Chip>
					<Chip color='success'>Success</Chip>
					<Chip color='warning'>Warning</Chip>
					<Chip color='error'>Error</Chip>
				</Stack>
			</Stack>
		</Stack>
	</Card>
</Container>
