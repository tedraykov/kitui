import type { CardTitleOptions } from '$lib/types';

const defaultOptions: CardTitleOptions = {
	defaultProps: {
		element: 'h3'
	},
	variants: [
		{
			props: {},
			styles:{
              root: 'p-4 pb-0'  
            } 
		}
	]
}

export default defaultOptions;
