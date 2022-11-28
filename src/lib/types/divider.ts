import type { ComponentOptions, ElementProps } from './index';

export type DividerOptions = ComponentOptions<DividerProps, DividerStyleOverrideOptions>;

export type DividerProps = ElementProps & {
	direction: 'vertical' | 'horizontal';
};

export type DividerStyleOverrideOptions = {
	root?: string;
};
