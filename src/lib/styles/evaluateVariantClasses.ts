import type { Variants } from '$lib';
import { twMerge } from 'tailwind-merge';

export default function evaluateVariantClasses<T, U extends Record<string, string>>(props: T, variants: Variants<T, U>) {
	const applicableStyles = {} as Record<keyof U, string>;
	for (const variant of variants) {
		let currentVariantApplicable = true;
		for (const propKey of Object.keys(variant.props) as (keyof T)[]) {
				if (props[propKey] !== variant.props[propKey]) {
					currentVariantApplicable = false;
					break;
				}
		}
		if (!currentVariantApplicable) continue;

        // Evaluate all applicable styles
        for (const styleKey of Object.keys(variant.styles) as (keyof U)[]) {
            if (applicableStyles[styleKey]) {
                applicableStyles[styleKey] += ' ' + variant.styles[styleKey];
            } else {
                applicableStyles[styleKey] = variant.styles[styleKey];
            }
        }
    }
    // Apply tailwind-merge to all styles
    for (const styleKey of Object.keys(applicableStyles) as (keyof U)[]) {
        applicableStyles[styleKey] = twMerge(applicableStyles[styleKey]);
    }

    return applicableStyles;
}
