import type { ComponentOptions, ElementProps } from './index';

export type TableOptions = ComponentOptions<TableProps, TableStyleOverrideOptions>;

export type TableProps = ElementProps

export type TableStyleOverrideOptions = {
	root?: string;
};


export type TableCellOptions = ComponentOptions<TableCellProps, TableCellStyleOverrideOptions>;

export type TableCellProps = ElementProps

export type TableCellStyleOverrideOptions = {
	root?: string;
};

export type TableHeaderCellOptions = ComponentOptions<TableHeaderCellProps, TableCellStyleOverrideOptions>;

export type TableHeaderCellProps = ElementProps

export type TableHeaderCellStyleOverrideOptions = {
	root?: string;
};


export type TableRowOptions = ComponentOptions<TableRowProps, TableCellStyleOverrideOptions>;

export type TableRowProps = ElementProps

export type TableRowStyleOverrideOptions = {
	root?: string;
};

export type TableBodyOptions = ComponentOptions<TableBodyProps, TableCellStyleOverrideOptions>;

export type TableBodyProps = ElementProps

export type TableBodyStyleOverrideOptions = {
	root?: string;
};

export type TableHeadOption = ComponentOptions<TableHeadProps, TableCellStyleOverrideOptions>;

export type TableHeadProps = ElementProps

export type TableHeadStyleOverrideOptions = {
	root?: string;
};
