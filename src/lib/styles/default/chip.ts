import type { ChipOptions } from '$lib/types';

const defaultOptions: ChipOptions = {
	defaultProps: {
		element: 'div',
		color: 'primary',
		type: 'outlined'
	},
	variants: [
		{
			props: {},
			class: "w-fit rounded box-border h-8"
		},
		{
			props: { color: "primary", type: 'filled' },
			class: "bg-primary-container text-primary-onContainer"
		},
		{
			props: { color: "secondary", type: 'filled' },
			class: "bg-secondary-container text-secondary-onContainer"
		},
		{
			props: { color: "tertiary", type: 'filled' },
			class: "bg-tertiary-container text-tertiary-onContainer"
		},
		{
			props: { color: "error", type: 'filled' },
			class: "bg-error-container text-error-onContainer"
		},
		{
			props: { color: "warning", type: 'filled' },
			class: "bg-warning-container text-warning-onContainer"
		},
		{
			props: { color: "success", type: 'filled' },
			class: "bg-success-container text-success-onContainer"
		},
		{
			props: { color: "primary", type: 'outlined' },
			class: "border border-primary text-primary"
		},
		{
			props: { color: "secondary", type: 'outlined' },
			class: "border border-secondary text-secondary"
		},
		{
			props: { color: "tertiary", type: 'outlined' },
			class: "border border-tertiary text-tertiary"
		},
		{
			props: { color: "error", type: 'outlined' },
			class: "border border-error text-error"
		},
		{
			props: { color: "warning", type: 'outlined' },
			class: "border border-warning text-warning"
		},
		{
			props: { color: "success", type: 'outlined' },
			class: "border border-success text-success"
		}
	]
}

export default defaultOptions;
