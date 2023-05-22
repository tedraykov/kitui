import type { CardContentOptions } from '$lib/types';

const defaultOptions: CardContentOptions = {
	defaultProps: {
		element: 'div'
	},
	variants: [
		{
			props: {},
			styles: {
                root: 'p-4'
            }
		}
	]
}

export default defaultOptions;
