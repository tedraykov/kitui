import type { TableHeaderCellOptions } from "$lib/types/table";

const defaultOptions: TableHeaderCellOptions = {
    defaultProps: {},
    variants: [
        {
            props: {},
            styles: {
                root: "px-4 py-2 border-b whitespace-nowrap border-b-outline-variant bg-surface-1",
            }
        }
    ]
}

export default defaultOptions;
