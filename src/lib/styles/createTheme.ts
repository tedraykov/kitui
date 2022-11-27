import type { ThemeOptions } from '../types';
import merge from 'lodash-es/merge.js';

export const defaultTheme: ThemeOptions = {
	components: {
		Button: {
			defaultProps: {
				element: 'button',
				variant: 'contained',
				color: 'accent',
				size: 'medium'
			},
			styleOverrides: {}
		},
		Card: {
			defaultProps: {
				element: 'div',
				outlined: false
			},
			styleOverrides: {}
		},
		CardAction: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		CardContent: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		CardHeader: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		CardTitle: {
			defaultProps: {
				element: 'h3'
			},
			styleOverrides: {}
		},
		Chip: {
			defaultProps: {
				element: "div",
				color: "accent",
				size: "medium"
			},
			styleOverrides: {}
		},
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
			styleOverrides: {}
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
				element: "ul"
			},
			styleOverrides: {}
		},
		ListItem: {
			defaultProps: {
				element: "li"
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
		TabGroup: {
			defaultProps: {
				element: 'div',
				vertical: false,
				manual: false,
				defaultIndex: 0
			},
			styleOverrides: {}
		},
		TabList: {
			defaultProps: {
				element: 'ul'
			},
			styleOverrides: {}
		},
		Tab: {
			defaultProps: {
				element: 'li',
				disabled: false
			},
			styleOverrides: {}
		},
		TabPanels: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		TabPanel: {
			defaultProps: {
				element: 'div'
			},
			styleOverrides: {}
		},
		Table: {
			defaultProps: {
				element: "table"
			},
			styleOverrides: {}
		},
		TableCell: {
			defaultProps: {
				element: "td"
			},
			styleOverrides: {}
		},
		TableBody: {
			defaultProps: {
				element: "tbody"
			},
			styleOverrides: {}
		},
		TableHead: {
			defaultProps: {
				element: "thead"
			},
			styleOverrides: {}
		},
		TableRow: {
			defaultProps: {
				element: "tr"
			},
			styleOverrides: {}
		},
		TableHeaderCell: {
			defaultProps: {
				element: "th"
			},
			styleOverrides: {}
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
	return merge(defaultTheme, theme);
};
