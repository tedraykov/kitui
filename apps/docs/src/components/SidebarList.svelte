<script>
  import List from "kitui/components/List.svelte";
  import ListItem from "kitui/components/ListItem.svelte";
  import Typography from "kitui/components/Typography.svelte";
  import ListSubheader from "kitui/components/ListSubheader.svelte";
  import { toggleSidebar } from "../stores/uiStore";
  import { page } from "$app/stores";

  let _class;
  export {_class as class};
</script>

<List class={_class}>
  <ListSubheader class="font-">
    <Typography variant="caption">Components</Typography>
  </ListSubheader>
  <ListItem
    element="a"
    href="/components/button"
    active={$page.url.pathname === "/components/button"}
    on:click={toggleSidebar}>
    Button
  </ListItem>
  <ListItem
    element="a"
    href="/components/list"
    on:click={toggleSidebar}
    active={$page.url.pathname === "/components/list"}
  >
    List
  </ListItem>
</List>
