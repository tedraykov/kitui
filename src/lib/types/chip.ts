import type { ComponentOptions, Colors, ElementOptions } from './index';

export type ChipOptions = ComponentOptions<ChipPropsOptions, ChipStyleOverrideOptions>;

export type ChipPropsOptions = ElementOptions & {
	color?: Colors
	size?: "small" | 'medium'
}

export type ChipProps = ElementOptions & {
	color?: Colors
	size?: "small" | 'medium'
}

export type ChipStyleOverrideOptions = {
	root?: string;
};
