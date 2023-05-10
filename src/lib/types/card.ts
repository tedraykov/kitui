import type { ComponentOptions, ElementProps } from './index';

/* Card */
export type CardOptions = ComponentOptions<CardProps>;

export type CardProps = ElementProps & {
	type: 'outlined' | 'elevated' | 'filled'
};
export type CardPropsOption = Partial<CardProps>

/* Card Header */
export type CardHeaderOptions = ComponentOptions<CardHeaderProps>;

export type CardHeaderProps = ElementProps;

/* Card Title */
export type CardTitleOptions = ComponentOptions<CardTitleProps>;

export type CardTitleProps = ElementProps;

/* Card Action */
export type CardActionOptions = ComponentOptions<CardActionProps>;

export type CardActionProps = ElementProps;

/* Card Content */
export type CardContentOptions = ComponentOptions<CardContentProps>;

export type CardContentProps = ElementProps;