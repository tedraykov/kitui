<script>
  import Stack from "kitui/components/Stack.svelte";
  import Button from "kitui/components/Button.svelte";
  import Container from "kitui/components/Container.svelte";
  import Typography from "kitui/components/Typography.svelte";
  import Divider from "kitui/components/Divider.svelte";
</script>

<Container class="py-4">
  <Stack element="header" class="pb-4">
    <Typography variant="h3">Buttons</Typography>
    <Typography variant="subtitle1">They come in three variants — Contained, Outlined and Text</Typography>
  </Stack>
  <Stack gap={6}>
    <Stack>
      <Stack gap={0}>
        <Typography variant="h5">Contained</Typography>
        <Typography class="text-accent-600">The contained button comes in three different sizes and three default
          colors
        </Typography>
      </Stack>
      <Stack direction="row" class="bg-primary-50/50 p-4 rounded-lg border border-primary-100">
        <Stack class="w-full">
          <Typography variant="subtitle2">Small:</Typography>
          <Stack direction="row">
            <Button color="primary" variant="contained" size="small">Primary</Button>
            <Button color="accent" variant="contained" size="small">Accent</Button>
          </Stack>
          <Divider />
          <Typography variant="subtitle2">Medium:</Typography>
          <Stack direction="row">
            <Button color="primary" variant="contained">Primary</Button>
            <Button color="accent" variant="contained">Accent</Button>
          </Stack>
          <Divider />
          <Typography variant="subtitle2">Large:</Typography>
          <Stack direction="row">
            <Button color="primary" variant="contained" size="large">Primary</Button>
            <Button color="accent" variant="contained" size="large">Accent</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Stack>
      <Stack gap={0}>
        <Typography variant="h5">Outlined</Typography>
        <Typography class="text-accent-600">The outlined button comes in three different sizes and three default
          colors
        </Typography>
      </Stack>
      <Stack direction="row" class="bg-primary-50/50 p-4 rounded-lg border border-primary-100">
        <Stack class="w-full">
          <Typography variant="subtitle2">Small:</Typography>
          <Stack direction="row">
            <Button color="primary" variant="outlined" size="small">Primary</Button>
            <Button color="accent" variant="outlined" size="small">Accent</Button>
          </Stack>
          <Divider />
          <Typography variant="subtitle2">Medium:</Typography>
          <Stack direction="row">
            <Button color="primary" variant="outlined">Primary</Button>
            <Button color="accent" variant="outlined">Accent</Button>
          </Stack>
          <Divider />
          <Typography variant="subtitle2">Large:</Typography>
          <Stack direction="row">
            <Button color="primary" variant="outlined" size="large">Primary</Button>
            <Button color="accent" variant="outlined" size="large">Accent</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
</Container>
