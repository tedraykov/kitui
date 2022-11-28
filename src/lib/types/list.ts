import type { ComponentOptions, ElementProps } from './index';

export type ListOptions = ComponentOptions<ListProps,
	ListStylesOverrideOptions>;

export type ListProps = ElementProps;

export type ListStylesOverrideOptions = {
	root?: string;
};

export type ListItemOptions = ComponentOptions<ListItemProps,
	ListItemStylesOverrideOptions>

export type ListItemProps = ElementProps;

export type ListItemStylesOverrideOptions = {
	root?: string;
};
