import type { ButtonProps } from '$lib';
import Button from '$lib/components/Button.svelte';
import type { PlaygroundComponentNode } from '../../types';

export default function getButtonTree(defaultProps: ButtonProps): PlaygroundComponentNode {
	return {
		Component: Button,
		content: 'Button',
		name: 'Button',
		propDefinitions: [
			{
				name: 'variant',
				description: 'The variant to use',
				default: defaultProps.variant,
				control: {
					type: 'select',
					props: {
						name: 'variant',
						value: defaultProps.variant,
						options: [
							'contained',
							'outlined'
							// TODO: implement
							// "text"
						]
					}
				}
			},
			{
				name: 'color',
				default: defaultProps.color,
				description: `The color to use. Accepted colors are <code class='lang-js'>primary</code>, <code>secondary</code>, and <code>default</code>.`,
				control: {
					type: 'select',
					props: {
						name: 'color',
						value: defaultProps.color,
						options: [
							'accent', 'primary', 'success', 'warning', 'error'
						]
					}
				}
			},
			{
				name: 'size',
				default: defaultProps.size,
				description: 'The size to use. Accepted sizes are small, medium, and large.',
				control: {
					type: 'select',
					props: {
						name: 'size',
						value: defaultProps.size,
						options: ['small', 'medium', 'large']
					}
				}
			}
			// TODO: Implement
			// {
			// 	name: 'disabled',
			// 	default: false,
			// 	description: 'Whether the button is disabled.',
			// 	control: {
			// 		Component: ControlSwitch,
			// 		props: {
			// 			name: "disabled"
			// 			value: defaultProps.disabled
			// 		}
			// 	}
			// },
			// TODO: Implement
			// {
			// 	name: 'fullWidth',
			// 	default: false,
			// 	description: 'Whether the button is full width.'
			// }
		]
	};
}
