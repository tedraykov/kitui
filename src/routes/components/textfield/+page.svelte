<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Search } from "@steeze-ui/heroicons";
  import Typography from "kitui/components/Typography.svelte";
  import Stack from "kitui/components/Stack.svelte";
  import Container from "kitui/components/Container.svelte";
  import FilledInput from "kitui/components/FilledInput.svelte";
  import OutlinedInput from "kitui/components/OutlinedInput.svelte";
</script>

<Container class="py-4">
  <Stack element="header" class="pb-4">
    <Typography variant="h3">Text Field</Typography>
    <Typography variant="subtitle1">They come in three variants — Filled, Outlined and Base</Typography>
  </Stack>
  <Stack>
    <Stack>
      <Typography variant="h5">Filled Input</Typography>
      <FilledInput>
        <Icon src={Search} slot="startAdornment"/>
      </FilledInput>
    </Stack>
    <Stack>
      <Typography variant="h5">Outlined Input</Typography>
      <OutlinedInput>
        <Icon src={Search} slot="startAdornment" />
      </OutlinedInput>
    </Stack>
  </Stack>
</Container>
