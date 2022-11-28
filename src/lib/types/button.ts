import type { ComponentOptions, Colors, ElementProps} from './index';

export type ButtonOptions = ComponentOptions<ButtonProps, ButtonStylesOverrideOptions>;

export type ButtonProps = ElementProps& {
	variant?: 'text' | 'filled' | "filledTonal" | 'outlined';
	color?: Colors;
	size?: 'small' | 'medium' | 'large';
};

export type ButtonStylesOverrideOptions = {
	root?: string;
	filled?: string;
	outlined?: string;
	primary?: string;
	accent?: string;
	secondary?: string;
	primaryFilled?: string;
	primaryOutlined?: string;
	secondaryOutlined?: string;
	secondaryFilled?: string;
	accentOutlined?: string;
	accentContained?: string;
	small?: string;
	large?: string;
};
