<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import getGap from "../utils/gap";
  import getDirection from "../utils/direction";

  let _class = "";
  export { _class as class };

  export let gap = 2;
  export let direction: "col" | "row" = "col";
</script>

<div class={twMerge(
  `flex`,
  getDirection(direction),
  getGap(gap),
  _class
  )}
>
  <slot />
</div>
