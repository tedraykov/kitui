import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { variables, darkVariables } from '@mertasan/tailwindcss-variables/api';
import {
    argbFromHex,
    hexFromArgb,
    themeFromSourceColor,
    redFromArgb,
    greenFromArgb, blueFromArgb
} from '@material/material-color-utilities';
import { match } from 'assert';

const variablePrefix = 'kitui';

const variableOptions = {
    variablePrefix
}

function alphaRgbaFromArgb(color: number, opacity: number) {
    const r = redFromArgb(color);
    const g = greenFromArgb(color);
    const b = blueFromArgb(color);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function computeVariables(options: any) {
    const {
        primaryColor = "#0b57d0",
        successColor = "#386A20",
        warningColor = "#cbbf3b",
    } = options;
    const materialTheme = themeFromSourceColor(argbFromHex(primaryColor), [
        {
            value: argbFromHex(successColor),
            name: "success",
            blend: true
        },
        {
            value: argbFromHex(warningColor),
            name: "warning",
            blend: true
        }
    ])

    return {
        light: {
            DEFAULT: {
                color: {
                    on: {
                        primary: hexFromArgb(materialTheme.schemes.light.onPrimary),
                        "primary-container": hexFromArgb(materialTheme.schemes.light.onPrimaryContainer),
                        secondary: hexFromArgb(materialTheme.schemes.light.onSecondary),
                        "secondary-container": hexFromArgb(materialTheme.schemes.light.onSecondaryContainer),
                        tertiary: hexFromArgb(materialTheme.schemes.light.onTertiary),
                        "tertiary-container": hexFromArgb(materialTheme.schemes.light.onTertiaryContainer),
                        success: hexFromArgb(materialTheme.customColors[0].light.onColor),
                        "success-container": hexFromArgb(materialTheme.customColors[0].light.onColorContainer),
                        warning: hexFromArgb(materialTheme.customColors[1].light.onColor),
                        "warning-container": hexFromArgb(materialTheme.customColors[1].light.onColorContainer),
                        error: hexFromArgb(materialTheme.schemes.light.onError),
                        "error-container": hexFromArgb(materialTheme.schemes.light.onErrorContainer),
                        surface: hexFromArgb(materialTheme.schemes.light.onSurface),
                        "surface-variant": hexFromArgb(materialTheme.schemes.light.onSurfaceVariant),
                    },
                    primary: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.light.primary),
                        container: hexFromArgb(materialTheme.schemes.light.primaryContainer),
                    },
                    secondary: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.light.secondary),
                        container: hexFromArgb(materialTheme.schemes.light.secondaryContainer),
                    },
                    tertiary: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.light.tertiary),
                        container: hexFromArgb(materialTheme.schemes.light.tertiaryContainer),
                    },
                    success: {
                        DEFAULT: hexFromArgb(materialTheme.customColors[0].light.color),
                        container: hexFromArgb(materialTheme.customColors[0].light.colorContainer),
                    },
                    warning: {
                        DEFAULT: hexFromArgb(materialTheme.customColors[1].light.color),
                        container: hexFromArgb(materialTheme.customColors[1].light.colorContainer),
                    },
                    error: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.light.error),
                        container: hexFromArgb(materialTheme.schemes.light.errorContainer),
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
                    },
                    "state-layer": {
                        primary: {
                            "8": alphaRgbaFromArgb(materialTheme.schemes.light.primary, 0.08),
                        },
                        "on-secondary-container": {
                            "8": alphaRgbaFromArgb(materialTheme.schemes.light.onSecondaryContainer, 0.08),
                            "12": alphaRgbaFromArgb(materialTheme.schemes.light.onSecondaryContainer, 0.12)
                        },
                        "on-surface": {
                            "8": alphaRgbaFromArgb(materialTheme.schemes.light.onSurface, 0.08),
                            "12": alphaRgbaFromArgb(materialTheme.schemes.light.onSurface, 0.12)
                        }
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
                        secondary: hexFromArgb(materialTheme.schemes.dark.onSecondary),
                        "secondary-container": hexFromArgb(materialTheme.schemes.dark.onSecondaryContainer),
                        tertiary: hexFromArgb(materialTheme.schemes.dark.onTertiary),
                        "tertiary-container": hexFromArgb(materialTheme.schemes.dark.onTertiaryContainer),
                        success: hexFromArgb(materialTheme.customColors[0].dark.onColor),
                        "success-container": hexFromArgb(materialTheme.customColors[0].dark.onColorContainer),
                        warningColor: hexFromArgb(materialTheme.customColors[1].dark.onColor),
                        "warning-container": hexFromArgb(materialTheme.customColors[1].dark.onColorContainer),
                        error: hexFromArgb(materialTheme.schemes.dark.onError),
                        "error-container": hexFromArgb(materialTheme.schemes.dark.onErrorContainer),
                        surface: hexFromArgb(materialTheme.schemes.dark.onSurface),
                        "surface-variant": hexFromArgb(materialTheme.schemes.dark.onSurfaceVariant),
                    },
                    primary: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.dark.primary),
                        container: hexFromArgb(materialTheme.schemes.dark.primaryContainer),
                    },
                    secondary: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.dark.secondary),
                        container: hexFromArgb(materialTheme.schemes.dark.secondaryContainer),
                    },
                    tertiary: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.dark.tertiary),
                        container: hexFromArgb(materialTheme.schemes.dark.tertiaryContainer),
                    },
                    success: {
                        DEFAULT: hexFromArgb(materialTheme.customColors[0].light.color),
                        container: hexFromArgb(materialTheme.customColors[0].light.colorContainer),
                    },
                    warning: {
                        DEFAULT: hexFromArgb(materialTheme.customColors[1].light.color),
                        container: hexFromArgb(materialTheme.customColors[1].light.colorContainer),
                    },
                    error: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.dark.error),
                        container: hexFromArgb(materialTheme.schemes.dark.errorContainer)
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
                    },
                    outline: {
                        DEFAULT: hexFromArgb(materialTheme.schemes.dark.outline),
                        variant: hexFromArgb(materialTheme.schemes.dark.outlineVariant)
                    }
                }
            }
        }
    }
}

export default plugin.withOptions(
    (options) => {
        return ({ addComponents, addBase }) => {
            const { light, dark } = computeVariables(options)
            addComponents(variables(light, variableOptions))
            addComponents(darkVariables(dark, variableOptions, 'class'))
            addBase({
                body: {
                    color: 'var(--kitui-color-on-surface)',
                    backgroundColor: 'var(--kitui-color-surface)'
                }
            })
        }
    },
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
                    drawer: '1200',
                    'drawer-scrim': '1199',
                    'modal': '1300',
                    'modal-scrim': '1299'
                },
                colors: {
                    'on': {
                        'primary': 'var(--kitui-color-on-primary)',
                        'primary-container': 'var(--kitui-color-on-primary-container)',
                        'secondary': 'var(--kitui-color-on-secondary)',
                        'secondary-container': 'var(--kitui-color-on-secondary-container)',
                        'tertiary': 'var(--kitui-color-on-tertiary)',
                        'tertiary-container': 'var(--kitui-color-on-tertiary-container)',
                        'surface': 'var(--kitui-color-on-surface)',
                        'surface-container': 'var(--kitui-color-on-surface-container)',
                        'surface-variant': 'var(--kitui-color-on-surface-variant)',
                        'surface-variant-container': 'var(--kitui-color-on-surface-variant-container)',
                        'success': 'var(--kitui-color-on-success)',
                        'success-container': 'var(--kitui-color-on-success-container)',
                        'warning': 'var(--kitui-color-on-warning)',
                        'warning-container': 'var(--kitui-color-on-warning-container)',
                        error: 'var(--kitui-color-on-error)',
                        'error-container': 'var(--kitui-color-on-error-container)'
                    },
                    'primary': {
                        'DEFAULT': 'var(--kitui-color-primary)',
                        'container': 'var(--kitui-color-primary-container)'
                    },
                    secondary: {
                        DEFAULT: 'var(--kitui-color-secondary)',
                        container: 'var(--kitui-color-secondary-container)'
                    },
                    tertiary: {
                        DEFAULT: 'var(--kitui-color-tertiary)',
                        container: 'var(--kitui-color-tertiary-container)'
                    },
                    success: {
                        DEFAULT: 'var(--kitui-color-success)',
                        container: 'var(--kitui-color-success-container)'
                    },
                    error: {
                        DEFAULT: 'var(--kitui-color-error)',
                        container: 'var(--kitui-color-error-container)'
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
                    },
                    "state-layer": {
                        primary: {
                            "8": 'var(--kitui-color-state-layer-primary-8)'
                        },
                        "on-secondary-container": {
                            "8": 'var(--kitui-color-state-layer-on-secondary-container-8)',
                            "12": 'var(--kitui-color-state-layer-on-secondary-container-12)'
                        },
                        "on-surface": {
                            "8": 'var(--kitui-color-state-layer-on-surface-8)',
                            "12": 'var(--kitui-color-state-layer-on-surface-12)'
                        }
                    }
                },
                boxShadow: {
                    focus: "0 0 0 1px var(--kitui-color-primary)"
                }
            }
        }
    })
);
