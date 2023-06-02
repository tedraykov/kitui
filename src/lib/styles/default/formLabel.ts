import type { FormLabelOptions } from "$lib";

const defaultOptions: FormLabelOptions = {
    defaultProps: {
        element: 'label'
    },
    variants: [{
        props: {},
        styles: {
            root: 'text-on-surface-variant text-base font-medium px-1'
        }
    }]
};

export default defaultOptions;
