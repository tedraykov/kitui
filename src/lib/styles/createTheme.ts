import type { Theme } from '$lib';
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
import defaultListItemOptions from '$lib/styles/default/listItem';
import defaultOutlinedInputOptions from '$lib/styles/default/outlinedInput';
import defaultSwitchOptions from '$lib/styles/default/switch';
import defaultTypographyOptions from '$lib/styles/default/typography';

export const defaultTheme: Theme = {
	components: {
        BaseInput: {
            defaultProps: {
                element: 'div'
            },
            variants: []
        },
		Button: defaultButtonOptions,
		Card: defaultCardOptions,
		CardAction: defaultCardActionOptions,
		CardContent: defaultCardContentOptions,
		CardHeader: defaultCardHeaderOptions,
		CardTitle: defaultCardTitleOptions,
		Chip: defaultChipOptions,
		Container: defaultContainerOptions,
		Divider: {
			defaultProps: {
				element: 'span',
				direction: 'horizontal'
			},
            variants: []
		},
		Drawer: defaultDrawerOptions,
		FilledInput: {
			defaultProps: {
				element: 'div'
			},
            variants: []
		},
		InputStartAdornment: {
			defaultProps: {
				element: 'span'
			},
            variants: []
		},
		List: {
			defaultProps: {
				element: 'ul'
			},
            variants: []
		},
		ListItem: defaultListItemOptions,
		OutlinedInput: defaultOutlinedInputOptions,
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
		Table: {
			defaultProps: {
				element: 'table'
			},
            variants: []
		},
		TableCell: {
			defaultProps: {
				element: 'td'
			},
            variants: []
		},
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
		TableHeaderCell: {
			defaultProps: {
				element: 'th'
			},
            variants: []
		},
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
