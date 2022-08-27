import type { ComponentOptions, ElementOptions } from './index';
import type { Colors } from './colors';

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
