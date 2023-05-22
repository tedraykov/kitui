import type { CardContentOptions } from '$lib/types';

const defaultOptions: CardContentOptions = {
	defaultProps: {
		element: 'div'
	},
	variants: [
		{
			props: {},
			styles: {
                root: 'bg-surface-1 px-8 py-4'
            }
		}
	]
}

export default defaultOptions;
