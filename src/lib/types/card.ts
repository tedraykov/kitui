import type { ComponentOptions, ElementProps } from './index';

/* Card */
export type CardOptions = ComponentOptions<CardProps, CardStyles>;

export type CardProps = ElementProps & {
	type: 'outlined' | 'elevated' | 'filled'
};

export type CardPropsOption = Partial<CardProps>

export type CardStyles = {
    root: string;
}

/* Card Header */
export type CardHeaderOptions = ComponentOptions<CardHeaderProps, CardHeaderStyles>;

export type CardHeaderProps = ElementProps;

export type CardHeaderStyles = {
    root: string;
}

/* Card Title */
export type CardTitleOptions = ComponentOptions<CardTitleProps, CardTitleStyles>;

export type CardTitleProps = ElementProps;

export type CardTitleStyles = {
    root: string;
}

/* Card Action */
export type CardActionOptions = ComponentOptions<CardActionProps, CardActionStyles>;

export type CardActionProps = ElementProps;

export type CardActionStyles = {
    root: string;
}

/* Card Content */
export type CardContentOptions = ComponentOptions<CardContentProps, CardContentStyles>;

export type CardContentProps = ElementProps;

export type CardContentStyles = {
    root: string;
}
