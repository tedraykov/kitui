import type { TableCellOptions } from "$lib/types/table";

const defaultOptions: TableCellOptions = {
    defaultProps: {
        element: "td"
    },
    variants: [
        {
            props: {},
            styles: {
                root: "px-4 py-2 text-base border-b border-b-outline-variant",
            }
        }
    ]
}
                
export default defaultOptions;
