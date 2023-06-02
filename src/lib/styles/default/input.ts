import type { InputOptions } from "$lib";

const defaultOptions: InputOptions = {
    defaultProps: {
        element: "div",
        type: "outlined"
    },
    variants: [
        {
            props: {},
            styles: {
                root: 'flex items-center rounded-lg w-fit h-10 box-border overflow-auto',
                input: 'outline-none bg-inherit py-2 px-2 w-fit',
                startAdornment: 'pl-4 px-2 h-4 w-auto text-primary pointer-events-auto',
                endAdornment: 'pr-4 px-2 h-4 w-auto text-primary pointer-events-auto',
            }
        },
        {
            props: { type: 'outlined' },
            styles: {
                root: `border border-outline
                       hover:border-on-surface active:border-primary
                       focus-within:shadow-focus focus-within:border-primary focus-within:hover:border-primary
               `,
                input: 'outline-none bg-inherit py-2 px-2 w-fit',
            }
        },
        {
            props: { type: 'filled' },
            styles: {
                root: `bg-surface-container-highest focus-within:border-b-primary relative
                       focus-within:border-b-2 after:content-[""] after:absolute
                       after:w-full after:h-full after:rounded-lg after:pointer-events-none
                       hover:after:bg-state-layer-on-surface-8`,
                input: 'outline-none bg-inherit',
            }
        }
    ]
};

export default defaultOptions;
