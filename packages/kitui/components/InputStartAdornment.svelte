<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import getThemeContext from "../styles/getThemeContext";
  import { InputStartAdornmentProps } from "../types";

  const theme = getThemeContext();
  const { defaultProps, styleOverrides } = theme.components.InputStartAdornment;

  let _class = "";
  export { _class as class };
  export let element: InputStartAdornmentProps["element"] = defaultProps.element;

</script>

<svelte:fragment>
  <svelte:element
    this={element}
    class={twMerge(
    "w-2",
    styleOverrides.root,
    _class
  )}>

    <slot />
  </svelte:element>
</svelte:fragment>
