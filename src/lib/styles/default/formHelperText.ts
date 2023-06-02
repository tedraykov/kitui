import type { FormHelperTextOptions } from "$lib";

const defaultOptions: FormHelperTextOptions = {
    defaultProps: {
        element: 'span'
    },
    variants: [
        {
            props: {},
            styles: {
                root: 'text-on-surface-variant text-sm font-normal px-2'
            }
        }
    ]
}

export default defaultOptions;
