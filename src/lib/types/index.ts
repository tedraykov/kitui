import type { ContainerOptions } from './container';
import type { DividerOptions } from './divider';
import type { TypographyOptions } from './typography';
import type { DrawerOptions } from './drawer';
import type { CardActionOptions, CardContentOptions, CardHeaderOptions, CardOptions, CardTitleOptions } from './card';
import type { TabGroupOptions, TabListOptions, TabOptions, TabPanelOptions, TabPanelsOptions } from './tabs';
import type { PaperOptions } from './paper';
import type { BaseInputOptions, FilledInputOptions, OutlinedInputOptions } from './input';
import type { ChipOptions } from './chip';
import type { FormControlOptions, FormLabelOptions } from './form';
import type { InputStartAdornmentOptions } from './adornment';
import type { StackOptions } from './stack';
import type { ListItemOptions, ListOptions } from './list';
import type {
	TableBodyOptions,
	TableCellOptions,
	TableHeaderCellOptions,
	TableHeadOption,
	TableOptions,
	TableRowOptions
} from './table';
import type { ButtonOptions } from '$lib/types/button';
import type { SwitchOptions } from '$lib/types/switch';

export type Components = {
		BaseInput: BaseInputOptions;
		Button: ButtonOptions;
		Card: CardOptions;
		CardAction: CardActionOptions;
		CardContent: CardContentOptions;
		CardHeader: CardHeaderOptions;
		CardTitle: CardTitleOptions;
		Chip: ChipOptions;
		Container: ContainerOptions;
		Divider: DividerOptions;
		Drawer: DrawerOptions;
		FilledInput?: FilledInputOptions;
		OutlinedInput?: OutlinedInputOptions;
		FormLabel?: FormLabelOptions;
		FormControl?: FormControlOptions;
		InputStartAdornment?: InputStartAdornmentOptions;
		List: ListOptions;
		ListItem: ListItemOptions;
		Paper?: PaperOptions;
		Stack?: StackOptions;
		Switch: SwitchOptions;
		TabGroup?: TabGroupOptions;
		TabList?: TabListOptions;
		Tab?: TabOptions;
		TabPanels?: TabPanelsOptions;
		TabPanel?: TabPanelOptions;
		Table: TableOptions;
		TableCell: TableCellOptions;
		TableHeaderCell: TableHeaderCellOptions;
		TableRow: TableRowOptions;
		TableBody: TableBodyOptions;
		TableHead: TableHeadOption;
		Typography: TypographyOptions;
};

export type Theme = {
    components: Components
};

export type Variants<T, U> = {
		props: Partial<T>,
        styles: U
}[]

export type ComponentOptions<T, U> = {
	defaultProps: T;
	variants: Variants<T, U>
};

export type ElementProps = {
	element?: keyof HTMLElementTagNameMap;
};

export type Elevation = 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl';
export type Colors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'inherit';

export * from './adornment';
export * from './button';
export * from './card';
export * from './chip';
export * from './container';
export * from './divider';
export * from './drawer';
export * from './form';
export * from './input';
export * from './list';
export * from './paper';
export * from './stack';
export * from './switch';
export * from './tabs';
export * from './typography';
