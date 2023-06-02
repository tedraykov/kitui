import type { TableOptions } from "$lib/types/table";

const defaultOptions: TableOptions = {
    defaultProps: {
        element: "table"
    },
    variants: [
        {
            props: {},
            styles: {
                root: "table-auto text-left w-full",
            },
        }
    ]
}

export default defaultOptions;
