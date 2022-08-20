import { getContext } from "svelte";
import { themeContextKey } from "../utils/consts";
import type { ThemeOptions } from "../types";

export default function getThemeContext() {
  return getContext<ThemeOptions>(themeContextKey);
}
