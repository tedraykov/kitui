import type { Theme } from '$lib/types';
import merge from 'lodash-es/merge.js';
import defaultButtonOptions from '$lib/styles/default/button';
import defaultCardOptions from '$lib/styles/default/card';
import defaultCardTitleOptions from '$lib/styles/default/cardTitle';
import defaultCardActionOptions from '$lib/styles/default/cardAction';
import defaultCardContentOptions from '$lib/styles/default/cardContent';
import defaultCardHeaderOptions from '$lib/styles/default/cardHeader';
import defaultChipOptions from '$lib/styles/default/chip';
import defaultContainerOptions from '$lib/styles/default/container';
import defaultDrawerOptions from '$lib/styles/default/drawer';
import defaultFormControlOptions from '$lib/styles/default/formControl';
import defaultFormHelperTextOptions from '$lib/styles/default/formHelperText';
import defaultFormLabelOptions from '$lib/styles/default/formLabel';
import defaultListItemOptions from '$lib/styles/default/listItem';
import defaultInputOptions from '$lib/styles/default/input';
import defaultSwitchOptions from '$lib/styles/default/switch';
import defaultTableOptions from '$lib/styles/default/table';
import defaultTableCellOptions from '$lib/styles/default/tableCell';
import defaultTableHeaderCellOptions from '$lib/styles/default/tableHeaderCell';
import defaultTypographyOptions from '$lib/styles/default/typography';
import defaultDividerOptions from './default/divider';

export const defaultTheme: Theme = {
    components: {
        Button: defaultButtonOptions,
        Card: defaultCardOptions,
        CardAction: defaultCardActionOptions,
        CardContent: defaultCardContentOptions,
        CardHeader: defaultCardHeaderOptions,
        CardTitle: defaultCardTitleOptions,
        Chip: defaultChipOptions,
        Container: defaultContainerOptions,
        Divider: defaultDividerOptions,
        Drawer: defaultDrawerOptions,
        FormControl: defaultFormControlOptions,
        FormHelperText: defaultFormHelperTextOptions,
        FormLabel: defaultFormLabelOptions,
        List: {
            defaultProps: {
                element: 'ul'
            },
            variants: []
        },
        ListItem: defaultListItemOptions,
        Input: defaultInputOptions,
        Stack: {
            defaultProps: {
                element: 'div',
                gap: 2,
                direction: 'col'
            },
            variants: []
        },
        Switch: defaultSwitchOptions,
        TabGroup: {
            defaultProps: {
                element: 'div',
                vertical: false,
                manual: false,
                defaultIndex: 0
            },
            variants: []
        },
        TabList: {
            defaultProps: {
                element: 'ul'
            },
            variants: []
        },
        Tab: {
            defaultProps: {
                element: 'li',
                disabled: false
            },
            variants: []
        },
        TabPanels: {
            defaultProps: {
                element: 'div'
            },
            variants: []
        },
        TabPanel: {
            defaultProps: {
                element: 'div'
            },
            variants: []
        },
        Table: defaultTableOptions,
        TableCell: defaultTableCellOptions,
        TableBody: {
            defaultProps: {
                element: 'tbody'
            },
            variants: []
        },
        TableHead: {
            defaultProps: {
                element: 'thead'
            },
            variants: []
        },
        TableRow: {
            defaultProps: {
                element: 'tr'
            },
            variants: []
        },
        TableHeaderCell: defaultTableHeaderCellOptions,
        Typography: defaultTypographyOptions,
        Paper: {
            defaultProps: {
                element: 'div',
                elevation: 'default'
            },
            variants: []
        }
    }
};

export const createTheme = (theme: Theme) => {
    return merge<Theme, Theme>(defaultTheme, theme);
};
