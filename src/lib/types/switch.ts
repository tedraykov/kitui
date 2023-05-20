import type { ComponentOptions } from '$lib';

export type SwitchOptions = ComponentOptions<SwitchProps, SwitchStyles>;

export type SwitchProps = Record<string, unknown>;

export type SwitchStyles = {
	root: string;
	thumb: string;
	checkbox: string;
}
