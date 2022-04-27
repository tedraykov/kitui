<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export const element = "ul";
  let _class = "";
  export { _class as class };
</script>

<svelte:element
  this={element}
  class={
  twMerge(
    `py-2`,
    _class
  )
  }
>
  <slot/>
</svelte:element>

