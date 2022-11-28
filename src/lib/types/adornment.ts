import type { ComponentOptions, ElementProps } from './index';

export type InputStartAdornmentOptions = ComponentOptions<
	InputStartAdornmentProps,
	InputStartAdornmentStylesOverrideOptions
>;

export type InputStartAdornmentProps = ElementProps;

export type InputStartAdornmentStylesOverrideOptions = {
	root?: string;
};
