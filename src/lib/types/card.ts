import type { ComponentOptions, ElementProps } from './index';

/* Card */
export type CardOptions = ComponentOptions<CardProps, CardStylesOverrideOptions>;

export type CardProps = ElementProps & {
	outlined?: boolean;
};

export type CardStylesOverrideOptions = {
	root?: string;
	outline?: string;
};

/* Card Header */
export type CardHeaderOptions = ComponentOptions<
	CardHeaderProps,
	CardHeaderStylesOverrideOptions
>;

export type CardHeaderProps = ElementProps;

export type CardHeaderStylesOverrideOptions = {
	root?: string;
};

/* Card Title */
export type CardTitleOptions = ComponentOptions<
	CardTitleProps,
	CardTitleStyleOverrideOptions
>;

export type CardTitleProps = ElementProps;

export type CardTitleStyleOverrideOptions = {
	root?: string;
};

/* Card Action */
export type CardActionOptions = ComponentOptions<CardActionProps, CardActionOverrideOptions>;

export type CardActionProps = ElementProps;

export type CardActionOverrideOptions = {
	root?: string;
};

/* Card Content */
export type CardContentOptions = ComponentOptions<
	CardContentProps,
	CardContentStylesOverrideOptions
>;

export type CardContentProps = ElementProps;

export type CardContentStylesOverrideOptions = {
	root?: string;
};
