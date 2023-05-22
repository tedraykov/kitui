import type { ComponentOptions, ElementProps } from './index';

export type ListOptions = ComponentOptions<ListProps, ListStyles>;

export type ListProps = ElementProps;

export type ListStyles = {
    root: string;
};

export type ListItemOptions = ComponentOptions<ListItemProps, ListItemStyles>

export type ListItemProps = ElementProps & {
    active: boolean;
    href?: string;
};

export type ListItemStyles = {
    root: string;
};

