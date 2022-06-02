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
  export let element: ButtonProps["element"] = defaultProps.element
  export let variant: ButtonProps["variant"] = defaultProps.variant
  export let color: ButtonProps["color"] = defaultProps.color
  export let size: ButtonProps["size"] = defaultProps.size

</script>

<svelte:element
  this={element}
  on:click
  class={twMerge(
    cn(
    // Root
    twMerge(
      `font-medium h-fit w-fit rounded-lg py-2 px-4
       duration-100 ring-primary-200 ring-offset-1`,
      styleOverrides?.root
      ),
    {
      // Outlined Default
      [twMerge(
        "border transition-colors font active:bg-gray-100/70",
        styleOverrides?.outlined
      )]: variant === "outlined",
      // Primary default
      [styleOverrides.primary]: color === "primary",
      // Outlined Primary
      [twMerge(
        `text-primary-600 border-primary-200
         shadow-sm shadow-primary-200/50
         hover:border-primary-500`,
        styleOverrides.primaryOutlined
      )]: variant === "outlined" && color === "primary",
      // Outlined Accent
      [twMerge(
        `text-accent-900 border-accent-200
         shadow-sm shadow-accent-200/50
         hover:border-accent-500`,
        styleOverrides.accentOutlined
      )]: variant === "outlined" && color === "accent",
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
      // Accent Default
      [styleOverrides.accent]: color === "accent",
      // Contained Accent
      [twMerge(
        `bg-gradient-to-b from-accent-700 to-accent-800 shadow-sm
         active:from-accent-800 active:to-accent-900
         shadow-accent-500/20`,
        styleOverrides.accentContained
      )]: variant === "contained" && color === "accent",
      // Text
      [
        twMerge(
          `hover:bg-gray-100/80`
        )]: variant === "text",
      // Small
      [twMerge(
        `text-sm`,
        styleOverrides.small
      )]: size === "small",
      // Large
      [twMerge(
        `text-lg py-2 px-4`,
        styleOverrides.large
      )]: size === "large",
    }
  ), _class
  )}
  {...$$restProps}
>
  <slot/>
</svelte:element>
