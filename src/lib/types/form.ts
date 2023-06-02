import type { ComponentOptions, ElementProps } from './index';

export type FormLabelOptions = ComponentOptions<
	FormLabelProps,
	FormLabelStyles
>;

export type FormLabelProps = ElementProps;

export type FormLabelStyles = {
	root: string;
};

export type FormControlOptions = ComponentOptions<
	FormControlProps,
    FormControlStyles
>;

export type FormControlProps = ElementProps;

export type FormControlStyles = {
	root: string;
};

export type FormHelperTextOptions = ComponentOptions<FormHelperTextProps, FormHelperTextStyles>;

export type FormHelperTextProps = ElementProps;

export type FormHelperTextStyles = {
    root: string;
};
