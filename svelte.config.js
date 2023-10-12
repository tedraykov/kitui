import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import delegateEvents from "svelte-preprocess-delegate-events/preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), delegateEvents()],

	kit: {
		adapter: adapter()
	}
};

export default config;
