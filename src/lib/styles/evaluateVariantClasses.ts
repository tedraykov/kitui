import type { Variants } from '$lib';
import { twMerge } from 'tailwind-merge';

export default function evaluateVariantClasses<T extends Record<string, string | boolean | number >>(props: T, variants: Variants<T>) {
	const applicableClasses: string[] = [];
	for (const variant of variants) {
		let currentVariantApplicable = true;
		for (const propKey of Object.keys(variant.props)) {
				if (props[propKey] !== variant.props[propKey]) {
					currentVariantApplicable = false;
					break;
				}
		}
		if (currentVariantApplicable) applicableClasses.push(variant.class);
	}

	return twMerge(applicableClasses);
}
