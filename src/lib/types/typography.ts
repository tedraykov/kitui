import type { ComponentOptions, ElementProps} from './index';

export type TypographyOptions = ComponentOptions<TypographyProps, TypographyStylesOverrides>;

export type TypographyProps = ElementProps& {
	size?: TypographySize;
	style?: TypographyStyle;
};

export type TypographyStyle = "display" | "headline" | "title" | "label" | "body";
export type TypographySize = "small" | "medium" | "large";

export type TypographyStylesOverrides = {
	root?: string;
	display?: string;
	headline?: string;
	title?: string;
	label?: string;
	body?: string;
	displayLarge?: string;
	headlineLarge?: string;
	titleLarge?: string;
	labelLarge?: string;
	bodyLarge?: string;
	displayMedium?: string;
	headlineMedium?: string;
	titleMedium?: string;
	labelMedium?: string;
	bodyMedium?: string;
	displaySmall?: string;
	headlineSmall?: string;
	titleSmall?: string;
	labelSmall?: string;
	bodySmall?: string;
};
