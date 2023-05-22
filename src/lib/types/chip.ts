import type { ComponentOptions, Colors, ElementProps } from './index';

export type ChipOptions = ComponentOptions<ChipProps, ChipStyles>;

export type ChipProps = ElementProps & {
    color: Colors
    type: 'outlined' | 'filled'
}

export type ChipStyles = {
    root: string,
    leadingIcon?: string,
    trailingIcon?: string,
}
