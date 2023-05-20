import type { ComponentOptions, ElementProps} from './index';

export type TypographyOptions = ComponentOptions<TypographyProps, TypographyStyles>;

export type TypographyStyle = "display" | "headline" | "title" | "label" | "body";
export type TypographySize = "small" | "medium" | "large";

export type TypographyProps = ElementProps & {
	size: TypographySize;
	style: TypographyStyle;
};

export type TypographyStyles = {
	root: string;
};
