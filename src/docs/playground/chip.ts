import { Chip } from '$lib';
import type { PlaygroundComponentNode } from '../../types';
import type { ChipProps } from '$lib';

export default function getChipTree(defaultProps: ChipProps): PlaygroundComponentNode {
	return {
		Component: Chip,
		content: 'Chip',
		name: 'Chip',
		propDefinitions: [
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
							'primary', 'success', 'warning', 'error'
						]
					}
				}
			},
			{
				name: 'type',
				default: defaultProps.type,
				description: 'The type to use',
				control: {
					type: 'select',
					props: {
						name: 'type',
						value: defaultProps.type,
						options: [ 'outlined', 'filled']
					}
				}
			}
		]
	};
}
