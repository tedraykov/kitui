import type { TypographyProps } from '../types';

export default function deriveTypographyElement(
	element: TypographyProps["element"],
	style: TypographyProps["style"]
) {
	if (!element) {
		switch (style) {
			case 'display':
				return "h1";
			case 'headline':
				return "h2";
			case 'title':
				return 'h3'
			case 'label':
				return "span";
			case 'body':
				return "p"
			default:
				return 'span';
		}
	}
	return element;
}
