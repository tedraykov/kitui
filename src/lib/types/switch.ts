import type { ComponentOptions } from '$lib';

export type SwitchOptions = ComponentOptions<SwitchProps, SwitchStyleOverrides>;

export type SwitchProps = {};

export type SwitchStyleOverrides = {
	root: string;
	thumb: string;
	checkbox: string;
}