import type { OutlinedInputOptions } from "$lib";

const defaultOptions: OutlinedInputOptions = {
    defaultProps: {
        element: "input",
    },
    variants: [
        {
            props: {},
            styles: {
                root: 'flex items-center border border-outline rounded-lg w-fit h-8',
                input: 'outline-none bg-inherit py-2 px-2 w-fit',
                startAdornment: 'pl-4 px-2 h-4 w-auto text-primary pointer-events-auto',
                endAdornment: 'pr-4 px-2 h-4 w-auto text-primary pointer-events-auto',
            }
        }
    ]
};

export default defaultOptions;
