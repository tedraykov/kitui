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
			styles: {
                root: 'h-fit w-fit rounded-lg py-2 px-4 duration-100 ring-primary-80 ring-offset-1'
            }
		},
		{
			props: { type: 'tonal', color: 'primary' },
			styles: {
                root: 'bg-primary-container text-on-primary-container'
            }
		},
		{
			props: { type: 'tonal', color: 'secondary' },
			styles: {
                root: 'bg-secondary-container text-on-secondary-container'
            }
		},
		{
			props: { type: 'tonal', color: 'tertiary' },
			styles: {
                root: 'bg-tertiary-container text-on-tertiary-container'
            }
		},
		{
			props: { type: 'tonal', color: 'success' },
			styles: {
                root: 'bg-success-container text-on-success-container'
            }
		},
		{
			props: { type: 'tonal', color: 'warning' },
			styles: {
                root: 'bg-warning-container text-on-warning-container'
            }
		},
		{
			props: { type: 'tonal', color: 'error' },
			styles:{
                root: 'bg-error-container text-on-error-container'
            }
		},
		{
			props: { type: 'outlined' },
			styles: {
                root: 'border transition-colors active:bg-gray-100/70'
            }
		},
		{
			props: { type: 'outlined', color: 'primary' },
			styles: {
                root: 'text-primary'
            }
		},
		{
			props: { type: 'outlined', color: 'secondary' },
			styles:{
                root: 'text-secondary'
            }
		},
		{
			props: { type: 'outlined', color: 'tertiary' },
			styles: {
                root: 'text-tertiary'
            }
		},
		{
			props: { type: 'outlined', color: 'success' },
			styles: {
               root: 'text-success'
            }
		},
		{
			props: { type: 'outlined', color: 'warning' },
			styles: {
               root: 'text-warning'
            }
		},
		{
			props: { type: 'outlined', color: 'error' },
			styles:{
                root: 'text-error'
            }
		},
		{
			props: { type: 'filled' },
			styles:{
                root: 'text-on-primary'
            }
		},
		{
			props: { type: 'filled', color: 'primary' },
            styles: {
                root: 'bg-primary text-on-primary'
            }
		},
		{
			props: { type: 'filled', color: 'secondary' },
            styles: {
                root: 'bg-secondary text-on-secondary'
            }
		},
		{
			props: { type: 'filled', color: 'tertiary' },
            styles: {
                root: 'bg-tertiary text-on-tertiary'
            }
		},
		{
			props: { type: 'filled', color: 'success' },
            styles: {
                root: 'bg-success text-on-success'
            }
		},
		{
			props: { type: 'filled', color: 'warning' },
            styles: {
                root: 'bg-warning text-on-warning'
            }
		},
		{
			props: { type: 'filled', color: 'error' },
            styles: {
                root: 'bg-error text-on-error'
            }
		},
		{
			props: { type: 'text' },
			styles: {
                root: 'hover:bg-gray-100/80'
            }
		},
		{
			props: { type: 'text', color: 'primary' },
            styles: {
                root: 'text-primary'
            }
		},
		{
			props: { type: 'text', color: 'secondary' },
            styles: {
                root: 'text-secondary'
            }
		},
		{
			props: { type: 'text', color: 'tertiary' },
            styles: {
                root: 'text-tertiary'
            }
		},
		{
			props: { type: 'text', color: 'success' },
            styles: {
                root: 'text-success'
            }
		},
		{
			props: { type: 'text', color: 'warning' },
            styles: {
                root: 'text-warning'
            }
		},
		{
			props: { type: 'text', color: 'error' },
            styles: {
                root: 'text-error'
            }
		},
		{
			props: { size: 'small' },
			styles: {
                root: 'text-sm py-1.5 px-3'
            }
		},
		{
			props: { size: 'large' },
			styles: {
                root: 'py-3 px-6'
            }
		}
	]
};

export default defaultOptions;
