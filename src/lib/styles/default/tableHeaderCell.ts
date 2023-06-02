import type { TableHeaderCellOptions } from "$lib/types/table";

const defaultOptions: TableHeaderCellOptions = {
    defaultProps: {
        element: "th"
    },
    variants: [
        {
            props: {},
            styles: {
                root: "px-4 py-2 border-b whitespace-nowrap border-b-outline-variant bg-surface-container",
            }
        }
    ]
}

export default defaultOptions;
