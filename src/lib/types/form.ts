import type { ComponentOptions, ElementProps } from './index';

export type FormLabelOptions = ComponentOptions<
	FormLabelProps,
	FormLabelStylesOverrideOptions
>;
export type FormControlOptions = ComponentOptions<
	FormControlProps,
	FormControlOverrideOptions
>;

export type FormLabelProps = ElementProps;

export type FormLabelStylesOverrideOptions = {
	root?: string;
};

export type FormControlProps = ElementProps;

export type FormControlOverrideOptions = {
	root?: string;
};
