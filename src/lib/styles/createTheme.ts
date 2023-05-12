import type { ThemeOptions } from '$lib';
import merge from 'lodash-es/merge.js';
import defaultButtonOptions from '$lib/styles/default/button';
import defaultCardOptions from '$lib/styles/default/card';
import defaultCardTitleOptions from '$lib/styles/default/cardTitle';
import defaultCardActionOptions from '$lib/styles/default/cardAction';
import defaultCardContentOptions from '$lib/styles/default/cardContent';
import defaultCardHeaderOptions from '$lib/styles/default/cardHeader';
import defaultChipOptions from '$lib/styles/default/chip';
// import defaultContainerOptions from '$lib/styles/default/container';
// import defaultDividerOptions from '$lib/styles/default/divider';
// import defaultDrawerOptions from '$lib/styles/default/drawer';
// import defaultHeadingOptions from '$lib/styles/default/heading';
// import defaultIconOptions from '$lib/styles/default/icon';
// import defaultIconButtonOptions from '$lib/styles/default/iconButton';
// import defaultInputOptions from '$lib/styles/default/input';
// import defaultLinkOptions from '$lib/styles/default/link';
// import defaultListOptions from '$lib/styles/default/list';
// import defaultListItemOptions from '$lib/styles/default/listItem';
// import defaultMenuOptions from '$lib/styles/default/menu';
// import defaultMenuItemOptions from '$lib/styles/default/menuItem';
// import defaultModalOptions from '$lib/styles/default/modal';
// import defaultPaperOptions from '$lib/styles/default/paper';
// import defaultPopoverOptions from '$lib/styles/default/popover';
// import defaultRadioOptions from '$lib/styles/default/radio';
// import defaultSelectOptions from '$lib/styles/default/select';
// import defaultSliderOptions from '$lib/styles/default/slider';
// import defaultSnackbarOptions from '$lib/styles/default/snackbar';
import defaultSwitchOptions from '$lib/styles/default/switch';
// import defaultTabOptions from '$lib/styles/default/tab';
// import defaultTableOptions from '$lib/styles/default/table';
// import defaultTableCellOptions from '$lib/styles/default/tableCell';
// import defaultTableHeadOptions from '$lib/styles/default/tableHead';
// import defaultTableRowOptions from '$lib/styles/default/tableRow';
// import defaultTabsOptions from '$lib/styles/default/tabs';
// import defaultTextareaOptions from '$lib/styles/default/textarea';
// import defaultTooltipOptions from '$lib/styles/default/tooltip';

export const defaultTheme: Required<ThemeOptions> = {
	components: {
		Button: defaultButtonOptions,
		Card: defaultCardOptions,
		CardAction: defaultCardActionOptions,
		CardContent: defaultCardContentOptions,
		CardHeader: defaultCardHeaderOptions,
		CardTitle: defaultCardTitleOptions,
		Chip: defaultChipOptions,
		Container: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		Divider: {
			defaultProps: {
				element: 'span',
				direction: 'horizontal'
			},
			styleOverrides: {}
		},
		Drawer: {
			defaultProps: {
				element: 'aside'
			},
			styleOverrides: {
				root: ''
			}
		},
		FilledInput: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		InputStartAdornment: {
			defaultProps: {
				element: 'span'
			},
			styleOverrides: {}
		},
		List: {
			defaultProps: {
				element: 'ul'
			},
			styleOverrides: {}
		},
		ListItem: {
			defaultProps: {
				element: 'li'
			},
			styleOverrides: {}
		},
		OutlinedInput: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		Stack: {
			defaultProps: {
				element: 'div',
				gap: 2,
				direction: 'col'
			},
			styleOverrides: {}
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
			styleOverrides: {}
		},
		TableCell: {
			defaultProps: {
				element: 'td'
			},
			styleOverrides: {}
		},
		TableBody: {
			defaultProps: {
				element: 'tbody'
			},
			styleOverrides: {}
		},
		TableHead: {
			defaultProps: {
				element: 'thead'
			},
			styleOverrides: {}
		},
		TableRow: {
			defaultProps: {
				element: 'tr'
			},
			styleOverrides: {}
		},
		TableHeaderCell: {
			defaultProps: {
				element: 'th'
			},
			styleOverrides: {}
		},
		Typography: {
			defaultProps: {
				element: 'span',
				style: 'body',
				size: 'medium'
			},
			styleOverrides: {
				displaySmall: 'text'
			}
		},
		Paper: {
			defaultProps: {
				element: 'div',
				elevation: 'default'
			},
			styleOverrides: {}
		}
	}
};

export const createTheme = (theme: ThemeOptions) => {

	return merge<Required<ThemeOptions>, ThemeOptions>(defaultTheme, theme);
};
