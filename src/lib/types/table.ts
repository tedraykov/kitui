import type { ComponentOptions, ElementOptions } from './index';

export type TableOptions = ComponentOptions<TablePropsOptions, TableStyleOverrideOptions>;

export type TablePropsOptions = ElementOptions

export type TableProps = ElementOptions

export type TableStyleOverrideOptions = {
	root?: string;
};


export type TableCellOptions = ComponentOptions<TableCellPropsOptions, TableCellStyleOverrideOptions>;

export type TableCellPropsOptions = ElementOptions

export type TableCellProps = ElementOptions

export type TableCellStyleOverrideOptions = {
	root?: string;
};

export type TableHeaderCellOptions = ComponentOptions<TableHeaderCellPropsOptions, TableCellStyleOverrideOptions>;

export type TableHeaderCellPropsOptions = ElementOptions

export type TableHeaderCellProps = ElementOptions

export type TableHeaderCellStyleOverrideOptions = {
	root?: string;
};


export type TableRowOptions = ComponentOptions<TableRowPropsOptions, TableCellStyleOverrideOptions>;

export type TableRowPropsOptions = ElementOptions

export type TableRowProps = ElementOptions

export type TableRowStyleOverrideOptions = {
	root?: string;
};

export type TableBodyOptions = ComponentOptions<TableBodyPropsOptions, TableCellStyleOverrideOptions>;

export type TableBodyPropsOptions = ElementOptions

export type TableBodyProps = ElementOptions

export type TableBodyStyleOverrideOptions = {
	root?: string;
};

export type TableHeadOption = ComponentOptions<TableHeadPropsOptions, TableCellStyleOverrideOptions>;

export type TableHeadPropsOptions = ElementOptions

export type TableHeadProps = ElementOptions

export type TableHeadStyleOverrideOptions = {
	root?: string;
};
