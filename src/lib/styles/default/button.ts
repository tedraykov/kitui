import type { ButtonOptions } from '$lib';

// TODO: make return type required after styleOverrides are removed
const defaultOptions: ButtonOptions = {
	defaultProps: {
		element: 'button',
		type: 'filled',
		color: 'primary',
		size: 'medium'
	},
	variants: [
		{
			props: {},
			class: `h-fit w-fit rounded-lg py-2 px-4
							 		duration-100 ring-primary-80 ring-offset-1`
		},
		{
			props: { type: 'tonal' },
			class: 'bg-primary-80 text-white'
		},
		{
			props: { type: 'outlined' },
			class: 'border transition-colors font active:bg-gray-100/70'
		},
		{
			props: { type: 'outlined', color: 'primary' },
			class: `text-primary border-primary-90
									shadow-sm shadow-primary-200/50
         					hover:border-primary-50`
		},
		{
			props: { type: 'outlined', color: 'secondary' },
			class: `text-primary-900 border-secondary-200
         					shadow-sm shadow-secondary-200/50
         					hover:border-secondary-500`
		},
		{
			props: { type: 'outlined', color: 'ternary' },
			class: `text-ternary-900 border-ternary-200
         					shadow-sm shadow-ternary-200/50
         					hover:border-ternary-500`
		},
		{
			props: { type: 'outlined', color: 'success' },
			class: `text-emerald-900 border-emerald-200
         					shadow-sm shadow-emerald-200/50
         					hover:border-emerald-500`
		},
		{
			props: { type: 'outlined', color: 'warning' },
			class: `text-amber-900 border-amber-200
         					shadow-sm shadow-amber-200/50
         					hover:border-amber-500`
		},
		{
			props: { type: 'outlined', color: 'error' },
			class: `text-rose-900 border-rose-200
         					shadow-sm shadow-rose-200/50
         					hover:border-rose-500`
		},
		{
			props: { type: 'filled' },
			class: 'text-white hover:opacity-90 transition-opacity'
		},
		{
			props: { type: 'filled', color: 'primary' },
			class: `bg-gradient-to-b from-primary-30 to-primary-40
         					shadow-md shadow-primary-200/50
         					active:from-primary-600 active:to-primary-700`
		},
		{
			props: { type: 'filled', color: 'secondary' },
			class: `bg-gradient-to-b from-secondary-30 to-secondary-40
									shadow-md shadow-secondary-200/50
									active:from-secondary-600 active:to-secondary-700`
		},
		{
			props: { type: 'filled', color: 'ternary' },
			class: `bg-gradient-to-b from-ternary-30 to-ternary-40
									shadow-md shadow-ternary-200/50
									active:from-ternary-600 active:to-ternary-700`
		},
		{
			props: { type: 'filled', color: 'success' },
			class: `bg-gradient-to-b from-emerald-500 to-emerald-600
									shadow-md shadow-emerald-200/50
									active:from-emerald-600 active:to-emerald-700`
		},
		{
			props: { type: 'filled', color: 'warning' },
			class: `bg-gradient-to-b from-amber-500 to-amber-600
									shadow-md shadow-amber-200/50
									active:from-amber-600 active:to-amber-700`
		},
		{
			props: { type: 'filled', color: 'error' },
			class: `bg-gradient-to-b from-rose-500 to-rose-600
									shadow-md shadow-rose-200/50
									active:from-rose-600 active:to-rose-700`
		},
		{
			props: { type: 'text' },
			class: 'hover:bg-gray-100/80'
		},
		{
			props: { type: 'text', color: 'primary' },
			class: 'text-primary-30 hover:bg-primary-80/20'
		},
		{
			props: { size: 'small' },
			class: 'text-sm py-1.5 px-3'
		},
		{
			props: { size: 'large' },
			class: 'py-3 px-6'
		}
	]
};

export default defaultOptions;