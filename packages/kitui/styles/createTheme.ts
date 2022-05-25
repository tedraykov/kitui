import type { ThemeOptions } from "../types";
import merge from "lodash-es/merge.js";

const defaultTheme: ThemeOptions = {
  components: {
    Button: {
      defaultProps: {
        element: "button",
        variant: "contained",
        color: "primary",
        size: "medium"
      },
      styleOverrides: {}
    },
    Drawer: {
      defaultProps: {
        element: "aside",
        variant: "temporary",
        open: false
      },
      styleOverrides: {}
    },
    TabGroup: {
      defaultProps: {
        element: "div",
        vertical: false,
        manual: false,
        defaultIndex: 0
      }
    },
    TabList: {
      defaultProps: {
        element: "ul"
      }
    },
    Tab: {
      defaultProps: {
        element: "li",
        disabled: false
      }
    },
    TabPanels: {
      defaultProps: {
        element: "div"
      }
    },
    TabPanel: {
      defaultProps: {
        element: "div"
      }
    },
    Paper: {
      defaultProps: {
        element: "div",
        elevation: "default"
      }
    }
  }
};

export const createTheme = (theme: ThemeOptions) => {
  return merge(defaultTheme, theme);
};
