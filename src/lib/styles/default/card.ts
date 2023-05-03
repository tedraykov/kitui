import type { CardOptions } from '$lib';

const defaultCardOptions: CardOptions = {
	defaultProps: {
		element: 'div',
		outlined: false
	},
	variants: [
		{
			props: { outlined: false },
			class: `bg-white rounded-xl box-border bg-surface`
		},
		{
			props: { outlined: true },
			class: `shadow-none border border-outline-variant`
		}
	]
}

export default defaultCardOptions;