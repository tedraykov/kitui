import type { ComponentOptions, ElementProps } from './index';

export type DrawerOptions = ComponentOptions<DrawerProps, DrawerStyles>;

export type DrawerProps = ElementProps & {
	variant: 'standard' | 'modal';
	open: boolean;
    direction: 'left' | 'right' | 'bottom';
};

export type DrawerStyles = {
	root: string;
    scrim?: string;
};
