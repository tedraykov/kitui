import type { ComponentOptions, Colors, ElementProps} from './index';

export type ButtonOptions = ComponentOptions<ButtonProps>;

export type ButtonProps = ElementProps & {
	type: 'text' | 'filled' | "tonal" | 'outlined';
	color: Colors;
	size: 'small' | 'medium' | 'large';
};