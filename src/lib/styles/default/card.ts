import type { CardOptions } from '$lib';

const defaultCardOptions: CardOptions = {
    defaultProps: {
        element: 'div',
        type: 'outlined'
    },
    variants: [
        {
            props: {},
            styles: {
                root: "rounded-xl"
            }
        },
        {
            props: { type: 'filled' },
            styles: {
                root: "bg-surface-container-highest"
            }
        },
        {
            props: { type: 'outlined' },
            styles: {
                root: `shadow-none border border-outline-variant bg-surface`

            }
        },
        {
            props: { type: 'elevated' },
            styles: {
                root: `shadow-md bg-surface-container-low`
            }
        }
    ]
}

export default defaultCardOptions;
