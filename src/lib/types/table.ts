import type { ComponentOptions, ElementProps } from './index';

export type TableOptions = ComponentOptions<TableProps, TableStyles>;

export type TableProps = ElementProps

export type TableStyles = {
	root: string;
};

export type TableCellOptions = ComponentOptions<TableCellProps, TableCellStyles>;

export type TableCellProps = ElementProps

export type TableCellStyles = {
	root: string;
};

export type TableHeaderCellOptions = ComponentOptions<TableHeaderCellProps, TableHeaderCellStyles>;

export type TableHeaderCellProps = ElementProps

export type TableHeaderCellStyles = {
	root: string;
};

export type TableRowOptions = ComponentOptions<TableRowProps, TableRowStyles>;

export type TableRowProps = ElementProps

export type TableRowStyles = {
	root: string;
};

export type TableBodyOptions = ComponentOptions<TableBodyProps, TableBodyStyles>;

export type TableBodyProps = ElementProps

export type TableBodyStyles = {
	root: string;
};

export type TableHeadOption = ComponentOptions<TableHeadProps, TableHeadStyles>;

export type TableHeadProps = ElementProps

export type TableHeadStyles = {
	root: string;
};
