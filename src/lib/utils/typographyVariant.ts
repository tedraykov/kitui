import type { TypographyProps, TypographyStylesOverrides } from '../types';
import { twMerge } from 'tailwind-merge';

function themeStyles(style: TypographyProps["style"], size: TypographyProps["size"], styleOverrides: TypographyStylesOverrides) {
	if (style === "display") {
		if (size === "large") return `${styleOverrides.display} text-7xl text-medium ${styleOverrides.displayLarge}`
		if (size === "medium") return `${styleOverrides.display} text-6xl text-medium ${styleOverrides.displayMedium}`
		if (size === "small") return `${styleOverrides.display} text-5xl text-medium ${styleOverrides.displaySmall}`
	}
	if (style === "headline") {
		if (size === "large") return `${styleOverrides.headline} text-4xl text-medium ${styleOverrides.headlineLarge}`
		if (size === `medium`) return `${styleOverrides.headline} text-3xl text-medium ${styleOverrides.headlineMedium}`
		if (size === `small`) return `${styleOverrides.headline} text-2xl text-medium ${styleOverrides.headlineSmall}`
	}
	if (style === "title") {
		if (size === "large") return `${styleOverrides.title} text-xl ${styleOverrides.titleLarge}`
		if (size === "medium") return `${styleOverrides.title} text-lg text-medium ${styleOverrides.titleMedium}`
		if (size === "small") return `${styleOverrides.title} text-base text-medium ${styleOverrides.titleSmall}`
	}
	if (style === "label") {
		if (size === "large") return `${styleOverrides.label} text-base text-medium ${styleOverrides.labelLarge}`
		if (size === "medium") return `${styleOverrides.label} text-sm text-medium ${styleOverrides.labelMedium}`
		if (size === "small") return `${styleOverrides.label} text-xs text-medium ${styleOverrides.labelSmall}`
	}
	if (style === "body") {
		if (size === "large") return `${styleOverrides.body} text-lg ${styleOverrides.bodyLarge}`
		if (size === "medium") return `${styleOverrides.body} text-base ${styleOverrides.bodyMedium}`
		if (size === "small") return `${styleOverrides.body} text-sm ${styleOverrides.bodySmall}`
	}
}
export default function typographyStyle(
	style: TypographyProps["style"],
	size: TypographyProps["size"],
	styleOverrides: TypographyStylesOverrides,
	_class?: string
) {
	return twMerge(themeStyles(style, size, styleOverrides), _class)
}
