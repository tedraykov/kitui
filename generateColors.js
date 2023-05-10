import { argbFromHex, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities';
import {writeFileSync} from 'fs';

const materialTheme = themeFromSourceColor(argbFromHex('#0b57d0'),);

const theme = {
	colors: {
		on: {
			primary: hexFromArgb(materialTheme.schemes.light.onPrimary),
			"primary-container": hexFromArgb(materialTheme.schemes.light.onPrimaryContainer)
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
		background: {
			DEFAULT: hexFromArgb(materialTheme.schemes.light.background),
		}
	}
}

writeFileSync('./colors.js', `export default ${JSON.stringify(theme, null, 2)}`);