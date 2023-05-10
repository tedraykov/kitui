import type { CardOptions } from '$lib';

const defaultCardOptions: CardOptions = {
	defaultProps: {
		element: 'div',
		type: 'outlined'
	},
	variants: [
		{
			props: {},
			class: "rounded-xl"
		},
		{
			props: { type: 'filled' },
			class: "bg-surface-container-highest"
		},
		{
			props: { type: 'outlined' },
			class: `shadow-none border border-outline-variant bg-surface`
		},
		{
			props: {type: 'elevated'},
			class: `shadow-md bg-surface-container-low`
		}
	]
}

export default defaultCardOptions;