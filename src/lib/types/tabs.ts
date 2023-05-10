import type { ComponentOptions, ElementProps } from './index';

/* Tab Group */
export type TabGroupOptions = ComponentOptions<TabGroupProps>;

export type TabGroupProps = ElementProps & {
	defaultIndex?: number;
	/** Whether the orientation of the `TabList` is vertical instead of horizontal */
	vertical?: boolean;
	/**
	 * Whether, in keyboard navigation, the Enter or Space key is necessary to change tabs.
	 * By default, the arrow keys will change tabs automatically without hitting Enter/Space.
	 * This has no impact on mouse behavior
	 */
	manual?: boolean;
};

/* Tab List */
export type TabListOptions = ComponentOptions<TabListProps>;

export type TabListProps = ElementProps;

/* Tab */
export type TabOptions = ComponentOptions<TabProps>;

export type TabProps = ElementProps & {
	disabled?: boolean;
};

/* Tab Panels */
export type TabPanelsOptions = ComponentOptions<TabPanelsProps>;

export type TabPanelsProps = ElementProps;

/* Tab Panel */
export type TabPanelOptions = ComponentOptions<TabPanelProps>;

export type TabPanelProps = ElementProps;
