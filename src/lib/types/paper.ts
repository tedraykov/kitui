/* Paper */
import type { ComponentOptions, ElementProps, Elevation } from './index';

export type PaperOptions = ComponentOptions<PaperProps, PaperStylesOverrideOptions>;

export type PaperProps = ElementProps & {
	elevation?: Elevation;
};

export type PaperStylesOverrideOptions = {
	root?: string;
};
