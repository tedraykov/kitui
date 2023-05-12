import type { ButtonOptions } from '$lib';

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
			props: { type: 'tonal', color: 'primary' },
			class: 'bg-primary-container text-on-primary-container'
		},
		{
			props: { type: 'tonal', color: 'secondary' },
			class: 'bg-secondary-container text-on-secondary-container'
		},
		{
			props: { type: 'tonal', color: 'tertiary' },
			class: 'bg-tertiary-container text-on-tertiary-container'
		},
		{
			props: { type: 'tonal', color: 'success' },
			class: 'bg-success-container text-on-success-container'
		},
		{
			props: { type: 'tonal', color: 'warning' },
			class: 'bg-warning-container text-on-warning-container'
		},
		{
			props: { type: 'tonal', color: 'error' },
			class: 'bg-error-container text-on-error-container'
		},
		{
			props: { type: 'outlined' },
			class: 'border transition-colors active:bg-gray-100/70'
		},
		{
			props: { type: 'outlined', color: 'primary' },
			class: 'text-primary'
		},
		{
			props: { type: 'outlined', color: 'secondary' },
			class: 'text-secondary'
		},
		{
			props: { type: 'outlined', color: 'tertiary' },
			class: 'text-tertiary'
		},
		{
			props: { type: 'outlined', color: 'success' },
			class: 'text-success'
		},
		{
			props: { type: 'outlined', color: 'warning' },
			class: 'text-warning'
		},
		{
			props: { type: 'outlined', color: 'error' },
			class: 'text-error'
		},
		{
			props: { type: 'filled' },
			class: 'text-on-primary'
		},
		{
			props: { type: 'filled', color: 'primary' },
			class: 'bg-primary text-on-primary'
		},
		{
			props: { type: 'filled', color: 'secondary' },
			class: 'bg-secondary text-on-secondary'
		},
		{
			props: { type: 'filled', color: 'tertiary' },
			class: 'bg-tertiary text-on-tertiary'
		},
		{
			props: { type: 'filled', color: 'success' },
			class: 'bg-success text-on-success'
		},
		{
			props: { type: 'filled', color: 'warning' },
			class: 'bg-warning text-on-warning'
		},
		{
			props: { type: 'filled', color: 'error' },
			class: 'bg-error text-on-error'
		},
		{
			props: { type: 'text' },
			class: 'hover:bg-gray-100/80'
		},
		{
			props: { type: 'text', color: 'primary' },
			class: 'text-primary'
		},
		{
			props: { type: 'text', color: 'secondary' },
			class: 'text-secondary'
		},
		{
			props: { type: 'text', color: 'tertiary' },
			class: 'text-tertiary'
		},
		{
			props: { type: 'text', color: 'success' },
			class: 'text-success'
		},
		{
			props: { type: 'text', color: 'warning' },
			class: 'text-warning'
		},
		{
			props: { type: 'text', color: 'error' },
			class: 'text-error'
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