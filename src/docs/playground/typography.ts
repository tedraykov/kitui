import type { PlaygroundComponentNode } from '../../types';
import { Typography, type TypographyProps } from '../../lib';

export default function getTypographyTree(defaultProps: TypographyProps): PlaygroundComponentNode {
	return {
		Component: Typography,
		content: 'Typography',
		name: 'Typography',
		propDefinitions: [
			{
				name: 'variant',
				description: 'The variant of the text',
				default: defaultProps.style,
				control: {
					type: 'select',
					props: {
						name: 'variant',
						value: defaultProps.style,
						options: [
							'display',
							'headline',
							'title',
							'label',
							'body'
						]
					}
				}
			},
			{
				name: 'size',
				default: defaultProps.size,
				description: `The size to use.`,
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
