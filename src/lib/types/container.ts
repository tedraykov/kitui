import type { ComponentOptions, ElementProps } from './index';

export type ContainerOptions = ComponentOptions<ContainerProps, ContainerStyleOverrideOptions>;

export type ContainerProps = ElementProps

export type ContainerStyleOverrideOptions = {
	root?: string;
};
