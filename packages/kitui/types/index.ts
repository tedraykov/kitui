export type ThemeOptions = {
  components?: {
    Button?: ButtonOptions
    Drawer?: DrawerOptions
    Typography?: TypographyOptions
    TabGroup?: TabGroupOptions
  }
}

export type ButtonOptions = {
  defaultProps?: ButtonPropsOptions,
  styleOverrides?: ButtonStylesOverrideOptions
}

export type DrawerOptions = {
  defaultProps?: DrawerPropsOptions,
  styleOverrides?: DrawerStylesOverrideOptions
}

export type TypographyOptions = {
  defaultProps?: TypographyPropsOptions
}

export type TypographyPropsOptions = {
  element?: TypographyElement,
  variant?: TypographyVariant
}

export type TypographyProps = {
  element?: TypographyElement,
  variant: TypographyVariant
}

export type TypographyElement = "h1" |"h2" |"h3" |"h4" |"h5" |"h6" |"p"| "span"
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2"

export type DrawerPropsOptions = {
  variant?: 'permanent' | 'persistent' | 'temporary'
}
export type DrawerProps = {
  variant?: 'permanent' | 'persistent' | 'temporary'
}

export type DrawerStylesOverrideOptions = {
  root?: string
}

export type ButtonPropsOptions = {
  variant?: "text" | "contained" | "outlined"
  color?: "primary" | "secondary" | "inherit"
  size?: "small" | "medium" | "large"
}

export type ButtonProps = {
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

export type TabGroupOptions = {
  defaultProps?: TabGroupPropsOptions
  styleOverrides?: any
}

export type TabGroupProps = {
  defaultIndex?: number
    /** Whether the orientation of the `TabList` is vertical instead of horizontal */
  vertical?: boolean
  /**
   * Whether, in keyboard navigation, the Enter or Space key is necessary to change tabs.
   * By default, the arrow keys will change tabs automatically without hitting Enter/Space.
   * This has no impact on mouse behavior
   */
  manual?: boolean
}

export type TabGroupPropsOptions = {
  defaultIndex?: number
  vertical?: boolean
  manual?: boolean
}