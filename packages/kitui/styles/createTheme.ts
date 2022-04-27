import type { ThemeOptions } from "../types";
import merge from "lodash-es/merge.js";

const defaultTheme: ThemeOptions = {
  components: {
    Button: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        size: "medium"
      },
      styleOverrides: {}
    },
    Drawer: {
      defaultProps: {
        variant: "temporary"
      },
      styleOverrides: {}
    }
  }
};

export const createTheme = (theme: ThemeOptions) => {
  return merge(defaultTheme, theme);
};
