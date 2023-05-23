import kituiPlugin from './src/lib/plugin';
import type { Config } from 'tailwindcss';

export default {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	plugins: [kituiPlugin({primaryColor: "#ff5a5f"})]
} satisfies Config;
