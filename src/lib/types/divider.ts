import type { ComponentOptions, ElementProps } from './index';

export type DividerOptions = ComponentOptions<DividerProps, DividerStyles>;

export type DividerProps = ElementProps & {
	direction: 'vertical' | 'horizontal';
};

export type DividerStyles = {
	root: string;
};
