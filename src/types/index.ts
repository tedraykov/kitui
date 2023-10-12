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

export type PropDefinition<T extends Props = Props> = {
	name: keyof T;
	description?: string;
	default: T[keyof T];
	control: ComponentControl;
};

export type Props = Record<string, string | boolean | number | undefined>;

export type ComponentPropsMap = Record<string, Props>;

export type PropDefinitions<T extends Props = Props> = PropDefinition<T>[];

export type PropDefinitionsMap = Record<string, PropDefinitions<Props>>;

export type PlaygroundComponentNode<T extends Props> = {
	Component: ComponentType
	name: string
	children?: PlaygroundComponentNode<Props>[]
	content?: string
	propDefinitions: PropDefinitions<T>
}
