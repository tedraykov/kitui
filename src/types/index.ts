import type { Writable } from 'svelte/store';
import type { ComponentType } from 'svelte';

export type PlaygroundContext = Writable<{ [component: string]: { [propName: string]: string } }>

export type ControlSelectProps = {
	value?: string
	name: string
	options: string[]
	componentName?: string
}

export type ControlTextProps = ControlSelectProps

export type ControlSwitchProps = {
	value?: boolean
	name: string
	componentName?: string
}

export type ComponentControl = {
	type: 'select'
	props: ControlSelectProps
} |
	{
		type: 'text'
		props: ControlTextProps
	} |
	{
		type: 'switch',
		props: ControlSwitchProps
	}

export type PropDefinition = {
	name: string;
	description?: string;
	default?: string | boolean;
	control?: ComponentControl;
};

export type Props = Record<string, string | boolean | number>;

export type ComponentPropsMap = Record<string, Props>;

export type PropDefinitions = PropDefinition[];

export type PropDefinitionsMap = Record<string, PropDefinitions>;

export type PlaygroundComponentNode = {
	Component: ComponentType
	name: string
	children?: PlaygroundComponentNode[]
	content?: string
	propDefinitions: PropDefinitions
}
