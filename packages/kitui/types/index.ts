import { SupportedElement } from "../utils/elements";

export type ThemeOptions = {
  components?: {
    Button?: ButtonOptions
    Card?: CardOptions
    CardAction?: CardActionOptions
    CardContent?: CardContentOptions
    CardHeader?: CardHeaderOptions
    CardTitle?: CardTitleOptions
    Drawer?: DrawerOptions
    Typography?: TypographyOptions
    TabGroup?: TabGroupOptions
    TabList?: TabListOptions
    Tab?: TabOptions
    TabPanels?: TabPanelsOptions
    TabPanel?: TabPanelOptions
    Paper?: PaperOptions
  }
}

export type ComponentOptions<P, O> = {
  defaultProps?: P
  styleOverrides?: O
}

export type ElementOptions = {
  element?: SupportedElement
}

export type TypographyOptions = ComponentOptions<TypographyPropsOptions, any>

export type TypographyPropsOptions = ElementOptions & {
  element?: TypographyElement,
  variant?: TypographyVariant
}

export type TypographyProps = ElementOptions & {
  element?: TypographyElement,
  variant?: TypographyVariant
}

export type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2"

export type DrawerOptions = ComponentOptions<DrawerPropsOptions, DrawerStylesOverrideOptions>

export type DrawerPropsOptions = ElementOptions & {
  variant?: "permanent" | "persistent" | "temporary"
  open?: boolean
}
export type DrawerProps = ElementOptions & {
  variant?: "permanent" | "persistent" | "temporary"
  open?: boolean
}

export type DrawerStylesOverrideOptions = {
  root?: string
}

export type ButtonOptions = ComponentOptions<ButtonPropsOptions, ButtonStylesOverrideOptions>

export type ButtonPropsOptions = ElementOptions & {
  variant?: "text" | "contained" | "outlined"
  color?: "accent" | "primary" | "secondary" | "inherit"
  size?: "small" | "medium" | "large"
}

export type ButtonProps = ElementOptions & {
  variant?: "text" | "contained" | "outlined"
  color?: "accent" | "primary" | "secondary" | "inherit"
  size?: "small" | "medium" | "large"
}

export type ButtonStylesOverrideOptions = {
  root?: string,
  contained?: string,
  outlined?: string,
  primary?: string,
  accent?: string,
  secondary?: string,
  primaryContained?: string,
  primaryOutlined?: string,
  secondaryOutlined?: string,
  secondaryContained?: string,
  accentOutlined?: string,
  accentContained?: string,
  small?: string,
  large?: string
}

/* Card */
export type CardOptions = ComponentOptions<CardPropsOptions, CardStylesOverrideOptions>

export type CardPropsOptions = ElementOptions & {
  outlined?: boolean
}

export type CardProps = ElementOptions & {
  outlined?: boolean
}

export type CardStylesOverrideOptions = {
  root?: string
  outline?: string
}

export type CardHeaderOptions = ComponentOptions<CardHeaderPropsOptions, CardHeaderStylesOverrideOptions>
export type CardTitleOptions = ComponentOptions<CardTitlePropsOptions, CardTitleStyleOverrideOptions>

export type CardActionOptions = ComponentOptions<CardActionPropsOptions, CardActionOverrideOptions>

export type CardActionPropsOptions = ElementOptions

export type CardActionProps = ElementOptions

export type CardActionOverrideOptions = {
  root?: string
}

export type CardContentOptions = ComponentOptions<CardContentPropsOptions, CardContentStylesOverrideOptions>

export type CardContentPropsOptions = ElementOptions

export type CardContentProps = ElementOptions

export type CardContentStylesOverrideOptions = {
  root?: string
}

export type CardHeaderPropsOptions = ElementOptions

export type CardHeaderProps = ElementOptions

export type CardHeaderStylesOverrideOptions = {
  root?: string
}

export type CardTitleProps = ElementOptions

export type CardTitlePropsOptions = ElementOptions

export type CardTitleStyleOverrideOptions = {
  root?: string
}

/* Tabs */
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

export type TabListOptions = ComponentOptions<TabListPropsOptions, {}>

export type TabListPropsOptions = ElementOptions & {}
export type TabListProps = ElementOptions & {}

export type TabOptions = ComponentOptions<TabPropsOptions, any>

export type TabPropsOptions = ElementOptions & {
  disabled?: boolean
}

export type TabProps = ElementOptions & {
  disabled?: boolean
}

export type TabPanelsOptions = ComponentOptions<TabPanelsPropsOptions, any>

export type TabPanelsPropsOptions = ElementOptions & {}

export type TabPanelsProps = ElementOptions & {}

export type TabPanelOptions = ComponentOptions<TabPanelPropsOptions, any>

export type TabPanelPropsOptions = ElementOptions & {}

export type TabPanelProps = ElementOptions & {}

/* Paper */
export type PaperOptions = ComponentOptions<PaperPropsOptions, PaperStylesOverrideOptions>

export type PaperPropsOptions = ElementOptions & {
  elevation?: Elevation
}

export type PaperProps = ElementOptions & {
  elevation?: Elevation
}

export type Elevation = 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl'

export type PaperStylesOverrideOptions = {
  root?: string
}
