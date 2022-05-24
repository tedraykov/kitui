<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte"
  import "../app.css"
  import { createTheme } from "kitui/styles/createTheme"
  import Drawer from "kitui/components/Drawer.svelte"
  import Toolbar from "kitui/components/Toolbar.svelte"
  import Button from "kitui/components/Button.svelte"
  import { Icon } from "@steeze-ui/svelte-icon"
  import { Menu } from "@steeze-ui/heroicons"
  import Container from "kitui/components/Container.svelte"
  import Stack from "kitui/components/Stack.svelte"
  import setThemeContext from "kitui/styles/setThemeContext"
  import { mediaQueryMatch } from "kitui/stores/mediaQuery"
  import { sidebarOpen, toggleSidebar } from "../stores/uiStore"
  import SidebarList from "../components/SidebarList.svelte"
  import PageTransition from "../components/PageTransition.svelte"

  export let url;
  const theme = createTheme({})
  setThemeContext(theme)

  const smMinWidthStore = mediaQueryMatch("sm")

  let isMobile = false
  let isMobileUnsubscribe = null
  onMount(() => {
    isMobileUnsubscribe = smMinWidthStore
      .subscribe((smMinWidth: boolean) => {
        isMobile = !smMinWidth
      })
  });

  onDestroy(() => {
    isMobileUnsubscribe && isMobileUnsubscribe()
  });
</script>

<div class="flex min-h-screen overflow-x-hidden">
  {#if isMobile}
    <Drawer variant="temporary" open={$sidebarOpen} on:close={toggleSidebar}>
      <SidebarList />
    </Drawer>
  {:else}
    <Drawer variant="persistent" class="min-w-[15rem] shadow">
      <SidebarList class="px-2" />
    </Drawer>
  {/if}

  <div class="flex flex-col flex-1">
    <Toolbar>
      <Container>
        <Stack class="items-center" direction="row" gap={4}>
          <Button class="sm:hidden p-1.5" variant="outlined" on:click={toggleSidebar}>
            <Icon src={Menu} class="w-6 h-6 text-inherit" />
          </Button>
          <a href="/" class="w-12 h-12 p-2">
            <img src="/logo.png" alt="Logo">
          </a>
        </Stack>
      </Container>
    </Toolbar>
    <main>
      <PageTransition {url}>
        <slot />
      </PageTransition>
    </main>
  </div>
</div>
