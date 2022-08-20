<script>
  import Container from "$lib/components/Container.svelte";
  import Typography from "$lib/components/Typography.svelte";
  import Stack from "$lib/components/Stack.svelte";
  import List from "$lib/components/List.svelte";
  import ListItem from "$lib/components/ListItem.svelte";

  const items = [
    {title: "Item 1", description: "Item 1 description"},
    {title: "Item 2", description: "Item 2 description"},
    {title: "Item 3", description: "Item 3 description"},
  ]
</script>

<Container class="py-4">
  <Typography variant="h3">Lists</Typography>
  <Stack>
    <List>
      {#each items as item}
        <ListItem>
          {item.title}
        </ListItem>
      {/each}
    </List>
  </Stack>
</Container>
