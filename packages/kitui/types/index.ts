import { SupportedElement } from "../utils/elements";
import { DividerOptions } from "./divider";
import { TypographyOptions } from "./typography";
import { ButtonOptions } from "./button";
import { DrawerOptions } from "./drawer";
import { CardActionOptions, CardContentOptions, CardHeaderOptions, CardOptions, CardTitleOptions } from "./card";
import { TabGroupOptions, TabListOptions, TabOptions, TabPanelOptions, TabPanelsOptions } from "./tabs";
import { PaperOptions } from "./paper";

export type ThemeOptions = {
  components?: {
    Button?: ButtonOptions
    Card?: CardOptions
    CardAction?: CardActionOptions
    CardContent?: CardContentOptions
    CardHeader?: CardHeaderOptions
    CardTitle?: CardTitleOptions
    Divider?: DividerOptions
    Drawer?: DrawerOptions
    Paper?: PaperOptions
    TabGroup?: TabGroupOptions
    TabList?: TabListOptions
    Tab?: TabOptions
    TabPanels?: TabPanelsOptions
    TabPanel?: TabPanelOptions
    Typography?: TypographyOptions
  }
}

export type ComponentOptions<P, O> = {
  defaultProps?: P
  styleOverrides?: O
}

export type ElementOptions = {
  element?: SupportedElement
}

export type Elevation = "none" | "sm" | "default" | "md" | "lg" | "xl" | "2xl"

export * from "./button";
export * from "./card";
export * from "./divider";
export * from "./drawer";
export * from "./paper";
export * from "./tabs";
export * from "./typography";
