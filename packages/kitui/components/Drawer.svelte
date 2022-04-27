<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { twMerge } from "tailwind-merge";
  import getThemeContext from "../styles/getThemeContext";
  import cn from "classnames";

  const theme = getThemeContext();

  const { defaultProps, styleOverrides } = theme.components.Drawer;

  let _class = "";
  export { _class as class };

  export let variant = defaultProps.variant;
  export let open = false;

  const dispatch = createEventDispatcher();
  function handleClose() {
    dispatch("close");
  }
</script>

<aside class={
twMerge(
  cn({
    [
      `absolute top-0 left-0 w-72 bg-slate-100
       h-full overflow-hidden
       z-drawer
       transition-all duration-200`
    ]: variant === "temporary",
    "w-0": variant === "temporary" && !open,
  }),
  _class
)
}>
  <slot />
</aside>

{#if variant === "temporary" && open}
  <span
    in:fade={{duration: 200}}
    out:fade={{duration: 200}}
    on:click|stopPropagation={handleClose}
    class="absolute w-screen h-screen bg-gray-900/20"
  ></span>
{/if}
