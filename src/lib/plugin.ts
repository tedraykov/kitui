import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {variables, darkVariables} from '@mertasan/tailwindcss-variables/api';
import { argbFromHex, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities';

const variableOptions = {
	variablePrefix: 'kitui'
}

const pluginVariables = {
	DEFAULT: {
		colors: {
			primary: {
				DEFAULT: 'white',
				container: 'black'
			},
		},
	},
}

const pluginDarkVariables = {
	DEFAULT: {
		colors: {
			primary: {
				DEFAULT: 'black',
				container: 'white',
			},
		},
	},
}

function computeVariables(options: any) {
	const materialTheme = themeFromSourceColor(argbFromHex(options.primaryColor))

	return {
			light: {
				DEFAULT: {
					color: {
						on: {
							primary: hexFromArgb(materialTheme.schemes.light.onPrimary),
							"primary-container": hexFromArgb(materialTheme.schemes.light.onPrimaryContainer),
							surface: hexFromArgb(materialTheme.schemes.light.onSurface),
							"surface-variant": hexFromArgb(materialTheme.schemes.light.onSurfaceVariant),
						},
						primary: {
							DEFAULT: hexFromArgb(materialTheme.schemes.light.primary),
							container: hexFromArgb(materialTheme.schemes.light.primaryContainer),
						},
						surface: {
							DEFAULT: hexFromArgb(materialTheme.schemes.light.surface),
							variant: hexFromArgb(materialTheme.schemes.light.surfaceVariant),
							dim: hexFromArgb(materialTheme.palettes.neutral.tone(87)),
							bright: hexFromArgb(materialTheme.palettes.neutral.tone(98)),
							"container-lowest": hexFromArgb(materialTheme.palettes.neutral.tone(100)),
							"container-low": hexFromArgb(materialTheme.palettes.neutral.tone(96)),
							container: hexFromArgb(materialTheme.palettes.neutral.tone(94)),
							"container-high": hexFromArgb(materialTheme.palettes.neutral.tone(92)),
							"container-highest": hexFromArgb(materialTheme.palettes.neutral.tone(90))
						},
						outline: {
							DEFAULT: hexFromArgb(materialTheme.schemes.light.outline),
							variant: hexFromArgb(materialTheme.schemes.light.outlineVariant)
						}
					}
				}
			},
			dark: {
				DEFAULT: {
					color: {
						on: {
							primary: hexFromArgb(materialTheme.schemes.dark.onPrimary),
							"primary-container": hexFromArgb(materialTheme.schemes.dark.onPrimaryContainer),
							surface: hexFromArgb(materialTheme.schemes.dark.onSurface),
							"surface-variant": hexFromArgb(materialTheme.schemes.dark.onSurfaceVariant),
						},
						primary: {
							DEFAULT: hexFromArgb(materialTheme.schemes.dark.primary),
							container: hexFromArgb(materialTheme.schemes.dark.primaryContainer),
						},
						surface: {
							DEFAULT: hexFromArgb(materialTheme.schemes.dark.surface),
							variant: hexFromArgb(materialTheme.schemes.dark.surfaceVariant),
							dim: hexFromArgb(materialTheme.palettes.neutral.tone(6)),
							bright: hexFromArgb(materialTheme.palettes.neutral.tone(24)),
							"container-lowest": hexFromArgb(materialTheme.palettes.neutral.tone(4)),
							"container-low": hexFromArgb(materialTheme.palettes.neutral.tone(10)),
							container: hexFromArgb(materialTheme.palettes.neutral.tone(12)),
							"container-high": hexFromArgb(materialTheme.palettes.neutral.tone(17)),
							"container-highest": hexFromArgb(materialTheme.palettes.neutral.tone(22))
						}
					}
				}
			}
		}
}

export default plugin.withOptions(
	(options = {primaryColor: "#0b57d0"}) => {
		return ({addComponents, addBase}) => {
			const {light, dark} = computeVariables(options)
			addComponents(variables(light, variableOptions))
			addComponents(darkVariables(dark, variableOptions))
			addBase({
				body: {
					color: 'var(--kitui-color-on-surface)'
				}
			})
		}},
	() => ({
				theme: {
					fontSize: {
						xs: ['0.6875rem', { lineHeight: '1rem' }],
						sm: ['0.75rem', { lineHeight: '1rem' }],
						base: ['0.875rem', { lineHeight: '1.25rem' }],
						lg: ['1rem', { lineHeight: '1.5rem' }],
						xl: ['1.375rem', { lineHeight: '1.75rem' }],
						'2xl': ['1.5rem', { lineHeight: '2rem' }],
						'3xl': ['1.75rem', { lineHeight: '2.25rem' }],
						'4xl': ['2rem', { lineHeight: '2.5rem' }],
						'5xl': ['2.25rem', { lineHeight: '2.75rem' }],
						'6xl': ['2.8125rem', { lineHeight: '3.25rem' }],
						'7xl': ['3.5625rem', { lineHeight: '4rem' }]
					},
					fontFamily: {
						sans: ['Inter', ...defaultTheme.fontFamily.sans]
					},
					extend: {
						zIndex: {
							drawer: '100'
						},
						colors: {
							'on': {
								'primary': 'var(--kitui-color-on-primary)',
								'primary-container': 'var(--kitui-color-on-primary-container)'
							},
							'primary': {
								'DEFAULT': 'var(--kitui-color-primary)',
								'container': 'var(--kitui-color-primary-container)'
							},
							'surface': {
								'DEFAULT': 'var(--kitui-color-surface)',
								'variant': 'var(--kitui-color-surface-variant)',
								'dim': 'var(--kitui-color-surface-dim)',
								'bright': 'var(--kitui-color-surface-bright)',
								'container-lowest': 'var(--kitui-color-surface-container-lowest)',
								'container-low': 'var(--kitui-color-surface-container-low)',
								'container': 'var(--kitui-color-surface-container)',
								'container-high': 'var(--kitui-color-surface-container-high)',
								'container-highest': 'var(--kitui-color-surface-container-highest)'
							},
							outline: {
								DEFAULT: 'var(--kitui-color-outline)',
								variant: 'var(--kitui-color-outline-variant)'
							}
						}
					}
				}
			})
	);
