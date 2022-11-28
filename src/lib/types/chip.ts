import type { ComponentOptions, Colors, ElementProps } from './index';

export type ChipOptions = ComponentOptions<ChipProps, ChipStyleOverrideOptions>;

export type ChipProps = ElementProps & {
	color?: Colors
	size?: "small" | 'medium'
}

export type ChipStyleOverrideOptions = {
	root?: string;
};
