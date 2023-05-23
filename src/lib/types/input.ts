import type { ComponentOptions, ElementProps} from './index';

/* Filled Input */
export type FilledInputOptions = ComponentOptions<
	FilledInputProps,
	FilledInputStyles
>;

export type FilledInputProps = ElementProps;

export type FilledInputStyles = {
	root: string;
};

/* Outlined Input */
export type OutlinedInputOptions = ComponentOptions<
	OutlinedInputProps,
	OutlinedInputStyles
>;

export type OutlinedInputProps = ElementProps;

export type OutlinedInputStyles = {
	root: string;
    input: string;
    startAdornment: string;
    endAdornment: string;
};

/* Base Input */
export type BaseInputOptions = ComponentOptions<
	BaseInputProps,
	BaseInputStyles
>;

export type BaseInputProps = ElementProps;

export type BaseInputStyles = {
	root: string;
};
