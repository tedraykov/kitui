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
				name: 'type',
				description: 'The type of the button',
				default: defaultProps.type,
				control: {
					type: 'select',
					props: {
						name: 'type',
						value: defaultProps.type,
						options: [
							'filled',
							'tonal',
							'outlined',
							'text'
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
							'primary', 'secondary', 'tertiary', 'success', 'warning', 'error'
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
		]
	};
}
