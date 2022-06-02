<script>
  import Stack from "kitui/components/Stack.svelte";
  import Button from "kitui/components/Button.svelte";
  import Container from "kitui/components/Container.svelte";
  import Typography from "kitui/components/Typography.svelte";
</script>

<Container class="py-4">
  <Typography variant="h3" class="pb-4">Buttons</Typography>
  <Stack gap={6}>
    <Stack>
      <Typography variant="h5">Contained</Typography>
      <Stack>
        <Button color="primary" variant="contained">Primary</Button>
        <Button color="accent" variant="contained">Accent</Button>
      </Stack>
    </Stack>
    <Stack>
      <Typography variant="h5">Outlined</Typography>
      <Stack>
        <Button color="primary" variant="outlined">Primary</Button>
        <Button color="accent" variant="outlined">Accent</Button>
      </Stack>
    </Stack>
    <Stack>
      <Typography variant="h5">Sizes</Typography>
      <Stack>
        <Button size="small">Small</Button>
        <Button>Default</Button>
        <Button size="large">Large</Button>
      </Stack>
    </Stack>
  </Stack>
</Container>
