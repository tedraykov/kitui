import type { ComponentOptions, ElementProps} from './index';

/* Filled Input */
export type FilledInputOptions = ComponentOptions<
	FilledInputProps,
	FilledInputStylesOverrideOptions
>;

export type FilledInputProps = ElementProps;

export type FilledInputStylesOverrideOptions = {
	root?: string;
};

/* Outlined Input */
export type OutlinedInputOptions = ComponentOptions<
	OutlinedInputProps,
	OutlinedInputStylesOverrideOptions
>;

export type OutlinedInputProps = ElementProps;

export type OutlinedInputStylesOverrideOptions = {
	root?: string;
};

/* Base Input */
export type BaseInputOptions = ComponentOptions<
	BaseInputProps,
	BaseInputStylesOverrideOptions
>;

export type BaseInputProps = ElementProps;

export type BaseInputStylesOverrideOptions = {
	root?: string;
};
