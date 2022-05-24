<script lang="ts" context="module">

</script>

<script lang="ts">
  import cn from "classnames"
  import { twMerge } from "tailwind-merge"
  import type { ButtonProps } from "../types";
  import getThemeContext from "../styles/getThemeContext"

  const theme = getThemeContext();
  const { defaultProps, styleOverrides } = theme.components.Button

  // Forward classes
  let _class = ""
  export { _class as class }

  export let variant: ButtonProps["variant"] = defaultProps.variant
  export let color: ButtonProps["color"] = defaultProps.color
  export let size: ButtonProps["size"] = defaultProps.size

</script>

<button
  on:click
  class={twMerge(
    cn(
    // Root
    twMerge(
      `font-medium h-fit w-fit rounded-lg py-2 px-4
       duration-100 ring-primary-200 ring-offset-1
       focus:ring-2`,
      styleOverrides?.root
      ),
    {
      // Outlined Default
      [twMerge(
        "border transition-colors font active:bg-gray-100/70",
        styleOverrides?.outlined
      )]: variant === "outlined",
      // Primary default
      [twMerge(
        "",
        styleOverrides.primary
      )]: color === "primary",
      // Outlined Primary
      [twMerge(
        `text-primary-600 border-primary-200
         shadow-sm shadow-primary-200/50
         hover:border-primary-500`,
        styleOverrides.primaryOutlined
      )]: variant === "outlined" && color === "primary",
      // Outlined Secondary
      [twMerge(
        `text-secondary-900 border-secondary-200
         shadow-sm shadow-secondary-200/50
         hover:border-secondary-500`,
        styleOverrides.secondaryOutlined
      )]: variant === "outlined" && color === "secondary",
      // Contained Default
      [twMerge(
        "text-white hover:opacity-90 transition-opacity",
        styleOverrides.contained
      )]: variant === "contained",
      // Contained Primary
      [twMerge(
        `bg-gradient-to-b from-primary-500 to-primary-600
         shadow-sm shadow-primary-500/
         active:from-primary-600 active:to-primary-700
         `,
        styleOverrides.primaryContained
      )]: variant === "contained" && color === "primary",
      // Secondary Default
      [styleOverrides.secondary]: color === "secondary",
      // Contained Secondary
      [twMerge(
        `bg-gradient-to-b from-secondary-700 to-secondary-800 shadow-sm
         active:from-secondary-800 active:to-secondary-900
         shadow-secondary-500/20`,
        styleOverrides.secondaryContained
      )]: variant === "contained" && color === "secondary",
      [twMerge(
        `text-sm`,
        styleOverrides.small
      )]: size === "small",
    }
  ), _class
  )}
>
  <slot/>
</button>
