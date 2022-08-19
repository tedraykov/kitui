import { getContext } from "svelte";
import { themeContextKey } from "../utils/consts";
import { ThemeOptions } from "../types";

export default function getThemeContext() {
  return getContext<ThemeOptions>(themeContextKey);
}
