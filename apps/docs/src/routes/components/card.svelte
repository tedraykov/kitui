<script>
  import Container from "kitui/components/Container.svelte";
  import Typography from "kitui/components/Typography.svelte";
  import Stack from "kitui/components/Stack.svelte";
  import Card from "kitui/components/Card.svelte";
  import CardTitle from "kitui/components/CardTitle.svelte";
  import CardContent from "kitui/components/CardContent.svelte";

  let outlined = false;
</script>

<Container class="py-4">
  <Typography variant="h3" class="pb-4">Card</Typography>
  <Stack>
    <Card {outlined}>
      <CardTitle>Example Card</CardTitle>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ab adipisci excepturi possimus unde! Cum doloremque error ipsa minima
        molestiae repudiandae, unde. Beatae eaque esse incidunt iure rem
        repudiandae sit ullam!
      </CardContent>
    </Card>

    <Stack direction="row" class="items-center">
      <input type="checkbox" id="outlined" bind:checked={outlined}>
      <label for="outlined">Outlined</label>
    </Stack>
  </Stack>
</Container>
