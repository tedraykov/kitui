import type { ComponentOptions, Colors, ElementProps} from './index';

export type ButtonOptions = ComponentOptions<ButtonProps, ButtonStylesOverrideOptions>;

export type ButtonProps = ElementProps& {
	variant?: 'text' | 'filled' | "tonal" | 'outlined';
	color?: Colors;
	size?: 'small' | 'medium' | 'large';
};

export type ButtonStylesOverrideOptions = {
	root?: string;
	filled?: string;
	tonal?: string;
	outlined?: string;
	primary?: string;
	accent?: string;
	secondary?: string;
	primaryFilled?: string;
	primaryTonal?: string;
	primaryOutlined?: string;
	secondaryOutlined?: string;
	secondaryFilled?: string;
	secondaryTonal?: string;
	small?: string;
	large?: string;
};
