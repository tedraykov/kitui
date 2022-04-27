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
    hover:bg-gray-100/50
    active:bg-gray-100/80
    focus:bg-gray-100/40`,
    cn({
      [`bg-primary-100/50 active:bg-primary-200/50 hover:bg-primary-100/70`]: active
    }),
    _class
    )}
    on:click
    href={href}
  >
    <slot/>
  </svelte:element>
</li>
