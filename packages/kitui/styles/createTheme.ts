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
    }
  }
};

export const createTheme = (theme: ThemeOptions) => {
  return merge(defaultTheme, theme);
};
