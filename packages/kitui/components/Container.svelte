<script>
  import { twMerge } from "tailwind-merge";

  let _class = "";
  export { _class as class };

</script>

<div class={twMerge(
    "flex flex-col w-full max-w-2xl px-4",
    _class
  )}>
  <slot/>
</div>
