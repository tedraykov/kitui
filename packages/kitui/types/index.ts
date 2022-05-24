import { SupportedElement } from "../utils/elements";

export type ThemeOptions = {
  components?: {
    Button?: ButtonOptions
    Drawer?: DrawerOptions
    Typography?: TypographyOptions
    TabGroup?: TabGroupOptions
    TabList?: TabListOptions
    Tab?: TabOptions
    TabPanels?: TabPanelsOptions
    TabPanel?: TabPanelOptions
  }
}

export type ElementOptions = {
  element?: SupportedElement
}

export type ButtonOptions = ElementOptions & {
  defaultProps?: ButtonPropsOptions,
  styleOverrides?: ButtonStylesOverrideOptions
}

export type DrawerOptions = ElementOptions & {
  defaultProps?: DrawerPropsOptions,
  styleOverrides?: DrawerStylesOverrideOptions
}

export type TypographyOptions = {
  defaultProps?: TypographyPropsOptions
}

export type TypographyPropsOptions = ElementOptions & {
  element?: TypographyElement,
  variant?: TypographyVariant
}

export type TypographyProps = ElementOptions & {
  element?: TypographyElement,
  variant?: TypographyVariant
}

export type TypographyElement = "h1" |"h2" |"h3" |"h4" |"h5" |"h6" |"p"| "span"
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2"

export type DrawerPropsOptions = ElementOptions & {
  variant?: 'permanent' | 'persistent' | 'temporary'
}
export type DrawerProps = ElementOptions & {
  variant?: 'permanent' | 'persistent' | 'temporary'
}

export type DrawerStylesOverrideOptions = {
  root?: string
}

export type ButtonPropsOptions = ElementOptions & {
  variant?: "text" | "contained" | "outlined"
  color?: "primary" | "secondary" | "inherit"
  size?: "small" | "medium" | "large"
}

export type ButtonProps = ElementOptions & {
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

export type TabGroupOptions = ElementOptions & {
  defaultProps?: TabGroupPropsOptions
  styleOverrides?: any
}

export type TabGroupProps = ElementOptions & {
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

export type TabGroupPropsOptions = ElementOptions & {
  defaultIndex?: number
  vertical?: boolean
  manual?: boolean
}

export type TabListOptions = {
  defaultProps: TabListPropsOptions
}

export type TabListPropsOptions = ElementOptions & {}
export type TabListProps = ElementOptions & {}

export type TabOptions = ElementOptions & {
  defaultProps?: TabPropsOptions
  styleOverrides?: any
}

export type TabPropsOptions = ElementOptions & {
  disabled?: boolean
}

export type TabProps = ElementOptions & {
  disabled?: boolean
}

export type TabPanelsOptions = {
  defaultProps: TabPanelsPropsOptions
}

export type TabPanelsPropsOptions = ElementOptions & {}

export type TabPanelsProps = ElementOptions & {}

export type TabPanelOptions = {
  defaultProps: TabPanelPropsOptions
}

export type TabPanelPropsOptions = ElementOptions & {}

export type TabPanelProps = ElementOptions & {}
