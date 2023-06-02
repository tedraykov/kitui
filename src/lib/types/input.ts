import type { ComponentOptions, ElementProps} from './index';

export type InputOptions = ComponentOptions<
	InputProps,
	InputStyles
>;

export type InputProps = ElementProps & {
    type: "outlined" | "filled"
};

export type InputStyles = {
	root: string;
    input: string;
    startAdornment?: string;
    endAdornment?: string;
};

