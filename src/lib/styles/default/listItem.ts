import type { ListItemOptions } from "$lib";

const defaultOptions: ListItemOptions = {
    defaultProps: {
        element: "li",
        active: false,
        href: undefined,
    },
    variants: [
        {
            props: {},
            styles: {
                root: `flex m-1 rounded-md transition-colors relative group
                after:content-[''] after:absolute after:rounded-md after:w-full after:h-full
                after:pointer-events-none
                `,
            },
        },
        {
            props: {
                active: false,
            },
            styles: {
                root: `
                hover:after:bg-state-layer-on-surface-8
                group-active:after:bg-state-layer-on-surface-12
                group-focus:after:bg-state-layer-on-surface-12
                `
            }
        },
        {
            props: {
                active: true,
            },
            styles: {
                root: `
                bg-secondary-container
                hover:after:bg-state-layer-on-secondary-container-8
                active:after:bg-state-layer-on-secondary-container-12
                focus:after:bg-state-layer-on-secondary-container-12
                `,
            },
        }
    ],
}

export default defaultOptions;
