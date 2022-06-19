import { SupportedElement } from "../utils/elements";
import { DividerOptions } from "./divider";
import { TypographyOptions } from "./typography";
import { ButtonOptions } from "./button";
import { DrawerOptions } from "./drawer";
import { CardActionOptions, CardContentOptions, CardHeaderOptions, CardOptions, CardTitleOptions } from "./card";
import { TabGroupOptions, TabListOptions, TabOptions, TabPanelOptions, TabPanelsOptions } from "./tabs";
import { PaperOptions } from "./paper";
import { BaseInputOptions, FilledInputOptions, OutlinedInputOptions } from "./input";
import { FormControlOptions, FormLabelOptions } from "./form";
import { InputStartAdornmentOptions } from "./adornment";
import { StackOptions } from "./stack";

export type ThemeOptions = {
  components?: {
    BaseInput?: BaseInputOptions
    Button?: ButtonOptions
    Card?: CardOptions
    CardAction?: CardActionOptions
    CardContent?: CardContentOptions
    CardHeader?: CardHeaderOptions
    CardTitle?: CardTitleOptions
    Divider?: DividerOptions
    Drawer?: DrawerOptions
    FilledInput?: FilledInputOptions
    OutlinedInput?: OutlinedInputOptions
    FormLabel?: FormLabelOptions
    FormControl?: FormControlOptions
    InputStartAdornment?: InputStartAdornmentOptions
    Paper?: PaperOptions
    Stack?: StackOptions
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

export * from "./adornment"
export * from "./button"
export * from "./card"
export * from "./divider"
export * from "./drawer"
export * from "./form"
export * from "./input"
export * from "./paper"
export * from "./stack"
export * from "./tabs"
export * from "./typography"
