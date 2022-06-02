<script>
  import { twMerge } from "tailwind-merge";

  let _class = "";
  export { _class as class };

</script>

<div class={twMerge(
    "flex flex-col w-full max-w-[65ch] px-4",
    _class
  )}>
  <slot/>
</div>
