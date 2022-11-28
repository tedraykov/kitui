import type {
	CardActionProps,
	CardContentProps,
	CardHeaderProps,
	CardProps,
	CardTitleProps
} from '$lib';
import { Card, CardContent, CardTitle } from '$lib';
import type { PlaygroundComponentNode } from '../../types';

export type CardDefaultProps = {
	Card: CardProps,
	CardAction: CardActionProps,
	CardContent: CardContentProps,
	CardHeader: CardHeaderProps,
	CardTitle: CardTitleProps
}

export default function getCardTree(defaultProps: CardDefaultProps): PlaygroundComponentNode {
	return {
		Component: Card,
		name: 'Card',
		propDefinitions: [
			{
				name: 'outlined',
				description: 'Whether the card should be outlined',
				default: defaultProps.Card.outlined,
				control: {
					type: 'switch',
					props: {
						name: 'outlined',
						value: defaultProps.Card.outlined
					}
				}
			}
		],
		children: [
			{
				Component: CardTitle,
				name: 'Card Title',
				content: 'Card Title',
				propDefinitions: []
			}, {
				Component: CardContent,
				name: 'Card Content',
				content: 'some random text',
				propDefinitions: []
			}
		]
	};
}
