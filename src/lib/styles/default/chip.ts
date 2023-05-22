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
            styles: {
                root: "w-fit rounded box-border h-8 flex items-center",
                leadingIcon: 'px-1',
                trailingIcon: 'px-1'
            }
        },
        {
            props: { color: "primary", type: 'filled' },
            styles: {
                root: "bg-primary-container text-primary-onContainer"
            }
        },
        {
            props: { color: "secondary", type: 'filled' },
            styles: {
                root: "bg-secondary-container text-secondary-onContainer"
            }
        },
        {
            props: { color: "tertiary", type: 'filled' },
            styles: {
                root: "bg-tertiary-container text-tertiary-onContainer"
            }
        },
        {
            props: { color: "error", type: 'filled' },
            styles: {
                root: "bg-error-container text-error-onContainer"
            }
        },
        {
            props: { color: "warning", type: 'filled' },
            styles: {
                root: "bg-warning-container text-warning-onContainer"
            }
        },
        {
            props: { color: "success", type: 'filled' },
            styles: {
                root: "bg-success-container text-success-onContainer"
            }
        },
        {
            props: { color: "primary", type: 'outlined' },
            styles: {
                root: "border border-primary text-primary"
            }
        },
        {
            props: { color: "secondary", type: 'outlined' },
            styles: {
                root: "border border-secondary text-secondary"
            }
        },
        {
            props: { color: "tertiary", type: 'outlined' },
            styles: {
                root: "border border-tertiary text-tertiary"
            }
        },
        {
            props: { color: "error", type: 'outlined' },
            styles: {
                root: "border border-error text-error"
            }
        },
        {
            props: { color: "warning", type: 'outlined' },
            styles: {
                root: "border border-warning text-warning"
            }
        },
        {
            props: { color: "success", type: 'outlined' },
            styles: {
                root: "border border-success text-success"
            }
        }
    ]
}

export default defaultOptions;
