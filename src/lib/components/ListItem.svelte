<script>
  import { twMerge } from "tailwind-merge";
  import cn from "classnames";

  export let element = "div";
  export let href = "";
  export let active = false;

  let _class = "";
  export { _class as class };
</script>

<li class="flex">
  <svelte:element
    this={element}
    class={twMerge(
    `m-1 py-2 px-4 w-full rounded-md
    transition-colors
    hover:bg-gray-800/10
    active:bg-gray-800/5
    focus:bg-gray-800/10`,
    cn({
      [`bg-primary-200/30 hover:bg-primary-200/50
        active:bg-primary-200/30 focus:bg-primary-200/50`]: active
    }),
    _class
    )}
    on:click
    href={href}
  >
    <slot/>
  </svelte:element>
</li>
