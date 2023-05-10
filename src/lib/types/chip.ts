import type { ComponentOptions, Colors, ElementProps } from './index';

export type ChipOptions = ComponentOptions<ChipPropsOptions>;

export type ChipProps = ElementProps & {
	color: Colors
	type: 'outlined' | 'filled'
}
export type ChipPropsOptions = Partial<ChipProps>
