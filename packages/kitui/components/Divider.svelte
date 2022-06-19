<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import getThemeContext from "../styles/getThemeContext";
  import { DividerProps } from "../types";

  const theme = getThemeContext();
  const { defaultProps, styleOverrides } = theme.components.Divider;

  let _class = "";
  export { _class as class };
  export let element: DividerProps["element"] = defaultProps.element;
  export let direction: DividerProps["direction"] = defaultProps.direction;

</script>

<svelte:element
  this={element}
  class={twMerge(
    "h-[1px] bg-accent-300/50 w-full my-2",
    styleOverrides.root,
    _class
  )}>
  <slot />
</svelte:element>
