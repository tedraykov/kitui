import type { ComponentOptions, ElementProps } from './index';

export type StackOptions = ComponentOptions<StackProps>;

export type StackProps = ElementProps & {
	direction: 'row' | 'col' | 'row-reverse' | 'col-reverse';
	gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};
