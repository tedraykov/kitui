import type { ComponentOptions, ElementProps } from './index';

export type ContainerOptions = ComponentOptions<ContainerProps, ContainerStyles>;

export type ContainerProps = ElementProps

export type ContainerStyles  = {
	root: string;
};
