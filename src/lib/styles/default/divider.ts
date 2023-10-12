import type { DividerOptions } from '$lib';

const defaultDividerOptions: DividerOptions = {
    defaultProps: {
        element: "span",
        direction: "horizontal",
    },
    variants: [
        {
            props: {},
            styles: {
                root: "bg-outline-variant"
            }
        },
        {
            props: { direction: "vertical" },
            styles: {
                root: "w-[1px]"
            }
        },
        {
            props: { direction: "horizontal" },
            styles: {
                root: "w-full h-[1px]"
            }
        }
    ]
}

export default defaultDividerOptions;
