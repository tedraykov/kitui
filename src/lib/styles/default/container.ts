import type { ContainerOptions } from "$lib";

const defaultOptions: ContainerOptions = {
    defaultProps: {
        element: "div",
    },
    variants: [
        {
            props: {},
            styles: {
                root: "flex flex-col w-full max-w-[105ch] mx-auto px-4 md:px-6 xl:px-8",
            }
        }
    ]
}

export default defaultOptions;
