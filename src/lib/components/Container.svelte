<script>
	import { twMerge } from 'tailwind-merge';

	let _class = '';
	export { _class as class };
</script>

<div class={twMerge('flex flex-col w-full max-w-[105ch] mx-auto px-4 md:px-6 xl:px-8', _class)}>
	<slot />
</div>
