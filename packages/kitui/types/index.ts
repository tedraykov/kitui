export type ThemeOptions = {
  components?: {
    Button?: ButtonOptions
    Drawer?: DrawerOptions
  }
}

export type ButtonOptions = {
  defaultProps?: ButtonDefaultPropsOptions,
  styleOverrides?: ButtonStylesOverrideOptions
}

export type DrawerOptions = {
  defaultProps?: DrawerDefaultPropsOptions,
  styleOverrides?: DrawerStylesOverrideOptions
}

export type DrawerDefaultPropsOptions = {
  variant?: 'permanent' | 'persistent' | 'temporary'
}

export type DrawerStylesOverrideOptions = {
  root?: string
}

export type ButtonDefaultPropsOptions = {
  variant?: "text" | "contained" | "outlined"
  color?: "primary" | "secondary" | "inherit"
  size?: "small" | "medium" | "large"
}

export type ButtonStylesOverrideOptions = {
  root?: string,
  contained?: string,
  outlined?: string,
  primary?: string,
  secondary?: string,
  primaryContained?: string,
  primaryOutlined?: string,
  secondaryOutlined?: string,
  secondaryContained?: string,
  small?: string,
}
