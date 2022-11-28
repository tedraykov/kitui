import type { ComponentOptions, ElementProps } from './index';

export type DrawerOptions = ComponentOptions<DrawerProps, DrawerStylesOverrideOptions>;

export type DrawerProps = ElementProps & {
	variant?: 'permanent' | 'persistent' | 'temporary';
	open?: boolean;
};

export type DrawerStylesOverrideOptions = {
	root?: string;
};
